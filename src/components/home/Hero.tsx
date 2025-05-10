import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-hero-pattern bg-cover bg-center"
        style={{ backgroundPosition: '25% center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight mb-6 fade-in">
            Compassionate Care During Life's Most Difficult Moments
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl fade-in" style={{ animationDelay: '200ms' }}>
            Riolit Funeral Home provides dignified funeral services with respect and understanding to honor your loved ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 fade-in" style={{ animationDelay: '400ms' }}>
            <Link to="/services" className="btn btn-primary flex items-center gap-2 group">
              Our Services
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="tel:+18005551234" className="btn btn-secondary backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Phone size={18} className="mr-2" />
              Call 24/7: (800) 555-1234
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default Hero;