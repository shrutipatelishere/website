# Westbrook University - College Website Template

A production-quality, multi-page college website template built with React, TypeScript, and Tailwind CSS. Features a classic, elegant design with a deep navy + ivory + gold color palette.

## Features

- **Multi-page React Application** with React Router
- **Responsive Design** - Mobile-first, works on all devices
- **Dark Mode** - Class-based toggle with system preference detection
- **Accessible** - WCAG-friendly with proper ARIA labels, focus states, and semantic HTML
- **SEO Ready** - Per-page titles and descriptions with react-helmet-async
- **Modern UI Components** - Built with shadcn/ui and Radix primitives
- **Form Validation** - Using react-hook-form and zod
- **Elegant Typography** - Cormorant Garamond for headings, Inter for body text

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** - Fast build tool
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality UI components
- **Radix UI** - Accessible primitives
- **Lucide React** - Beautiful icons
- **react-helmet-async** - Document head management
- **react-hook-form** + **zod** - Form handling and validation

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to the project
cd website/college4

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview  # Preview the production build
```

## Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, stats, programs, faculty, testimonials |
| `/about` | About | History, mission, values, leadership, timeline |
| `/admissions` | Admissions | Requirements, tuition, scholarships, application form |
| `/academics` | Academics | Programs overview with search and filters |
| `/departments/:slug` | Department | Dynamic department pages |
| `/campus-life` | Campus Life | Clubs, housing, athletics, facilities |
| `/events` | Events | Event listings with category filters and detail modals |
| `/news` | News | News articles with category filters |
| `/news/:slug` | Article | Individual news article pages |
| `/contact` | Contact | Contact form and information |

## Project Structure

```
src/
├── app/                  # App setup (Router, Layout)
├── components/
│   ├── layout/           # Navbar, Footer, PageShell
│   ├── sections/         # Reusable section components
│   └── ui/               # shadcn/ui components
├── data/                 # Mock data (programs, departments, etc.)
├── lib/                  # Utilities
├── pages/                # Page components
└── styles/               # Global styles
```

## Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```js
colors: {
  navy: { ... },    // Primary dark color
  ivory: { ... },   // Light backgrounds
  gold: { ... },    // Accent color
  stone: { ... },   // Neutral grays
}
```

CSS variables for shadcn/ui components are defined in `src/styles/globals.css`.

### Typography

Fonts are loaded from Google Fonts in `src/styles/globals.css`:
- **Headings**: Cormorant Garamond (serif)
- **Body**: Inter (sans-serif)

Change fonts in the `@import` statement and `tailwind.config.js` fontFamily.

### Logo/Crest

Replace `public/crest.svg` with your institution's logo. Update references in:
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`

### Content

All content is stored in mock data files under `src/data/`:
- `departments.ts` - Academic departments
- `programs.ts` - Degree programs
- `faculty.ts` - Faculty members
- `events.ts` - Campus events
- `news.ts` - News articles

Edit these files to customize content for your institution.

### Adding New Pages

1. Create a new page component in `src/pages/`
2. Add the route in `src/app/Router.tsx`
3. Add navigation links in `src/components/layout/Navbar.tsx`

## Components

### Layout Components

- **Navbar** - Sticky header with mega menu and mobile drawer
- **Footer** - Multi-column footer with newsletter signup
- **PageShell** - Consistent page layout with breadcrumbs

### Section Components

- **Hero** - Large hero section with CTAs
- **StatsStrip** - Statistics row
- **ProgramCard** - Program display cards
- **FacultyCarousel** - Scrollable faculty showcase
- **TestimonialCard** - Quote testimonials
- **AccordionFAQ** - Expandable FAQ sections
- **Timeline** - Milestone timeline
- **EventCard** - Event display with date badge
- **NewsCard** - News article cards
- **Pagination** - Page navigation

### UI Components (shadcn/ui)

Button, Card, Tabs, Accordion, Dialog, Sheet, Dropdown, Badge, Table, Form, Input, Select, Textarea, Toast, Switch, Label

## Dark Mode

Dark mode is implemented using Tailwind's class-based approach:

- Toggle in the Navbar (sun/moon icon)
- Persisted in localStorage
- Respects system preference on first visit

## Accessibility

- Skip link for keyboard navigation
- Proper heading hierarchy
- ARIA labels on interactive elements
- Focus visible states
- Color contrast compliant
- Semantic HTML structure

## License

MIT License - Feel free to use this template for your institution.

---

Built with care for academic excellence.
