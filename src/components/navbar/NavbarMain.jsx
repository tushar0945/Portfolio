import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function NavbarMain() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between  h-[5rem] bg-transparent backdrop-blur-md rounded-sm z-50 px-16 sm:px-7">
      <NavLogo />
      <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
        <NavLinks closeMenu={() => setMenuOpen(false)} />
      </div>
      <div className="lg:hidden sm:block">
        <button className="text-3xl" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
}
