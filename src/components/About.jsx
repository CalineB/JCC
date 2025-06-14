import React,{useState, useEffect} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Diamond from "./Diamond";


const About = ({theme}) => {
    const [canvasHeight, setCanvasHeight] = useState(window.innerWidth < 640 ? 200 : 400);

    useEffect(() => {
        const handleResize = () => {
        setCanvasHeight(window.innerWidth < 640 ? 200 : 400);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);


    return <div id="concept" className="dark:bg-dark bg-slate-100 dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
            <div className="mt-0 w-full sm:w-full sm:h-auto grid grid-cols-1 sm:grid-cols-2 sm:place-items-center mr-0 sm:mr-[55px]">
                <Canvas camera={{ position: [5, 2, 7], fov: 45 }} style={{width: "100%", height: canvasHeight, marginTop: "0px"}}>
                    <ambientLight intensity={0.2} />
                    <pointLight position={[5, 5, 5]} intensity={1} />
                    <directionalLight position={[-5, 5, 5]} intensity={0.7} />
                    <Diamond theme={theme} />
                    <Environment preset="studio" background={false} />
                    <OrbitControls autoRotate enableZoom={false} target={[0, -1, 0]} />
                </Canvas>

                <div className="space-y-5 pb-6 sm:mt-14 sm:mb-5">
                    <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold font-serif mt-[4px] flex justify-center">Notre concept</h1>
                    <div className="space-y-4 text-base">
                        <p data-aos="fade-up">
                            Chez <strong  className="text-primary text-xl sm:text-2xl font-serif"> Jacob's clean cars</strong>,
                            nous redonnons à votre voiture toute sa brillance grâce à un service soigné, personnalisé, et innovant.
                        </p>
                        <p data-aos="fade-up">
                            Nous utilisons exclusivement de l’eau de mer désalinisée pour laver votre véhicule,
                            un procédé respectueux de l’environnement qui garantit un nettoyage optimal sans résidus. Chaque lavage est bien plus qu’un simple nettoyage : c’est un véritable soin automobile, réalisé à la main, dans le respect de votre véhicule et de votre confort.
                        </p>
                        <p data-aos="fade-up">
                            Pour s’adapter à votre emploi du temps, nous ouvrons certains jours en journée et d’autres en soirée,
                            afin d’être disponibles quand vous le souhaitez.
                        </p>

                        <p data-aos="fade-up">
                            <strong><button className="button-outline"><a href="/#contacts">Prenez rendez-vous</a></button></strong> et offrez à votre véhicule un soin d’exception, naturel et respectueux.
                        </p>
                    </div>
            </div>
        </div>

        </div>
    </div>
}

export default About ;