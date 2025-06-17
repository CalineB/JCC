import React, { useState } from "react";
import inside from "../../assets/Inside_front.png";
import front_side from "../../assets/Infront_Side.png";
import exterior from "../../assets/RedCar_Left.png";

const PricesList = [
  // Lavage intérieur
  { title: "Lavage intérieur", vehicleType: "Citadine", price: 45, description: "Nettoyage complet de l’habitacle avec aspirateur, vapeur, plastiques, tissus et finitions premium.", duration: "0h45", image: inside },
  { title: "Lavage intérieur", vehicleType: "Berline", price: 50, description: "Nettoyage complet de l’habitacle avec aspirateur, vapeur, plastiques, tissus et finitions premium.", duration: "0h45", image: inside },
  { title: "Lavage intérieur", vehicleType: "SUV", price: 60, description: "Nettoyage complet de l’habitacle avec aspirateur, vapeur, plastiques, tissus et finitions premium.", duration: "0h55", image: front_side },

  // Lavage extérieur
  { title: "Lavage extérieur", vehicleType: "Citadine", price: 35, description: "Lavage extérieur à la main avec eau de mer désalinisée, séchage microfibre et brillance pneus.", duration: "0h30", image: exterior },
  { title: "Lavage extérieur", vehicleType: "Berline", price: 40, description: "Lavage extérieur à la main avec eau de mer désalinisée, séchage microfibre et brillance pneus.", duration: "0h30" },
  { title: "Lavage extérieur", vehicleType: "SUV", price: 50, description: "Lavage extérieur à la main avec eau de mer désalinisée, séchage microfibre et brillance pneus.", duration: "0h45", image: exterior },

  // Lavage complet
  { title: "Lavage complet", vehicleType: "Citadine", price: 70, description: "Intérieur + extérieur complet avec finitions premium.", duration: "1h30" },
  { title: "Lavage complet", vehicleType: "Berline", price: 80, description: "Intérieur + extérieur complet avec finitions premium.", duration: "1h30" },
  { title: "Lavage complet", vehicleType: "SUV", price: 95, description: "Intérieur + extérieur complet avec finitions premium.", duration: "1h45" },

  // Formule Express (dans chaque catégorie)
  { title: "Formule Express", vehicleType: "Citadine", price: 40, description: "Lavage rapide mais soigné intérieur + extérieur.", duration: "1h00" },
  { title: "Formule Express", vehicleType: "Berline", price: 45, description: "Lavage rapide mais soigné intérieur + extérieur.", duration: "1h00" },
  { title: "Formule Express", vehicleType: "SUV", price: 50, description: "Lavage rapide mais soigné intérieur + extérieur.", duration: "1h15" },

  // Formule Detailing
  { title: "Formule Detailing", vehicleType: "Citadine", price: 120, description: "Nettoyage en profondeur avec finitions haut de gamme, idéal pour remise à neuf.", duration: "2h00" },
  { title: "Formule Detailing", vehicleType: "Berline", price: 140, description: "Nettoyage en profondeur avec finitions haut de gamme, idéal pour remise à neuf.", duration: "2h15" },
  { title: "Formule Detailing", vehicleType: "SUV", price: 160, description: "Nettoyage en profondeur avec finitions haut de gamme, idéal pour remise à neuf.", duration: "2h30"  },

  // À la carte
  { title: "Nettoyage siège enfant", vehicleType: null, price: "À partir de 12€", description: "Désinfection vapeur + shampooing en profondeur pour hygiène optimale des sièges enfant." },
  { title: "Nettoyage sièges (par siège)", vehicleType: null, price: "À partir de 10€", description: "Shampooing, vapeur et brossage doux pour retirer taches et poussières, tout en respectant les matériaux." },
  { title: "Jantes + pneus", vehicleType: null, price: "À partir de 18€", description: "Dégraissage + brillance des jantes et traitement des pneus pour un aspect neuf." },
  { title: "Vitres", vehicleType: null, price: "À partir de 15€", description: "Nettoyage sans traces de toutes les vitres intérieures pour une visibilité parfaite." },
  { title: "Nettoyage tapis uniquement", vehicleType: null, price: "À partir de 15€", description: "Aspiration et détachage des tapis de sol avec séchage rapide." },
  { title: "Zones difficiles", vehicleType: null, price: "À partir de 25€", description: "Nettoyage précis des rainures, boutons, aérateurs, et dessous de sièges à la vapeur." },
  { title: "Traitement anti-odeur", vehicleType: null, price: "À partir de 18€", description: "Traitement à l’ozone ou parfum longue durée pour un habitacle frais et agréable." },

  // Finitions premium
  { title: "Polissage carrosserie", vehicleType: "Citadine", price: 60, description: "Une passe de polissage pour redonner brillance et atténuer les micro-rayures.", duration: "3h00" },
  { title: "Polissage carrosserie", vehicleType: "Berline", price: 70, description: "Une passe de polissage pour redonner brillance et atténuer les micro-rayures.", duration: "3h15" },
  { title: "Polissage carrosserie", vehicleType: "SUV", price: 90, description: "Une passe de polissage pour redonner brillance et atténuer les micro-rayures.", duration: "3h00" },

  { title: "Pose céramique", vehicleType: "Citadine", price: 180, description: "Protection longue durée de la peinture contre rayures, UV, salissures et pluie.", duration: "4h30" },
  { title: "Pose céramique", vehicleType: "Berline", price: 200, description: "Protection longue durée de la peinture contre rayures, UV, salissures et pluie.", duration: "4h30" },
  { title: "Pose céramique", vehicleType: "SUV", price: 250, description: "Protection longue durée de la peinture contre rayures, UV, salissures et pluie.", duration: "5h00" }
];

const SubscriptionsList = [
  {
    vehicleType: "Citadine",
    prices: {
      Basic: 98,     // 2 lavages / -30%
      Standard: 137, // 3 lavages / -35%
      Premium: 168   // 4 lavages / -40%
    },
    description: "Abonnement pour 2 à 4 lavages complets (valeur unitaire : 70€). Économisez jusqu’à 40%.",
    washes: { Basic: 2, Standard: 3, Premium: 4 }
  },
  {
    vehicleType: "Berline",
    prices: {
      Basic: 112,     
      Standard: 156,  
      Premium: 192    
    },
    description: "Lavage complet Berline à prix réduit (valeur unitaire : 80€).",
    washes: { Basic: 2, Standard: 3, Premium: 4 }
  },
  {
    vehicleType: "SUV",
    prices: {
      Basic: 133,     
      Standard: 185,  
      Premium: 228    
    },
    description: "Abonnement SUV avec lavage complet (valeur unitaire : 95€). Jusqu’à 40% de remise.",
    washes: { Basic: 2, Standard: 3, Premium: 4 }
  }
];


const CartePackages = [
  { washes: 3, priceFrom: 100 },
  { washes: 6, priceFrom: 180 },
  { washes: 9, priceFrom: 260 },
  { washes: 12, priceFrom: 320 },
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
            <div className="flex gap-8">
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
            <div className="flex gap-8 flex-wrap">
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