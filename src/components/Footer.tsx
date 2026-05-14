import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-wine text-brand-ivory/60 py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center mb-12">
          <div className="text-brand-ivory text-3xl md:text-4xl font-serif tracking-[0.2em] leading-tight">
            WEDDING CANVAZ
          </div>
          <div className="text-brand-gold text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-80 mt-2">
            (Powered by Pratichhabi)
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 mb-20 text-center md:text-left">
          <div className="space-y-4">
            <h5 className="text-brand-gold uppercase text-[10px] tracking-widest font-bold">Navigation</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-ivory transition-colors">Home</a></li>
              <li><a href="#portfolio" className="hover:text-brand-ivory transition-colors">Portfolio</a></li>
              <li><a href="#services" className="hover:text-brand-ivory transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-brand-ivory transition-colors">Our Story</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-brand-gold uppercase text-[10px] tracking-widest font-bold">Galleries</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-ivory transition-colors">Real Weddings</a></li>
              <li><a href="#" className="hover:text-brand-ivory transition-colors">Pre-Wedding</a></li>
              <li><a href="#" className="hover:text-brand-ivory transition-colors">Baby & Maternity</a></li>
              <li><a href="#" className="hover:text-brand-ivory transition-colors">Films</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-brand-gold uppercase text-[10px] tracking-widest font-bold">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-ivory transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-ivory transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-ivory transition-colors">Cookies</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-brand-gold uppercase text-[10px] tracking-widest font-bold">Social</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-ivory transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-ivory transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-brand-ivory transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-brand-ivory transition-colors">Youtube</a></li>
            </ul>
          </div>
        </div>

        <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-[0.2em]">
            © {currentYear} Wedding Canvaz. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em]">
            Made with <Heart size={12} className="text-brand-gold fill-brand-gold" /> for Eternal Lovers
          </div>
        </div>
      </div>
    </footer>
  );
}
