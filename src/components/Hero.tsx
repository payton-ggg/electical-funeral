import React from "react";
import { Phone, ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundPosition: "25% center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight mb-6 fade-in">
            Compassionate Care During Life's Most Difficult Moments
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl fade-in"
            style={{ animationDelay: "200ms" }}
          >
            Riolit Funeral Home provides dignified funeral services with respect
            and understanding to honor your loved ones.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="#contact"
              className="btn btn-primary flex items-center gap-2 group"
            >
              Contact Us
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="tel:+18005551234"
              className="btn btn-secondary backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Phone size={18} className="mr-2" />
              Call 24/7: (800) 555-1234
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
