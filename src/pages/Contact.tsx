import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log(formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-texture"></div>
        <div className="container relative">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4 fade-in">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-3xl fade-in" style={{ animationDelay: '200ms' }}>
            We're here to assist you 24 hours a day, 7 days a week.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center slide-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                <Phone size={28} className="text-primary-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-700 mb-2">Available 24/7 for assistance</p>
              <a href="tel:+18005551234" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                (800) 555-1234
              </a>
            </div>
            
            {/* Address */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center slide-up" style={{ animationDelay: '100ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                <MapPin size={28} className="text-primary-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-700 mb-2">
                1234 Memorial Drive<br />
                Riverside, CA 92506
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Get Directions
              </a>
            </div>
            
            {/* Email */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center slide-up" style={{ animationDelay: '200ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                <Mail size={28} className="text-primary-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-700 mb-2">Send us a message anytime</p>
              <a 
                href="mailto:info@riolitfuneral.com" 
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                info@riolitfuneral.com
              </a>
            </div>
            
            {/* Hours */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center slide-up" style={{ animationDelay: '300ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                <Clock size={28} className="text-primary-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-gray-700">
                Available 24 hours<br />
                7 days a week
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Map */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="slide-up">
              <h2 className="section-title mb-6">Send Us a Message</h2>
              <p className="text-gray-700 mb-8">
                If you have any questions or would like to schedule a consultation, please fill out the form below. Our team will respond promptly to assist you.
              </p>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                    <Send size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent</h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We will respond to your inquiry as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject*
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Funeral Planning">Funeral Planning</option>
                        <option value="Cremation Services">Cremation Services</option>
                        <option value="Pre-Planning">Pre-Planning</option>
                        <option value="Grief Support">Grief Support</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-full md:w-auto"
                  >
                    Send Message
                    <Send size={18} className="ml-2" />
                  </button>
                </form>
              )}
            </div>
            
            {/* Map */}
            <div className="slide-up" style={{ animationDelay: '200ms' }}>
              <h2 className="section-title mb-6">Our Location</h2>
              <p className="text-gray-700 mb-8">
                We are conveniently located in Riverside, with ample parking and easily accessible facilities.
              </p>
              <div className="rounded-lg overflow-hidden shadow-medium h-[400px]">
                <iframe
                  title="Riolit Funeral Home Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.43554967946!2d-118.69192119136734!3d34.020161304907774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1630393946835!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;