import React from 'react';
import { Coffee, Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold">Brew Bliss</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crafting exceptional coffee experiences since 2019. Every cup tells a story of passion, quality, and community.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About Us', id: 'about' },
                { name: 'Menu', id: 'menu' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">Dine In</li>
              <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">Takeaway</li>
              <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">Catering</li>
              <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">Private Events</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <p>123 Coffee Street<br />Downtown District<br />City 12345</p>
              <p className="hover:text-amber-400 transition-colors duration-300">
                (555) 123-4567
              </p>
              <p className="hover:text-amber-400 transition-colors duration-300">
                hello@brewbliss.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Brew Bliss. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for coffee lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;