import React, { useState, useEffect } from "react";
import { Phone, ArrowRight, Flower } from "lucide-react";

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

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-soft py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Flower
            size={32}
            className="text-primary-600 mr-2"
            strokeWidth={1.5}
          />
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
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <ArrowRight size={24} className="text-gray-800" />
          ) : (
            <div className="space-y-2">
              <div className="w-6 h-0.5 bg-gray-800"></div>
              <div className="w-6 h-0.5 bg-gray-800"></div>
              <div className="w-6 h-0.5 bg-gray-800"></div>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
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
            <a
              href="tel:+18005551234"
              className="btn btn-primary inline-flex items-center"
            >
              <Phone size={16} className="mr-2" />
              (800) 555-1234
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
