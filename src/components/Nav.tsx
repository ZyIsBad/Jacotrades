import { useState } from "react";
import { Menu, X, Home, } from "lucide-react";
import logo from "../assets/TECNOLOGIA.svg";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="Nav fixed flex justify-between items-center px-6 py-3 mx-auto mt-10 rounded-full shadow-lg max-w-5xl transition-colors duration-300 border-2 pb-10 z-50 top-0">
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="w-[150px] h-[50px] object-cover rounded-full"
      />

      {/* Desktop Nav */}
      <div className="navlinks hidden md:flex gap-6 items-center text-sm font-medium">
        <Home className="w-5 h-5 animate-none" id="home" />
        <a href="#" className="hover:underline text-black">About</a>
        <a href="#" className="hover:underline text-black">Project</a>
        <a href="#" className="hover:underline">Services</a>
      </div>

      {/* Contact Us */}
      <div className="DLMode hidden md:flex items-center rounded-full transition-all duration-300 text-sm font-medium">
        <a href="#" className="hover:underline text-gray-100">Contact Us</a>
      </div>

      {/* Hamburger Button */}
      <button
        className="md:hidden z-50 text-white"
        onClick={toggleMenu}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-nav $ {isOpen ? `slide-in` : `slide-out`} absolute top-0 left-0 w-full flex flex-col p-4 gap-4 mt-2 md:hidden text-gray-50">

            <a href="#" className="transition-all duration-300 flex gap-2"> <Home className="w-5 h-5 animate-none" id="home"/> Home</a>
            <a href="#" className="transition-all duration-300 flex gap-2"> <Home className="w-5 h-5" id="home"/> About</a>
            <a href="#" className="transition-all duration-300 flex gap-2"> <Home className="w-5 h-5" id="home"/> Project</a>
            <a href="#" className="transition-all duration-300 flex gap-2"> <Home className="w-5 h-5" id="home"/> Services</a>            
            {/* Mobile Contact */}
            <div className="DLMode flex items-center px-2 py-1 rounded-full transition-all duration-300 text-sm font-medium bg-blue-500 hover:bg-blue-600 border-0">
            <a href="#" className=" text-white">Contact Us</a>
            </div>

        </div>
      )}
    </div>
  );
};

export default Navbar;
