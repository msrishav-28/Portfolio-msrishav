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
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-mono font-bold mb-12">Get in Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-mono font-bold mb-6">Contact Information</h3>
          <div className="space-y-6">
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ x: 10 }}
            >
              <div className="bg-light-blue bg-opacity-20 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-light-blue" />
              </div>
              <div>
                <p className="text-gray-400">Email</p>
                <a href="mailto:ms.rishav289@gmail.com" className="text-light-blue hover:underline">
                  ms.rishav289@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ x: 10 }}
            >
              <div className="bg-light-blue bg-opacity-20 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-light-blue" />
              </div>
              <div>
                <p className="text-gray-400">Phone</p>
                <a href="tel:+919835597637" className="text-light-blue hover:underline">
                  +91 9835597637
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ x: 10 }}
            >
              <div className="bg-light-blue bg-opacity-20 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-light-blue" />
              </div>
              <div>
                <p className="text-gray-400">Location</p>
                <p className="text-white">Bengaluru, Karnataka</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1a1b2e] p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-navy border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-light-blue"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-navy border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-light-blue"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-navy border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-light-blue"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="bg-light-blue text-navy px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 flex items-center"
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