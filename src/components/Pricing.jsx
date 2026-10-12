import React from 'react';
import { siteContent } from '../data/content';
import { Check, ArrowRight } from 'lucide-react';

export const Pricing = () => {
  const { eyebrow, heading, subheading, plans } = siteContent.pricing;

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#F5EFE3] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
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

        {/* 3 Pricing Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const isHighlighted = plan.isHighlighted;

            return (
              <div
                key={idx}
                className={`rounded-3xl p-8 sm:p-9 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative ${
                  isHighlighted
                    ? 'bg-brand-charcoal text-white border-2 border-brand-yellow shadow-2xl ring-4 ring-brand-yellow/20'
                    : 'bg-white text-brand-charcoal border border-brand-charcoal/10 shadow-soft'
                }`}
              >
                {/* Most Sites Flag Badge */}
                {plan.flag && (
                  <div className="absolute -top-3.5 right-8 bg-brand-yellow text-brand-charcoal font-mono text-[10px] font-extrabold tracking-wider uppercase px-3.5 py-1 rounded-full shadow-md">
                    {plan.flag}
                  </div>
                )}

                <div>
                  {/* Tier Title */}
                  <div
                    className={`font-mono text-xs uppercase tracking-widest font-bold mb-4 ${
                      isHighlighted ? 'text-brand-yellow' : 'text-brand-charcoal/60'
                    }`}
                  >
                    {plan.name}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-4">
                    <span
                      className={`font-heading font-extrabold text-4xl sm:text-5xl tracking-tight ${
                        isHighlighted ? 'text-white' : 'text-brand-charcoal'
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`font-mono text-xs sm:text-sm font-medium ${
                        isHighlighted ? 'text-white/60' : 'text-brand-charcoal/60'
                      }`}
                    >
                      {plan.unit}
                    </span>
                  </div>

                  {/* Plan Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-8 ${
                      isHighlighted ? 'text-white/75' : 'text-brand-charcoal/70'
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <div
                    className={`pt-6 border-t mb-8 space-y-3.5 ${
                      isHighlighted ? 'border-white/10' : 'border-brand-charcoal/10'
                    }`}
                  >
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isHighlighted
                              ? 'bg-brand-yellow/20 text-brand-yellow'
                              : 'bg-brand-yellow-pale text-brand-yellow-deep'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span
                          className={`text-xs sm:text-sm leading-snug ${
                            isHighlighted ? 'text-white/85' : 'text-brand-charcoal/80'
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA Button */}
                <a
                  href={plan.ctaHref}
                  className={`w-full inline-flex items-center justify-center gap-2 font-mono text-xs font-bold tracking-wider uppercase py-3.5 px-6 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow ${
                    isHighlighted
                      ? 'bg-brand-yellow hover:bg-brand-yellow-deep text-brand-charcoal shadow-md shadow-brand-yellow/20 hover:shadow-brand-yellow/40 hover:-translate-y-0.5'
                      : 'bg-white hover:bg-brand-yellow-pale text-brand-charcoal border border-brand-charcoal/15 hover:border-brand-yellow-deep hover:-translate-y-0.5'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
