import React from 'react';
import { siteContent } from '../data/content';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

export const FinalCta = () => {
  const { heading, subheading, buttons } = siteContent.cta;

  return (
    <section className="bg-brand-yellow py-20 lg:py-28 relative overflow-hidden text-brand-charcoal">
      {/* Background radial gradient flourish */}
      <div
        className="absolute inset-0 bg-radial-at-c from-white/20 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Subtle decorative dot grid */}
      <div
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#14191C_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Micro badge */}
        <div className="inline-flex items-center gap-2 bg-brand-charcoal text-brand-yellow font-mono text-[10.5px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>PILOT WAITLIST &amp; TRIAL</span>
        </div>

        {/* Heading */}
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-brand-charcoal leading-[1.15] max-w-3xl mx-auto mb-6">
          {heading}
        </h2>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-brand-charcoal/85 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          {subheading}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttons[0].href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-charcoal hover:bg-brand-charcoal-deep text-brand-yellow font-mono text-xs sm:text-sm font-bold tracking-wider uppercase px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-charcoal focus:ring-offset-2 focus:ring-offset-brand-yellow"
          >
            <span>{buttons[0].label}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
          <a
            href={buttons[1].href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-charcoal/10 hover:bg-brand-charcoal/15 text-brand-charcoal border border-brand-charcoal/25 font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-full hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Calendar className="w-4 h-4" />
            <span>{buttons[1].label}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
