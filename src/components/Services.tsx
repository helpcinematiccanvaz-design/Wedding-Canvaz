import { motion } from 'motion/react';
import { Camera, Heart, Image as ImageIcon, Video, Baby } from 'lucide-react';
import { SERVICES } from '../constants';

const icons: Record<string, any> = {
  Camera: Camera,
  Heart: Heart,
  Image: ImageIcon,
  Video: Video,
  Baby: Baby,
};

export default function Services({ onServiceClick }: { onServiceClick: (category: string) => void }) {
  return (
    <section id="services" className="py-16 md:py-24 bg-brand-blush/30 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
            Offerings
          </span>
          <h2 className="text-3xl md:text-5xl text-brand-maroon font-serif leading-tight">
            Tailored Experiences for <br />
            <span className="italic">Every Milestone</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
          {SERVICES.map((service, index) => {
            const Icon = icons[service.iconName];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bento-card hover:bg-brand-wine transition-all duration-500 flex flex-col cursor-pointer"
                onClick={() => onServiceClick(service.targetCategory)}
              >
                <div className="relative h-40 md:h-64 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-brand-maroon/20 transition-all" />
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 p-2 md:p-3 bg-brand-ivory/90 backdrop-blur-sm rounded-full text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-ivory transition-all duration-500 shadow-sm">
                    <Icon size={14} />
                  </div>
                </div>
                <div className="p-4 md:p-8 flex flex-col flex-1">
                  <h3 className="text-base md:text-2xl font-serif mb-2 md:mb-4 text-brand-maroon group-hover:text-brand-gold transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-brand-wine/60 group-hover:text-brand-ivory/70 transition-colors text-[10px] md:text-sm leading-relaxed font-light mb-4 md:mb-6 flex-1 line-clamp-2 md:line-clamp-none">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-2 md:pt-4 overflow-hidden min-h-[1px] w-0 group-hover:w-full bg-brand-gold transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
