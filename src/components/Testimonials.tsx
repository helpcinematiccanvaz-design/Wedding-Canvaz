import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-ivory px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
            Love Notes
          </span>
          <h2 className="text-4xl md:text-5xl text-brand-maroon font-serif leading-tight">
            Kind Words from <br />
            <span className="italic">Our Couples</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-10 bento-card flex flex-col items-center text-center group hover:shadow-[0_20px_40px_rgba(61,12,17,0.08)]"
            >
              <div className="mb-6 text-brand-gold/30 group-hover:text-brand-gold transition-colors duration-500">
                <Quote size={40} fill="currentColor" />
              </div>
              
              <p className="text-brand-wine/70 italic font-serif text-lg leading-relaxed mb-8">
                "{testimonial.review}"
              </p>

              <div className="mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-4 mx-auto border border-brand-gold/20 p-1">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-brand-maroon font-medium uppercase text-[11px] tracking-widest">
                  {testimonial.name} & {testimonial.partner}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
