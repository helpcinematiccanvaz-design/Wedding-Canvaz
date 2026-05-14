import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-brand-wine py-4 shadow-md' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:opacity-70 transition-opacity text-brand-gold"
            >
              <Menu size={24} />
            </button>
            <div className={`hidden md:flex gap-6 uppercase text-[10px] tracking-[0.2em] font-medium ${
              isScrolled ? 'text-brand-ivory' : 'text-white'
            }`}>
              {navLinks.slice(1, 4).map((link) => (
                <a key={link.name} href={link.href} className="hover:text-brand-gold transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className={`flex flex-col items-center transition-colors ${
            isScrolled ? 'text-brand-gold' : 'text-white'
          }`}>
            <span className="text-xl md:text-2xl font-serif tracking-[0.3em] leading-tight">WEDDING CANVAZ</span>
            <span className="text-[8px] md:text-[10px] tracking-[0.2em] font-light opacity-80 uppercase leading-tight">(Powered by Pratichhabi)</span>
          </div>

          <div className="flex items-center gap-6">
            <div className={`hidden md:flex gap-4 ${isScrolled ? 'text-brand-gold' : 'text-white'}`}>
              <a href="#" className="hover:opacity-50 transition-opacity"><Instagram size={18} /></a>
              <a href="#" className="hover:opacity-50 transition-opacity"><Facebook size={18} /></a>
            </div>
            <a
              href="#contact"
              className={`hidden md:block px-6 py-2 border text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                isScrolled
                  ? 'border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-maroon'
                  : 'border-white text-white hover:bg-white hover:text-brand-maroon'
              }`}
            >
              Book Now
            </a>
            <button
              className={`md:hidden p-2 ${isScrolled ? 'text-brand-maroon' : 'text-white'}`}
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-maroon text-brand-ivory flex flex-col items-center justify-center p-8"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 left-8 p-2 hover:opacity-70 transition-opacity"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-4xl md:text-6xl font-serif hover:italic transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-16 flex gap-8">
              <Instagram size={24} className="hover:opacity-70 cursor-pointer" />
              <Facebook size={24} className="hover:opacity-70 cursor-pointer" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
