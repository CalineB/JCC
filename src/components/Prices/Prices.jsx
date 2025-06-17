import React, { useState } from "react";
import inside from "../../assets/Inside_front.png";
import front_side from "../../assets/Infront_Side.png";
import exterior from "../../assets/RedCar_Left.png";

const PricesList = [
  // Lavage intérieur
  { title: "Lavage intérieur", vehicleType: "Citadine", price: "XX €", description: "Nettoyage complet de l’habitacle avec aspirateur, vapeur, plastiques, tissus et finitions premium.", duration: "0h45", image: inside },
  { title: "Lavage intérieur", vehicleType: "Berline", price:"XX €", description: "Nettoyage complet de l’habitacle avec aspirateur, vapeur, plastiques, tissus et finitions premium.", duration: "0h45", image: inside },
  { title: "Lavage intérieur", vehicleType: "SUV", price:"XX €", description: "Nettoyage complet de l’habitacle avec aspirateur, vapeur, plastiques, tissus et finitions premium.", duration: "0h55", image: front_side },

  // Lavage extérieur
  { title: "Lavage extérieur", vehicleType: "Citadine", price:"XX €", description: "Lavage extérieur à la main avec eau de mer désalinisée, séchage microfibre et brillance pneus.", duration: "0h30", image: exterior },
  { title: "Lavage extérieur", vehicleType: "Berline", price:"XX €", description: "Lavage extérieur à la main avec eau de mer désalinisée, séchage microfibre et brillance pneus.", duration: "0h30" },
  { title: "Lavage extérieur", vehicleType: "SUV", price:"XX €", description: "Lavage extérieur à la main avec eau de mer désalinisée, séchage microfibre et brillance pneus.", duration: "0h45", image: exterior },

  // Lavage complet
  { title: "Lavage complet", vehicleType: "Citadine", price:"XX €", description: "Intérieur + extérieur complet avec finitions premium.", duration: "1h30" },
  { title: "Lavage complet", vehicleType: "Berline", price:"XX €", description: "Intérieur + extérieur complet avec finitions premium.", duration: "1h30" },
  { title: "Lavage complet", vehicleType: "SUV", price:"XX €", description: "Intérieur + extérieur complet avec finitions premium.", duration: "1h45" },

  // Formule Express (dans chaque catégorie)
  { title: "Formule Express", vehicleType: "Citadine", price:"XX €", description: "Lavage rapide mais soigné intérieur + extérieur.", duration: "1h00" },
  { title: "Formule Express", vehicleType: "Berline", price:"XX €", description: "Lavage rapide mais soigné intérieur + extérieur.", duration: "1h00" },
  { title: "Formule Express", vehicleType: "SUV", price:"XX €", description: "Lavage rapide mais soigné intérieur + extérieur.", duration: "1h15" },

  // Formule Detailing
  { title: "Formule Detailing", vehicleType: "Citadine", price:"XX €", description: "Nettoyage en profondeur avec finitions haut de gamme, idéal pour remise à neuf.", duration: "2h00" },
  { title: "Formule Detailing", vehicleType: "Berline", price:"XX €", description: "Nettoyage en profondeur avec finitions haut de gamme, idéal pour remise à neuf.", duration: "2h15" },
  { title: "Formule Detailing", vehicleType: "SUV", price:"XX €", description: "Nettoyage en profondeur avec finitions haut de gamme, idéal pour remise à neuf.", duration: "2h30"  },

  // À la carte
  { title: "Nettoyage siège enfant", vehicleType: null, price: "À partir de XX €", description: "Désinfection vapeur + shampooing en profondeur pour hygiène optimale des sièges enfant." },
  { title: "Nettoyage sièges (par siège)", vehicleType: null, price: "À partir de XX €", description: "Shampooing, vapeur et brossage doux pour retirer taches et poussières, tout en respectant les matériaux." },
  { title: "Jantes + pneus", vehicleType: null, price: "À partir de XX €", description: "Dégraissage + brillance des jantes et traitement des pneus pour un aspect neuf." },
  { title: "Vitres", vehicleType: null, price: "À partir de XX €", description: "Nettoyage sans traces de toutes les vitres intérieures pour une visibilité parfaite." },
  { title: "Nettoyage tapis uniquement", vehicleType: null, price: "À partir de XX €", description: "Aspiration et détachage des tapis de sol avec séchage rapide." },
  { title: "Zones difficiles", vehicleType: null, price: "À partir de XX €", description: "Nettoyage précis des rainures, boutons, aérateurs, et dessous de sièges à la vapeur." },
  { title: "Traitement anti-odeur", vehicleType: null, price: "À partir de XX €", description: "Traitement à l’ozone ou parfum longue durée pour un habitacle frais et agréable." },

  // Finitions premium
  { title: "Polissage carrosserie", vehicleType: "Citadine", price: "XX €", description: "Une passe de polissage pour redonner brillance et atténuer les micro-rayures.", duration: "3h00" },
  { title: "Polissage carrosserie", vehicleType: "Berline", price: "XX €", description: "Une passe de polissage pour redonner brillance et atténuer les micro-rayures.", duration: "3h15" },
  { title: "Polissage carrosserie", vehicleType: "SUV", price: "XX €", description: "Une passe de polissage pour redonner brillance et atténuer les micro-rayures.", duration: "3h00" },

  { title: "Pose céramique", vehicleType: "Citadine", price: "XX €", description: "Protection longue durée de la peinture contre rayures, UV, salissures et pluie.", duration: "4h30" },
  { title: "Pose céramique", vehicleType: "Berline", price: "XX €", description: "Protection longue durée de la peinture contre rayures, UV, salissures et pluie.", duration: "4h30" },
  { title: "Pose céramique", vehicleType: "SUV", price: "XX €", description: "Protection longue durée de la peinture contre rayures, UV, salissures et pluie.", duration: "5h00" }
];

const SubscriptionsList = [
  {
    vehicleType: "Citadine",
    prices: {
      Basic: "XX",     // 2 lavages / -30%
      Standard: "XX", // 3 lavages / -35%
      Premium: "XX"   // 4 lavages / -40%
    },
    description: "Abonnement pour 2 à 4 lavages complets (valeur unitaire : XX€). Économisez jusqu’à 40%.",
    washes: { Basic: 2, Standard: 3, Premium: 4 }
  },
  {
    vehicleType: "Berline",
    prices: {
      Basic: "XX",     
      Standard:"XX",  
      Premium: "XX"    
    },
    description: "Lavage complet Berline à prix réduit (valeur unitaire : XX€).",
    washes: { Basic: 2, Standard: 3, Premium: 4 }
  },
  {
    vehicleType: "SUV",
    prices: {
      Basic: "XX",     
      Standard: "XX",  
      Premium: "XX"    
    },
    description: "Abonnement SUV avec lavage complet (valeur unitaire : XX€). Jusqu’à 40% de remise.",
    washes: { Basic: 2, Standard: 3, Premium: 4 }
  }
];


const CartePackages = [
  { washes: 3, priceFrom: "XX" },
  { washes: 6, priceFrom: "XX" },
  { washes: 9, priceFrom: "XX" },
  { washes: 12, priceFrom: "XX" },
];


export function PriceSelector() {
  const [vehicleType, setVehicleType] = useState("Citadine");

  const filtered = PricesList.filter((item) => {
    if (vehicleType === "Autres") return item.vehicleType === null;
    return item.vehicleType === vehicleType;
  });

  return (
    <div className="p-6">
      {/* Boutons de sélection */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {["Citadine", "Berline", "SUV", "Forfaits", "Autres"].map((type) => (
          <button
            key={type}
            onClick={() => setVehicleType(type)}
            className={`px-4 py-2 rounded-full font-medium whitespace-nowrap ${
              vehicleType === type
                ? "bg-primary text-white"
                : "bg-primary text-black"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Section Forfaits */}
      {vehicleType === "Forfaits" && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-0">
            Nos formules d’abonnement mensuel
          </h2>
          <i className="mb-7 block text-sm">
            <span className="text-primary font-semibold">Basic</span> : 2 lavages /{" "}
            <span className="text-primary font-semibold">Standard</span> : 3 lavages /{" "}
            <span className="text-primary font-semibold">Premium</span> : 4 lavages
          </i>
          {SubscriptionsList.map((sub) => (
            <div
              key={sub.vehicleType}
              className="mb-6 p-4 border rounded-lg bg-white dark:bg-black"
            >
              <h3 className="text-lg font-bold mb-2">{sub.vehicleType}</h3>
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                {sub.description}
              </p>
              <div className="flex gap-8 flex-wrap justify-center">
                {Object.entries(sub.prices).map(([plan, price]) => (
                  <div key={plan} className="text-center min-w-[100px]">
                    <h4 className="font-semibold text-primary">{plan}</h4>
                    <p className="text-lg font-bold">{price} € / mois</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Section Autres */}
      {vehicleType === "Autres" && (
        <>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-0">Forfaits lavages Express</h2>
            <i className="mb-7 block text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Forfaits de 3, 6, 9 ou 12 lavages Express à partir de :{" "}</span>
            </i>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {CartePackages.map(({ washes, priceFrom }) => (
                <div
                  key={washes}
                  className="mb-6 p-4 border rounded-lg bg-white dark:bg-black"
                >
                  <h3 className="font-semibold text-primary">{washes} lavages</h3>
                  <p className="text-lg font-bold">À partir de {priceFrom} €</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Services à la carte</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((item) => (
                <div
                  key={`${item.title}-${item.vehicleType || "A-la-carte"}`}
                  className="mb-6 p-4 border rounded-lg bg-white dark:bg-black"
                >
                  <h3 className="text-primary font-semibold group-hover:text-black dark:group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm mt-2 text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-primary">
                    {item.description}
                  </p>
                  <span className="block mt-3 text-lg font-bold text-primary group-hover:text-black dark:group-hover:text-white">
                    {typeof item.price === "number" ? `${item.price} €` : item.price}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Liste pour Citadine, Berline, SUV */}
      {vehicleType !== "Autres" && vehicleType !== "Forfaits" && (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-7">{vehicleType}</h2>
          {filtered.map((item) => (
            <div
              key={`${item.title}-${item.vehicleType}`}
              className="mb-6 p-4 border rounded-lg bg-white dark:bg-black"
            >
              <h3 className="text-primary font-semibold group-hover:text-black dark:group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-sm mt-2 text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-primary">
                {item.description}
              </p>
              <span className="block mt-3 text-lg font-bold text-primary group-hover:text-black dark:group-hover:text-white">
                {typeof item.price === "number" ? `${item.price} €` : item.price}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const Prices = () => {
    return <div id="tarifs" className="pb-24 pt-12 bg-slate-100 dark:bg-dark dark:text-white min-h-screen">
        <div className="container">
            <h1 data-aos="fade-up" className="text-3xl text-center sm:text-4xl font-semibold font-serif mb-3">Nos tarifs</h1>
            <p data-aos="fade-up" className="text-sm pb-10 text-center">Choisissez le service qui vous correspond.</p>
            <PriceSelector items={PricesList} />
            <div className="grid place-content-center mt-8">
                <button data-aos="fade-up" className= "button-outline">
                    <a href="/#contacts">Prendre rendez-vous</a>
                </button>
            </div>
        </div>
    </div>
}

export default Prices;