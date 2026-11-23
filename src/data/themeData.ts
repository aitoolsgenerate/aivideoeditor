import {
  BlogPost,
  CapabilityCard,
  ServiceTile,
  StatCounter,
  TestimonialItem,
  ThemeConfig,
} from '../types/theme';

export const IMAGES = {
  heroTeam: '/src/assets/images/hero_team_laptop_1795439820846.jpg',
  techTablet: '/src/assets/images/tech_tablet_analytics_1795439820024.jpg',
  itOffice: '/src/assets/images/it_team_office_1795439820062.jpg',
  itSpecialist: '/src/assets/images/it_specialist_portrait_1795439821174.jpg',
  editorialDesk: '/src/assets/images/blog_editorial_workspace_1795439820282.jpg',
};

export const DEFAULT_THEME_CONFIG: ThemeConfig = {
  brandName: 'REACT',
  brandSubtitle: 'AGENCY',
  primaryCrimson: '#F41C54',
  secondaryIndigo: '#554B87',
  accentEmerald: '#33C670',
  actionBlue: '#2F6BFF',
  heroCategory: 'BUSINESS',
  heroTitle: 'HOW A GOOD TEAM CAN POSITIVELY IMPACT DELIVERY',
  heroExcerpt:
    'Cross-functional product teams align engineering, editorial design, and client strategy around measurable sprint milestones and transparent execution.',
  heroAuthor: 'Alex Mercer',
  heroDate: 'Nov 18, 2026',
  projectsTitle: 'OUR PROJECTS',
  projectsDescription:
    'We craft fast, responsive web applications and modular Blogger publishing themes built for editorial clarity, high Core Web Vitals scores, and effortless customization.',
  solutionsTitle: 'EXPLORE WE OFFER FOR MODERN TECHNOLOGY SOLUTIONS',
  solutionsDescription:
    'Full-stack engineering, cloud architecture, and search-ready Blogger templates engineered for modern agencies, SaaS teams, and independent digital publishers.',
  itServicesTitle: 'Preparing For Your Success Trusted IT Services.',
  itServicesDescription:
    'We are committed to complete client satisfaction with reliable infrastructure, proactive monitoring, and rapid release engineering tailored to your roadmap.',
};

export const SERVICE_TILES: ServiceTile[] = [
  {
    id: 'app-design',
    title: 'App Design',
    subtitle: 'Mobile-first interfaces, interactive prototypes, and component systems.',
    iconName: 'smartphone',
  },
  {
    id: 'web-design',
    title: 'Web Design',
    subtitle: 'High-contrast editorial grids and responsive Blogger theme layouts.',
    iconName: 'monitor',
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    subtitle: 'Semantic HTML5, clean XML widgets, and fast TypeScript frontends.',
    iconName: 'code',
  },
  {
    id: 'cloud-systems',
    title: 'UI Systems',
    subtitle: 'Reusable design tokens, accessibility audits, and theme documentation.',
    iconName: 'layers',
  },
];

export const STAT_COUNTERS: StatCounter[] = [
  { id: 'projects', value: 1458, label: 'Projects Completed', iconName: 'briefcase' },
  { id: 'coffee', value: 1247, label: 'Cups of Coffee', iconName: 'coffee' },
  { id: 'worldwide', value: 1763, label: 'Worldwide Clients', iconName: 'globe' },
  { id: 'active', value: 1763, label: 'Active Clients', iconName: 'building' },
];

export const CAPABILITY_CARDS: CapabilityCard[] = [
  {
    id: 'evolving-threat',
    title: 'Increased & Evolving Threat',
    description:
      'Proactive security audits and automated dependency scanning protect digital properties and client portals before vulnerabilities reach production.',
    iconName: 'layers',
  },
  {
    id: 'continuous-monitoring',
    title: 'Continuous Monitoring',
    description:
      'Real-time uptime checks, Core Web Vitals telemetry, and structured error alerting keep agency websites and publishing feeds resilient.',
    iconName: 'network',
  },
  {
    id: 'structural-weaknesses',
    title: 'Structural Weaknesses',
    description:
      'Clean semantic markup and scoped template variables eliminate brittle CSS overrides, broken mobile viewports, and layout regressions.',
    iconName: 'bug',
  },
  {
    id: 'attack-surface',
    title: 'Widening Attack Surface',
    description:
      'Role-scoped publishing workflows, strict asset validation, and hardened HTTPS delivery safeguard multi-author editorial teams.',
    iconName: 'shield',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    quote:
      'Switching our company engineering blog to the React Agency Blogger theme cut page load time in half and doubled organic newsletter signups within one quarter.',
    author: 'Hannah Lindqvist',
    role: 'VP of Digital Strategy',
    company: 'Northbridge Systems',
    outcome: '+118% Organic Traffic in 90 Days',
  },
  {
    id: 't2',
    quote:
      'Having both a high-impact agency landing layout and clean native Blogger XML widgets meant our editorial team could update case studies without touching code.',
    author: 'David Chen',
    role: 'Principal Product Lead',
    company: 'Vektor Cloud',
    outcome: '98 Lighthouse Performance Score',
  },
  {
    id: 't3',
    quote:
      'The structured typography and high-contrast color blocks immediately elevated our brand presence while keeping every article crisp and readable on mobile.',
    author: 'Sofia Alvarez',
    role: 'Managing Director',
    company: 'Studio Meridian',
    outcome: '3.4x Higher Case Study Read-Through',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'good-team-delivery',
    title: 'How a Good Team Can Positively Impact Delivery',
    category: 'Business',
    excerpt:
      'Cross-functional product teams align engineering, editorial design, and client strategy around measurable sprint milestones and transparent execution.',
    content: [
      'High-performing digital agencies rarely rely on heroics at the end of a release cycle. Instead, they structure every engagement around clear ownership, shared visual tokens, and predictable weekly checkpoints.',
      'When designers and frontend engineers collaborate inside the same component vocabulary, handoff friction disappears. Typography scales, spacing grids, and responsive breakpoints stay intact from early wireframes through production deployment.',
      'For content-driven organizations publishing on Blogger, pairing an agency-grade landing architecture with fast, semantic post templates ensures marketing campaigns and long-form editorial articles reinforce the same brand authority.',
    ],
    author: 'Alex Mercer',
    date: 'Nov 18, 2026',
    readTime: '5 min read',
    image: IMAGES.heroTeam,
  },
  {
    id: 'blogger-xml-architecture',
    title: 'Structuring Clean Blogger XML Sections for Agency Sites',
    category: 'Engineering',
    excerpt:
      'Learn how to organize b:section, b:widget, and Theme Designer variables so non-technical editors can manage layouts safely.',
    content: [
      'Modern Blogger templates go far beyond chronological diary feeds. By separating the hero spotlight, service blocks, and main Blog1 post loop into dedicated b:section containers, site owners gain full Layout-tab control.',
      'Defining color and font tokens inside <b:skin> using <Variable> declarations allows instant rebranding directly from the Blogger Theme Customizer without editing raw CSS.',
      'Always wrap inline CSS inside CDATA blocks and keep external script dependencies minimal to guarantee sub-second First Contentful Paint on mobile connections.',
    ],
    author: 'Elena Rostova',
    date: 'Nov 12, 2026',
    readTime: '6 min read',
    image: IMAGES.editorialDesk,
  },
  {
    id: 'seo-technical-audit',
    title: 'Technical SEO Checklists for Multi-Author Publications',
    category: 'SEO',
    excerpt:
      'Schema markup, canonical tag hygiene, and heading hierarchy rules that help agency blogs rank reliably in competitive search results.',
    content: [
      'Search visibility starts with clean semantic HTML. Reserve a single <h1> for the primary page or post headline, and structure supporting sections with logical <h2> and <h3> hierarchies.',
      'Structured JSON-LD metadata paired with concise meta descriptions and descriptive image alt attributes helps search engines index rich article previews cleanly.',
      'Monitor Core Web Vitals—especially Largest Contentful Paint and Cumulative Layout Shift—whenever adding hero photography or multi-column post grids.',
    ],
    author: 'Marcus Vance',
    date: 'Nov 04, 2026',
    readTime: '4 min read',
    image: IMAGES.techTablet,
  },
  {
    id: 'editorial-color-blocking',
    title: 'Editorial Color Blocking Without Sacrificing Legibility',
    category: 'Design',
    excerpt:
      'Using bold crimson, deep indigo, and emerald surfaces intentionally while preserving WCAG AA contrast across every viewport.',
    content: [
      'High-energy color blocking gives agency websites immediate memorability, separating key value propositions into distinct visual chapters as visitors scroll.',
      'The secret to keeping saturated backgrounds readable is disciplined contrast pairing: crisp pure white typography, generous line height, and calm neutral slate resting bands between intense color blocks.',
      'Testing every button, metadata line, and caption against 4.5:1 contrast ratios guarantees accessibility across desktop monitors and bright mobile screens alike.',
    ],
    author: 'Claire Bennett',
    date: 'Oct 27, 2026',
    readTime: '5 min read',
    image: IMAGES.itOffice,
  },
  {
    id: 'it-uptime-resilience',
    title: 'Continuous Monitoring Playbooks for Growing Agencies',
    category: 'Engineering',
    excerpt:
      'Automated health probes, zero-downtime asset pipelines, and practical incident response checklists for client web properties.',
    content: [
      'Reliability is a visible product feature. When client campaigns drive sudden traffic spikes, lightweight static markup and CDN-cached assets prevent origin bottlenecks.',
      'Pair synthetic uptime checks with automated visual regression snapshots on key landing routes so template updates never break mobile navigation or lead forms.',
    ],
    author: 'Priya Nair',
    date: 'Oct 19, 2026',
    readTime: '4 min read',
    image: IMAGES.itSpecialist,
  },
  {
    id: 'design-systems-scale',
    title: 'Scaling Condensed Display Typography Across Devices',
    category: 'Design',
    excerpt:
      'Pairing Oswald condensed uppercase display headlines with Plus Jakarta Sans body copy for sharp editorial balance.',
    content: [
      'Condensed display typefaces excel in split hero layouts because they pack strong visual authority into tight horizontal columns without awkward multi-line breaks.',
      'Using fluid CSS clamp() sizing ensures headlines scale smoothly from 375px mobile viewports up to 1440px widescreen monitors without overflowing adjacent photography.',
    ],
    author: 'Alex Mercer',
    date: 'Oct 11, 2026',
    readTime: '3 min read',
    image: IMAGES.editorialDesk,
  },
  {
    id: 'conversion-case-studies',
    title: 'Writing Agency Case Studies That Actually Convert Leads',
    category: 'Business',
    excerpt:
      'Replace vague marketing claims with measurable before-and-after metrics, architectural decisions, and client outcomes.',
    content: [
      'Prospective clients scan case studies looking for evidence that your team understands constraints similar to their own. Lead with the business problem and quantified outcome.',
      'Placing verified metrics immediately adjacent to service capabilities builds trust far faster than generic testimonial sliders.',
    ],
    author: 'Marcus Vance',
    date: 'Oct 02, 2026',
    readTime: '5 min read',
    image: IMAGES.heroTeam,
  },
  {
    id: 'core-web-vitals-2026',
    title: 'Optimizing Image Aspect Ratios for Zero Layout Shift',
    category: 'SEO',
    excerpt:
      'Explicit aspect-ratio containers and responsive object-cover framing eliminate CLS penalties on image-rich Blogger themes.',
    content: [
      'Unbounded images are the number one cause of layout shift on blog index pages. Always lock thumbnail containers to a consistent aspect ratio such as 4:3 or 16:9.',
      'Combined with lazy loading below the fold and preconnected font stylesheets, your Blogger site consistently scores above 95 on mobile speed audits.',
    ],
    author: 'Elena Rostova',
    date: 'Sep 24, 2026',
    readTime: '4 min read',
    image: IMAGES.techTablet,
  },
  {
    id: 'modular-widget-patterns',
    title: 'Building Reusable HTML Gadgets in Blogger Theme Layout',
    category: 'Engineering',
    excerpt:
      'Keep your Blogger XML maintainable by isolating stat counters, service tiles, and feature grids into clean widget sections.',
    content: [
      'Separating content blocks into discrete Blogger gadgets lets content managers reorder or hide sections right from the dashboard without touching template XML.',
      'Document each gadget class clearly inside your theme header so future maintainers can extend styles in minutes.',
    ],
    author: 'Priya Nair',
    date: 'Sep 15, 2026',
    readTime: '5 min read',
    image: IMAGES.itOffice,
  },
];
