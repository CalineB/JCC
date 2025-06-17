import React, { useState, useRef, useEffect } from "react";
import { VscLightbulb } from "react-icons/vsc";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import JCC_Logo_Gold from "../assets/JCC_Logo_Gold.png";
import JCC_Logo_Black from "../assets/JCC_Logo_Black.png";
import ResponsiveMenu from "./ResponsiveMenu";

export const NavLinks = [
  { id: "0", link: "/#accueil" },
  { id: "1", name: "Notre concept", link: "/#concept" },
  { id: "2", name: "Nos services", link: "/#services" },
  { id: "3", name: "Nos tarifs", link: "/#tarifs" },
  { id: "4", name: "Prendre rendez-vous", link: "/#contacts" },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const togglemenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <nav className="shadow-md bg-white dark:bg-[#000115] dark:text-white duration-300 pb-4 pt-4">
      <div className="container md:py-0">
        <div className="flex justify-between items-center ">
          <div className="h-16 flex items-center">
            <a href="/#accueil">
              <img
                src={JCC_Logo_Black}
                alt="Logo clair"
                className="dark:hidden h-40 sm:h-40 lg:h-150 object-contain"
              />
              <img
                src={JCC_Logo_Gold}
                alt="Logo sombre"
                className="hidden dark:block h-40 sm:h-40 lg:h-150 object-contain"
              />
            </a>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map((data) => (
                <li
                  key={data.id}
                  className="py-4 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-300 tp-5 bp-3"
                >
                  <a className="py-2 text-lg font-medium" href={data.link}>
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center ml-4">
            {theme === "dark" ? (
              <HiOutlineLightBulb
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <VscLightbulb
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
            <a href="/connexion" className="hidden md:block">
                <FaUserCircle
                size={28}
                className="cursor-pointer hover:text-primary transition-colors duration-300 m-2"
            />
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            {showMenu ? (
              <button
                onClick={() => setShowMenu(false)}
                aria-label="Fermer le menu"
                className="text-3xl text-primary cursor-pointer hover:text-red-600 focus:outline-none"
              >
                &times;
              </button>
            ) : (
              <HiMenuAlt3
                onClick={togglemenu}
                size={30}
                className="cursor-pointer transition-all dark:text-primary text-black"
              />
            )}
          </div>
        </div>
      </div>

      <ResponsiveMenu
        showMenu={showMenu}
        menuRef={menuRef}
        onLinkClick={handleLinkClick}
      />
    </nav>
  );
};

export default Navbar;
