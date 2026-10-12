import React from 'react';
import { siteContent } from '../data/content';
import { ArrowRight, AlertTriangle } from 'lucide-react';

export const HowItWorks = () => {
  const { eyebrow, heading, subheading, images, steps } = siteContent.solution;

  return (
    <section id="solution" className="py-20 lg:py-28 bg-[#F5EFE3] relative scroll-mt-20">
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

        {/* 3 Story Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {images.map((img, idx) => (
            <figure
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-brand-charcoal/10 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-brand-charcoal/5 relative">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <figcaption className="p-4 sm:p-5 font-mono text-xs font-semibold text-brand-charcoal flex items-center justify-between border-t border-brand-charcoal/5 bg-white">
                <span>{img.caption}</span>
                <span className="text-brand-yellow-deep font-bold text-sm">0{idx + 1}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* 6 Workflow Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {steps.map((item, idx) => {
              const isFlag = item.isFlag;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl p-5 border flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 relative ${
                    isFlag
                      ? 'bg-brand-charcoal text-white border-brand-charcoal shadow-lg ring-2 ring-brand-yellow/40'
                      : 'bg-white text-brand-charcoal border-brand-charcoal/10 shadow-soft-sm'
                  }`}
                >
                  <div>
                    {/* Step Micro Label */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`font-mono text-[10px] uppercase font-bold tracking-wider ${
                          isFlag ? 'text-brand-yellow' : 'text-brand-charcoal/50'
                        }`}
                      >
                        {item.step}
                      </span>
                      {isFlag && (
                        <span className="p-1 rounded bg-brand-yellow/20 text-brand-yellow">
                          <AlertTriangle className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>

                    {/* Step Title */}
                    <h3
                      className={`font-heading font-bold text-sm sm:text-base mb-2 ${
                        isFlag ? 'text-white' : 'text-brand-charcoal'
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Step Description */}
                    <p
                      className={`text-xs leading-relaxed ${
                        isFlag ? 'text-white/80' : 'text-brand-charcoal/70'
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Connecting Arrow for desktop (between steps) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none">
                      <div className="w-6 h-6 rounded-full bg-[#F5EFE3] border border-brand-charcoal/15 flex items-center justify-center text-brand-yellow-deep shadow-sm">
                        <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
