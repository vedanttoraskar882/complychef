import React from 'react';
import { siteContent } from '../data/content';
import { Check, X } from 'lucide-react';

export const Compare = () => {
  const { eyebrow, heading, subheading, columns, rows } = siteContent.compare;

  return (
    <section id="compare" className="py-20 lg:py-28 bg-brand-ivory relative scroll-mt-20">
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

        {/* Responsive Comparison Table Container */}
        <div className="bg-white rounded-3xl border border-brand-charcoal/10 shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left border-collapse">
              <thead>
                <tr>
                  {columns.map((col, idx) => (
                    <th
                      key={col.id}
                      className={`p-4 sm:p-5 font-mono text-xs uppercase tracking-wider font-bold ${
                        col.isHighlighted
                          ? 'bg-brand-yellow text-brand-charcoal shadow-sm'
                          : 'bg-brand-charcoal text-white'
                      }`}
                    >
                      {col.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-charcoal/10">
                {rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="hover:bg-brand-ivory/40 transition-colors">
                    {/* ComplyChef AI (Column 1 - Highlighted) */}
                    <td className="p-4 sm:p-5 bg-brand-yellow-pale/60 font-semibold text-brand-charcoal text-xs sm:text-sm border-r border-brand-charcoal/5">
                      {row.isPriceRow ? (
                        <span className="font-heading font-bold text-brand-charcoal">
                          {row.values.complychef}
                        </span>
                      ) : row.values.complychef === '✓' ? (
                        <div className="flex items-center justify-center gap-1.5 text-brand-green font-bold font-mono">
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span>✓</span>
                        </div>
                      ) : (
                        <div className="text-center font-bold text-brand-charcoal">
                          {row.values.complychef}
                        </div>
                      )}
                    </td>

                    {/* Competitors (Columns 2 - 6) */}
                    {['trail', 'fooddocs', 'navitas', 'safefood', 'goaudits'].map((compKey) => {
                      const val = row.values[compKey];
                      const isYes = val === '✓';
                      const isNo = val === 'No';

                      return (
                        <td
                          key={compKey}
                          className={`p-4 sm:p-5 text-xs sm:text-sm ${
                            row.isPriceRow
                              ? 'font-mono text-brand-charcoal/80 font-medium'
                              : 'text-center'
                          }`}
                        >
                          {row.isPriceRow ? (
                            <span>{val}</span>
                          ) : isYes ? (
                            <span className="inline-flex items-center gap-1 font-mono font-bold text-brand-green">
                              <Check className="w-4 h-4 stroke-[2.5]" />
                              <span>✓</span>
                            </span>
                          ) : isNo ? (
                            <span className="font-mono text-brand-charcoal/40 font-medium">
                              No
                            </span>
                          ) : (
                            <span>{val}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-3 text-right">
          <span className="font-mono text-[10px] text-brand-charcoal/50 uppercase tracking-wider">
            Scroll horizontally to view all competitors →
          </span>
        </div>

      </div>
    </section>
  );
};
