import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;
    setVisible(visible);
    setPrevScrollPos(currentScrollPos);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`bg-white shadow-md fixed w-full z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="h-8 w-8 rounded-sm" />
          <Link
            to="/"
            className="text-lg font-semibold text-gray-700 hover:text-primary"
          >
            Home
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/about" className="text-gray-700 hover:text-primary">
            About
          </Link>
          <Link to="/works" className="text-gray-700 hover:text-primary">
            Works
          </Link>
          <Link
            to="/login?mode=login"
            className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary"
          >
            Login
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3BottomRightIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            About
          </Link>
          <Link
            to="/works"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Works
          </Link>
          <Link
            to="/login?mode=login"
            className="block px-4 py-2 text-white bg-primary hover:bg-secondary"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
