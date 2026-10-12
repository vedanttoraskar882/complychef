export const siteContent = {
  meta: {
    title: "ComplyChef AI | Compliance Intelligence for UK Food Businesses",
    description: "Compliance intelligence for UK food businesses. Detecting compliance risk that lives between documents."
  },
  nav: {
    brand: "ComplyChef",
    tagline: "AI · Food Compliance Intelligence",
    links: [
      { label: "Problem", href: "#problem" },
      { label: "Solution", href: "#solution" },
      { label: "Innovation", href: "#innovations" },
      { label: "Compare", href: "#compare" },
      { label: "Pricing", href: "#pricing" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Team", href: "#team" }
    ],
    cta: {
      label: "Start free trial",
      href: "#pricing"
    }
  },
  hero: {
    badge: "Pilot-validated with 52 UK food businesses",
    headlinePart1: "Detecting compliance risk that lives ",
    headlineEmphasis: "between",
    headlinePart2: " documents.",
    lede: "Invoices, allergen files, staff rotas, training certificates and temperature logs all exist. They just don't talk to each other. ComplyChef AI reads them, connects them, and flags the gap before it becomes an inspection failure, an allergen incident, or a lost hygiene rating.",
    buttons: [
      { label: "Request a pilot form", href: "#", primary: true, isPilotForm: true },
      { label: "See how it works", href: "#solution", primary: false }
    ],
    proofPoints: [
      { value: "176,685", label: "UK food businesses addressable" },
      { value: "86%", label: "pilot rated it relevant" },
      { value: "£69", label: "/site/month, no setup fee" }
    ],
    preview: {
      title: "Live Inspection Readiness",
      site: "Fuji Kitchen · Site 004",
      items: [
        { label: "Temperature logs (7d)", value: "2 missing", status: "gap" },
        { label: "Allergen register", value: "1 gap flagged", status: "gap" },
        { label: "Supplier certificates", value: "1 expired", status: "gap" },
        { label: "Rota-to-training match", value: "All shifts cleared", status: "ok" }
      ],
      score: 84,
      scoreMax: 100,
      scoreLabel: "Readiness Score / 100",
      scoreSub: "3 corrective actions to +100",
      footerNote: "★ INSPECTION PACK READY IN < 3 MINUTES ★"
    }
  },
  evidence: {
    eyebrow: "The evidence",
    heading: "Paper compliance is the default, and it's failing quietly.",
    subheading: "Findings from ComplyChef AI's own pilot study of 52 UK food businesses, January to February 2026, and independent market data.",
    stats: [
      {
        value: "78%",
        label: "of businesses still run compliance mainly on paper diaries and folders"
      },
      {
        value: "74%",
        label: "find preparing for an EHO inspection stressful or very stressful"
      },
      {
        value: "61%",
        label: "report active concerns with allergen management accuracy"
      },
      {
        value: "£104.4bn",
        label: "size of the UK food and drink industry, the country's largest manufacturing sector"
      }
    ]
  },
  problem: {
    eyebrow: "The problem",
    heading: "The records exist. They just don't communicate.",
    subheading: "A new ingredient lands on a supplier invoice. Nobody checks it against the allergen register. A new hire is added to Saturday's rota. Nobody checks if they're trained. Each document is fine in isolation. The risk lives in the gap between them.",
    documents: [
      { name: "Supplier invoice", icon: "FileText" },
      { name: "Allergen sheet", icon: "AlertTriangle" },
      { name: "Staff rota", icon: "Users" },
      { name: "Training record", icon: "Award" },
      { name: "Temperature log", icon: "Thermometer" }
    ],
    resultNode: {
      name: "No shared picture",
      icon: "Network"
    },
    comparison: {
      without: {
        title: "Without ComplyChef AI",
        points: [
          "A new sauce arrives with sesame; nobody cross-checks the allergen file before it's served",
          "A new hire is rota'd onto a shift before their allergen training is confirmed",
          "An EHO visit means digging through folders, spreadsheets and WhatsApp threads",
          "63% of businesses spend 6+ hours a week just on compliance admin"
        ]
      },
      with: {
        title: "With ComplyChef AI",
        points: [
          "Every invoice is read on arrival and checked against the allergen register automatically",
          "Every rota entry is matched to certification status before the shift starts",
          "A dated, linked, inspection-ready evidence pack is compiled continuously",
          "A single Live Inspection Readiness Score shows exactly what's missing, and why"
        ]
      }
    }
  },
  solution: {
    eyebrow: "How it works",
    heading: "One new ingredient, traced through the whole kitchen.",
    subheading: "The Compliance Risk Graph is the engine underneath every feature: instead of storing documents in folders, it stores them as connected nodes linked to the food-safety obligation they belong to.",
    images: [
      {
        src: "https://images.pexels.com/photos/7363069/pexels-photo-7363069.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Supplier delivery arriving at a food business",
        caption: "1. Delivery arrives"
      },
      {
        src: "https://images.unsplash.com/photo-1760169799369-2b8574466735?fm=jpg&q=70&w=800&auto=format&fit=crop",
        alt: "Chefs preparing food in a busy commercial kitchen",
        caption: "2. Kitchen keeps moving"
      },
      {
        src: "https://images.pexels.com/photos/12935057/pexels-photo-12935057.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Chef reviewing a compliance alert on a tablet in the kitchen",
        caption: "3. Manager reviews the alert"
      }
    ],
    steps: [
      {
        step: "Step 1",
        title: "Invoice arrives",
        description: 'New "chocolate sauce" detected on a supplier delivery note via OCR.'
      },
      {
        step: "Step 2",
        title: "Allergen register checked",
        description: "Graph traversal looks for a matching allergen register entry."
      },
      {
        step: "Step 3",
        title: "Menu & label checked",
        description: "Menu item and customer-facing allergen declaration are checked too."
      },
      {
        step: "Step 4",
        title: "Compliance gap",
        description: "No register entry found, so the gap is flagged before the ingredient reaches the plate.",
        isFlag: true
      },
      {
        step: "Step 5",
        title: "Manager alerted",
        description: "Single consolidated corrective task sent, before customer exposure."
      },
      {
        step: "Step 6",
        title: "Score updates",
        description: "Live Inspection Readiness Score adjusts in real time until it's resolved."
      }
    ]
  },
  architecture: {
    eyebrow: "System architecture",
    heading: "Six layers, one connected compliance network.",
    subheading: "Document intelligence, graph-based data modelling and rules-based compliance logic, working together. No machine learning is required to make the MVP work, that part comes later, trained on real operational data.",
    layers: [
      {
        number: "01",
        title: "Data Capture",
        description: "Mobile daily checks, document uploads, rota entries and corrective-action photos.",
        tech: "REST API · React Native · React.js"
      },
      {
        number: "02",
        title: "Document Intelligence",
        description: "OCR + NLP extract structured data from invoices, certificates and allergen sheets.",
        tech: "Google Document AI / AWS Textract · spaCy"
      },
      {
        number: "03",
        title: "Operational Knowledge Base",
        description: "Master records for staff, suppliers, ingredients, allergens, recipes and equipment.",
        tech: "PostgreSQL"
      },
      {
        number: "04",
        title: "Compliance Risk Graph, core innovation",
        description: "Records become connected nodes linked to risks, evidence and corrective actions.",
        tech: "Neo4j / Apache AGE · custom graph traversal",
        isCore: true
      },
      {
        number: "05",
        title: "Scoring & Alert Engine",
        description: "Live Inspection Readiness Score, pre-shift alerts, allergen-gap and consistency alerts.",
        tech: "Python rules engine · scikit-learn / TensorFlow post-MVP · FastAPI"
      },
      {
        number: "06",
        title: "Reporting & Workflow",
        description: "Dashboards, corrective-action lists, inspection-ready evidence packs, consultant views.",
        tech: "React.js · Puppeteer / WeasyPrint · RBAC"
      }
    ]
  },
  innovations: {
    eyebrow: "Core innovation",
    heading: "Five proprietary elements no competitor combines.",
    subheading: "A novelty search across patent databases found no single patent, or combination of patents, revealing this architecture.",
    items: [
      {
        tag: "Innovation A",
        title: "Compliance Risk Graph",
        description: "Connects every operational record to the specific food-safety obligation it belongs to, rather than storing it as an isolated file."
      },
      {
        tag: "Innovation B",
        title: "Invoice-to-Allergen Gap Detection",
        description: "Reads supplier invoices and delivery notes and checks new or changed ingredients against the allergen register before they reach the kitchen."
      },
      {
        tag: "Innovation C",
        title: "Rota-to-Training Risk Matching",
        description: "Validates every shift assignment against the staff member's current training and certification status before the shift begins."
      },
      {
        tag: "Innovation D",
        title: "Live Inspection Readiness Score",
        description: "A continually refreshed 0 to 100 compliance health score based on real operational evidence, not just ticked boxes."
      },
      {
        tag: "Innovation E",
        title: "Cross-Document Ingredient Intelligence",
        description: "Reconciles invoices, recipes, menus and allergen files simultaneously to surface three-way mismatches automatically."
      },
      {
        tag: "Innovation F",
        title: "Unified Evidence Repository",
        description: "A single ordered, traceable evidence store, so an EHO request for 30 days of records takes minutes, not a folder search."
      }
    ]
  },
  compare: {
    eyebrow: "Competitive landscape",
    heading: "Checklist tools tick boxes. ComplyChef AI reads between them.",
    subheading: "Trail, FoodDocs, Navitas Safety, Safefood 360° and GoAudits all digitise part of the picture. None reconcile documents against each other.",
    columns: [
      { id: "complychef", name: "ComplyChef AI", isHighlighted: true },
      { id: "trail", name: "Trail" },
      { id: "fooddocs", name: "FoodDocs" },
      { id: "navitas", name: "Navitas Safety" },
      { id: "safefood", name: "Safefood 360°" },
      { id: "goaudits", name: "GoAudits" }
    ],
    rows: [
      {
        feature: "Entry price",
        values: {
          complychef: "Entry price · £69/mo",
          trail: "£69/mo",
          fooddocs: "£59/mo",
          navitas: "£129/mo",
          safefood: "~£1,000/mo",
          goaudits: "£10 to £15/user"
        },
        isPriceRow: true
      },
      {
        feature: "Invoice-to-Allergen Detection",
        values: {
          complychef: "Invoice-to-Allergen Detection",
          trail: "No",
          fooddocs: "No",
          navitas: "No",
          safefood: "No",
          goaudits: "No"
        }
      },
      {
        feature: "Rota-to-Training Matching",
        values: {
          complychef: "Rota-to-Training Matching",
          trail: "No",
          fooddocs: "No",
          navitas: "No",
          safefood: "No",
          goaudits: "No"
        }
      },
      {
        feature: "Compliance Risk Graph",
        values: {
          complychef: "Compliance Risk Graph",
          trail: "No",
          fooddocs: "No",
          navitas: "No",
          safefood: "No",
          goaudits: "No"
        }
      },
      {
        feature: "Cross-document intelligence",
        values: {
          complychef: "Cross-document intelligence",
          trail: "No",
          fooddocs: "No",
          navitas: "No",
          safefood: "No",
          goaudits: "No"
        }
      },
      {
        feature: "Document OCR + NLP",
        values: {
          complychef: "Document OCR + NLP",
          trail: "No",
          fooddocs: "No",
          navitas: "No",
          safefood: "No",
          goaudits: "No"
        }
      },
      {
        feature: "SME-accessible pricing",
        values: {
          complychef: "✓",
          trail: "✓",
          fooddocs: "✓",
          navitas: "No",
          safefood: "No",
          goaudits: "✓"
        }
      },
      {
        feature: "No hardware required",
        values: {
          complychef: "✓",
          trail: "✓",
          fooddocs: "✓",
          navitas: "No",
          safefood: "✓",
          goaudits: "✓"
        }
      }
    ]
  },
  pilot: {
    eyebrow: "Pilot survey · 52 UK food businesses",
    heading: "Validated before a single line of code was built.",
    stats: [
      {
        value: "86%",
        label: 'rated ComplyChef AI "very" or "extremely" relevant to their operations'
      },
      {
        value: "88%",
        label: "said they were interested in automated compliance alerts"
      },
      {
        value: "71%",
        label: "were willing to take part in future beta testing"
      },
      {
        value: "46%",
        label: "indicated willingness to give a formal letter of interest"
      }
    ]
  },
  pricing: {
    eyebrow: "Pricing",
    heading: "Enterprise compliance intelligence, café pricing.",
    subheading: "No setup fee. No long contract. 30 days free, no card required.",
    plans: [
      {
        name: "Core",
        price: "£69",
        unit: "/site/month",
        description: "For independent restaurants, cafés, bakeries and takeaways, the primary segment.",
        features: [
          "Mobile daily checks & document upload",
          "Invoice-to-allergen gap detection",
          "Rota-to-training pre-shift alerts",
          "Live Inspection Readiness dashboard"
        ],
        cta: "Start free trial",
        ctaHref: "#",
        isHighlighted: false
      },
      {
        name: "Multi-site",
        flag: "Most sites",
        price: "£59",
        unit: "/site/month",
        description: "For small groups and franchise operators running 3+ sites from one dashboard.",
        features: [
          "Everything in Core, per site",
          "Group-level benchmarking dashboard",
          "Priority-site risk flagging",
          "Volume pricing across all sites"
        ],
        cta: "Start free trial",
        ctaHref: "#",
        isHighlighted: true
      },
      {
        name: "Consultant",
        price: "£299",
        unit: "/month",
        description: "For food safety consultants managing many client sites from one place.",
        features: [
          "Multi-client compliance dashboard",
          "Real-time visibility across all clients",
          "Channel commission on client sites",
          "Expired-certificate & gap alerts"
        ],
        cta: "Talk to us",
        ctaHref: "#",
        isHighlighted: false
      }
    ]
  },
  roadmap: {
    eyebrow: "Roadmap",
    heading: "From 78 sites in London to 609 sites across three countries.",
    stages: [
      {
        year: "Year 1 · Soft launch",
        title: "MVP build & break-even",
        metrics: [
          { label: "Paying subscribers", value: "78" },
          { label: "MVP live", value: "Month 6" },
          { label: "Team", value: "2 founders + 1 to 2 contractors" },
          { label: "ARR", value: "≈£28,000" }
        ]
      },
      {
        year: "Year 2 · Commercial launch",
        title: "Consultant channel scales",
        metrics: [
          { label: "Paying subscribers", value: "351" },
          { label: "Consultant partners", value: "5 to 10" },
          { label: "Team", value: "4 to 5 permanent staff" },
          { label: "ARR", value: "≈£291,000" }
        ]
      },
      {
        year: "Year 3 · International",
        title: "Ireland & Australia live",
        metrics: [
          { label: "Paying subscribers", value: "609" },
          { label: "Markets live", value: "Ireland + Australia/Canada" },
          { label: "Team", value: "8 to 10 permanent staff" },
          { label: "ARR", value: "≈£646,000" }
        ]
      }
    ]
  },
  founders: {
    eyebrow: "The founders",
    heading: "Built by the person who lived the problem.",
    members: [
      {
        initials: "MB",
        name: "Matthew Raj Abhilash Billa",
        role: "Founder · Product & Compliance Director",
        bio: "Restaurant Manager at Fuji Japanese Restaurant, London, personally responsible for supplier procurement, allergen documentation, staff training and hygiene compliance. First Class MBA (International Business Management), University of Greenwich. The compliance logic behind ComplyChef AI comes directly from operational failures he managed firsthand."
      },
      {
        initials: "JK",
        name: "Jatothu Kalyan",
        role: "Co-Founder · Operations & Compliance Research",
        bio: "Leads operations, research coordination and future South Asia market development. B.Tech in Civil Engineering underpins a structured, phased approach to compliance workflow design. Currently completing Food Safety Level 2, HACCP Awareness and Google Project Management certifications."
      }
    ]
  },
  cta: {
    heading: "No small food business should lose its hygiene rating over a gap in the paperwork.",
    subheading: "Join the pilot waitlist or start your 30-day free trial. No credit card, no setup fee, cancel anytime.",
    buttons: [
      { label: "Start free trial", href: "#", primary: true },
      { label: "Book a demo", href: "#", primary: false }
    ]
  },
  footer: {
    brand: "ComplyChef",
    tagline: "AI · Food Compliance Intelligence",
    description: "Compliance intelligence for UK food businesses. Not a checklist app. A system that detects the risk living between your documents.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "How it works", href: "#solution" },
          { label: "Innovation", href: "#innovations" },
          { label: "Compare", href: "#compare" },
          { label: "Pricing", href: "#pricing" }
        ]
      },
      {
        title: "Company",
        links: [
          { label: "Founders", href: "#team" },
          { label: "Roadmap", href: "#roadmap" },
          { label: "Careers", href: "#" },
          { label: "Contact", href: "#" }
        ]
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy policy", href: "#" },
          { label: "Terms of service", href: "#" },
          { label: "Regulatory notice", href: "#" }
        ]
      }
    ],
    bottom: {
      copyright: "© 2026 ComplyChef AI Ltd. All rights reserved.",
      location: "London, United Kingdom"
    }
  }
};
