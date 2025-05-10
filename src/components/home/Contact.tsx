import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Phone, MapPin, ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <h2 className="section-title mb-6">Here When You Need Us</h2>
            <p className="text-gray-700 mb-8 max-w-lg">
              We understand that grief doesn't follow a schedule. That's why our compassionate staff is available 24 hours a day, 7 days a week to provide support and guidance when you need it most.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Clock size={24} className="text-primary-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Available 24/7</h3>
                  <p className="text-gray-600">
                    Our staff is available to assist you at any time, day or night.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={24} className="text-primary-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Call Us Anytime</h3>
                  <p className="text-gray-600">
                    <a href="tel:+18005551234" className="text-primary-600 hover:text-primary-700 transition-colors">
                      (800) 555-1234
                    </a>
                    <br />
                    We're here to answer your questions and provide immediate assistance.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin size={24} className="text-primary-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Visit Our Location</h3>
                  <p className="text-gray-600">
                    1234 Memorial Drive<br />
                    Riverside, CA 92506
                  </p>
                </div>
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className="btn btn-primary inline-flex items-center group"
            >
              Contact Us
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-medium slide-up" style={{ animationDelay: '200ms' }}>
            <iframe
              title="Riolit Funeral Home Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.43554967946!2d-118.69192119136734!3d34.020161304907774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1630393946835!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;