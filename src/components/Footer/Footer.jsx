import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaChevronRight } from "react-icons/fa";

const FooterLinks = [
  { title: "Mentions légales", link: "/Legals" },
  { title: "Politique de confidentialité", link: "/Legals/#privacy" },
  { title: "Conditions générales", link: "/#conditions" },
  { title: "Nous écrire", link: "/#contacts" }
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-2 dark:text-white text-center">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 py-10 px-4">
          <div>
            <h1 className="text-xl sm:text-3xl font-bold mb-3">Jacob's Clean Cars</h1>
            <p className="text-primary">Jantes, Carrosserie ? <i>Ça brille !</i></p>

            <div className="flex items-center gap-4 mt-6 justify-center">
              <a href="#">
                <FaFacebook className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaInstagram className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </a>
            </div>
            <div className="flex flex-col gap-2 mt-4 sm:hidden">
              <a href="#" className="flex justify-center items-center gap-2 hover:text-primary duration-300">
                <FaLocationArrow className="text-primary text-sm" />
                Gosier, 97190 Guadeloupe
              </a>
              <a href="tel:+590690000000" className="flex justify-center items-center gap-2 hover:text-primary duration-300">
                <FaMobileAlt className="text-primary text-sm" />
                06 90 00 00 00
              </a>
            </div>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold mb-3">Liens utiles</h1>
            <ul className="flex flex-col gap-3 text-sm">
              {FooterLinks.map((item) => (
                <li key={item.title} className="hover:text-primary duration-300">
                  <a href={item.link} className="flex justify-center items-center gap-2">
                    <FaChevronRight className="text-primary text-sm" />
                    {item.title}
                  </a>
                </li>
              ))}

              <li className="hover:text-primary duration-300 hidden sm:block">
                <a href="#" className="flex justify-center items-center gap-2">
                  <FaLocationArrow className="text-primary text-sm" />
                  Gosier, 97190 Guadeloupe
                </a>
              </li>

              <li className="hover:text-primary duration-300 hidden sm:block">
                <a href="tel:+590690000000" className="flex justify-center items-center gap-2">
                  <FaMobileAlt className="text-primary text-sm" />
                  06 90 00 00 00
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-2 md:col-span-1 text-center">
            <h1 className="text-xl sm:text-2xl font-bold mb-3">Horaires</h1>
            <p>Les dimanches de 11h00 à 19h00</p>
            <p>Les lundis de 14h00 à 21h00</p>
            <p>Du mardi au jeudi de 7h00 à 18h00</p>
            <p className="text-red">Fermé les vendredis et samedis</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
