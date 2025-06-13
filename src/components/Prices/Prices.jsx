import React, { useState } from "react";
import inside from "../../assets/Inside_front.png";
import front_side from "../../assets/Infront_Side.png";
import exterior from "../../assets/RedCar_Left.png";

const PricesList = [
  // Lavage intérieur
  { title: "Lavage intérieur", vehicleType: "Citadine", price: 45, description: "Nettoyage complet de l’habitacle avec aspirateur, vapeur, plastiques, tissus et finitions premium.", image: inside },
  { title: "Lavage intérieur", vehicleType: "Berline", price: 50, description: "Nettoyage complet de l’habitacle avec aspirateur, vapeur, plastiques, tissus et finitions premium.", image: inside },
  { title: "Lavage intérieur", vehicleType: "SUV", price: 60, description: "Nettoyage complet de l’habitacle avec aspirateur, vapeur, plastiques, tissus et finitions premium.", image: front_side },

  // Lavage extérieur
  { title: "Lavage extérieur", vehicleType: "Citadine", price: 35, description: "Lavage extérieur à la main avec eau de mer désalinisée, séchage microfibre et brillance pneus.", image: exterior },
  { title: "Lavage extérieur", vehicleType: "Berline", price: 40, description: "Lavage extérieur à la main avec eau de mer désalinisée, séchage microfibre et brillance pneus." },
  { title: "Lavage extérieur", vehicleType: "SUV", price: 50, description: "Lavage extérieur à la main avec eau de mer désalinisée, séchage microfibre et brillance pneus.", image: exterior },

  // Lavage complet
  { title: "Lavage complet", vehicleType: "Citadine", price: 70, description: "Intérieur + extérieur complet avec finitions premium." },
  { title: "Lavage complet", vehicleType: "Berline", price: 80, description: "Intérieur + extérieur complet avec finitions premium." },
  { title: "Lavage complet", vehicleType: "SUV", price: 95, description: "Intérieur + extérieur complet avec finitions premium." },

  // Formule Express (dans chaque catégorie)
  { title: "Formule Express", vehicleType: "Citadine", price: 40, description: "Lavage rapide mais soigné intérieur + extérieur." },
  { title: "Formule Express", vehicleType: "Berline", price: 45, description: "Lavage rapide mais soigné intérieur + extérieur." },
  { title: "Formule Express", vehicleType: "SUV", price: 50, description: "Lavage rapide mais soigné intérieur + extérieur." },

  // Formule Detailing
  { title: "Formule Detailing", vehicleType: "Citadine", price: 120, description: "Nettoyage en profondeur avec finitions haut de gamme, idéal pour remise à neuf." },
  { title: "Formule Detailing", vehicleType: "Berline", price: 140, description: "Nettoyage en profondeur avec finitions haut de gamme, idéal pour remise à neuf." },
  { title: "Formule Detailing", vehicleType: "SUV", price: 160, description: "Nettoyage en profondeur avec finitions haut de gamme, idéal pour remise à neuf." },

  // À la carte
  { title: "Nettoyage siège enfant", vehicleType: null, price: "À partir de 12€", description: "Désinfection vapeur + shampooing en profondeur pour hygiène optimale des sièges enfant." },
  { title: "Nettoyage sièges (par siège)", vehicleType: null, price: "À partir de 10€", description: "Shampooing, vapeur et brossage doux pour retirer taches et poussières, tout en respectant les matériaux." },
  { title: "Jantes + pneus", vehicleType: null, price: "À partir de 18€", description: "Dégraissage + brillance des jantes et traitement des pneus pour un aspect neuf." },
  { title: "Vitres", vehicleType: null, price: "À partir de 15€", description: "Nettoyage sans traces de toutes les vitres intérieures pour une visibilité parfaite." },
  { title: "Nettoyage tapis uniquement", vehicleType: null, price: "À partir de 15€", description: "Aspiration et détachage des tapis de sol avec séchage rapide." },
  { title: "Zones difficiles", vehicleType: null, price: "À partir de 25€", description: "Nettoyage précis des rainures, boutons, aérateurs, et dessous de sièges à la vapeur." },
  { title: "Traitement anti-odeur", vehicleType: null, price: "À partir de 18€", description: "Traitement à l’ozone ou parfum longue durée pour un habitacle frais et agréable." },

  // Finitions premium
  { title: "Polissage carrosserie", vehicleType: "Citadine", price: 60, description: "Une passe de polissage pour redonner brillance et atténuer les micro-rayures." },
  { title: "Polissage carrosserie", vehicleType: "Berline", price: 70, description: "Une passe de polissage pour redonner brillance et atténuer les micro-rayures." },
  { title: "Polissage carrosserie", vehicleType: "SUV", price: 90, description: "Une passe de polissage pour redonner brillance et atténuer les micro-rayures." },

  { title: "Pose céramique", vehicleType: "Citadine", price: 180, description: "Protection longue durée de la peinture contre rayures, UV, salissures et pluie." },
  { title: "Pose céramique", vehicleType: "Berline", price: 200, description: "Protection longue durée de la peinture contre rayures, UV, salissures et pluie." },
  { title: "Pose céramique", vehicleType: "SUV", price: 250, description: "Protection longue durée de la peinture contre rayures, UV, salissures et pluie." }
];


export function PriceSelector() {
  const [vehicleType, setVehicleType] = useState("Citadine");

  const filtered = PricesList.filter((item) => {
    if (vehicleType === "À la carte") return item.vehicleType === null;
    return item.vehicleType === vehicleType;
  });

  return (
    <div id="tarifs" className="p-6">
        <div className="flex justify-center gap-4 mb-6 ">
            {["Citadine", "Berline", "SUV", "À la carte"].map((type) => (
            <button 
                key={type}
                onClick={() => setVehicleType(type)}
                className={`px-4 py-2 rounded-full font-medium ${
                vehicleType === type ? "bg-primary text-white" : "bg-primary text-black"}`}>
                {type}
            </button>
            ))}
        </div>

        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((item, index) => (
            <div
                key={`${item.title}-${item.vehicleType || "A-la-carte"}`}
                className="p-4 border rounded-xl shadow hover:bg-primary group transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}>

            <div className="flex justify-between items-center">
                <h3 className="text-black font-semibold dark:text-primary group-hover:text-black transition-colors">{item.title}</h3>
                <span className="text-primary font-bold text-lg group-hover:text-white transition-colors">
                {typeof item.price === "number" ? `${item.price} €` : item.price}
                </span>
            </div>
            <p className="text-sm mt-2 text-gray-600 group-hover:text-white transition-colors">
                {item.description}
            </p>
        </div>
        ))}
      </div>
    </div>
  );
}

const Prices = () => {
    return <div className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
        <div className="container">
            <h1 data-aos="fade-up" className="text-3xl text-center sm:text-4xl font-semibold font-serif mb-3">Nos tarifs</h1>
            <p data-aos="fade-up" className="text-sm pb-10 text-center">Choisissez un type de véhicule pour filtrer les services proposés.</p>
            <PriceSelector items={PricesList} />
            <div className="grid place-content-center mt-8">
                <button data-aos="fade-up" className= "button-outline">
                    Prendre rendez-vous
                </button>
            </div>
        </div>
    </div>
}

export default Prices;