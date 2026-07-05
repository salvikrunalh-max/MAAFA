# Maafa Recovery Counseling Services — Website

Premium Next.js website for **Maafa Recovery Counseling Services, PLLC (MRCS)**.

## Quick Start

```bash
cd mrcs-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Framer Motion** — scroll animations, carousel, parallax hero
- **Lucide React** — icons
- **Inter** — typography

## Project Structure

```
src/
├── app/                    # Routes (pages)
│   ├── page.tsx            # Homepage
│   ├── about/              # Full resume & credentials
│   ├── contact/            # Booking + contact info + map
│   ├── services/           # Services index + 5 SEO sub-pages
│   ├── for-professionals/
│   ├── court-services/
│   ├── podcast/
│   └── privacy/
├── components/
│   ├── layout/             # Navbar, Footer, FloatingBookingCTA
│   ├── home/               # Homepage sections
│   ├── ui/                 # Reusable UI primitives
│   └── booking/            # SimplePractice widget
└── lib/
    ├── content.ts          # All site copy (edit here)
    └── constants.ts        # Navigation links
```

## Customization Checklist

### 1. SimplePractice Booking Widget (Priority)

Edit **`src/components/booking/SimplePracticeWidget.tsx`**:

1. Log in to SimplePractice → **Settings → Client Portal → Online Appointment Requests**
2. Copy your embed code (iframe or script)
3. Replace the placeholder `<div id="spwidget">` block with your embed

### 2. Replace Placeholder Images

Drop real photos into **`public/images/`** (see `public/images/README.md`).

### 3. Update Site Copy

Edit **`src/lib/content.ts`** for services, bio, testimonials, court services, etc.

### 4. Podcast Embed

Edit **`src/app/podcast/page.tsx`** — paste your Spotify/Apple Podcasts iframe.

### 5. Insurance Logos (Optional)

Replace text badges in **`src/components/ui/TrustBadges.tsx`** with actual logo images.

### 6. Deploy

```bash
npm run build
npm start
```

Deploy to Vercel, Netlify, or any Node.js host.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Navy | `#0A2540` | Primary, headers, footer |
| Teal | `#00BFA5` | CTAs, accents |
| Earth | `#8B5A2B` | Warm accents |
| Gray Soft | `#F5F7FA` | Section backgrounds |

## License

Private — Maafa Recovery Counseling Services, PLLC.
