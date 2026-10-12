import React from 'react';
import { siteContent } from '../data/content';
import { Award, Briefcase } from 'lucide-react';

export const Founders = () => {
  const { eyebrow, heading, members } = siteContent.founders;

  return (
    <section id="team" className="py-20 lg:py-28 bg-[#F5EFE3] relative scroll-mt-20">
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

        {/* 2 Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-charcoal/10 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Founder Details Header */}
                <div className="mb-6">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-brand-charcoal tracking-tight">
                    {member.name}
                  </h3>
                  <div className="font-mono text-xs font-semibold text-brand-yellow-deep tracking-wider uppercase mt-1">
                    {member.role}
                  </div>
                </div>

                {/* Unabridged Biography */}
                <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed pt-4 border-t border-brand-charcoal/10 font-normal">
                  {member.bio}
                </p>
              </div>

              {/* Verified Founder Badge */}
              <div className="mt-8 pt-4 flex items-center gap-2 font-mono text-[10px] text-brand-charcoal/50 uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5 text-brand-yellow-deep" />
                <span>Leadership &amp; Compliance Team</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
