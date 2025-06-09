import React from "react";
import { VscLightbulb } from "react-icons/vsc";
import { HiOutlineLightBulb } from "react-icons/hi";
import JCC_Logo_Gold from "../assets/JCC_Logo_Gold.png";
import JCC_Logo_Black from "../assets/JCC_Logo_Black.png";


const NavLinks = [
    {
        id: "1",
        name: "Accueil",
        link: "/#accueil"
    },
    {
        id: "2",
        name: "Notre concept",
        link: "/#concept"
    },
    {
        id: "3",
        name: "Nos services",
        link: "/#services"
    },
    {
        id: "4",
        name: "Prendre rendez-vous",
        link: "/#contacts"
    },
    {
        id: "5 ",
        name: "Nos tarifs",
        link: "/#tarifs"
    },
]

const Navbar = ({theme, setTheme}) => {
  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300">
      <div className="container md:py-0">
        <div className="flex justify-between items-center ">
            <div className="h-16 flex items-center">
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
            </div>
        <div className="hidden md:block">
            <ul className="flex items-center gap-8">
                {
                    NavLinks.map((data) => (
                        <li key={data.id} className="py-4">
                            <a className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium" href={data.link}>{data.name}</a>
                        </li> 
                    ))
                }           
            </ul>
        </div>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;