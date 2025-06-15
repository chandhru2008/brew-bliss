import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'menu', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with animation */}
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ 
                rotate: isScrolled ? 0 : 360,
                scale: isScrolled ? 1 : 1.2
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Coffee className={`h-8 w-8 transition-colors duration-300 ${
                isScrolled ? 'text-amber-600' : 'text-white'
              } group-hover:text-amber-500`} />
            </motion.div>
            <motion.span 
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } group-hover:text-amber-500`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              Brew Bliss
            </motion.span>
          </motion.div>

          {/* Desktop Navigation with active indicator */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <motion.div 
                key={item.id}
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 font-medium transition-colors duration-300 relative ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  } ${
                    activeSection === item.id 
                      ? isScrolled 
                        ? 'text-amber-600' 
                        : 'text-amber-300'
                      : 'hover:text-amber-500'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div 
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                        isScrolled ? 'bg-amber-600' : 'bg-amber-300'
                      }`}
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button with animation */}
          <motion.div 
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu with animations */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 transition-colors duration-200 flex items-center ${
                    activeSection === item.id
                      ? 'bg-amber-50 text-amber-600'
                      : 'text-gray-700 hover:text-amber-500 hover:bg-amber-50'
                  }`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {activeSection === item.id && (
                    <motion.div 
                      className="w-1 h-6 bg-amber-500 rounded-full mr-3"
                      layoutId="mobileActiveIndicator"
                    />
                  )}
                  <span className={activeSection === item.id ? 'font-semibold' : ''}>
                    {item.name}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;