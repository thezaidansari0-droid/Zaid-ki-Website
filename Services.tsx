import { motion } from 'motion/react';
import { Mic, Zap, Video, CheckCircle2, MessageCircle, Layers } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data';

interface ServicesProps {
  onOpenContact: (packageTitle?: string) => void;
}

export function Services({ onOpenContact }: ServicesProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Mic':
        return <Mic className="w-6 h-6 text-sky-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-sky-400" />;
      case 'Video':
        return <Video className="w-6 h-6 text-sky-400" />;
      default:
        return <Layers className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest liquid-glass-pill bg-sky-950/40 border-sky-400/25 text-sky-200 mb-3">
              <Layers className="w-3.5 h-3.5 text-sky-400" />
              <span>[02 // SERVICES]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              What I Edit
            </h2>
            <p className="mt-3 text-base sm:text-lg text-sky-200/80 leading-relaxed">
              Every cut is engineered for maximum retention, crystal clarity, and seamless viewer flow.
            </p>
          </motion.div>
        </div>

        {/* 3 Columns Grid - iOS 26 Liquid Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative flex flex-col justify-between liquid-glass-elevated bg-[#0a1224]/60 border border-white/[0.14] hover:border-sky-400/40 rounded-[26px] p-8 transition-all duration-300 shadow-xl hover:shadow-[0_20px_50px_rgba(2,132,199,0.15)] group"
            >
              <div>
                {/* Header with Icon & Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl liquid-glass bg-white/[0.05] border border-white/[0.15] flex items-center justify-center group-hover:border-sky-400/40 group-hover:scale-105 transition-all shadow-md">
                    {getIcon(service.icon)}
                  </div>
                  <span className="font-mono text-xs text-sky-300/60">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Core Subtitle */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-sky-200 transition">
                  {service.title}
                </h3>
                <p className="text-xs font-mono uppercase text-sky-300/70 mb-3">
                  {service.subtitle}
                </p>

                {/* Main brief description from prompt */}
                <p className="text-sm font-medium text-neutral-200 mb-6 pb-5 border-b border-white/[0.08]">
                  {service.description}
                </p>

                {/* Features Breakdown */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action - Liquid Glass Button */}
              <button
                onClick={() => onOpenContact(`Inquiry: ${service.title}`)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl liquid-glass bg-white/[0.06] hover:bg-white hover:text-black hover:border-white border border-white/[0.15] text-xs font-semibold text-white transition-all duration-300 shadow-md group/btn"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current text-sky-400 group-hover/btn:text-sky-600 transition-colors" />
                <span>Discuss on WhatsApp</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
