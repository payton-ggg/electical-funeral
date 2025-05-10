import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="section bg-gray-50 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 bg-texture"></div>
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="section-title mb-6 slide-up">A Tradition of Compassionate Care</h2>
            <p className="text-gray-700 mb-6 slide-up" style={{ animationDelay: '100ms' }}>
              Since 1985, Riolit Funeral Home has been providing compassionate funeral services to families in their time of need. Our dedicated team understands that each life is unique, and we are committed to helping you honor your loved one in a meaningful way.
            </p>
            <p className="text-gray-700 mb-8 slide-up" style={{ animationDelay: '200ms' }}>
              We believe in creating personalized experiences that celebrate the individuality of each person and provide comfort to family and friends. Our professional staff offers guidance and support throughout the entire process, ensuring that every detail is handled with care and respect.
            </p>
            <Link 
              to="/about" 
              className="btn btn-primary flex items-center gap-2 group slide-up"
              style={{ animationDelay: '300ms' }}
            >
              Learn About Our Story
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 slide-up">
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden h-[400px]">
                <img 
                  src="https://images.pexels.com/photos/12108048/pexels-photo-12108048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Riolit Funeral Home building" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-primary-100 rounded-lg z-[-1]"></div>
              <div className="absolute -top-5 -left-5 w-32 h-32 bg-accent-100 rounded-lg z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;