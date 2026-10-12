import React from 'react';
import { siteContent } from '../data/content';
import {
  Network,
  ShieldAlert,
  UserCheck,
  Gauge,
  Workflow,
  FolderArchive,
} from 'lucide-react';

export const Innovations = () => {
  const { eyebrow, heading, subheading, items } = siteContent.innovations;

  const innovationIcons = [
    Network,
    ShieldAlert,
    UserCheck,
    Gauge,
    Workflow,
    FolderArchive,
  ];

  return (
    <section id="innovations" className="py-20 lg:py-28 bg-[#F5EFE3] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs font-bold tracking-widest text-brand-yellow-deep uppercase mb-3">
            <span className="w-5 h-0.5 bg-brand-yellow-deep rounded-full"></span>
            <span>{eyebrow}</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-brand-charcoal leading-tight">
            {heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-charcoal/75 leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* 6 Innovations Feature Grid (A through F) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = innovationIcons[idx];
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-brand-charcoal/10 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center font-mono text-[10.5px] font-bold tracking-wider text-brand-yellow-deep uppercase bg-brand-yellow-pale px-3 py-1 rounded-full border border-brand-yellow-deep/20">
                      {item.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-ivory flex items-center justify-center text-brand-charcoal group-hover:bg-brand-yellow group-hover:text-brand-charcoal transition-colors">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-brand-charcoal mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-charcoal/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
