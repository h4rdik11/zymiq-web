# Handoff: Zymiq Marketing Website

## Overview

This is the public marketing homepage for **Zymiq** — a cloud LIMS (Laboratory Information Management System) for ISO/IEC 17025-accredited testing & calibration labs. The page sells the product to lab managers, technical managers, and lab owners, leading with audit-readiness, calibration automation, ISO clause compliance, and a client portal.

It is a single long-scroll landing page with 12 sections: nav → hero → social proof → problem → solution → 3 feature deep-dives → comparison table → testimonials → blog teasers → final CTA → footer.

## About the Design Files

The files in this bundle (`index.html`, `styles.css`, `script.js`) are **design references created in HTML** — a working prototype that demonstrates the intended look, motion, and responsive behavior. They are **not** meant to be shipped verbatim.

The task is to **recreate this design in the target codebase's environment** using its established patterns and component library. For a marketing site this will most likely be **Next.js / Astro + React** with a CSS solution like Tailwind, CSS Modules, or styled-components. If no codebase exists yet, **Astro** or **Next.js (App Router)** are both strong choices for a content/marketing site with this much static layout and light interactivity — pick whichever fits the team. Treat the HTML/CSS as the source of truth for visual spec; re-implement using semantic components.

## Fidelity

**High-fidelity (hifi).** Final colors, typography, spacing, motion, and copy are all specified. Recreate the UI pixel-perfectly. Exact tokens are listed in the Design Tokens section below; the prototype CSS (`styles.css`) is the authoritative reference for any value not called out here.

---

## Global Layout

- **Container**: `max-width: 1200px`, centered, `padding: 0 32px` (→ `0 20px` below 720px).
- **Base font size**: 17px, `line-height: 1.65`.
- **Vertical rhythm**: sections use `padding: 120px 0` (`.section-pad`) or `160px 0` (`.section-pad-lg`). Collapses to 80px / 100px below 720px.
- The page alternates **dark** and **light** section backgrounds for rhythm — see each section below.

### Section background system
| Class | Background | Text |
|---|---|---|
| `.section-dark` | `linear-gradient(135deg,#1A1428 0%,#2A1F3D 100%)` | white |
| `.section-light` | `#FFFFFF` | `#1F1A2E` |
| `.section-tint` | `#FAF6FE` (brand tint) | dark |
| `.section-grey` | `#F7F7F9` | dark |

---

## Screens / Views

This is one page; "screens" below are the stacked sections in scroll order. Each section root carries a `data-screen-label` attribute (e.g. `01 Hero`) used for review tooling — these can be dropped in production.

### 0. Navigation (fixed)
- **Layout**: Fixed top bar, full width, `padding: 18px 0`. Flex row: logo (left) · primary links (center-left) · CTA group (right).
- **Initial state**: transparent background over the dark hero.
- **Scrolled state** (`.scrolled`, toggled when `scrollY > 80`): `background: rgba(26,20,40,0.85)`, `backdrop-filter: blur(12px)`, bottom border `1px solid rgba(141,87,192,0.15)`. Transition 300ms.
- **Logo**: SVG mark (26×26) + wordmark "zymiq" in **Inter Tight 600, -0.035em** tracking, 22px, white. Gap 9px.
- **Primary links**: "Features" and "Solutions" are dropdown triggers (chevron rotates 180° on hover); "Pricing" and "Blog" are plain links. 14px / 500 weight, `rgba(255,255,255,0.72)` → white on hover.
- **Dropdowns** (`.nav-dd`): appear on hover/focus-within. `min-width: 260px`, dark panel `rgba(26,20,40,0.96)` + blur(20px), border `rgba(141,87,192,0.20)`, radius 12px, `padding: 8px`. Items 14px, hover bg `rgba(141,87,192,0.18)`. Animate opacity + `translateY(-4px → 0)`, 180ms.
- **CTA group**: "Sign in" text link · 1px vertical divider · "Start free trial" primary button.
- **Mobile (≤1024px)**: primary links + CTA buttons hide; a hamburger button appears. Opens a right-side **drawer** (`width: min(360px, 88vw)`, slides in via `translateX(100% → 0)`, 280ms) with a dimmed overlay. Drawer groups links under uppercase labels (Features / Solutions / Company) and pins both CTAs to the bottom. Opening sets `body { overflow: hidden }`.

### 1. Hero (`.hero`, dark)
- **Layout**: `padding: 180px 0 120px`. Two-column grid `1fr 1fr`, gap 64px, vertically centered. Collapses to single column ≤1024px (copy then mockup).
- **Background layers** (stacked, behind content):
  - `.hero-mesh`: blurred radial-gradient blobs (purple/violet/orange), `filter: blur(40px)`, opacity 0.4, slow `meshDrift` drift animation (60s, alternate).
  - `.hero-grain`: SVG fractal-noise texture, opacity 0.18, `mix-blend-mode: overlay`.
  - `.grid-overlay`: 64px calibration grid lines, `rgba(255,255,255,0.04)`.
- **Eyebrow**: "ISO/IEC 17025:2017 · NABL · A2LA · UKAS · NATA" — 12px, uppercase, 0.10em tracking, `--text-3`.
- **H1**: 72px / 900 weight / line-height 1.05 / -0.035em. Three lines: "The LIMS Built for" / "ISO 17025" (gradient text) / "Certified Labs." The gradient line uses `linear-gradient(90deg,#8D57C0,#C084FC)` clipped to text. Words animate in via `word-stagger` (each word `translateY(20px)→0` + fade, 80ms stagger).
- **Subhead**: 20px, `--text-3`, max-width 520px.
- **CTA row**: "Start free trial" (primary) + "Watch 3-min demo" (ghost-light with play icon).
- **Trust line**: 3 items with "✦" — "No credit card required · Live in under 4 days · Indian data residency". 13px.
- **Hero mockup** (`.hero-mockup`): a browser-chrome card (`.mockup`) gently floating (`heroFloat`, 4s). Contains a LIMS dashboard:
  - Browser bar: 3 traffic-light dots + mono URL `app.zymiq.io/dashboard`.
  - Dashboard grid `180px 1fr`: left sidebar (logo + nav items Dashboard/TRFs/Equipment/Compliance/Clients) + main panel.
  - Main: green compliance banner ("15 / 17 clauses ISO 17025 current"), 3 KPI cards (TRFs this month 142 / Cal due 30d 7 / Open findings 3), and a TRF table with status badges.
  - Sample TRF rows (sample data — replace with real or keep as illustrative): Veridian Power · Dallas, Arclight Utilities, Tridev Manufacturing · Mumbai, Solanki Auto Works.
  - On mobile (≤720px) the sidebar hides; dashboard becomes single column.

### 2. Social Proof (`.social-proof`, dark `#1A1428`)
- **Layout**: centered, `padding: 80px 0 100px`.
- Label "Trusted by labs accredited under" → row of accreditation "chips" (pill, 1px border): NABL, A2LA, UKAS, NATA, EIAC, ILAC. Hover brightens border to brand + swatch to `--brand-light`.
- **Stat row**: 3 cards, grid `repeat(3,1fr)`, max-width 720px. Each: large mono number + label. Values **count up** when scrolled into view:
  - `17` — "ISO clauses covered end-to-end"
  - `< 4` — "Days from sign-up to your first TRF"
  - `100%` — "Traceability chain coverage"
  - Count-up reads `data-target`, optional `data-prefix` / `data-suffix`. Single column ≤720px.

### 3. Problem (`.problem`, light)
- Centered head: eyebrow "The problem", H2 "Most labs are one audit away from a crisis.", lede paragraph.
- **Pain grid**: 3 cards, `repeat(3,1fr)` → 1 column ≤1024px. Each card has a left accent bar (`--error` red, or `--warning` amber for `.warn`), an icon tile, H3, and body. Cards reveal with a staggered delay (0 / 120 / 240ms) and the accent bars pulse once on entry.
  - Card 1 (red): "Calibration lapsed. Scope flagged."
  - Card 2 (amber): "Findings from last year. Still open."
  - Card 3 (amber): "No record of who approved what."

### 4. Solution (`.section-tint`)
- Centered head: "The solution" / "Zymiq is the catalyst your lab was missing."
- **Pillar grid**: 4 cards, `repeat(2,1fr)` → 1 column ≤1024px. Each: icon tile, H3, body, "Explore →" link. Hover: lift `translateY(-4px)`, shadow, and a left accent bar grows top→bottom (`height: 0 → 100%`, 280ms); a soft radial glow fades in. Cards: TRF & Sample Management · Equipment & Calibration · ISO 17025 Compliance · Client Portal.

### 5. Feature — ISO Compliance (`#features-iso`, dark)
- **Layout** (`.feature-deep`): two columns `1fr 1fr`, gap 80px, centered. **Mockup left, copy right.** Single column ≤1024px (copy first, mockup second).
- **Mockup** (`.mock-compliance`): browser card → compliance view. Green banner "15 / 17 clauses current · 88%", a progress bar that **animates its fill to 88%** when scrolled in (reads `data-fill`), a 2-col clause grid (status dots scale-in; amber/red variants), and 3 finding rows with status badges.
- **Copy**: eyebrow "ISO 17025 Compliance", H2 "Audit-ready. Every day, not just assessment week.", lede, 3 feature bullets (icon + title + one-liner): Clause-by-clause coverage · Finding lifecycle · Internal review sign-off. CTA "See compliance features" (ghost-light).

### 6. Feature — Calibration (`#features-cal`, light)
- Same `.feature-deep` structure but **copy left, mockup right** (`.copy-right` modifier — note: on mobile both feature sections stack copy-first via media query).
- **Mockup** (`.mock-equipment`, light chrome): an equipment register table. Columns: Equipment ID (mono) · Instrument · Cal due (mono) · Status badge. One row is `.overdue` (red left accent + "Overdue" badge). ≤720px the "Cal due" column hides.
- **Copy**: "Equipment & Calibration" / "Your calibration register. Automated." Bullets: Due date alerts · Traceability chain · Auto out-of-scope flagging. CTA "See calibration features" (ghost-dark).

### 7. Feature — Client Portal (`#features-portal`, dark, reversed gradient)
- `.feature-deep`, **mockup left, copy right.**
- **Mockup** (`.mock-portal`): split into two stacked panes divided by a glowing hairline.
  - Top "Client view": a TRF with a 4-step horizontal **tracker** (Submitted → Approved → In Progress → Ready, all done = filled purple bubbles with checks), plus a green "Certified Report" row with a Download button.
  - Bottom "Lab view": an intake queue with 2 incoming requests, each with Approve / Decline buttons.
- **Copy**: "Client Portal" / "Give your clients visibility. Win repeat business." Bullets: Request marketplace · Real-time progress tracking · Digital report delivery. CTA "See client portal".

### 8. Comparison (`.comparison`, grey)
- Centered head: "Why Zymiq" / "Built for labs. Not for IT departments."
- **Table** (`.comp-table`): 4 columns — feature label · **Zymiq** (highlighted) · Legacy enterprise LIMS · Excel + email. The Zymiq column header is solid `--brand` purple; its cells have a tinted background. Cells use check (brand) / cross (red) / plus (amber) icon+label treatments. Rows: Time to go live · ISO 17025 built in · Calibration tracking · Findings management · Client portal · Multi-lab support · Pricing.
- On scroll-in, a vertical highlight band behind the Zymiq column scales in (`scaleY(0→1)`, 700ms). `script.js` positions this band over the Zymiq column on load + resize. Font shrinks ≤720px.

### 9. Testimonials (`.section-light`)
- Centered head: "Customer stories" / "Labs that stopped dreading audit week."
- **3 cards**, `repeat(3,1fr)` → 1 column ≤1024px. Each: oversized decorative quote glyph (`"`, brand, 12% opacity), blockquote, and an author row (gradient avatar with initials + role + lab·city). Hover: `scale(1.02)` + shadow + avatar gets a 3px brand ring. Authors: RK · Electrical Testing Lab · Boston; SM · Materials Testing Lab · New Delhi; AP · Chemical Testing Lab · Mumbai.

### 10. Blog (`#blog`, `.section-tint`)
- Centered head: "From the blog" / "Everything your lab needs to know about ISO 17025."
- **3 cards**, `repeat(3,1fr)` → 1 column ≤1024px. Each: 16:9 thumbnail (gradient + inline decorative SVG pattern — replace with real article imagery in production), category chip, H3 title, excerpt, footer row (mono read-time + "Read →"). Hover: lift + shadow, arrow nudges right. Below grid: centered "See all articles" ghost-dark button.

### 11. Final CTA (`.final-cta`, `.section-pad-lg`)
- Dark gradient `linear-gradient(135deg,#1A1428 0%,#2A1F3D 60%,#3B2055 100%)`, centered text.
- Decorative layers: faint hexagon pattern (`.hex-overlay`, opacity 0.06) + a slowly **rotating molecular ring** SVG (`.molecular-ring`, 20s linear).
- **H2** (white): "Your next NABL assessment starts today." 56px / 900.
- Paragraph (white 70%), then a large primary button "Start free trial — no credit card required" with a soft **pulsing glow** (`ctaPulse`, 2.5s).
- **Trust strip** (`.final-trust`): block-level centered flex **below** the button: "ISO 17025 ready · Cancel anytime". White 85%.

### 12. Footer (`.footer`, `#1A1428`)
- Top row: logo + tagline "The catalyst for certified labs." (left) · social icons X/LinkedIn/GitHub (right). Border-bottom hairline.
- 4 link columns (`repeat(4,1fr)` → 2 cols ≤1024px → 1 or 2 cols on phones): Product · Solutions · Compare · Company. Column headers 11px uppercase `--brand-light`.
- Bottom row: "© 2026 Zymiq. All rights reserved." (left) + mono tagline (right). Stacks ≤720px.

---

## Interactions & Behavior

All JS lives in `script.js` (vanilla, no dependencies). Re-implement equivalently in the target framework (hooks / lifecycle + IntersectionObserver, or a scroll-animation lib).

- **Scroll progress bar** (`.scroll-progress`): 2px gradient bar fixed at top, width = scroll %. Gradient `#8D57C0 → #E8691A`.
- **Sticky nav**: add `.scrolled` when `scrollY > 80`.
- **Mobile drawer**: hamburger opens; close button / overlay click / nav-anchor click closes. Locks body scroll while open.
- **Scroll reveal**: IntersectionObserver (`threshold: 0.15`, `rootMargin: '0px 0px -8% 0px'`) adds `.in-view` to `.reveal`, `.reveal-left`, `.reveal-clip`, `.stagger`, `.stat`, `.pain-grid`, `.comp-table`, `.mock-compliance`. Each element unobserved after firing once. Reveal = fade + translate, 600–700ms, easing `cubic-bezier(0.16,1,0.3,1)`.
- **Count-up**: when a `.stat` enters view, its `.stat-val` animates from 0 to `data-target` over 1200ms (cubic ease-out). Integers render whole; decimals to 1 place. Honors `data-prefix` / `data-suffix`.
- **Compliance bar fill**: when `.mock-compliance` enters view, `.fill` width animates to its `data-fill`%.
- **Comparison highlight band**: positioned over the Zymiq column on load + `resize`; scales in vertically when the table enters view.
- **Hero word stagger**: H1 words split into spans with incremental `animation-delay`.
- **Smooth scroll**: in-page `#anchor` links smooth-scroll (and close the drawer).

### Motion tokens
- Standard easing: `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`.
- Reveal: 600–700ms. Dropdowns: 180ms. Nav bg: 300ms. Drawer: 280ms. Count-up / bar fill: 1200ms.
- Ambient loops: `meshDrift` 60s, `heroFloat` 4s, `ringRotate` 20s, `ctaPulse` 2.5s.
- **Respect `prefers-reduced-motion`**: the prototype does not currently gate ambient loops — in production, disable the infinite/decorative animations (mesh drift, float, ring, pulse) and the entrance transforms under `prefers-reduced-motion: reduce`.

## State Management

Minimal — this is a marketing page. State needed:
- `navScrolled: boolean`
- `drawerOpen: boolean` (+ body scroll lock side-effect)
- Per-element `hasRevealed` (or rely on a one-shot IntersectionObserver / framework equivalent)
- Nav dropdown open state if not done purely with CSS `:hover`/`:focus-within` (keep keyboard accessibility — use focus-within or explicit aria-expanded handling).

No data fetching. Blog cards / nav links are placeholder `#` hrefs — wire to real routes/CMS in production.

---

## Design Tokens

### Colors
```
/* Brand */
--brand:        #8D57C0   /* primary purple */
--brand-dark:   #5C2E8C
--brand-tint:   #FAF6FE
--brand-border: #EAD9F5
--brand-light:  #C084FC

/* Surfaces (dark) */
--bg-dark-1:    #1A1428
--bg-dark-2:    #2A1F3D
--bg-dark-3:    #3B2055
--bg-light:     #F7F7F9
--white:        #FFFFFF

/* Text */
--text:         #1F1A2E
--text-2:       #6B7090
--text-3:       #9B9AAB

/* Accents */
--catalyst:     #E8691A   /* orange */
--success:      #52C41A
--warning:      #FA8C16
--error:        #C2392E
```

### Status badge palettes (chips/badges)
- In Progress: bg `#E6F4FF`, text `#0958D9`, dot `#1677FF`
- Report Ready / Resolved: bg `#F6FFED`, text `#389E0D`, dot `#52C41A`
- Draft: bg `#F0EDFA`, text `#6B4FAE`, dot `#8D57C0`
- In Review / At Cal: bg `#FFF4E6`, text `#AD6800`, dot `#FA8C16`
- Overdue: bg `#FFF1F0`, text `#CF1322`, dot `#C2392E`
- Closed: bg `#F5F5F5`, text `#8C8C8C`, dot `#BFBFBF`

### Typography
- **Display / UI**: Inter (weights 400–900). H1/H2 use 800–900; -0.03 to -0.035em tracking.
- **Logo wordmark**: Inter Tight 600, -0.035em.
- **Monospace** (IDs, stats, URLs, dates): JetBrains Mono, `font-feature-settings: 'tnum' 1`.
- Scale: H1 72px (→56→44→38 responsive) · H2 48px (→40→32) · feature H2 44px · final-CTA H2 56px · H3 28px · body 17px · lede 18–20px · small/labels 11–14px.
- Eyebrows: 12px, uppercase, 0.10em tracking, brand color, with a 24×2px leading rule.

### Spacing & radii
```
--r-input: 6px    --r-btn: 8px    --r-card: 12px    --r-modal: 16px    --r-pill: 99px
Section padding: 120px (lg 160px) → 80px (lg 100px) on mobile
Container: max 1200px, side padding 32px → 20px
```

### Shadows
```
--shadow-card:  0 2px 8px -2px rgba(31,26,46,0.06)
--shadow-hover: 0 8px 32px -8px rgba(141,87,192,0.20)
--shadow-glow:  0 0 40px rgba(141,87,192,0.25)
```

### Buttons
- `.btn-primary`: brand bg, white text; hover → gradient `135deg #8D57C0→#5C2E8C`, glow shadow, `scale(1.02)`. Arrow icon nudges +3px on hover.
- `.btn-ghost-light`: transparent, `1px rgba(255,255,255,0.18)` border, white-ish text (use on dark sections).
- `.btn-ghost-dark`: transparent, brand-border, `--text-2`; hover → brand text/border (use on light sections).
- Sizes: base `10px 18px`, `.btn-lg` `14px 24px`, `.btn-xl` `18px 32px`.

### Responsive breakpoints
- **≤1024px**: nav collapses to hamburger/drawer; hero, feature deep-dives, pain grid, pillars, testimonials, blog all go single-column; footer → 2 columns; headings step down.
- **≤720px**: container padding 20px; section padding 80/100px; stat row & comparison/blog single column; dashboard sidebar hidden; clause grid single column; equipment "Cal due" column hidden; footer bottom stacks.
- **≤480px**: H1 38px; final-CTA H2 30px; footer → 1 column.

---

## Assets

In `assets/` (real brand assets from the original logo design handoff — reuse the equivalents from your brand system if one exists):
- `zymiq-mark-brand.svg` — logo mark, brand purple (the "Bond-Line Z").
- `zymiq-mark-white.svg` — logo mark, white (for dark backgrounds).
- `favicon.svg` — browser favicon.

The nav/footer/drawer render an inline SVG version of the mark next to the "zymiq" wordmark. Other illustrative graphics (blog thumbnails, hero mesh, hex/molecular decorations) are **CSS/inline-SVG decoration**, not real assets — replace blog thumbnails with real article imagery in production.

Icons throughout are inline stroke SVGs (Feather-style, 1.5–2px stroke). Use your icon library's equivalents (Feather/Lucide map almost 1:1).

Fonts load from Google Fonts (Inter, Inter Tight, JetBrains Mono) — self-host in production for performance/privacy.

## Files

- `index.html` — full page markup, all 12 sections. Sections carry `id`s (`#features-iso`, `#features-cal`, `#features-portal`, `#comparison`, `#blog`, `#solution`, `#top`) and `data-screen-label` attributes.
- `styles.css` — all styles, design tokens (`:root`), component styles, animations, and responsive media queries. **Authoritative for any value not in this README.**
- `script.js` — vanilla JS: scroll progress, sticky nav, mobile drawer, IntersectionObserver reveals, count-up, compliance-bar fill, comparison highlight positioning, hero word-stagger, smooth scroll.
- `assets/` — logo + favicon SVGs.

### Copy / data notes
All client names in mockups are fictional (Veridian Power · Dallas, Arclight Utilities, Tridev Manufacturing · Mumbai, Solanki Auto Works) and cities are illustrative (Dallas, Mumbai, Boston, New Delhi). Swap for real customers/permissioned logos before launch, or keep as representative sample data.
