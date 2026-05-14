import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { FEATURED_WORK } from '../constants';

export default function FeaturedWork() {
  return (
    <section className="py-24 bg-brand-wine text-brand-ivory px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 px-2">
          <div>
            <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
              Curated Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Featured <br />
              <span className="italic">Cinematic Highlights</span>
            </h2>
          </div>
          <a href="#portfolio" className="text-[11px] uppercase tracking-[0.2em] font-medium flex items-center gap-2 hover:text-brand-gold transition-colors">
            View All Work <ChevronRight size={14} />
          </a>
        </div>

        <div className="space-y-24 md:space-y-40">
          {FEATURED_WORK.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              <div className="w-full lg:w-3/5 bento-card group aspect-video">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full lg:w-2/5 space-y-6">
                <span className="text-brand-gold italic font-serif text-3xl">0{index + 1}</span>
                <h3 className="text-3xl md:text-5xl font-serif leading-tight">
                  {work.title}
                </h3>
                <p className="text-brand-ivory/60 font-light leading-relaxed">
                  {work.description}
                </p>
                <div className="pt-6">
                  <a
                    href={`/work/${work.slug}`}
                    className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] hover:text-brand-gold transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                    Explore Story
                    <div className="w-12 h-[1px] bg-brand-gold" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
