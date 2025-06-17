import React, { useState } from "react";
import { VscLightbulb } from "react-icons/vsc";
import { HiMenuAlt1, HiMenuAlt3, HiOutlineLightBulb } from "react-icons/hi";
import JCC_Logo_Gold from "../assets/JCC_Logo_Gold.png";
import JCC_Logo_Black from "../assets/JCC_Logo_Black.png";
import ResponsiveMenu from "./ResponsiveMenu";

export const NavLinks = [
        {
        id: "0",
        link: "/#accueil"
    },
    {
        id: "1",
        name: "Notre concept",
        link: "/#concept"
    },
    {
        id: "2",
        name: "Nos services",
        link: "/#services"
    },
        {
        id: "3",
        name: "Nos tarifs",
        link: "/#tarifs"
    },
    {
        id: "4",
        name: "Prendre rendez-vous",
        link: "/#contacts"
    }
]

const Navbar = ({theme, setTheme}) => {
    const [showMenu, setShowMenu] = useState(false);
    const togglemenu = () => {
        setShowMenu(!showMenu);
    }
  return (
    <nav className="shadow-md bg-white dark:bg-[#000115] dark:text-white duration-300">
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
                {
                    NavLinks.map((data) => (
                        <li key={data.id} className="py-4 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-300 tp-5 bp-3">
                            <a className="py-2 text-lg font-medium" href={data.link}>{data.name}</a>
                        </li> 
                    ))
                }           
            </ul>
        </div>
        <div className="flex items-center gap-4 md:hidden">
            <div>
                            {
                theme === "dark"?(
                <HiOutlineLightBulb onClick={() => setTheme ("light")}
                className="text-2xl" />):(
                <VscLightbulb
                onClick={() => setTheme ("dark")}
                className="text-2xl" />
                )
            }
        </div>
        {
            showMenu ? 
                ( < HiMenuAlt1 onClick={togglemenu}
                    size={30} className="cursor-pointer transition-all dark:text-primary text-black"/> ) : 
                ( <HiMenuAlt3 onClick={togglemenu}
                    size={30} className="cursor-pointer transition-all dark:text-primary text-black" />)
        }
        </div>
            </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;