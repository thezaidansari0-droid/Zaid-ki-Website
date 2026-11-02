import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Mail, Phone, X, Check, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
  packageTitle?: string;
}

export function ContactModal({ isOpen, onClose, initialMessage, packageTitle }: ContactModalProps) {
  const [phone, setPhone] = useState(() => {
    return localStorage.getItem('zv_whatsapp_number') || PORTFOLIO_INFO.defaultWhatsAppNumber;
  });
  const [copied, setCopied] = useState(false);
  
  const defaultText = packageTitle 
    ? `Hi Zaid, I would like to book or discuss the "${packageTitle}" package from your portfolio.`
    : (initialMessage || "Hi Zaid, I saw your portfolio 'Zaid Visuals Co.' and I'd like to discuss video editing / get a free trial edit!");

  const [message, setMessage] = useState(defaultText);

  // Clean phone number for wa.me
  const cleanPhone = phone.replace(/\D/g, '');
  const waUrl = cleanPhone 
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Frosted Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#060b14]/80 backdrop-blur-xl"
          />

          {/* Modal Container - iOS 26 Liquid Glass */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-lg liquid-glass-elevated bg-[#0a1224]/85 border border-white/[0.18] rounded-[28px] shadow-[0_25px_60px_rgba(2,6,23,0.85)] p-6 sm:p-8 text-white z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/[0.08] transition"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header with Zaid Avatar & Badge */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-13 h-13 rounded-2xl overflow-hidden border border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.3)] shrink-0">
                <img
                  src={PORTFOLIO_INFO.avatarUrl}
                  alt={PORTFOLIO_INFO.founder}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-wider liquid-glass-pill bg-sky-950/60 text-sky-200 border-sky-400/30 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse shadow-[0_0_6px_#38bdf8]" />
                  DIRECT REACHOUT
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  Chat with Zaid Rajput
                </h3>
                <p className="text-xs text-sky-200/70">
                  Moradabad, UP • Quick response within a few hours.
                </p>
              </div>
            </div>

            {/* Primary WhatsApp Action */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-sky-200/80 font-mono mb-2">
                  Pre-filled WhatsApp Message:
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full liquid-glass bg-white/[0.04] border border-white/[0.15] focus:border-sky-400 focus:outline-none rounded-2xl p-3.5 text-sm text-neutral-200 resize-none font-sans"
                  placeholder="Write your message..."
                />
              </div>

              {/* Direct WhatsApp Launch Button */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 w-full py-4 px-5 bg-white text-black font-bold rounded-2xl hover:bg-sky-50 transition duration-200 shadow-[0_0_30px_rgba(56,189,248,0.4)]"
              >
                <MessageCircle className="w-5 h-5 fill-current text-sky-600" />
                <span>Continue to WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Contacts Strip */}
              <div className="pt-4 border-t border-white/[0.08] space-y-3">
                <div className="text-xs font-mono uppercase text-sky-300/60 tracking-wider">
                  Alternative direct contact:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {/* Copy / Call Phone */}
                  <div className="flex items-center justify-between p-3 rounded-xl liquid-glass bg-white/[0.04] border border-white/[0.1]">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                      <div className="truncate">
                        <div className="text-sky-200/60 text-[10px]">WhatsApp / Call</div>
                        <div className="font-mono text-neutral-200 truncate">
                          {phone === PORTFOLIO_INFO.defaultWhatsAppNumber ? "+91 (WhatsApp)" : phone}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyNumber}
                      className="px-2 py-1 text-[11px] rounded-lg liquid-glass-pill bg-white/[0.08] text-neutral-300 hover:text-white transition shrink-0 ml-2"
                    >
                      {copied ? (
                        <span className="flex items-center gap-1 text-sky-300">
                          <Check className="w-3 h-3" /> Copied
                        </span>
                      ) : (
                        "Copy"
                      )}
                    </button>
                  </div>

                  {/* Email */}
                  <a
                    href={`mailto:${PORTFOLIO_INFO.email}?subject=${encodeURIComponent(packageTitle ? `Inquiry for ${packageTitle}` : 'Video Editing Inquiry - Zaid Visuals Co.')}`}
                    className="flex items-center justify-between p-3 rounded-xl liquid-glass bg-white/[0.04] border border-white/[0.1] hover:border-sky-400/40 transition group"
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                      <div className="truncate">
                        <div className="text-sky-200/60 text-[10px]">Direct Email</div>
                        <div className="font-mono text-neutral-200 truncate">{PORTFOLIO_INFO.email}</div>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white shrink-0 ml-1" />
                  </a>
                </div>

                {/* Free trial hint */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl liquid-glass bg-white/[0.03] border border-white/[0.08] text-neutral-300 text-xs">
                  <Sparkles className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">1 Free Short Clip Trial:</strong> Send 30s of raw footage via Google Drive link on WhatsApp to test my cuts before making any payment.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
