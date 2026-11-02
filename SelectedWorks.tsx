import { useState } from 'react';
import { motion } from 'motion/react';
import { Maximize2, ExternalLink, Film, CheckCircle2, Instagram, ArrowUpRight } from 'lucide-react';
import { VIDEO_WORKS, VideoWork } from '../data';

export function SelectedWorks() {
  const handleOpenInstagram = () => {
    const appUri = 'instagram://user?username=zaidvisuals.co';
    const webUrl = 'https://www.instagram.com/zaidvisuals.co/';

    const start = Date.now();
    // Try opening deep-link for Instagram app
    window.location.href = appUri;

    // Fallback to web link in new tab after 600ms if app doesn't take focus
    setTimeout(() => {
      // If user is still on this browser tab, open web fallback
      if (Date.now() - start < 1800) {
        window.open(webUrl, '_blank', 'noopener,noreferrer');
      }
    }, 600);
  };

  return (
    <section id="work" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest liquid-glass-pill bg-sky-950/40 border-sky-400/25 text-sky-200 mb-3">
              <Film className="w-3.5 h-3.5 text-sky-400" />
              <span>[01 // PORTFOLIO]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Selected Works
            </h2>
            <p className="mt-2 text-base sm:text-lg text-sky-200/80 font-medium">
              Real edits, no templates.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 text-xs font-mono text-sky-200/80 liquid-glass px-4 py-2.5 rounded-2xl"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_#38bdf8] inline-block" />
            <span>High-Retention CapCut Workflows • 1080p Master Files</span>
          </motion.div>
        </div>

        {/* 3 Video Cards in Grid (iOS 26 Liquid Glass Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {VIDEO_WORKS.map((work: VideoWork, index: number) => {
            const driveDirectUrl = work.iframeSrc.replace('/preview', '/view');
            return (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative flex flex-col liquid-glass-elevated bg-[#0a1224]/60 border border-white/[0.14] hover:border-sky-400/40 rounded-[24px] overflow-hidden transition-all duration-300 shadow-xl hover:shadow-[0_20px_50px_rgba(2,132,199,0.15)]"
              >
                {/* Video Player Frame */}
                <div className="relative w-full aspect-[9/14] sm:aspect-[9/13] lg:aspect-[9/14] bg-black/60 overflow-hidden border-b border-white/[0.08]">
                  {/* Google Drive Preview Iframe */}
                  <iframe
                    src={work.iframeSrc}
                    title={`${work.title} - Video Player`}
                    className="w-full h-full border-0 absolute inset-0 z-10"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    loading="lazy"
                  />

                  {/* Top Bar Overlay */}
                  <div className="absolute top-3 inset-x-3 z-20 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full liquid-glass-pill bg-black/70 backdrop-blur-md text-[11px] font-mono uppercase tracking-wider text-sky-200 border border-white/15">
                      {work.category}
                    </span>
                    <a
                      href={driveDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto p-2 rounded-full liquid-glass-pill bg-black/70 backdrop-blur-md text-sky-200 hover:text-white border border-white/15 hover:border-sky-400/40 transition-all shadow-md"
                      title="Open in Google Drive / Full Screen"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-sky-200 transition">
                        {work.title}
                      </h3>
                      <span className="text-xs font-mono text-sky-300/60">
                        #0{index + 1}
                      </span>
                    </div>

                    <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                      {work.tagline}
                    </p>

                    {/* Feature tags */}
                    <div className="space-y-1.5 mb-5">
                      {work.keyFeatures.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action strip */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-sky-200/70">
                    <span className="text-sky-300/60">CapCut Edit</span>
                    <a
                      href={driveDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white hover:text-sky-300 transition"
                    >
                      <span>Fullscreen Drive</span>
                      <Maximize2 className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 1. INSTAGRAM BUTTON: Centered, Liquid glass pill shape, with hover effect (white background, black text) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex flex-col items-center justify-center text-center"
        >
          <button
            onClick={handleOpenInstagram}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full liquid-glass-pill bg-white/[0.08] border border-white/20 hover:border-white text-white hover:text-black hover:bg-white transition-all duration-300 shadow-[0_10px_35px_rgba(56,189,248,0.25)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.3)] active:scale-95 cursor-pointer text-sm sm:text-base font-semibold"
          >
            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform text-sky-400 group-hover:text-black" />
            <span>View 50+ More Edits on Instagram ↗</span>
          </button>

          <p className="mt-3 text-xs text-sky-200/60 font-mono">
            Opens Instagram app or launches web profile (@zaidvisuals.co)
          </p>
        </motion.div>

        {/* Small reassurance notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-xs text-sky-200/60 font-mono"
        >
          Want to see how your specific footage would look? Ask for a <span className="text-white underline underline-offset-4 decoration-sky-400">Free 30s Trial Edit</span> with zero commitment.
        </motion.div>
      </div>
    </section>
  );
}
