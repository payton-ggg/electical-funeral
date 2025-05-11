import React from "react";
import {
  Heart,
  Candy as Candle,
  Users,
  Calendar,
  ArrowRight,
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: (
        <Heart size={36} strokeWidth={1.5} className="text-primary-600 mb-4" />
      ),
      title: "Traditional Funerals",
      description:
        "Respectful ceremonies that honor your loved one according to your cultural and religious traditions.",
    },
    {
      icon: (
        <Candle size={36} strokeWidth={1.5} className="text-primary-600 mb-4" />
      ),
      title: "Cremation Services",
      description:
        "Dignified cremation options with memorial services tailored to your preferences.",
    },
    {
      icon: (
        <Users size={36} strokeWidth={1.5} className="text-primary-600 mb-4" />
      ),
      title: "Memorial Services",
      description:
        "Thoughtfully planned gatherings to celebrate and remember the life of your loved one.",
    },
    {
      icon: (
        <Calendar
          size={36}
          strokeWidth={1.5}
          className="text-primary-600 mb-4"
        />
      ),
      title: "Pre-Planning",
      description:
        "Arrange your wishes in advance to provide peace of mind for you and your family.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-primary-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a range of personalized services to support you and your
            family during this difficult time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.icon}
              <h3 className="text-xl font-heading font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {service.description}
              </p>
              <a
                href="#contact"
                className="text-primary-600 font-medium inline-flex items-center group hover:text-primary-700 transition-colors mt-auto"
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="ml-1 transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
