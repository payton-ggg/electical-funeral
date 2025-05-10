import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Candy as Candle, Users, Calendar, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Heart size={36} strokeWidth={1.5} className="text-primary-600 mb-4" />,
    title: 'Traditional Funerals',
    description: 'Respectful ceremonies that honor your loved one according to your cultural and religious traditions.',
    link: '/services#traditional'
  },
  {
    icon: <Candle size={36} strokeWidth={1.5} className="text-primary-600 mb-4" />,
    title: 'Cremation Services',
    description: 'Dignified cremation options with memorial services tailored to your preferences.',
    link: '/services#cremation'
  },
  {
    icon: <Users size={36} strokeWidth={1.5} className="text-primary-600 mb-4" />,
    title: 'Memorial Services',
    description: 'Thoughtfully planned gatherings to celebrate and remember the life of your loved one.',
    link: '/services#memorial'
  },
  {
    icon: <Calendar size={36} strokeWidth={1.5} className="text-primary-600 mb-4" />,
    title: 'Pre-Planning',
    description: 'Arrange your wishes in advance to provide peace of mind for you and your family.',
    link: '/planning'
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title text-center">Our Services</h2>
          <p className="section-subtitle text-center">
            We offer a range of personalized services to support you and your family during this difficult time.
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
              <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <Link 
                to={service.link} 
                className="text-primary-600 font-medium inline-flex items-center group hover:text-primary-700 transition-colors mt-auto"
              >
                Learn More 
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;