import React from 'react';
import { siteContent } from '../data/content';
import { CheckCircle2, Bell, Users, FileSignature } from 'lucide-react';

export const Pilot = () => {
  const { eyebrow, heading, stats } = siteContent.pilot;

  const pilotIcons = [CheckCircle2, Bell, Users, FileSignature];

  return (
    <section className="bg-brand-charcoal text-white py-20 lg:py-28 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div
        className="absolute -bottom-24 left-1/4 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none"
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
        </div>

        {/* 4 Survey Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => {
            const Icon = pilotIcons[idx % pilotIcons.length];
            const numVal = parseInt(stat.value, 10) || 50;

            return (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-2xl bg-white/[0.035] hover:bg-white/[0.07] border border-white/10 hover:border-brand-yellow/30 transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="font-mono text-[10px] text-white/40 tracking-wider">
                      SURVEY N=52
                    </span>
                  </div>

                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-yellow tracking-tight mb-2">
                    {stat.value}
                  </div>

                  {/* Refined progress indicator bar */}
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-4">
                    <div
                      className="bg-brand-yellow h-full rounded-full transition-all duration-1000"
                      style={{ width: `${numVal}%` }}
                    />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
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
