import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import Logo from "../ui/Logo";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-primary-700 font-semibold"
      : "text-gray-700 hover:text-primary-600 transition-colors";
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-soft py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="z-10">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium ${isActive(link.path)}`}
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:+18005551234" className="btn btn-primary ml-4 text-sm">
            <Phone size={16} className="mr-2" />
            (800) 555-1234
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-10 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-gray-800" />
          ) : (
            <Menu
              size={24}
              className={`${isScrolled ? "text-gray-800" : "text-white"}`}
            />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white z-0 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <nav className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium ${isActive(link.path)}`}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+18005551234" className="btn btn-primary mt-4">
              <Phone size={18} className="mr-2" />
              (800) 555-1234
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
