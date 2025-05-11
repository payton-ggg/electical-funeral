import React from "react";
import {
  Phone,
  MapPin,
  Mail,
  Flower,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-6">
              <Flower size={32} className="text-white mr-2" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-xl font-heading font-semibold text-white leading-tight">
                  Riolit
                </span>
                <span className="text-xs tracking-wider text-gray-300">
                  FUNERAL HOME
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Providing compassionate funeral services with dignity and respect
              for over 35 years.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Traditional Funerals
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cremation Services
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Memorial Services
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Pre-Planning
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  1234 Memorial Drive
                  <br />
                  Riverside, CA 92506
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <a
                  href="tel:+18005551234"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (800) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@riolitfuneral.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@riolitfuneral.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center md:text-left md:flex md:justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Riolit Funeral Home. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 text-sm hover:text-white mr-6 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
