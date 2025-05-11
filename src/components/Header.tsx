import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-soft py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex flex-col">
            <span className="text-xl font-heading font-semibold text-primary-900 leading-tight">
              Riolit
            </span>
            <span className="text-xs tracking-wider text-gray-600">
              FUNERAL HOME
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-gray-700 hover:text-primary-600 transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-primary-600 transition-colors"
          >
            About
          </a>
          <a
            href="#testimonials"
            className="text-gray-700 hover:text-primary-600 transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-primary-600 transition-colors"
          >
            Contact
          </a>
          <a href="tel:+18005551234" className="btn btn-primary">
            <Phone size={16} className="mr-2" />
            (800) 555-1234
          </a>
        </nav>

        <button
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`burger-menu ${isMenuOpen ? "open" : ""}`}>
            <span className="bg-gray-800"></span>
            <span className="bg-gray-800"></span>
            <span className="bg-gray-800"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="container mx-auto px-4 py-20">
          <nav className="flex flex-col space-y-6">
            <a
              href="#services"
              className="text-2xl font-heading text-gray-800 hover:text-primary-600 transition-colors transform hover:translate-x-2 duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-2xl font-heading text-gray-800 hover:text-primary-600 transition-colors transform hover:translate-x-2 duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-2xl font-heading text-gray-800 hover:text-primary-600 transition-colors transform hover:translate-x-2 duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-2xl font-heading text-gray-800 hover:text-primary-600 transition-colors transform hover:translate-x-2 duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="tel:+18005551234"
              className="btn btn-primary inline-flex items-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={16} className="mr-2" />
              (800) 555-1234
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
