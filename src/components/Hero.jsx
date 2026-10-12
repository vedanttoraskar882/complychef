import React from 'react';
import { ArrowRight, Play, CheckCircle2, AlertCircle, FileText, ShieldAlert, Sparkles, Building2 } from 'lucide-react';
import { siteContent } from '../data/content';
import { DocumentNetworkBackground } from './DocumentNetworkBackground';

export const Hero = ({ onOpenPilotModal }) => {
  const { badge, headlinePart1, headlineEmphasis, headlinePart2, lede, buttons, proofPoints, preview } =
    siteContent.hero;

  // Circular score progress calculation
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * preview.score) / preview.scoreMax;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-brand-ivory border-b border-brand-charcoal/5">
      {/* Dynamic Animated Document Network Background */}
      <DocumentNetworkBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy, Actions & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Pilot Validation Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-brand-charcoal/10 rounded-full px-4 py-1.5 shadow-soft-sm mb-6 w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green"></span>
              </span>
              <span className="font-mono text-[11px] font-semibold tracking-wider text-brand-charcoal/80 uppercase">
                {badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight text-brand-charcoal leading-[1.08] mb-6">
              {headlinePart1}
              <span className="relative inline-block text-brand-charcoal px-1.5 mx-0.5">
                <span className="relative z-10 italic font-black">{headlineEmphasis}</span>
                <span
                  className="absolute inset-x-0 bottom-1.5 h-3.5 bg-brand-yellow/85 -z-0 rounded-sm transform -rotate-1"
                  aria-hidden="true"
                ></span>
              </span>
              {headlinePart2}
            </h1>

            {/* Supporting Lede */}
            <p className="text-base sm:text-lg text-brand-charcoal/75 leading-relaxed max-w-2xl mb-8">
              {lede}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-12">
              <button
                type="button"
                onClick={onOpenPilotModal}
                className="inline-flex items-center justify-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-deep text-brand-charcoal font-mono text-xs sm:text-sm font-bold tracking-wider uppercase px-7 py-4 rounded-full shadow-lg shadow-brand-yellow/20 hover:shadow-brand-yellow/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2"
              >
                <span>REQUEST A PILOT FORM</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              <a
                href={buttons[1].href}
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-brand-yellow-pale text-brand-charcoal border border-brand-charcoal/15 font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-4 rounded-full shadow-soft-sm hover:border-brand-yellow-deep hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{buttons[1].label}</span>
              </a>
            </div>

            {/* Proof Figures */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-brand-charcoal/10 max-w-2xl">
              {proofPoints.map((point, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-charcoal tracking-tight">
                    {point.value}
                  </span>
                  <span className="font-mono text-xs text-brand-charcoal/65 mt-1 leading-snug">
                    {point.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Inspection Readiness Ticket / Visual Dashboard */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md transform lg:rotate-1 hover:rotate-0 transition-transform duration-300">
              
              {/* Outer Ticket Card */}
              <div className="bg-white rounded-2xl shadow-soft-lg border border-brand-charcoal/10 overflow-hidden relative">
                
                {/* Header Banner */}
                <div className="bg-brand-charcoal p-5 text-white flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-yellow/20 border border-brand-yellow/40 flex items-center justify-center text-brand-yellow">
                      <ShieldAlert className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] tracking-widest text-brand-yellow uppercase font-semibold">
                        {preview.title}
                      </div>
                      <div className="font-heading font-bold text-sm text-white flex items-center gap-1.5 mt-0.5">
                        <Building2 className="w-3.5 h-3.5 text-white/50" />
                        <span>{preview.site}</span>
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-brand-green/20 text-emerald-400 border border-emerald-500/30">
                    LIVE SYNC
                  </span>
                </div>

                {/* Status Rows */}
                <div className="p-5 space-y-3">
                  {preview.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-brand-ivory/60 hover:bg-brand-ivory border border-brand-charcoal/5 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <FileText className="w-4 h-4 text-brand-charcoal/40" />
                        <span className="text-xs sm:text-[13px] font-medium text-brand-charcoal/85">
                          {item.label}
                        </span>
                      </div>
                      <div className="flex items-center">
                        {item.status === 'gap' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-brand-red bg-brand-red-light border border-red-200">
                            <AlertCircle className="w-3 h-3 stroke-[2.5]" />
                            <span>{item.value}</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-brand-green bg-brand-green-light border border-green-200">
                            <CheckCircle2 className="w-3 h-3 stroke-[2.5]" />
                            <span>{item.value}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Readiness Score Card with Animated Circular Ring */}
                <div className="mx-5 mb-5 p-4 rounded-xl bg-gradient-to-br from-brand-charcoal to-brand-charcoal-card text-white flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-4">
                    {/* SVG Progress Circle */}
                    <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 80 80">
                        {/* Background track */}
                        <circle
                          cx="40"
                          cy="40"
                          r={radius}
                          stroke="rgba(255, 255, 255, 0.12)"
                          strokeWidth="7"
                          fill="transparent"
                        />
                        {/* Progress stroke */}
                        <circle
                          cx="40"
                          cy="40"
                          r={radius}
                          stroke="#FFCC32"
                          strokeWidth="7"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          strokeLinecap="round"
                          fill="transparent"
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="font-heading font-extrabold text-xl text-brand-yellow leading-none">
                          {preview.score}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="font-heading font-bold text-sm text-white">
                        {preview.scoreLabel}
                      </div>
                      <div className="font-mono text-[10.5px] text-white/60 mt-0.5 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-brand-yellow" />
                        <span>{preview.scoreSub}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Strip */}
                <div className="px-5 py-3 bg-brand-yellow/15 border-t border-brand-yellow/20 text-center">
                  <span className="font-mono text-[10px] font-bold text-brand-charcoal tracking-wider uppercase">
                    {preview.footerNote}
                  </span>
                </div>

                {/* Zigzag Edge at bottom of receipt */}
                <div className="ticket-zigzag" aria-hidden="true" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
