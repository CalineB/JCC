import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Legals = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const services = [
    {
      id: "seawater",
      title: "Lavage écologique à l’eau de mer désalinisée",
      summary:
        "Un nettoyage respectueux de l’environnement grâce à une eau de mer désalinisée innovante.",
      details:
        "Notre procédé utilise exclusivement de l’eau de mer désalinisée pour garantir un lavage sans résidu ni produit chimique. Cette méthode respecte l’environnement, protège la peinture et les surfaces de votre véhicule tout en assurant une propreté irréprochable."
    },
    {
      id: "clean",
      title: "Nettoyage manuel personnalisé",
      summary:
        "Un soin sur-mesure réalisé à la main, adapté aux besoins spécifiques de votre voiture.",
      details:
        "Chaque véhicule bénéficie d'un protocole personnalisé, adapté à son état et ses particularités. Nos techniciens experts utilisent des produits de qualité supérieure et des techniques précises pour redonner éclat et protection à votre automobile."
    }
  ];

  return (
    <div className="dark:bg-dark bg-slate-100 dark:text-white min-h-screen p-6 sm:p-12 container mx-auto max-w-4xl">
      <h1 className="text-4xl font-bold font-serif mb-10 text-center">
        Conditions Générales de Service
      </h1>

      <section id="definitions" className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-primary">1. Définitions et champ d’application</h2>
        <p>
          Les présentes Conditions Générales régissent les services proposés par Jacob's Clean Cars (ci-après "nous", "notre entreprise") dans le cadre du nettoyage automobile écologique. En utilisant nos services, vous acceptez sans réserve ces conditions.
          <br />
          Vous trouverez <a className="font-semibold" href="#">ici les résultats</a> de nos analyses régulières.
        </p>
      </section>

      <section id="services" className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-primary">2. Description des services</h2>
        {services.map(({ id, title, summary, details }) => (
          <article key={id} className="mb-6 border-b border-gray-300 pb-4" id={id}>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p>{summary}</p>
            <p className="mt-3 text-gray-700 dark:text-gray-300">{details}</p>
          </article>
        ))}
      </section>

      <section id="appointment" className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-primary">3. Prise de rendez-vous</h2>
        <p>
          Les rendez-vous se prennent par <a href="tel:+590690000000" className="text-primary underline">téléphone</a>, 
          <a href="mailto:jcc@gmx.fr" className="text-primary underline"> mail</a>, 
          <a href="https://wa.me/590690000000" target="_blank" rel="noopener noreferrer" className="text-primary underline"> WhatsApp</a>.
          Une confirmation écrite vous est systématiquement envoyée après validation.
          <br />
          Il est fortement recommandé de réserver à l'avance afin de garantir la disponibilité à la date souhaitée. 
          <br />
          Toute modification ou annulation doit être communiquée au moins 24h à l'avance.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Horaires flexibles pour votre confort</h3>
        <p>
          Pour vous offrir un service pratique, nous proposons des créneaux en journée et en soirée, certains jours de la semaine, vous permettant ainsi de planifier votre rendez-vous selon vos contraintes personnelles. Cette flexibilité vise à s’adapter à vos besoins tout en maintenant un haut niveau d’organisation dans notre planning.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Retards et absences</h3>
        <p>
          En cas de retard, la prestation pourra débuter à votre arrivée, mais elle sera mise en pause à l'heure de début du rendez-vous suivant, afin de respecter le planning des autres clients. Nos équipes feront le maximum pour terminer le service dans les meilleurs délais sans compromettre la qualité. En cas d’absence non signalée ou de retard excessif, la prestation pourra être annulée, et des frais d’indisponibilité pourront être facturés.
        </p>
      </section>

      <section id="pricing" className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-primary">4. Tarifs et paiements</h2>
        <p>
          Nos tarifs sont indiqués sur le site et sont susceptibles d’évoluer. Le paiement s'effectue lors de la prise de rendez-vous ou au début de la prestation, selon les modalités convenues. Les modes de paiement acceptés sont précisés lors de la réservation.
        </p>
      </section>

      <section id="responsibilities" className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-primary">5. Responsabilités</h2>
        <p>
          Nous nous engageons à fournir un service professionnel et soigné. Cependant, Jacob's Clean Cars ne pourra être tenu responsable des dommages préexistants au véhicule ou causés par des facteurs indépendants de notre contrôle. Toute anomalie devra être signalée avant la prestation.
        </p>
      </section>

      <section id="on_demand" className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-primary">5. Services à la carte</h2>
        <p>
          Nos services à la carte vous permettent de choisir des prestations individuelles selon vos besoins spécifiques, sans engagement. Les tarifs affichés sont « à partir de » et peuvent varier selon le type de véhicule, son état, ou les conditions d'intervention. Le paiement est requis avant ou au moment de la prestation. Une annulation est possible sans frais jusqu’à 24h avant le rendez-vous. Passé ce délai, des frais pourront être appliqués.
        </p>
      </section>

<section id="subscription" className="mb-8">
  <h2 className="text-2xl font-semibold mb-3 text-primary">6. Abonnements</h2>
  <p>
    Nos formules d’abonnement mensuel ou annuel offrent un accès privilégié à des prestations régulières à tarif préférentiel. Les abonnements sont reconduits automatiquement à chaque période, sauf résiliation par le client par demande écrite. Toute période entamée reste due. Les modifications tarifaires sont notifiées au moins 30 jours à l’avance. Le client peut se désabonner à tout moment, la résiliation prenant effet à la fin de la période en cours.
  </p>
</section>


      <section id="privacy" className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-primary">6. Politique de confidentialité</h2>
        <p>
          Les données personnelles collectées lors de la prise de rendez-vous sont strictement utilisées pour la gestion de la prestation et ne seront jamais communiquées à des tiers sans votre consentement explicite.
        </p>
      </section>

      <section id="cancellation" className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-primary">7. Résiliation et annulation</h2>
        <p>
          Vous pouvez annuler ou reporter votre rendez-vous jusqu’à 24 heures avant la date prévue sans frais. Passé ce délai, des frais pourront être appliqués selon notre politique d’annulation, visible sur notre site.
        </p>
      </section>

      <section className="mb-8 text-sm text-gray-500 dark:text-gray-400">
        <h2 className="text-lg font-semibold mb-2">Crédits</h2>
        <p>
          Le modèle 3D <a href="https://skfb.ly/CM8s" target="_blank" rel="noopener noreferrer" className="underline text-primary">"Diamond"</a> par AkinD est sous licence Creative Commons Attribution (<a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="underline text-primary">CC BY 4.0</a>).
        </p>
        <p className="mt-2">
          Site web réalisé par <strong>CBO@2025</strong>.
        </p>
      </section>

      <p className="text-center text-sm text-gray-500 mt-12">
        ©{new Date().getFullYear()} Jacob's Clean Cars - Tous droits réservés.
      </p>
    </div>
  );
};

export default Legals;
