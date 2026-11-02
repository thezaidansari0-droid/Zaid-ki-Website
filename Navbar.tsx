import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data';

interface NavbarProps {
  onOpenContact: (packageTitle?: string) => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['work', 'services', 'pricing', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-[24px] transition-all duration-300 ${
          scrolled
            ? 'liquid-glass-elevated bg-[#060b14]/80 px-5 py-3'
            : 'liquid-glass bg-[#060b14]/50 px-5 py-3.5'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo with Zaid's DP Sky-Blue Theme Accent */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Zaid Visuals Co. Home"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-600/30 border border-sky-400/30 flex items-center justify-center font-mono font-black text-sm tracking-tighter text-white shadow-[0_0_15px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all">
              <span className="bg-gradient-to-r from-white via-sky-100 to-sky-300 bg-clip-text text-transparent">
                ZV
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
                {PORTFOLIO_INFO.brandShort}
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-pulse" />
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-sky-200/60">
                Moradabad UP
              </span>
            </div>
          </a>

          {/* Desktop Navigation Menu - Liquid Glass iOS pill */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/[0.1] px-2.5 py-1 rounded-full backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-medium tracking-wide rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-sky-500/20 border border-sky-400/30 shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                      : 'text-neutral-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Header Action Button: Contact Me */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenContact()}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-black bg-white hover:bg-sky-50 transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.35)] active:scale-95 border border-white/60"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current text-sky-600" />
              <span>Contact Me</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenContact()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-black bg-white shadow-sm"
            >
              <MessageCircle className="w-3 h-3 fill-current text-sky-600" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/[0.06] border border-white/[0.12] text-neutral-300 hover:text-white backdrop-blur-xl"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/[0.1] space-y-2">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/[0.08] transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-black font-semibold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current text-sky-600" />
                <span>Contact via WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
