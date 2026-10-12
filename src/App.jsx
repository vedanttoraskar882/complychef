import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Evidence } from './components/Evidence';
import { Problem } from './components/Problem';
import { HowItWorks } from './components/HowItWorks';
import { Architecture } from './components/Architecture';
import { Innovations } from './components/Innovations';
import { Compare } from './components/Compare';
import { Pilot } from './components/Pilot';
import { Pricing } from './components/Pricing';
import { Roadmap } from './components/Roadmap';
import { Founders } from './components/Founders';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { PilotModal } from './components/PilotModal';

export function App() {
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-ivory text-brand-charcoal antialiased flex flex-col selection:bg-brand-yellow selection:text-brand-charcoal">
      {/* 1. Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero & Live Inspection Readiness preview */}
        <Hero onOpenPilotModal={() => setIsPilotModalOpen(true)} />

        {/* 3. Evidence statistics */}
        <Evidence />

        {/* 4. The Problem (#problem) */}
        <Problem />

        {/* 5. How It Works (#solution) */}
        <HowItWorks />

        {/* 6. System Architecture */}
        <Architecture />

        {/* 7. Core Innovation (#innovations) */}
        <Innovations />

        {/* 8. Competitive Landscape (#compare) */}
        <Compare />

        {/* 9. Pilot Survey */}
        <Pilot />

        {/* 10. Pricing (#pricing) */}
        <Pricing />

        {/* 11. Roadmap (#roadmap) */}
        <Roadmap />

        {/* 12. The Founders (#team) */}
        <Founders />

        {/* 13. Final call to action */}
        <FinalCta />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* Request a Pilot Form Modal */}
      <PilotModal
        isOpen={isPilotModalOpen}
        onClose={() => setIsPilotModalOpen(false)}
      />
    </div>
  );
}

export default App;
