import { motion } from 'motion/react';
import { Tag, Check, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { SINGLE_PRICING, MONTHLY_PACKAGES } from '../data';

interface PricingProps {
  onOpenContact: (packageTitle?: string) => void;
}

export function Pricing({ onOpenContact }: PricingProps) {
  return (
    <section id="pricing" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-sky-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest liquid-glass-pill bg-sky-950/40 border-sky-400/25 text-sky-200 mb-3">
              <Tag className="w-3.5 h-3.5 text-sky-400" />
              <span>[03 // RATES]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Simple Rates. No Hidden Charges.
            </h2>
            <p className="mt-3 text-base text-sky-200/80">
              Transparent, student-friendly pricing with agency-grade output. Pay per project or save with monthly retaining.
            </p>
          </motion.div>
        </div>

        {/* 2 Tables Side-by-Side (iOS 26 Liquid Glass) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Table 1: PER VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between liquid-glass-elevated bg-[#0a1224]/60 border border-white/[0.14] rounded-[28px] p-6 sm:p-8 shadow-xl"
          >
            <div>
              {/* Table 1 Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-sky-300">
                    Pay As You Go
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                    Per Video Rates
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full liquid-glass-pill bg-white/[0.05] border border-white/10 text-xs font-mono text-sky-200">
                  Individual
                </div>
              </div>

              {/* Items List */}
              <div className="divide-y divide-white/[0.06]">
                {SINGLE_PRICING.map((item) => (
                  <div key={item.name} className="py-6 first:pt-6 last:pb-4 group">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg font-bold text-white group-hover:text-sky-200 transition">
                          {item.name}
                        </span>
                        {item.recommended && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase liquid-glass-pill bg-sky-500/20 text-sky-200 border-sky-400/30">
                            Recommended
                          </span>
                        )}
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-extrabold text-white">
                          {item.price}
                        </span>
                        <span className="text-xs font-mono text-sky-300/60">/video</span>
                      </div>
                    </div>

                    <div className="text-xs font-mono text-neutral-300 mb-3">
                      {item.details}
                    </div>

                    {/* Features tags */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                      {item.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenContact(`Per Video: ${item.name} (${item.price})`)}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-sky-200 hover:text-white transition group-hover:translate-x-1 duration-200"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current text-sky-400" />
                      <span>Order {item.name} on WhatsApp</span>
                      <ArrowRight className="w-3 h-3 ml-0.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08] text-xs text-sky-300/70 font-mono">
              Fast turnaround: completed within 24-48 hours.
            </div>
          </motion.div>

          {/* Table 2: MONTHLY PACKAGES */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between liquid-glass-elevated bg-[#0a1224]/60 border border-white/[0.14] rounded-[28px] p-6 sm:p-8 shadow-xl relative"
          >
            <div>
              {/* Table 2 Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-sky-300">
                    Highest Value
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                    Monthly Packages
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full liquid-glass-pill bg-white/[0.05] border border-white/10 text-xs font-mono text-sky-200">
                  Retainer
                </div>
              </div>

              {/* Monthly Packages List */}
              <div className="space-y-4 pt-6">
                {MONTHLY_PACKAGES.map((pkg) => (
                  <div
                    key={pkg.name}
                    className={`p-5 rounded-[22px] transition-all duration-300 ${
                      pkg.isPopular
                        ? 'liquid-glass-elevated bg-sky-950/40 border-2 border-sky-400 shadow-[0_0_35px_rgba(56,189,248,0.25)]'
                        : 'liquid-glass bg-white/[0.04] border border-white/[0.1] hover:border-white/20'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg font-bold text-white">
                          {pkg.name}
                        </span>
                        {pkg.isPopular && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-white text-black font-bold shadow-md">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-white">
                          {pkg.price}
                        </span>
                        <span className="text-xs font-mono text-sky-300/60">/mo</span>
                      </div>
                    </div>

                    <div className="text-xs font-mono text-neutral-300 mb-3">
                      {pkg.reels} • <span className="text-sky-300/90">{pkg.savings}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-neutral-300 mb-4">
                      {pkg.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenContact(`Monthly: ${pkg.name} (${pkg.price})`)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition duration-200 cursor-pointer ${
                        pkg.isPopular
                          ? 'bg-white text-black hover:bg-sky-50 shadow-md font-bold'
                          : 'liquid-glass bg-white/[0.06] hover:bg-white hover:text-black border border-white/15 text-white'
                      }`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current text-sky-500" />
                      <span>Book {pkg.name} on WhatsApp</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08] text-xs text-sky-300/70 font-mono mt-6">
              Monthly packages include scheduled weekly batch deliveries.
            </div>
          </motion.div>
        </div>

        {/* Required TERMS block (Liquid Glass) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 liquid-glass-elevated bg-[#0a1224]/70 border border-white/[0.14] rounded-[24px] p-5 sm:p-6"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-200 liquid-glass-pill bg-sky-950/60 border border-sky-400/30 px-3.5 py-1.5 rounded-full shrink-0 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>TERMS &amp; WORKFLOW</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 font-mono leading-relaxed">
              Delivery 24-48 hrs per video | 2 free revisions | 50% advance, rest on delivery (monthly: after every 4 reels) | Raw via Drive 1080p | Free trial edit available on one short clip.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
