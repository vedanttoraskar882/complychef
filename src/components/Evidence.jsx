import React from 'react';
import { siteContent } from '../data/content';
import { TrendingUp, FileSpreadsheet, AlertTriangle, Coins } from 'lucide-react';

export const Evidence = () => {
  const { eyebrow, heading, subheading, stats } = siteContent.evidence;

  const statIcons = [FileSpreadsheet, AlertTriangle, TrendingUp, Coins];

  return (
    <section className="bg-brand-charcoal text-white py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle ambient golden glow background */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs font-bold tracking-widest text-brand-yellow uppercase mb-3">
            <span className="w-5 h-0.5 bg-brand-yellow rounded-full"></span>
            <span>{eyebrow}</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white leading-tight">
            {heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-2xl bg-white/[0.035] hover:bg-white/[0.07] border border-white/10 hover:border-brand-yellow/30 transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-yellow tracking-tight mb-2">
                    {stat.value}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mt-2 font-normal">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
