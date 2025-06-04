import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold mb-8 lg:mb-12">Get in Touch</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl">
        {/* Contact Information */}
        <div className="order-2 lg:order-1">
          <h3 className="text-xl sm:text-2xl font-mono font-bold mb-4 sm:mb-6">Contact Information</h3>
          <div className="space-y-4 sm:space-y-6">
            <motion.div 
              className="flex items-start sm:items-center space-x-3 sm:space-x-4"
              whileHover={{ x: 10 }}
            >
              <div className="bg-light-blue bg-opacity-20 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-light-blue" />
              </div>
              <div className="min-w-0">
                <p className="text-gray-400 text-sm sm:text-base">Email</p>
                <a href="mailto:ms.rishav289@gmail.com" className="text-light-blue hover:underline text-sm sm:text-base break-all">
                  ms.rishav289@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start sm:items-center space-x-3 sm:space-x-4"
              whileHover={{ x: 10 }}
            >
              <div className="bg-light-blue bg-opacity-20 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-light-blue" />
              </div>
              <div>
                <p className="text-gray-400 text-sm sm:text-base">Phone</p>
                <a href="tel:+919835597637" className="text-light-blue hover:underline text-sm sm:text-base">
                  +91 9835597637
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start sm:items-center space-x-3 sm:space-x-4"
              whileHover={{ x: 10 }}
            >
              <div className="bg-light-blue bg-opacity-20 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-light-blue" />
              </div>
              <div>
                <p className="text-gray-400 text-sm sm:text-base">Location</p>
                <p className="text-white text-sm sm:text-base">Bengaluru, Karnataka</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1a1b2e] p-6 sm:p-8 rounded-lg order-1 lg:order-2">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-navy border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-white focus:outline-none focus:border-light-blue text-sm sm:text-base"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-navy border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-white focus:outline-none focus:border-light-blue text-sm sm:text-base"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-navy border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-white focus:outline-none focus:border-light-blue text-sm sm:text-base resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full sm:w-auto bg-light-blue text-navy px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-opacity-90 flex items-center justify-center text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
              <Send className="w-4 h-4 ml-2" />
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};