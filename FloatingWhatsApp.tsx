import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenContact: () => void;
}

export function FloatingWhatsApp({ onOpenContact }: FloatingWhatsAppProps) {
  return (
    <div className="fixed bottom-6 right-6 z-30">
      <button
        onClick={onOpenContact}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full liquid-glass-pill bg-[#060b14]/80 hover:bg-white text-white hover:text-black border border-white/20 hover:border-white shadow-[0_8px_32px_rgba(2,132,199,0.3)] transition-all duration-300 active:scale-95 cursor-pointer"
        aria-label="Direct WhatsApp Contact"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
        </span>
        <MessageCircle className="w-4 h-4 fill-sky-400 text-sky-400 group-hover:fill-sky-600 group-hover:text-sky-600 transition-colors" />
        <span className="text-xs font-semibold tracking-wide">WhatsApp</span>
      </button>
    </div>
  );
}
