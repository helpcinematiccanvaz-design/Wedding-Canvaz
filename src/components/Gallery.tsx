import { motion, AnimatePresence } from 'motion/react';
import { GALLERY } from '../constants';

const categories = ['All', 'Weddings', 'Pre-Wedding', 'Baby', 'Maternity'];

export default function Gallery({ 
  activeCategory, 
  onCategoryChange 
}: { 
  activeCategory: string; 
  onCategoryChange: (category: string) => void 
}) {
  const filteredItems = activeCategory === 'All' 
    ? GALLERY 
    : GALLERY.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6 bg-brand-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 px-2">
          <div>
            <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl text-brand-maroon font-serif leading-tight">
              A Glimpse into <br />
              <span className="italic">Eternal Moments</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.2em] font-medium text-brand-wine/50">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`transition-all relative py-2 ${
                  activeCategory === cat ? 'text-brand-maroon scale-110' : 'hover:text-brand-maroon'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="categoryLine"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-[4/5] bento-card"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-brand-gold text-[10px] uppercase tracking-widest mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-brand-ivory text-2xl font-serif">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
