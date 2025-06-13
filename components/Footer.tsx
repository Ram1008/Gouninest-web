
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gradient mb-6">Go UniNest</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner in finding the perfect student accommodation. 
                We connect students with quality housing across the UK's top university cities.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-electric-400 transition-colors duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-electric-400 transition-colors duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-electric-400 transition-colors duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-electric-400 transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#locations" className="text-gray-400 hover:text-electric-400 transition-colors duration-300">
                    Locations
                  </a>
                </li>
                <li>
                  <a href="#properties" className="text-gray-400 hover:text-electric-400 transition-colors duration-300">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-electric-400 transition-colors duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-electric-400 transition-colors duration-300">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-electric-400 transition-colors duration-300">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-electric-400 transition-colors duration-300">
                    Property Search
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-electric-400 transition-colors duration-300">
                    Virtual Tours
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-electric-400 transition-colors duration-300">
                    Booking Management
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-electric-400 transition-colors duration-300">
                    Student Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-electric-400 transition-colors duration-300">
                    Maintenance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-electric-400 transition-colors duration-300">
                    Community Events
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-electric-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-400">
                    123 Student Street<br />
                    London, UK EC1A 1BB
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-lime-400 mr-3" />
                  <p className="text-gray-400">+44 20 7123 4567</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-coral-400 mr-3" />
                  <p className="text-gray-400">hello@studystay.com</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-6">
                <h5 className="text-white font-semibold mb-2">Office Hours</h5>
                <p className="text-gray-400 text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 StudyStay. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-electric-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-400 text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
