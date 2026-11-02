import { motion } from 'motion/react';
import { User, Clock, Scissors, ShieldAlert, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data';

interface AboutProps {
  onOpenContact: (packageTitle?: string) => void;
}

export function About({ onOpenContact }: AboutProps) {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest liquid-glass-pill bg-sky-950/40 border-sky-400/25 text-sky-200 mb-3">
              <User className="w-3.5 h-3.5 text-sky-400" />
              <span>[04 // FOUNDER]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              About Me
            </h2>
          </motion.div>
        </div>

        {/* Content Card (iOS 26 Liquid Glass) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Statement Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 liquid-glass-elevated bg-[#0a1224]/60 border border-white/[0.14] rounded-[28px] p-8 sm:p-10 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-sky-400/30 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                    <img
                      src={PORTFOLIO_INFO.avatarUrl}
                      alt={PORTFOLIO_INFO.founder}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {PORTFOLIO_INFO.founder}
                    </h3>
                    <p className="text-xs font-mono uppercase text-sky-300 mt-1">
                      Solo Video Editor • {PORTFOLIO_INFO.location}
                    </p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl liquid-glass bg-white/[0.05] border border-white/[0.15] flex items-center justify-center font-mono font-bold text-sky-300 text-sm">
                  ZR
                </div>
              </div>

              {/* Exact required text from prompt */}
              <blockquote className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal mb-8">
                "3-4 months editing experience, focused and dedicated. Software: CapCut. I work 5-6 hours daily after school. I offer one free trial edit to show quality first. No outsourcing, I edit myself."
              </blockquote>

              {/* Verified Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/[0.08]">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl liquid-glass bg-sky-950/40 text-sky-400 border border-sky-400/25 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">5–6 Hours Daily</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">High discipline night workflow</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl liquid-glass bg-sky-950/40 text-sky-400 border border-sky-400/25 shrink-0">
                    <Scissors className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">CapCut Native</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Fast, trendy &amp; precise timing</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl liquid-glass bg-sky-950/40 text-sky-400 border border-sky-400/25 shrink-0">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">No Outsourcing</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">I hand-cut every single frame</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl liquid-glass bg-sky-950/40 text-sky-400 border border-sky-400/25 shrink-0">
                    <Sparkles className="w-4 h-4 text-sky-300" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Free Trial Clip</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Test quality before paying</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs font-mono text-sky-200/70">
                Ready to review raw files via Google Drive
              </span>
              <button
                onClick={() => onOpenContact('Free Trial Edit Request')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-sky-300 transition"
              >
                <span>Request Free Trial Edit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Workflow Guide (iOS 26 Liquid Glass) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 liquid-glass-elevated bg-[#0a1224]/60 border border-white/[0.14] rounded-[28px] p-8 shadow-xl"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
              <h3 className="text-lg font-bold text-white tracking-tight">
                How We Collaborate
              </h3>
              <span className="text-xs font-mono text-sky-300/80">4 STEPS</span>
            </div>

            <ol className="relative border-l border-white/[0.12] ml-3 space-y-6">
              <li className="ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full liquid-glass-pill bg-sky-950/80 text-xs font-mono text-sky-300 border border-sky-400/40 shadow-sm">
                  1
                </span>
                <h4 className="text-sm font-bold text-white">Share Raw Footage</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Upload raw files or phone footage to Google Drive in 1080p.
                </p>
              </li>

              <li className="ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full liquid-glass-pill bg-sky-950/80 text-xs font-mono text-sky-300 border border-sky-400/40 shadow-sm">
                  2
                </span>
                <h4 className="text-sm font-bold text-white">Precision Editing in CapCut</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Dead air cut, hooks engineered, SFX, zooms, and retention-focused captions added.
                </p>
              </li>

              <li className="ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full liquid-glass-pill bg-sky-950/80 text-xs font-mono text-sky-300 border border-sky-400/40 shadow-sm">
                  3
                </span>
                <h4 className="text-sm font-bold text-white">Review &amp; Revisions</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Private preview link shared. Up to 2 free revisions per video.
                </p>
              </li>

              <li className="ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full liquid-glass-pill bg-sky-950/80 text-xs font-mono text-sky-300 border border-sky-400/40 shadow-sm">
                  4
                </span>
                <h4 className="text-sm font-bold text-white">Master Delivery (24-48h)</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Full resolution clean render delivered and ready to publish.
                </p>
              </li>
            </ol>

            <div className="mt-8 pt-6 border-t border-white/[0.08] liquid-glass bg-white/[0.03] -mx-4 -mb-4 p-4 rounded-b-[24px]">
              <div className="flex items-center gap-2 text-xs text-sky-200 font-mono">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Zero bots, zero templates, pure human craftsmanship.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
