import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/content';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-charcoal/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10 py-3'
          : 'bg-brand-charcoal/90 backdrop-blur-sm border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Descriptor */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 focus:ring-offset-brand-charcoal rounded-lg p-1"
            aria-label="ComplyChef AI Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-yellow to-brand-yellow-deep flex items-center justify-center shadow-md shadow-brand-yellow/20 -rotate-3 group-hover:rotate-0 transition-transform duration-200">
              <ShieldCheck className="w-6 h-6 text-brand-charcoal stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-white leading-none">
                {siteContent.nav.brand}
              </span>
              <span className="font-mono text-[9px] font-semibold tracking-wider text-white/50 uppercase mt-1">
                {siteContent.nav.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteContent.nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 font-mono text-[11px] font-medium tracking-wider text-white/75 hover:text-brand-yellow uppercase transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={siteContent.nav.cta.href}
              className="hidden sm:inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-deep text-brand-charcoal font-mono text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded-full shadow-md shadow-brand-yellow/15 hover:shadow-brand-yellow/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 focus:ring-offset-brand-charcoal"
            >
              <span>{siteContent.nav.cta.label}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-brand-charcoal/98 backdrop-blur-xl border-b border-white/10 shadow-2xl px-6 py-6 transition-all animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {siteContent.nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="px-4 py-3 font-mono text-xs font-semibold tracking-wider text-white/80 hover:text-brand-yellow hover:bg-white/5 rounded-lg uppercase transition-colors flex items-center justify-between border-b border-white/5"
              >
                <span>{link.label}</span>
                <span className="text-white/30 text-xs">→</span>
              </a>
            ))}
            <div className="pt-4">
              <a
                href={siteContent.nav.cta.href}
                onClick={closeMobileMenu}
                className="w-full flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-deep text-brand-charcoal font-mono text-xs font-bold tracking-wider uppercase py-3.5 rounded-xl shadow-md transition-all"
              >
                <span>{siteContent.nav.cta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
