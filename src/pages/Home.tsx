import React from "react";
import Hero from "../components/home/Hero";
import ServicesSection from "../components/home/Services";
import AboutSection from "../components/home/About";
import Testimonials from "../components/home/Testimonials";
import ContactSection from "../components/home/Contact";
import { Candy as Candle } from "lucide-react";

const Home: React.FC = () => {
  return (
    <>
      <Hero />

      <ServicesSection />

      <AboutSection />

      <section className="section bg-white relative overflow-hidden">
        <div className="container">
          <div className="bg-primary-50 border border-primary-100 rounded-xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-primary-100"></div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-primary-100"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="inline-block p-3 bg-white rounded-full mb-6 slide-up">
                  <Candle size={32} className="text-primary-600" />
                </div>
                <h2
                  className="text-2xl md:text-3xl font-heading font-semibold mb-4 slide-up"
                  style={{ animationDelay: "100ms" }}
                >
                  Honor Your Loved One's Memory
                </h2>
                <p
                  className="text-gray-700 max-w-xl mb-6 md:mb-0 slide-up"
                  style={{ animationDelay: "200ms" }}
                >
                  Create a dignified and meaningful tribute that celebrates the
                  unique life of your loved one. Our compassionate staff will
                  guide you through each step of the process.
                </p>
              </div>
              <div
                className="flex-shrink-0 slide-up"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <ContactSection />
    </>
  );
};

export default Home;
