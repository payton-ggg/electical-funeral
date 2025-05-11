import React, { useState } from "react";
import { Phone, MapPin, Mail, Clock, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-primary-900">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-8">
              We're here to assist you 24 hours a day, 7 days a week. If you
              have any questions or would like to schedule a consultation,
              please reach out to us.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Phone size={24} className="text-primary-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Call Us</h3>
                  <a
                    href="tel:+18005551234"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    (800) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin size={24} className="text-primary-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-700">
                    1234 Memorial Drive
                    <br />
                    Riverside, CA 92506
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail size={24} className="text-primary-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Email Us</h3>
                  <a
                    href="mailto:info@riolitfuneral.com"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    info@riolitfuneral.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Clock size={24} className="text-primary-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Hours</h3>
                  <p className="text-gray-700">
                    Available 24 hours
                    <br />7 days a week
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="slide-up" style={{ animationDelay: "200ms" }}>
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                  <Send size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Message Sent
                </h3>
                <p className="text-green-700">
                  Thank you for contacting us. We will respond to your inquiry
                  as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject*
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Funeral Planning">Funeral Planning</option>
                      <option value="Cremation Services">
                        Cremation Services
                      </option>
                      <option value="Pre-Planning">Pre-Planning</option>
                      <option value="Grief Support">Grief Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
