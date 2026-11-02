import { motion } from 'motion/react';
import { Play, MessageCircle, Instagram, MapPin, Clock, Sparkles, ShieldCheck, Video, Flame } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data';

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative min-h-[96vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambient Gradient Blobs (Tinted with Zaid's DP Sky-Blue Theme) */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-sky-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-600/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-400/10 rounded-full blur-[160px] pointer-events-none" />
      
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* iOS Liquid Glass Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider liquid-glass-pill bg-sky-950/40 border-sky-400/25 text-sky-200 mb-6 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
              </span>
              <span className="text-white font-medium">CAPCUT SPECIALIST</span>
              <span className="text-sky-400/40">/</span>
              <span className="text-sky-200/80">MORADABAD, UP</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[1.08] max-w-2xl"
            >
              Cuts That Keep People Watching.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-xl font-normal leading-relaxed text-balance"
            >
              I'm <strong className="text-white font-semibold">Zaid from Moradabad</strong> — I edit Podcasts, Talking-Head, Reels &amp; YouTube videos that retain audience. CapCut Specialist. 5-6 hours daily dedication. Student by day, editor by night.
            </motion.p>

            {/* Two Action Buttons (Liquid Glass Style) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              {/* Watch My Edits -> scroll to #work */}
              <a
                href="#work"
                className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full liquid-glass hover:bg-white/10 hover:border-white/30 text-white font-medium text-sm transition-all duration-300 active:scale-95 shadow-md"
              >
                <Play className="w-4 h-4 fill-sky-400 text-sky-400 group-hover:scale-110 transition-transform" />
                <span>Watch My Edits</span>
              </a>

              {/* Chat on WhatsApp */}
              <button
                onClick={onOpenContact}
                className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-sky-50 transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(56,189,248,0.35)] border border-white/60"
              >
                <MessageCircle className="w-4 h-4 fill-current text-sky-600" />
                <span>Chat on WhatsApp</span>
              </button>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 pt-6 border-t border-white/[0.08] w-full max-w-xl"
            >
              <p className="text-xs sm:text-sm text-sky-200/70 font-mono tracking-tight flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2">
                <span className="flex items-center gap-1.5 text-neutral-200">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  Based in Moradabad, UP
                </span>
                <span className="text-neutral-700 hidden sm:inline">•</span>
                <span className="text-neutral-200">Available Worldwide</span>
                <span className="text-neutral-700 hidden sm:inline">•</span>
                <a
                  href={`mailto:${PORTFOLIO_INFO.email}`}
                  className="text-neutral-200 hover:text-white transition underline underline-offset-4 decoration-sky-500/50"
                >
                  {PORTFOLIO_INFO.email}
                </a>
                <span className="text-neutral-700 hidden sm:inline">•</span>
                <a
                  href={PORTFOLIO_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-white transition flex items-center gap-1"
                >
                  <Instagram className="w-3.5 h-3.5 text-sky-400" />
                  IG: {PORTFOLIO_INFO.instagram}
                </a>
              </p>
            </motion.div>
          </div>

          {/* Right Column: Zaid's Profile Photo (DP) in iOS 26 Liquid Glass Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative group w-full max-w-[380px] sm:max-w-[420px]"
            >
              {/* Outer Glowing Soft Ambient Aura matching DP's Sky Blue */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/25 via-blue-500/15 to-sky-300/20 rounded-[36px] blur-2xl group-hover:blur-3xl transition-all duration-500 pointer-events-none opacity-85" />

              {/* Main Liquid Glass Container */}
              <div className="relative liquid-glass-elevated bg-[#0a1122]/60 border border-white/[0.18] rounded-[32px] p-4 sm:p-5 dp-glow overflow-hidden">
                {/* Specular Glare Reflection on Glass */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/20 rounded-full blur-2xl pointer-events-none" />

                {/* Profile Photo Display Frame */}
                <div className="relative w-full aspect-square rounded-[24px] overflow-hidden border border-white/20 shadow-inner bg-black/40">
                  <img
                    src={PORTFOLIO_INFO.avatarUrl}
                    alt="Zaid Rajput - Zaid Visuals Co."
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Top-Right Badge: Active CapCut Studio */}
                  <div className="absolute top-3 right-3 z-10">
                    <div className="liquid-glass-pill bg-[#060b14]/75 px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20 text-[11px] font-mono text-white shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
                      <span>Ready to Edit</span>
                    </div>
                  </div>

                  {/* Bottom Overlay with Founder Info */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#060b14]/95 via-[#060b14]/70 to-transparent flex items-end justify-between backdrop-blur-[2px]">
                    <div>
                      <div className="text-white font-extrabold text-base tracking-tight flex items-center gap-1.5">
                        <span>Zaid Rajput</span>
                        <Flame className="w-4 h-4 text-sky-400 fill-sky-400" />
                      </div>
                      <div className="text-xs text-sky-200/80 font-mono">
                        Founder • Zaid Visuals Co.
                      </div>
                    </div>

                    <button
                      onClick={onOpenContact}
                      className="px-3 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-sky-50 transition shadow-md flex items-center gap-1"
                    >
                      <span>Inquire</span>
                    </button>
                  </div>
                </div>

                {/* Micro Badges Strip underneath DP */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                  <div className="liquid-glass rounded-xl p-2 border border-white/[0.08] bg-white/[0.03]">
                    <div className="text-xs font-mono text-sky-300 font-bold">5–6 Hours</div>
                    <div className="text-[10px] text-neutral-400">Daily Dedication</div>
                  </div>
                  <div className="liquid-glass rounded-xl p-2 border border-white/[0.08] bg-white/[0.03]">
                    <div className="text-xs font-mono text-sky-300 font-bold">1 Free Edit</div>
                    <div className="text-[10px] text-neutral-400">Trial Short Clip</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* 4 Value Metric Cards (Liquid Glass iOS Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="liquid-glass rounded-[22px] p-4 sm:p-5 border border-white/[0.1] hover:border-sky-400/30 transition-colors">
            <div className="text-xs text-sky-300/80 font-mono flex items-center gap-1.5 mb-1.5">
              <Clock className="w-3.5 h-3.5 text-sky-400" /> TURNAROUND
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">24–48 Hours</div>
            <div className="text-xs text-neutral-400 mt-1">Fast delivery guarantee</div>
          </div>

          <div className="liquid-glass rounded-[22px] p-4 sm:p-5 border border-white/[0.1] hover:border-sky-400/30 transition-colors">
            <div className="text-xs text-sky-300/80 font-mono flex items-center gap-1.5 mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" /> TRIAL OFFER
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">1 Free Edit</div>
            <div className="text-xs text-neutral-400 mt-1">Test quality on short clip</div>
          </div>

          <div className="liquid-glass rounded-[22px] p-4 sm:p-5 border border-white/[0.1] hover:border-sky-400/30 transition-colors">
            <div className="text-xs text-sky-300/80 font-mono flex items-center gap-1.5 mb-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" /> CRAFTSMANSHIP
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">100% Solo</div>
            <div className="text-xs text-neutral-400 mt-1">No outsourcing to others</div>
          </div>

          <div className="liquid-glass rounded-[22px] p-4 sm:p-5 border border-white/[0.1] hover:border-sky-400/30 transition-colors">
            <div className="text-xs text-sky-300/80 font-mono flex items-center gap-1.5 mb-1.5">
              <Video className="w-3.5 h-3.5 text-sky-400" /> SOFTWARE
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">CapCut Pro</div>
            <div className="text-xs text-neutral-400 mt-1">High retention cuts &amp; SFX</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
