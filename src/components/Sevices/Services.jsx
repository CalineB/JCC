import React from "react";
import { FaHandsWash, FaWater, FaListAlt, FaRegCalendarAlt } from "react-icons/fa";

const skillsData = [
    {
        name: "Service soigné",
        icon: (
            <FaHandsWash className="text-5xl text-primary group-hover:text-black duration-300" />
        ),
        link: "#",
        description: "Chaque véhicule est nettoyé avec le plus grand soin, à l’intérieur comme à l’extérieur, pour un résultat irréprochable.",
        aosDelay: "0",
    },
    {
        name: "Utilisation d'eau de mer désalinisée",
        icon: (
            <FaWater className="text-5xl text-primary group-hover:text-black duration-300" />
        ),
        link: "#",
        description: "Nous utilisons une eau de mer désalinisée, écologique et durable, pour préserver les ressources tout en assurant une propreté optimale.",
        aosDelay: "500",
    },
    {
        name: "Services à la carte",
        icon: (
            <FaListAlt className="text-5xl text-primary group-hover:text-black duration-300" />
        ),
        link: "#",
        description: "Choisissez les prestations qui vous conviennent : lavage extérieur, intérieur, polish, traitement céramique, etc.",
        aosDelay: "1000",
    },
    {
        name: "Abonnement",
        icon: (
            <FaRegCalendarAlt className="text-5xl text-primary group-hover:text-black duration-300" />
        ),
        link: "#",
        description: "Profitez de nos formules d’abonnement mensuelles pour garder votre véhicule toujours impeccable, à prix réduit.",
        aosDelay: "1500",
    }
];


const Services = () => {
    return <div className="py-14 dark:bg-black dark:text-white sm:min-h[600px] sm:grid sm:place-items-center">
        <div className="container">
            <div className="pb-12">
                <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">Nos services</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {
                    skillsData.map((skill) => (
                        <div key={skill.name} data-aos="fade-up" data-aos-delay={skill.aosDelay}
                        className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded">
                            <div className="grid place-items-center">{skill.icon}</div>
                            <h1>{skill.name}</h1>
                            <p>{skill.description}</p>
                            <a href={skill.link}>En savoir plus</a>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
}

export default Services;
