import React from "react";
import { FaHandsWash, FaWater, FaListAlt, FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const skillsData = [
    {
        name: "Service soigné",
        icon: (
            <FaHandsWash className="text-5xl text-primary group-hover:text-black duration-300" />
        ),
        link: "/Legals#clean",
        description: "Chaque véhicule est nettoyé avec le plus grand soin, à l’intérieur comme à l’extérieur, pour un résultat irréprochable.",
        aosDelay: "0",
    },
    {
        name: "Utilisation d'eau osmosée",
        icon: (
            <FaWater className="text-5xl text-primary group-hover:text-black duration-300" />
        ),
        link: "/Legals/#osmosis",
        description: "Nous utilisons une eau osmosée ultra pure, sans minéraux ni calcaire, pour un lavage sans traces et respectueux de la carrosserie.",
        aosDelay: "500",
    },
    {
        name: "Services à la carte",
        icon: (
            <FaListAlt className="text-5xl text-primary group-hover:text-black duration-300" />
        ),
        link: "/Legals#on_demand",
        description: "Choisissez les prestations qui vous conviennent : lavage extérieur, intérieur, polish, traitement céramique, etc.",
        aosDelay: "1000",
    },
    {
        name: "Abonnement",
        icon: (
            <FaRegCalendarAlt className="text-5xl text-primary group-hover:text-black duration-300" />
        ),
        link: "/Legals#subscription",
        description: "Profitez de nos formules d’abonnement mensuelles pour garder votre véhicule toujours impeccable, à prix réduit.",
        aosDelay: "1500",
    }
];

const Services = () => {
    return (
        <div id="services" className="py-14 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center">
            <div className="container">
                <div className="pb-12">
                    <h1 data-aos="fade-up" className="text-3xl font-semibold text-center font-serif sm:text-4xl">Nos services</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {skillsData.map((skill) => (
                        <div key={skill.name} data-aos="fade-up" data-aos-delay={skill.aosDelay}
                            className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded">
                            <div className="grid place-items-center">{skill.icon}</div>
                            <h1>{skill.name}</h1>
                            <p>{skill.description}</p>
                            <Link to={skill.link} className="text-primary pt-2 inline-block group-hover:text-white">
                                En savoir plus
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
