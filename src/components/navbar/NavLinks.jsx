import React from "react";

const Links = [
  { link: "Aboute Me", section: "about" },
  { link: "Technologies", section: "technologies" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];
export default function NavLinks({ closeMenu }) {
  return (
    <ul className="flex lg:flex-row sm:flex-col lg:relative sm:absolute lg:top-0 lg:right-0 sm:top-[100%] sm:left-0 sm:text-center lg:text-md sm:text-xl sm:bg-cyan-500/75 lg:bg-transparent gap-6 font-bold text-white lg:bg-none lg:w-auto sm:w-full z-40">
      {Links.map((link, index) => (
        <li className="group" key={index}>
          <a
            className={`cursor-pointer text-white hover:text-cyan-500 transition-all duration-500 `}
            href={`#${link.section}`}
            onClick={closeMenu}
          >
            {link.link}
          </a>
          <div
            className={`mx-auto bg-cyan-500 w-0 group-hover:w-full h-[1px] transition-all duration-300 `}
          ></div>
        </li>
      ))}
    </ul>
  );
}
