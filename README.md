# ComplyChef AI — Redesigned Website

A high-performance, professionally redesigned frontend landing page for **ComplyChef AI** (Food Compliance Intelligence).

## Highlights of Visual Redesign
- **Exact Content Preservation**: 100% of all original copy, headings, statistics, competitor comparisons, pricing plans, roadmap projections, and founder bios are preserved without alteration.
- **Brand Palette**: Deep charcoal (`#14191C`), warm ivory (`#FAF7EE`), signature golden yellow (`#FFCC32`), with refined green and red status indicators.
- **Typography**: Manrope for confident headings, Inter for body and UI elements, and IBM Plex Mono for technical metadata and badges.
- **Live Inspection Readiness Preview**: Redesigned dashboard ticket with animated SVG readiness score ring (84/100), live status rows, and authentic tear-off zigzag edge.
- **Calm Animated Document Network**: Canvas-based background animation depicting interconnected compliance document nodes with gentle traveling light pulses. Fully respects `prefers-reduced-motion`.
- **Responsive Layout**: Designed for all device breakpoints (375px mobile, 768px tablet, 1440px desktop) with an accessible mobile navigation drawer and horizontal scroll table for competitor comparisons.

## Project Structure
```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                      # Sticky header & mobile menu
│   │   ├── DocumentNetworkBackground.jsx   # Animated document risk graph
│   │   ├── Hero.jsx                        # Hero & Live Readiness Preview
│   │   ├── Evidence.jsx                    # Dark luxury evidence stats
│   │   ├── Problem.jsx                     # #problem section & comparison
│   │   ├── HowItWorks.jsx                  # #solution workflow & images
│   │   ├── Architecture.jsx                # 6-layer system architecture
│   │   ├── Innovations.jsx                 # #innovations A-F feature grid
│   │   ├── Compare.jsx                     # #compare competitor table
│   │   ├── Pilot.jsx                       # Pilot survey metrics
│   │   ├── Pricing.jsx                     # #pricing Core, Multi-site, Consultant
│   │   ├── Roadmap.jsx                     # #roadmap Year 1-3 timeline
│   │   ├── Founders.jsx                    # #team founder profiles & bios
│   │   ├── FinalCta.jsx                    # Golden waitlist/trial CTA
│   │   └── Footer.jsx                      # Complete footer & legal links
│   ├── data/
│   │   └── content.js                      # Centralized source copy structure
│   ├── App.jsx                             # Sequenced section layout
│   ├── main.jsx                            # React entry point
│   └── index.css                           # Tailwind CSS & custom styles
├── index.html                              # Web entry point & Google Fonts
├── tailwind.config.js                      # Custom brand theme configuration
├── vite.config.js                          # Vite bundler configuration
└── package.json                            # Scripts & dependencies
```

## Running Locally

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```
