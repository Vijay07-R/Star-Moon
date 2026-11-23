# Star Moon Beauty Salon — Frontend

React + TypeScript + Vite + Tailwind CSS v4 + React Router + Lucide React.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure
- `src/pages/` — the 7 routed pages (+ 404)
- `src/components/layout/` — Header, Footer, Layout, ScrollManager
- `src/components/sections/` — service/package/testimonial cards, gallery + lightbox, CTA, Why Choose Us
- `src/components/forms/` — Appointment & Contact forms, `useForm` hook
- `src/components/ui/` — Button, SectionHeading, PageHero, FilterTabs, Modal, SmartImage, etc.
- `src/data/` — services, packages, testimonials, gallery, team, site info (address, phone, hours)
- `src/services/api.ts` — form submit stubs; swap for real `fetch` calls when a backend exists
- `src/utils/validation.ts` — form validation rules

Photos are loaded from Unsplash (`src/data/images.ts`); replace with your own salon photos.
If any image fails to load, `SmartImage` shows a branded placeholder tile instead.
