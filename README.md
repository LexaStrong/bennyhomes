# 🏠 Beny Homes — Premium Real Estate Platform

![Beny Homes](public/assets/logo.png)

A modern, responsive real estate platform built for **Beny Homes Ghana** — a premium property agency specializing in luxury homes, apartments, townhouses, and villas in **Tema** and **Accra Spintex**.

> *"We are passionate about helping families find their dream homes in Ghana."*
> — Bernard Awuley, Lead Broker

---

## ✨ Features

### Public Website
- **Hero Slideshow** — Full-screen image carousel with smooth transitions, glassmorphic content overlay, and animated zoom effects
- **Property Listings** — Filterable grid (All / Spintex / Tema) with hover animations and Ghana Cedi (GH₵) pricing
- **Property Detail Pages** — Dedicated pages for each listing with specs (beds, baths, area), descriptions, prev/next navigation, and a similar listings section
- **About Section** — Company stats and brand story with editorial layout
- **Services Section** — Glassmorphic service cards highlighting key offerings
- **Contact Section** — Inquiry form with WhatsApp integration and Lucide vector icons
- **Responsive Design** — Fully mobile-optimized with relative text positioning and stacked layouts

### Admin Portal (`#/admin`)
- **Dashboard Stats** — Active properties count, total portfolio value, pending inquiries
- **Property Management** — Create, edit, and delete listings with local image uploads
- **Client Inquiries** — View and manage contact form submissions
- **Local Image Upload** — Upload property photos from your device (stored as Base64 in localStorage)

### Design System
- **Glassmorphism** — Translucent backgrounds with backdrop blur effects
- **Rounded UI** — Pill-shaped buttons, rounded cards, and circular icon containers
- **Typography** — Barlow Condensed (display), Playfair Display (serif accents), Inter (body)
- **Color Palette** — Gold accents (`#b3842b`), deep charcoal, warm off-white backgrounds

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [React 19](https://react.dev/) |
| Build Tool | [Vite 8](https://vite.dev/) |
| Routing | [React Router 7](https://reactrouter.com/) (HashRouter) |
| Icons | [Lucide React](https://lucide.dev/) |
| Styling | Vanilla CSS with CSS Custom Properties |
| Fonts | Google Fonts (Barlow Condensed, Playfair Display, Inter) |
| State | React Context API + localStorage persistence |

---

## 📁 Project Structure

```
benny homes/
├── public/
│   ├── assets/                # Property images and brand logo
│   │   ├── logo.png
│   │   ├── hero-villa.png
│   │   ├── luxury-interior.png
│   │   ├── property-townhouse.png
│   │   └── property-apartment.png
│   └── favicon.png
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.jsx/.css
│   │   ├── Hero.jsx/.css
│   │   ├── Properties.jsx/.css
│   │   ├── About.jsx/.css
│   │   ├── Services.jsx/.css
│   │   ├── Contact.jsx/.css
│   │   └── Footer.jsx/.css
│   ├── context/
│   │   └── PropertiesContext.jsx   # Global state provider
│   ├── data/
│   │   └── properties.js          # Seed listings dataset
│   ├── hooks/
│   │   └── useSEO.js              # Dynamic SEO/AEO/GEO hook
│   ├── pages/
│   │   ├── Home.jsx               # Landing page
│   │   ├── PropertyPage.jsx/.css  # Listing detail view
│   │   └── Admin.jsx/.css         # Management dashboard
│   ├── App.jsx                    # Router configuration
│   ├── index.css                  # Design tokens and resets
│   └── main.jsx                   # App entry point
├── index.html                     # SEO meta tags and fonts
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/LexaStrong/bennyhomes.git
cd bennyhomes

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
# Build optimized static assets
npm run build

# Preview the production build locally
npm run preview
```

---

## 🧭 Routes

| Route | Page | Description |
|-------|------|-------------|
| `#/` | Home | Hero, listings grid, about, services, contact, footer |
| `#/property/:id` | Property Detail | Full listing view with specs, inquiry form, similar listings |
| `#/admin` | Admin Portal | Dashboard to manage properties and client inquiries |

---

## 🔍 SEO, AEO & GEO

The platform implements comprehensive search optimization:

### SEO (Search Engine Optimization)
- Dynamic `<title>` and `<meta description>` per page via the `useSEO` hook
- OpenGraph tags (`og:title`, `og:description`, `og:image`, `og:type`, `og:locale`)
- Twitter Card meta tags for social sharing
- Canonical URL and robots directive
- Semantic HTML5 elements (`<main>`, `<nav>`, `<footer>`, `<section>`, `<article>`)
- Proper heading hierarchy (single `<h1>` per page)

### AEO (Answer Engine Optimization)
- **JSON-LD `FAQPage` schema** on the homepage with 3 structured Q&As
- **`SingleFamilyResidence` schema** on each property detail page with bedrooms, price (GHS currency), and address
- **`RealEstateAgent` schema** with business name, phone, and service area

### GEO (Geographical/Local SEO)
- `geo.region` → `GH-AA` (Greater Accra)
- `geo.placename` → `Accra Spintex, Ghana`
- `geo.position` and `ICBM` coordinates → `5.626, -0.101`
- `GeoCircle` schema with 25km service radius from Accra Spintex
- `addressLocality` and `addressRegion` in structured data

---

## 📱 Contact Information

| Channel | Details |
|---------|---------|
| 📞 Phone | [0246908872](tel:0246908872) |
| 💬 WhatsApp | [Chat on WhatsApp](https://wa.me/233246908872) |
| 🎵 TikTok | [@bennyhomesgh](https://www.tiktok.com/@bennyhomesgh) |
| 📘 Facebook | [@bernardawuley](https://www.facebook.com/bernard.awuley.7/) |

**Locations served:** Tema Communities (18, 25), Accra Spintex, East Legon, Cantonments

---

## 📄 License

© 2024–present Beny Homes Ghana. All rights reserved.

---

<p align="center">
  <strong>Beny Homes</strong> — Your Dream Home, Our Priority 🇬🇭
</p>
