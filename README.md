# Portfolio — Divyanshu Gupta

A modern, premium developer portfolio with scroll animations, glassmorphism UI, and a terminal-inspired design language.

**Live:** [divyanshu.dev](#) • **GitHub:** [@divyanshu-builds-ui](https://github.com/divyanshu-builds-ui)

---

## ✨ Features

- 🎨 Developer-style dark UI with glow effects & grid background
- 🚀 Scroll-triggered animations (Framer Motion)
- 📱 Fully mobile responsive with touch-friendly interactions
- 💡 Floating dot navigation for section tracking
- 📬 Working contact form with email backend (Nodemailer)
- 🔍 SEO optimized (meta tags, OG, Twitter cards)
- ⚡ Blazing fast — Vite build under 4s

---

## 📁 Folder Structure

```
portfolio/
├── client/                     → Frontend (React + Vite + Tailwind)
│   ├── public/
│   │   └── my-cv.pdf
│   ├── src/
│   │   ├── components/
│   │   │   ├── DotNav.jsx      → Floating side dot navigation
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx      → Terminal-style navigation
│   │   │   └── Reveal.jsx      → Scroll animation wrapper
│   │   ├── sections/
│   │   │   ├── Hero.jsx        → Landing with typing effect & orbs
│   │   │   ├── About.jsx       → Bio + highlights
│   │   │   ├── TechStack.jsx   → Skills grid with color hover
│   │   │   ├── WhyMe.jsx       → Value proposition cards
│   │   │   ├── MyStory.jsx     → Timeline journey
│   │   │   ├── Projects.jsx    → Project cards + GitHub CTA
│   │   │   └── Contact.jsx     → Form + Socials + FAQ
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css           → Tailwind + custom glass/glow styles
│   ├── index.html              → SEO meta, OG tags, fonts
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── postcss.config.js
│   └── package.json
├── server/                     → Backend (Express + Nodemailer)
│   ├── index.js                → Mail API endpoint
│   ├── .env                    → EMAIL_USER, EMAIL_PASS
│   ├── vercel.json             → Vercel serverless config
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
| **Backend** | Express + Nodemailer |
| **Deployment** | Vercel |

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

## 📦 Deployment

### Frontend (Vercel)
- Root Directory: `client`
- Framework: Vite
- Build Command: `npm run build`
- Output: `dist`

### Backend (Vercel)
- Root Directory: `server`
- Already deployed at: `portfolio-backend-six-azure.vercel.app`

---

## 📄 License

MIT — Built with ❤️ by Divyanshu Gupta
