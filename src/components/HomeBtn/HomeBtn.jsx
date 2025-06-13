import React, { useEffect, useState } from "react";
import JCC_Logo_Gold from "../../assets/JCC_Logo_Gold.png";

const BackToTopButton = () => {
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  // Affiche le bouton uniquement si scroll > 100px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-start bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full shadow-xl w-14 h-14 hover:w-32 transition-all duration-300 overflow-hidden group"
      aria-label="Retour à l'accueil"
      title="Retour à l'accueil"
    >
      <img
        src={JCC_Logo_Gold}
        alt="Logo Jacob's Clean Cars"
        className={`w-10 h-10 ml-2 transition-transform duration-700 ${
  hover ? "rotate-[360deg]" : "rotate-0"
        }`}
      />
      <span
        className={`ml-2 text-primary font-semibold text-sm transition-all duration-300 ${
          hover ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
        }`}
      >
        Accueil
      </span>
    </button>
  );
};

export default BackToTopButton;
