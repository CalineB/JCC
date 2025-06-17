import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, menuRef, onLinkClick }) => {
  return (
    <div
      ref={menuRef}
      className={`${
        showMenu ? "left-0" : "-left-full"
      } fixed top-0 z-50 bg-white dark:bg-black dark:text-primary border-2 border-primary rounded-r-xl h-screen w-[75%] md:hidden shadow-md flex flex-col justify-between px-8 pb-6 pt-16 transition-all duration-300`}
    >
      <div className="card text-center">
        <div className="flex items-center justify-center gap-3">
        <a href="/connexion">
          <FaUserCircle
            size={50}
            className="dark:hover:text-white cursor-pointer transition-colors duration-300"
          />
        </a>
          <div>
            <h1>Salutations,</h1>
            <h1>Bienvenue chez JCC</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavLinks.map((data) => (
              <li
                key={data.id}
                className="dark:hover:text-white transition-colors duration-300"
              >
                <a href={data.link} onClick={onLinkClick}>
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <h1 className="text-center italic text-gray-500">Par CBO@2025</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
