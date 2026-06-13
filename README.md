# Responsive UI – Infotech Wizard Frontend Internship Assessment

This repository contains my submission for the frontend internship selection assignment given by **Infotech Wizard**. The task involved converting a provided Figma `.fig` design file into a fully responsive web interface.

---

## Assignment Brief

A Figma design file was shared containing a hero section and one additional section. The requirements were:

- Convert the Figma design into a responsive implementation
- Ensure pixel-perfect accuracy against the provided design
- Make the layout fully responsive across all screen sizes
- Write clean and properly structured code

> **Submission Criteria:** A live deployed URL at Netlify/Vercel was required. Submissions without a live link were not reviewed.

---

## Design Reference

The Figma `.fig` file was provided via Google Drive. It included:

- **Hero Section** — headline, body text, checklist, CTA buttons, rating badge, trusted professionals badge
- **Why Compliance Section** — two-column layout with feature cards and decorative elements
- **Navbar** — desktop navigation + tablet/mobile slide-out drawer with icons
- **Typography specs** across Desktop, Tablet, and Mobile breakpoints
- **Hover states** for buttons and cards

---

## Tech Stack

- **React** with Vite
- **Tailwind CSS v4**
- **Vanilla CSS** for component-level styles
- **Google Fonts** – Roboto

---

## Responsive Breakpoints

| Viewport | Breakpoint |
|---|---|
| Desktop | 1440px |
| Tablet | 768px |
| Mobile | 375px |

---

## Typography Spec (from Figma)

### Desktop

| Style | Font | Size | Weight | Line Height |
|---|---|---|---|---|
| H1 Heading | Roboto | 64px | Bold | 85 |
| H2 Heading | Roboto | 48px | Semibold | 70 |
| Large Title | Roboto | 24px | Semibold | 32 |
| Title | Roboto | 20px | Medium | Auto |
| Body Regular | Roboto | 18px | Regular | 32 |
| Body Medium | Roboto | 18px | Medium | Auto |

### Tablet

| Style | Font | Size | Weight | Line Height |
|---|---|---|---|---|
| H1 Heading | Roboto | 54px | Bold | 75 |
| H2 Heading | Roboto | 46px | Semibold | 60 |
| Large Title | Roboto | 24px | Semibold | 32 |
| Title | Roboto | 20px | Medium | Auto |
| Body Regular | Roboto | 18px | Regular | 32 |
| Body Medium | Roboto | 18px | Medium | Auto |

### Mobile

| Style | Font | Size | Weight | Line Height |
|---|---|---|---|---|
| H1 Heading | Roboto | 38px | Bold | 48 |
| H2 Heading | Roboto | 34px | Semibold | 48 |
| Large Title | Roboto | 22px | Semibold | 32 |
| Title | Roboto | 19px | Medium | Auto |
| Body Regular | Roboto | 18px | Regular | 32 |
| Body Medium | Roboto | 18px | Medium | Auto |

---

## Hover States

As per the design spec:

- **Primary button** — background shifts on hover with smooth transition
- **Outline button** — fills in on hover
- **Feature cards** — lifts with `translateY(-4px)`, border highlight, subtle box-shadow
- **Nav links** — color transitions to brand primary on hover

---

## Mobile Navigation

On screens below 1024px, the navbar switches to a hamburger icon. Tapping it opens a slide-out drawer from the right containing:

- Logo + close button
- All nav links with their respective icons
- Contact Us button pinned at the bottom

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── MobileDrawer.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   └── WhyCompliance.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Logo.jsx
│       └── Icons.jsx
├── constants/
│   └── index.js
├── hooks/
│   └── useMediaQuery.js
├── pages/
│   └── HomePage.jsx
└── styles/
    ├── index.css
    ├── HeroSection.css
    └── WhyCompliance.css
```

---

## Getting Started

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`

---

*Assignment issued by the HR Team, Infotech Wizard.*
