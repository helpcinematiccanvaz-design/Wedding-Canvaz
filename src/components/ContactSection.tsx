import { motion } from 'motion/react';
import { Send, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-brand-ivory px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-6xl text-brand-maroon mb-10 leading-tight">
              Let’s Capture <br />
              <span className="italic">Your Story</span>
            </h2>
            
            <p className="text-brand-wine/70 font-light mb-12 text-lg">
              We travel globally to tell stories that matter. Share your vision with us, and let’s create something eternal.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-brand-blush rounded-sm text-brand-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-brand-wine/40 mb-1">WhatsApp / Call</h4>
                  <p className="text-brand-maroon font-medium">+1 (234) 567 890</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-3 bg-brand-blush rounded-sm text-brand-gold">
                  <Send size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-brand-wine/40 mb-1">Email</h4>
                  <p className="text-brand-maroon font-medium">hello@eterna-weddings.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-3 bg-brand-blush rounded-sm text-brand-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-brand-wine/40 mb-1">Studios</h4>
                  <p className="text-brand-maroon font-medium">New York • Mumbai • London</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
              <a href="#" className="p-3 border border-brand-maroon/20 rounded-full hover:bg-brand-maroon hover:text-brand-ivory transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 border border-brand-maroon/20 rounded-full hover:bg-brand-maroon hover:text-brand-ivory transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 border border-brand-maroon/20 rounded-full hover:bg-brand-maroon hover:text-brand-ivory transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bento-card p-10 md:p-16"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-wine/50">Your Name</label>
                  <input
                    type="text"
                    className="w-full border-b border-brand-maroon/10 py-3 focus:outline-none focus:border-brand-gold transition-colors bg-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-wine/50">Email Address</label>
                  <input
                    type="email"
                    className="w-full border-b border-brand-maroon/10 py-3 focus:outline-none focus:border-brand-gold transition-colors bg-transparent"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-wine/50">Phone</label>
                  <input
                    type="tel"
                    className="w-full border-b border-brand-maroon/10 py-3 focus:outline-none focus:border-brand-gold transition-colors bg-transparent"
                    placeholder="+1 ..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-wine/50">Event Type</label>
                  <select className="w-full border-b border-brand-maroon/10 py-3 focus:outline-none focus:border-brand-gold transition-colors bg-transparent appearance-none cursor-pointer">
                    <option>Select an event</option>
                    <option>Wedding Ceremony</option>
                    <option>Pre-Wedding Shoot</option>
                    <option>Maternity / Baby</option>
                    <option>Commercial</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-wine/50">Your Message</label>
                <textarea
                  rows={4}
                  className="w-full border-b border-brand-maroon/10 py-3 focus:outline-none focus:border-brand-gold transition-colors bg-transparent resize-none"
                  placeholder="Tell us about your story..."
                ></textarea>
              </div>

              <button className="w-full py-5 bg-brand-maroon text-brand-ivory uppercase tracking-[0.3em] text-[11px] font-medium hover:bg-brand-gold transition-all duration-500 shadow-xl">
                Send Inquiry
              </button>

              <div className="text-center pt-4">
                <a href="#" className="inline-flex items-center gap-2 text-brand-maroon hover:text-brand-gold transition-colors text-[11px] uppercase tracking-widest font-bold">
                  <Phone size={14} className="fill-brand-maroon hover:fill-brand-gold" />
                  Quick Chat on WhatsApp
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
