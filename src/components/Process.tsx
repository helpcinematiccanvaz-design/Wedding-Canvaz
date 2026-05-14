import { motion } from 'motion/react';
import { PROCESS } from '../constants';

export default function Process() {
  return (
    <section className="py-24 bg-brand-blush/20 px-6 border-y border-brand-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-5xl text-brand-maroon font-serif leading-tight">
            The Journey to <br />
            <span className="italic">Timeless Memories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-brand-gold/20 -z-0" />
          
          {PROCESS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative z-10 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-brand-maroon text-brand-ivory flex items-center justify-center mx-auto text-xl font-serif shadow-lg border-4 border-brand-ivory ring-1 ring-brand-gold/10">
                0{step.id}
              </div>
              <h3 className="text-xl font-serif text-brand-maroon">
                {step.title}
              </h3>
              <p className="text-brand-wine/60 text-sm leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
