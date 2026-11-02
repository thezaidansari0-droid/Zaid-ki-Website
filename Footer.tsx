import { motion } from 'motion/react';
import { MessageCircle, Mail, Instagram, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data';

interface FooterProps {
  onOpenContact: (packageTitle?: string) => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer id="contact" className="relative border-t border-white/[0.08] pt-24 pb-14 px-4 sm:px-6 lg:px-8">
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Large CTA Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest liquid-glass-pill bg-sky-950/40 border-sky-400/25 text-sky-200 mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>START COLLABORATING</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-tight"
          >
            Have an idea? Let's edit it.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-sky-200/80 max-w-xl mx-auto leading-relaxed"
          >
            Send over your raw footage or drop a message to claim your free trial clip. Fast responses via WhatsApp.
          </motion.p>

          {/* Action CTAs (iOS 26 Liquid Glass) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            {/* Primary WhatsApp Button */}
            <button
              onClick={() => onOpenContact()}
              className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-sky-50 transition-all duration-300 shadow-[0_0_35px_rgba(56,189,248,0.4)] active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current text-sky-600" />
              <span>Contact via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Email button */}
            <a
              href={`mailto:${PORTFOLIO_INFO.email}?subject=Project%20Inquiry%20-%20Zaid%20Visuals%20Co.`}
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-full liquid-glass-pill bg-white/[0.05] hover:bg-white/[0.12] border border-white/15 text-white font-medium text-sm transition-all duration-300 active:scale-95"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>{PORTFOLIO_INFO.email}</span>
            </a>

            {/* Instagram button */}
            <a
              href={PORTFOLIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-full liquid-glass-pill bg-white/[0.05] hover:bg-white/[0.12] border border-white/15 text-white font-medium text-sm transition-all duration-300 active:scale-95"
            >
              <Instagram className="w-4 h-4 text-sky-400" />
              <span>{PORTFOLIO_INFO.instagram}</span>
            </a>
          </motion.div>
        </div>

        {/* Brand & Footer Details */}
        <div className="pt-12 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-sky-200/60 font-mono">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white">{PORTFOLIO_INFO.brandName}</span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1 text-sky-300/80">
              <MapPin className="w-3 h-3 text-sky-400" /> Moradabad, UP
            </span>
          </div>

          <div className="text-center md:text-right text-sky-200/70">
            © 2026 Zaid Visuals Co. Moradabad, UP. | Portfolio: <span className="text-white font-semibold">{PORTFOLIO_INFO.portfolioHandle}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
