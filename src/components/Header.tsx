import { useEffect, useRef, useState } from "react";
import { Menu, X, Home, Briefcase, Info, Phone } from "lucide-react";
import logo from "../assets/JAC.png";
import "../App.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (isOpen) {
      // move focus to first link in mobile menu for accessibility
      firstLinkRef.current?.focus();
    }
  }, [isOpen]);

  // simple focus trap
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = menuRef.current!.querySelectorAll<HTMLElement>("a, button, [tabindex]:not([tabindex='-1'])");
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  return (
  <div className="Nav rounded-full fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-7xl bg-white/90 backdrop-blur-md shadow-md flex items-center justify-between px-6 py-3">
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="w-[50px] h-[50px] object-cover rounded-full"
      />
      {/* Desktop Nav */}
      <nav className="navlinks hidden md:flex gap-6 items-center text-sm font-medium" aria-label="Main navigation">
        <Home className="w-5 h-5 animate-none" id="home" />
        <a href="#about" className="hover:underline text-black">About</a>
        <a href="#projects" className="hover:underline text-black">Project</a>
        <a href="#services" className="hover:underline">Services</a>
      </nav>

      {/* Contact Us */}
      <div className="DLMode hidden md:flex items-center rounded-full transition-all duration-300 text-sm font-medium">
        <a href="#contact" className="hover:underline text-gray-100">Contact Us</a>
      </div>

      {/* Hamburger Button */}
      <button
        className="md:hidden z-50 text-black bg-transparent p-2 rounded-full hover:bg-gray-100"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* backdrop */}
          <div
            className="mobile-backdrop fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden
          />

          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            ref={menuRef}
            className="mobile-nav fixed top-0 left-0 w-3/4 max-w-xs h-full p-6 z-50 bg-[#101617] text-gray-100 flex flex-col gap-6 md:hidden shadow-lg"
          >
            <a ref={firstLinkRef} href="#home" className="flex items-center gap-2 focus:outline-none focus:ring">
              <Home className="w-5 h-5" /> Home
            </a>
            <a href="#about" className="flex items-center gap-2">
              <Info className="w-5 h-5" /> About
            </a>
            <a href="#projects" className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" /> Project
            </a>
            <a href="#services" className="flex items-center gap-2">
              <Phone className="w-5 h-5" /> Services
            </a>
            <a
              href="#contact"
              className="mt-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-center transition"
            >
              Contact Us
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
