import React from 'react';
import { Heart, Candy as Candle, Users, Calendar, ArrowRight, Flower, Clock, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-texture"></div>
        <div className="container relative">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4 fade-in">Our Services</h1>
          <p className="text-xl text-primary-100 max-w-3xl fade-in" style={{ animationDelay: '200ms' }}>
            Compassionate and dignified funeral services tailored to honor your loved one's memory.
          </p>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center slide-up">
            <p className="text-xl text-gray-700 mb-8">
              At Riolit Funeral Home, we understand that each person's life is unique. We offer a range of personalized services designed to honor and celebrate the individuality of your loved one while providing comfort and support to family and friends.
            </p>
            <p className="text-xl text-gray-700">
              Our professional staff will guide you through the process with compassion and care, ensuring that every detail is handled with dignity and respect.
            </p>
          </div>
        </div>
      </section>
      
      {/* Traditional Funerals */}
      <section id="traditional" className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 slide-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-6">
                <Heart size={32} className="text-primary-600" strokeWidth={1.5} />
              </div>
              <h2 className="section-title mb-6">Traditional Funeral Services</h2>
              <p className="text-gray-700 mb-4">
                Our traditional funeral services include all the elements of a dignified ceremony, with options for customization to reflect your loved one's life and legacy.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="inline-block bg-primary-100 rounded-full p-1 mr-3 mt-1">
                    <ArrowRight size={14} className="text-primary-600" />
                  </span>
                  <span className="text-gray-700">
                    <strong>Visitation/Viewing:</strong> A time for family and friends to gather, offer condolences, and pay respects in a supportive environment.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-primary-100 rounded-full p-1 mr-3 mt-1">
                    <ArrowRight size={14} className="text-primary-600" />
                  </span>
                  <span className="text-gray-700">
                    <strong>Funeral Ceremony:</strong> A formal service held at our chapel, your place of worship, or another meaningful location.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-primary-100 rounded-full p-1 mr-3 mt-1">
                    <ArrowRight size={14} className="text-primary-600" />
                  </span>
                  <span className="text-gray-700">
                    <strong>Committal Service:</strong> A brief ceremony at the graveside or mausoleum that provides closure for family and friends.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-primary-100 rounded-full p-1 mr-3 mt-1">
                    <ArrowRight size={14} className="text-primary-600" />
                  </span>
                  <span className="text-gray-700">
                    <strong>Personalization Options:</strong> Music, readings, photo displays, memory tables, and video tributes that celebrate your loved one's life.
                  </span>
                </li>
              </ul>
              <Link to="/planning" className="btn btn-primary">
                Learn About Planning
              </Link>
            </div>
            <div className="order-1 lg:order-2 slide-up" style={{ animationDelay: '200ms' }}>
              <div className="rounded-lg overflow-hidden shadow-medium">
                <img 
                  src="https://images.pexels.com/photos/262271/pexels-photo-262271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Traditional Funeral Service" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cremation Services */}
      <section id="cremation" className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <div className="rounded-lg overflow-hidden shadow-medium">
                <img 
                  src="https://images.pexels.com/photos/4021939/pexels-photo-4021939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Cremation Services" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="slide-up" style={{ animationDelay: '200ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 mb-6">
                <Candle size={32} className="text-accent-600" strokeWidth={1.5} />
              </div>
              <h2 className="section-title mb-6">Cremation Services</h2>
              <p className="text-gray-700 mb-4">
                Our cremation services offer flexibility in honoring your loved one's memory while providing the same level of dignity and respect as our traditional services.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="inline-block bg-accent-100 rounded-full p-1 mr-3 mt-1">
                    <ArrowRight size={14} className="text-accent-600" />
                  </span>
                  <span className="text-gray-700">
                    <strong>Direct Cremation:</strong> A simple, dignified option without a formal service or viewing.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-accent-100 rounded-full p-1 mr-3 mt-1">
                    <ArrowRight size={14} className="text-accent-600" />
                  </span>
                  <span className="text-gray-700">
                    <strong>Cremation with Memorial Service:</strong> Cremation followed by a personalized ceremony to celebrate your loved one's life.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-accent-100 rounded-full p-1 mr-3 mt-1">
                    <ArrowRight size={14} className="text-accent-600" />
                  </span>
                  <span className="text-gray-700">
                    <strong>Cremation with Viewing:</strong> Includes visitation and a service prior to cremation.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-accent-100 rounded-full p-1 mr-3 mt-1">
                    <ArrowRight size={14} className="text-accent-600" />
                  </span>
                  <span className="text-gray-700">
                    <strong>Wide Selection of Urns:</strong> Choose from our extensive collection of urns to create a meaningful memorial for your loved one.
                  </span>
                </li>
              </ul>
              <Link to="/planning" className="btn btn-primary">
                Learn About Planning
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Memorial Services */}
      <section id="memorial" className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 slide-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 mb-6">
                <Users size={32} className="text-secondary-600" strokeWidth={1.5} />
              </div>
              <h2 className="section-title mb-6">Memorial Services</h2>
              <p className="text-gray-700 mb-4">
                A memorial service celebrates and remembers the life of your loved one. It can be held anytime after the burial or cremation, allowing for more flexibility in planning and timing.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="inline-block bg-secondary-100 rounded-full p-1 mr-3 mt-1">
                    <ArrowRight size={14} className="text-secondary-600" />
                  </span>
                  <span className="text-gray-700">
                    <strong>Personalized Ceremonies:</strong> Create a unique tribute that reflects your loved one's personality, interests, and achievements.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-secondary-100 rounded-full p-1 mr-3 mt-1">
                    <ArrowRight size={14} className="text-secondary-600" />
                  </span>
                  <span className="text-gray-700">
                    <strong>Flexible Locations:</strong> Hold the service at our funeral home, a place of worship, or another meaningful venue.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-secondary-100 rounded-full p-1 mr-3 mt-1">
                    <ArrowRight size={14} className="text-secondary-600" />
                  </span>
                  <span className="text-gray-700">
                    <strong>Multimedia Tributes:</strong> Share photos, videos, and music that capture special moments and memories.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-secondary-100 rounded-full p-1 mr-3 mt-1">
                    <ArrowRight size={14} className="text-secondary-600" />
                  </span>
                  <span className="text-gray-700">
                    <strong>Memory Tables:</strong> Display cherished items, photographs, and mementos that tell the story of your loved one's life.
                  </span>
                </li>
              </ul>
              <Link to="/planning" className="btn btn-primary">
                Learn About Planning
              </Link>
            </div>
            <div className="order-1 lg:order-2 slide-up" style={{ animationDelay: '200ms' }}>
              <div className="rounded-lg overflow-hidden shadow-medium">
                <img 
                  src="https://images.pexels.com/photos/4058102/pexels-photo-4058102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Memorial Service" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Additional Services</h2>
            <p className="section-subtitle">
              We offer a range of complementary services to support you during this difficult time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pre-Planning */}
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-soft slide-up">
              <Calendar size={32} className="text-primary-600 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">Pre-Planning Services</h3>
              <p className="text-gray-700 mb-4">
                Plan ahead to ensure your wishes are honored and reduce the burden on your loved ones during a difficult time.
              </p>
              <Link 
                to="/planning" 
                className="text-primary-600 font-medium inline-flex items-center group hover:text-primary-700 transition-colors"
              >
                Learn More 
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            {/* Grief Support */}
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-soft slide-up" style={{ animationDelay: '100ms' }}>
              <Heart size={32} className="text-primary-600 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">Grief Support</h3>
              <p className="text-gray-700 mb-4">
                Access resources, support groups, and professional counseling to help navigate the grief journey after a loss.
              </p>
              <Link 
                to="/resources" 
                className="text-primary-600 font-medium inline-flex items-center group hover:text-primary-700 transition-colors"
              >
                Learn More 
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            {/* Floral Arrangements */}
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-soft slide-up" style={{ animationDelay: '200ms' }}>
              <Flower size={32} className="text-primary-600 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">Floral Arrangements</h3>
              <p className="text-gray-700 mb-4">
                Beautiful, thoughtful floral tributes to honor your loved one, with options for every budget and preference.
              </p>
              <Link 
                to="/contact" 
                className="text-primary-600 font-medium inline-flex items-center group hover:text-primary-700 transition-colors"
              >
                Learn More 
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            {/* Online Obituaries */}
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-soft slide-up" style={{ animationDelay: '300ms' }}>
              <Users size={32} className="text-primary-600 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">Online Obituaries</h3>
              <p className="text-gray-700 mb-4">
                Create a lasting online memorial where family and friends can share memories and condolences.
              </p>
              <Link 
                to="/obituaries" 
                className="text-primary-600 font-medium inline-flex items-center group hover:text-primary-700 transition-colors"
              >
                Learn More 
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            {/* Memorial Keepsakes */}
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-soft slide-up" style={{ animationDelay: '400ms' }}>
              <Gift size={32} className="text-primary-600 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">Memorial Keepsakes</h3>
              <p className="text-gray-700 mb-4">
                Personalized mementos and keepsakes to preserve memories, including jewelry, framed tributes, and memorial books.
              </p>
              <Link 
                to="/contact" 
                className="text-primary-600 font-medium inline-flex items-center group hover:text-primary-700 transition-colors"
              >
                Learn More 
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            {/* 24/7 Support */}
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-soft slide-up" style={{ animationDelay: '500ms' }}>
              <Clock size={32} className="text-primary-600 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-700 mb-4">
                Our compassionate staff is available around the clock to provide assistance and answer questions when you need it most.
              </p>
              <Link 
                to="/contact" 
                className="text-primary-600 font-medium inline-flex items-center group hover:text-primary-700 transition-colors"
              >
                Contact Us 
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section bg-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-texture"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
              We're Here to Support You Through Every Step
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Our compassionate team is available 24/7 to answer your questions and provide guidance during this difficult time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/planning" className="btn btn-secondary backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20">
                Plan Ahead
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;