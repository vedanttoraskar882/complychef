import React from 'react';
import {
  FileText,
  AlertTriangle,
  Users,
  Award,
  Thermometer,
  Network,
  XCircle,
  CheckCircle2,
  X,
  Check,
} from 'lucide-react';
import { siteContent } from '../data/content';

export const Problem = () => {
  const { eyebrow, heading, subheading, documents, resultNode, comparison } = siteContent.problem;

  const docIcons = [FileText, AlertTriangle, Users, Award, Thermometer];

  return (
    <section id="problem" className="py-20 lg:py-28 bg-brand-ivory relative scroll-mt-20">
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

        {/* Document Sequence Flow Nodes */}
        <div className="my-12 p-6 sm:p-8 rounded-3xl bg-white border border-brand-charcoal/10 shadow-soft">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {documents.map((doc, idx) => {
              const Icon = docIcons[idx];
              return (
                <React.Fragment key={idx}>
                  <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-brand-ivory/80 border border-brand-charcoal/10 shadow-soft-sm hover:border-brand-yellow-deep hover:-translate-y-0.5 transition-all">
                    <Icon className="w-4 h-4 text-brand-yellow-deep" />
                    <span className="font-mono text-xs font-semibold text-brand-charcoal">
                      {doc.name}
                    </span>
                  </div>
                  <span className="text-brand-charcoal/40 font-bold text-sm px-1" aria-hidden="true">
                    ＋
                  </span>
                </React.Fragment>
              );
            })}
            
            <span className="text-brand-charcoal/40 font-bold text-sm px-1" aria-hidden="true">
              =
            </span>

            {/* Result Node */}
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-brand-charcoal text-white shadow-md border border-brand-charcoal hover:-translate-y-0.5 transition-all">
              <Network className="w-4 h-4 text-brand-yellow" />
              <span className="font-mono text-xs font-bold tracking-wide text-white">
                {resultNode.name}
              </span>
            </div>
          </div>
        </div>

        {/* Without vs With ComplyChef AI Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Without Card */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border-t-4 border-t-brand-red border border-brand-charcoal/10 shadow-soft relative flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-7 h-7 rounded-lg bg-brand-red-light flex items-center justify-center text-brand-red">
                  <X className="w-4 h-4 stroke-[3]" />
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-charcoal">
                  {comparison.without.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {comparison.without.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                    <XCircle className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* With Card */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border-t-4 border-t-brand-green border border-brand-charcoal/10 shadow-soft relative flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-7 h-7 rounded-lg bg-brand-green-light flex items-center justify-center text-brand-green">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-charcoal">
                  {comparison.with.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {comparison.with.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
