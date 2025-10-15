import { useState } from "react";
import { Menu, X, Home, Briefcase, Info, Phone } from "lucide-react";
import logo from "../assets/JAC.png";
import "../App.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="Nav rounded-2xl fixed left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-7xl bg-white/90 backdrop-blur-md shadow-md flex items-center justify-between px-6 py-3">
      {/* Logo */}
      <a href="#home">
        <img
          src={logo}
          alt="logo"
          className="w-[50px] h-[50px] object-cover rounded-full"
        />
      </a>
      {/* Desktop Nav */}
      <div className="navlinks hidden md:flex gap-6 items-center text-sm font-medium">
        {/* <Home className="w-5 h-5 animate-none" id="home" /> */}
        <a href="#home" className="hover:underline text-black">Home</a>
        <a href="#about" className="hover:underline text-black">About</a>
        <a href="#services" className="hover:underline">Services</a>
        <a href="#team" className="hover:underline">Team</a>
        <a href="#projects" className="hover:underline text-black">Projects</a>
      </div>

      {/* Contact Us */}
      <div className="DLMode hidden md:flex items-center rounded-full transition-all duration-300 text-sm font-medium">
        <a href="#contact" className="hover:underline text-gray-100">Contact Us</a>
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
        <div className="mobile-nav $ {isOpen ? `slide-in` : `slide-out`} absolute top-0  w-full flex flex-col p-4 gap-4 mt-2 md:hidden text-gray-50">

          <a href="#home" className="flex items-center gap-2">
            <Home className="w-5 h-5" /> Home
          </a>
          <a href="#about" className="flex items-center gap-2">
            <Info className="w-5 h-5" /> About
          </a>
          <a href="#services" className="flex items-center gap-2">
            <Phone className="w-5 h-5" /> Services
          </a>
          <a href="#team" className="flex items-center gap-2">
            <Phone className="w-5 h-5" /> Team
          </a>
          <a href="#projects" className="flex items-center gap-2">
            <Briefcase className="w-5 h-5" /> Projects
          </a>
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-2xl text-center transition"
          >
            Contact Us
          </a>

        </div>
      )}
    </div>
  );
};

export default Header;