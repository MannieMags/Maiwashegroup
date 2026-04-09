# Maiwashe Corporate Group – Website (Staging)

This is the **staging version** of the Maiwashe Corporate Group website, built for review and approval before going live.

---

## What Was Built

A fully responsive, multi-page corporate website for **Maiwashe Corporate Group** — a specialised professional services group focused on corporate restructuring, insolvency advisory, forensic investigations, and asset recovery.

### Pages

| Page | Purpose |
|------|---------|
| **Home** (`index.html`) | Hero introduction, core services overview, industries served, engagement process, and call-to-action |
| **About Us** (`about.html`) | Company overview, vision & mission, group structure (Advisory, Recoveries, Forensics), core values, case studies, asset lifecycle, methodology, compliance framework, and engagement steps |
| **Services** (`services.html`) | Detailed service listings — Asset Tracing, Financial Investigations, Corporate Intelligence, Forensic Audits, Recovery Support, plus dedicated sections for Corporate Restructuring, Business Turnaround, Insolvency Advisory, the 6-step Recovery Methodology, and the Government Asset Control Framework |
| **Industries** (`industries.html`) | Sector-specific solutions for Banks, Liquidators, Attorneys, Business Rescue Practitioners, and Government/SOEs |
| **Capability Statement** (`capability.html`) | Maiwashe Recoveries focused page — services, industries, and differentiators |
| **Contact** (`contact.html`) | All 4 office locations, phone, email, and a contact form |

### Content Sources

The website content was built from four source documents provided by the client:

1. **Doc 1** — Maiwashe Corporate Group company profile (overview, group structure, all service lines, methodology, case studies, values, contact info)
2. **Doc 2** — Maiwashe Forensics Government Asset Control & Recovery brochure (framework diagram, government services, design direction)
3. **Doc 3** — Maiwashe Forensics Government Asset Verification capability statement (asset lifecycle, investigation methodology, compliance, engagement process)
4. **Doc 4** — Business card and logo visual design concepts (colour palette, typography, contact details, tagline)

---

## Design & Technical Details

### Colour Palette (from Doc 4)
- **Dark Blue** `#0D1B2A` — primary background
- **Teal** `#007D88` — accent colour
- **Gold** `#FFD700` — highlights, active states, gradient accents
- **White/Light Grey** — card backgrounds and text contrast

### Typography
- **Lato** — headings
- **Open Sans** — body text

### Responsive Design
- **Mobile-first CSS** with 4 breakpoints: small mobile (≤380px), mobile (≤768px), tablet (≥600px), desktop (≥960px)
- Slide-in mobile navigation drawer with dark overlay
- Touch-friendly tap targets (44px minimum)
- Fluid typography using `clamp()`
- Single-column stacking on mobile, multi-column grids on tablet/desktop

### Animations & UX
- Scroll-triggered fade-in animations using IntersectionObserver
- Staggered card reveal effects
- Hover states on cards with gradient top borders and icon scaling
- Gradient underline accent on all section titles (teal → gold)
- Body scroll lock when mobile nav is open
- Escape key closes mobile nav
- `prefers-reduced-motion` respected for accessibility

### Accessibility
- Semantic HTML structure
- `aria-label` on interactive elements
- Keyboard-navigable mobile menu
- Print stylesheet included

---

## How to Run Locally

```bash
node server.js
```

Opens at **http://localhost:8080/**

---

## Office Locations (on site)

1. **Sandton** — GP Spaces Atrium on 5th, 9th Floor, 5th Street, Sandhurst
2. **Midrand** — 64 Roan Crescent, Corporate Park North
3. **Polokwane** — 130 Suid Street
4. **Thohoyandou** — 862 Long Street

**Phone:** 082 819 1705
**Email:** info@maiwashegroup.co.za

---

## Status

🟡 **Staging** — ready for client review. Not yet deployed to production domain.

### Next Steps
- Client review and sign-off on content and design
- Add real logo/brand assets when finalised
- Connect contact form to email backend or form service
- Deploy to production hosting (e.g. Netlify, Vercel, or custom server)
- Point `www.maiwashegroup.co.za` DNS to live host
