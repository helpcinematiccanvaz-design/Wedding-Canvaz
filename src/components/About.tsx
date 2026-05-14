import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-brand-ivory px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative lg:pr-12 bento-card p-10 bg-brand-blush/10"
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-6xl text-brand-maroon mb-8 leading-tight">
            Capturing the <br />
            <span className="italic">Soul and Symmetry</span> <br />
            of your love.
          </h2>
          <div className="space-y-6 text-brand-ink/70 leading-relaxed font-light text-lg">
            <p>
              Founded on the belief that weddings aren't just events, but moving tapestries of emotion and ritual, Wedding Canvaz has spent over a decade documenting the most intimate stories across the globe.
            </p>
            <p>
              Our style is defined by a cinematic blend of soft light, authentic candidate moments, and high-fashion editorial composition.
            </p>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="w-16 h-[1px] bg-brand-gold" />
            <div className="font-serif italic text-2xl text-brand-maroon">
              Wedding Canvaz
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative aspect-[3/4] md:aspect-[4/5] bento-card group"
        >
          <img
            src="/about-image.jpeg"
            alt="Bengali Groom Portrait"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
