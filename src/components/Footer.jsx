import React from 'react';
import { siteContent } from '../data/content';
import { ShieldCheck, MapPin } from 'lucide-react';

export const Footer = () => {
  const { brand, tagline, description, columns, bottom } = siteContent.footer;

  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-yellow flex items-center justify-center text-brand-charcoal shadow-sm">
                  <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-xl tracking-tight text-white leading-none">
                    {brand}
                  </span>
                  <span className="font-mono text-[9px] font-semibold tracking-wider text-white/50 uppercase mt-1">
                    {tagline}
                  </span>
                </div>
              </div>
              <p className="mt-5 text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
                {description}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-1.5 font-mono text-[11px] text-white/40">
              <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
              <span>{bottom.location}</span>
            </div>
          </div>

          {/* Links Columns (Product, Company, Legal) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {columns.map((col, idx) => (
              <div key={idx}>
                <h4 className="font-mono text-[11px] font-bold tracking-widest uppercase text-white/40 mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm text-white/70 hover:text-brand-yellow transition-colors block py-0.5"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40">
          <span>{bottom.copyright}</span>
          <span>{bottom.location}</span>
        </div>

      </div>
    </footer>
  );
};
