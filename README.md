# Portfolio — Divyanshu Gupta

A premium, modern developer portfolio with galaxy animations, GitHub API integration, scroll effects, and a terminal-inspired design language.

**Live:** [divyanshu-portfolio.vercel.app](https://portfolio-divyanshu-git.vercel.app) • **GitHub:** [@divyanshu-builds-ui](https://github.com/divyanshu-builds-ui)

---

## ✨ Features

### UI & Animations
- 🌌 Galaxy starfield background with shooting stars & nebula clouds
- ✨ Shimmer gradient text on name
- ⌨️ Typing animation in hero section
- 🎯 Scroll-triggered reveal animations (fade, slide, scale, blur)
- 🔮 Cursor glow effect (desktop)
- 📍 Floating dot navigation for section tracking
- 🚀 Preloader with animated logo & progress bar
- ↕️ Parallax scroll depth effect
- 🎮 Easter egg terminal (Konami code: ↑↑↓↓←→←→BA)

### Smart Features
- 📡 **GitHub API** — Projects auto-fetch from GitHub repos (no manual updates)
- 🔥 **Live streak counter** — Auto-calculates days since coding started
- 📊 **Vercel Analytics** — Visitor tracking built-in
- 💬 **Hire Me prefill** — Click "Hire Me" → form auto-fills with message
- 📄 **Inline resume viewer** — View + fullscreen + download PDF
- 📝 **Dynamic data** — Edit 1 file to update projects, blog, testimonials
- 🔍 **SEO optimized** — Meta tags, OG, Twitter cards, sitemap, robots.txt

### Mobile-First
- 📱 Fully responsive with touch-friendly interactions
- 👆 Swipe carousel for projects on mobile
- 💬 Floating "Let's Work Together" CTA (hides near footer)
- 🎯 Smart navbar — hides on scroll down, shows on scroll up
- ⬆️ Back to top button

### Pages
- 🏠 Home — Single page with all sections
- 🧑‍🚀 404 — "Lost in Space" animated page

---

## 📁 Folder Structure

```
portfolio/
├── client/                          → Frontend (React + Vite + Tailwind)
│   ├── public/
│   │   ├── favicon.svg              → Custom DG logo favicon
│   │   ├── my-cv.pdf               → Updated resume PDF
│   │   ├── robots.txt              → SEO crawler rules
│   │   └── sitemap.xml             → SEO sitemap
│   ├── src/
│   │   ├── components/
│   │   │   ├── Analytics.jsx       → Google Analytics hook
│   │   │   ├── AnimatedBG.jsx      → Galaxy starfield + nebula orbs
│   │   │   ├── BackToTop.jsx       → Scroll to top button
│   │   │   ├── Counter.jsx         → Animated number counter
│   │   │   ├── CursorGlow.jsx      → Mouse-follow glow (desktop)
│   │   │   ├── DotNav.jsx          → Floating side dot navigation
│   │   │   ├── EasterEgg.jsx       → Hidden terminal (Konami code)
│   │   │   ├── FloatingCTA.jsx     → Mobile floating hire button
│   │   │   ├── Footer.jsx          → Footer with socials
│   │   │   ├── Navbar.jsx          → Smart hide/show/shrink navbar
│   │   │   ├── Preloader.jsx       → Loading screen with progress
│   │   │   ├── Reveal.jsx          → Scroll animation wrapper
│   │   │   └── Skeleton.jsx        → Loading skeleton placeholders
│   │   ├── data/
│   │   │   └── portfolio.js        → ⭐ Central data file (edit this!)
│   │   ├── hooks/
│   │   │   └── useGitHub.js        → GitHub API integration hook
│   │   ├── pages/
│   │   │   └── NotFound.jsx        → 404 "Lost in Space" page
│   │   ├── sections/
│   │   │   ├── About.jsx           → Bio + location + tags
│   │   │   ├── Blog.jsx            → Blog posts (Coming Soon state)
│   │   │   ├── Contact.jsx         → Form + socials + FAQ
│   │   │   ├── Hero.jsx            → Landing with typing + shimmer
│   │   │   ├── MyStory.jsx         → Timeline journey
│   │   │   ├── Projects.jsx        → GitHub API cards + counters
│   │   │   ├── Resume.jsx          → Inline PDF viewer
│   │   │   ├── TechStack.jsx       → Skills grid with color hover
│   │   │   ├── Testimonials.jsx    → Reviews (Coming Soon state)
│   │   │   └── WhyMe.jsx           → Value proposition cards
│   │   ├── App.jsx                 → Root with router + analytics
│   │   ├── main.jsx                → Entry point
│   │   └── index.css               → Tailwind + galaxy + glass styles
│   ├── index.html                  → SEO meta, OG tags, fonts
│   ├── tailwind.config.js          → Custom colors, animations
│   ├── vite.config.js              → Vite config
│   ├── postcss.config.js           → PostCSS config
│   ├── vercel.json                 → SPA routing for Vercel
│   └── package.json
├── server/                          → Backend (Express + Nodemailer)
│   ├── index.js                    → Mail API endpoint
│   ├── .env                        → EMAIL_USER, EMAIL_PASS
│   ├── vercel.json                 → Vercel serverless config
│   └── package.json
├── .gitignore
└── README.md
```

---

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| **Framework** | React 18 |
| **Build** | Vite |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Icons** | React Icons |
| **API** | GitHub REST API |
| **Analytics** | Vercel Analytics |
| **Backend** | Express + Nodemailer |
| **Deployment** | Vercel |
| **Routing** | React Router v7 |

---

## 🚀 Quick Start

### Frontend
```bash
cd client
npm install
npm run dev
```

### Backend
```bash
cd server
npm install
npm run dev
```

### Environment Variables (server/.env)
```
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

---

## 📝 How to Update Content

Edit `client/src/data/portfolio.js` — no other file changes needed:

```js
// Add a project
export const projects = [
  { title: '...', desc: '...', tech: [...], github: '...', live: '...' },
]

// Add a blog post (removes "Coming Soon")
export const blogPosts = [
  { title: '...', desc: '...', date: '2026-06-01', tag: 'dev' },
]

// Add a testimonial (removes "Coming Soon")
export const testimonials = [
  { name: '...', role: '...', text: '...' },
]
```

> Projects also auto-fetch from GitHub API — push a new repo and it appears automatically!

---

## 📦 Deployment

### Frontend (Vercel)
- Root Directory: `client`
- Framework: Vite
- Build Command: `npm run build`
- Output: `dist`

### Backend (Vercel)
- Root Directory: `server`
- Deployed at: `portfolio-backend-six-azure.vercel.app`

---

## 🎮 Easter Egg

Press `↑ ↑ ↓ ↓ ← → ← → B A` on keyboard to open a hidden terminal!

Commands: `help`, `about`, `skills`, `contact`, `clear`, `exit`

---

## 📄 License

MIT — Built with ❤️ by Divyanshu Gupta
