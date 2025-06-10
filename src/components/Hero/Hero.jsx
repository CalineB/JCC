import React from "react";
import BlackCar_Front from "../../assets/BlackCar_Front.png";
import RedCar_Right from "../../assets/RedCar_Right.png";

const Hero = ({theme}) => {
    return <div className="dark:bg-black dark:text-white duration-300 relative z-20">
        <div className="container min-h-[620px] flex">
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
               
                <div className="order-1 sm:order-2 w-full">
                    <div data-aos="zoom-in" data-aos-duration="1500"
                        className="flex justify-center">
                            <img
                                src={theme === "dark" ? 
                                    BlackCar_Front : RedCar_Right}
                                alt="clean black car darkmode, red car light mode"
                                className="relative -z-10 max-h-[600px] sm:scale-125 md:max-w-[550px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
                            />
                    </div>
                </div>

                <div className="order-2 sm:order-1 space-y-5 sm:pr-32 pt-10 sm:pt-20">
                    <p data-aos="fade-up"
                        className="text-primary text-xl sm:text-2xl font-serif">Jacob's clean cars
                    </p>

                    <h1 data-aos="fade-up" data-aos-delay="600"
                        className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-serif leading-tight">Lavage automobile à l'eau de mer
                    </h1>
                   
                    <p data-aos="fade-up" data-aos-delay= "1000">au Gosier
                    </p>
                    
                    <button data-aos="fade-up" data-aos-delay= "1500"
                     className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300">Prise de rendez-vous
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default Hero;