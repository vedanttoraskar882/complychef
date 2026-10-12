import React from 'react';
import { siteContent } from '../data/content';
import { Calendar, Milestone } from 'lucide-react';

export const Roadmap = () => {
  const { eyebrow, heading, stages } = siteContent.roadmap;

  return (
    <section id="roadmap" className="py-20 lg:py-28 bg-brand-ivory relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs font-bold tracking-widest text-brand-yellow-deep uppercase mb-3">
            <span className="w-5 h-0.5 bg-brand-yellow-deep rounded-full"></span>
            <span>{eyebrow}</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-brand-charcoal leading-tight">
            {heading}
          </h2>
        </div>

        {/* 3 Roadmap Stage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-8 border-t-4 border-t-brand-yellow-deep border border-brand-charcoal/10 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Year Label */}
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-brand-yellow-deep mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{stage.year}</span>
                </div>

                {/* Subtitle / Focus */}
                <h3 className="font-heading font-extrabold text-xl text-brand-charcoal mb-6 leading-snug">
                  {stage.title}
                </h3>

                {/* Metrics List */}
                <div className="space-y-3.5 pt-2">
                  {stage.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="flex items-center justify-between py-2 border-b border-dashed border-brand-charcoal/15 text-xs sm:text-sm"
                    >
                      <span className="text-brand-charcoal/70 font-medium">
                        {metric.label}
                      </span>
                      <span className="font-mono font-bold text-brand-charcoal text-right">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage Progress Tracker Indicator */}
              <div className="mt-8 pt-4 flex items-center gap-2 font-mono text-[10.5px] text-brand-charcoal/50 uppercase tracking-wider">
                <Milestone className="w-3.5 h-3.5 text-brand-yellow-deep" />
                <span>Stage 0{idx + 1} Target</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
