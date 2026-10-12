import React from 'react';
import { siteContent } from '../data/content';
import { Sparkles, Code2 } from 'lucide-react';

export const Architecture = () => {
  const { eyebrow, heading, subheading, layers } = siteContent.architecture;

  return (
    <section className="py-20 lg:py-28 bg-brand-ivory relative">
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

        {/* 6 Architecture Layers Stack */}
        <div className="space-y-3.5">
          {layers.map((layer, idx) => {
            const isCore = layer.isCore;
            return (
              <div
                key={idx}
                className={`rounded-2xl p-5 sm:p-6 border transition-all duration-200 hover:-translate-y-0.5 relative ${
                  isCore
                    ? 'bg-brand-yellow-pale/90 border-brand-yellow-deep/80 shadow-md ring-2 ring-brand-yellow-deep/30'
                    : 'bg-white border-brand-charcoal/10 shadow-soft-sm hover:border-brand-charcoal/20 hover:shadow-soft'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  
                  {/* Layer Number */}
                  <div className="md:col-span-1 flex items-center">
                    <span className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-yellow-deep">
                      {layer.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-heading font-bold text-base sm:text-lg text-brand-charcoal">
                        {layer.title}
                      </h3>
                      {isCore && (
                        <span className="inline-flex items-center gap-1 bg-brand-yellow text-brand-charcoal font-mono text-[9.5px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-sm">
                          <Sparkles className="w-3 h-3 fill-current" />
                          <span>PATENT CORE</span>
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-brand-charcoal/75 mt-1 leading-relaxed">
                      {layer.description}
                    </p>
                  </div>

                  {/* Technology Stack Tags */}
                  <div className="md:col-span-4 md:text-right">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-charcoal/5 text-brand-charcoal/80 font-mono text-[11px] font-medium leading-relaxed">
                      <Code2 className="w-3.5 h-3.5 text-brand-yellow-deep flex-shrink-0" />
                      <span>{layer.tech}</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
