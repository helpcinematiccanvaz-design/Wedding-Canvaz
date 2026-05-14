import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet="/hero-mobile.jpeg" />
          <img
            src="/hero-wedding.jpeg"
            alt="Wedding Hero"
            className="w-full h-full object-cover animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
        </picture>
        <div className="absolute inset-0 bg-black/60 cinematic-overlay" />
      </div>

      <div className="relative z-10 text-left px-6 max-w-7xl mx-auto w-full flex flex-col justify-end h-full pb-24 md:pb-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-brand-gold" />
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold">
              Est. 2012
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-brand-ivory text-5xl md:text-8xl font-serif mb-8 leading-[1.1]"
          >
            Crafting Timeless <br />
            <span className="italic font-normal">Wedding Stories</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="text-brand-ivory/80 text-sm md:text-base max-w-lg mb-12 font-light tracking-widest uppercase"
          >
            Captured through a cinematic lens of emotion and light.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-start gap-6"
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-brand-gold text-brand-maroon font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-brand-ivory hover:text-brand-gold transition-all duration-300 rounded-sm"
            >
              Book Consultation
            </button>
            <div className="hidden sm:flex items-center gap-4 text-brand-ivory/60 text-[9px] uppercase tracking-widest pt-4">
              <span>Based in Kolkata</span>
              <div className="w-1 h-1 rounded-full bg-brand-gold" />
              <span>Available Worldwide</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-brand-ivory/40 uppercase text-[9px] tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative">
          <div className="absolute top-0 left-0 w-full bg-brand-gold h-1/2" />
        </div>
      </motion.div>
    </section>
  );
}
