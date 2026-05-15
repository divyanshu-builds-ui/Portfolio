// ============================================
// DYNAMIC DATA SOURCE
// Update this file to add/remove projects, blog posts, testimonials.
// The UI will automatically reflect changes.
// Future: Replace with API fetch from your backend/CMS.
// ============================================

export const projects = [
  {
    title: 'Developer Portfolio',
    desc: 'Modern full-stack portfolio with galaxy animations, scroll effects, contact form with email backend, and premium UI.',
    tech: ['React', 'Tailwind', 'Vite', 'Framer Motion', 'Node.js'],
    github: 'https://github.com/divyanshu-builds-ui/Portfolio',
    live: '#',
    gradient: 'from-primary/20 to-accent/20',
    emoji: '🌐',
  },
  {
    title: 'Birju Kirana — Hyperlocal E-Commerce',
    desc: 'Flipkart-style grocery delivery platform for 5km radius. Features pincode verification, product listings, cart system, and local delivery tracking.',
    tech: ['React', 'Node.js', 'Tailwind', 'Pincode API'],
    github: '#',
    live: 'https://birjukirana.com',
    gradient: 'from-green-500/20 to-emerald-500/20',
    emoji: '🛒',
  },
  {
    title: 'Lucy Garden — Retail Payment Platform',
    desc: 'Payment-focused digital platform for a local retail business. Handles transactions, invoicing, and customer management for daily operations.',
    tech: ['React', 'Node.js', 'Payment Integration', 'Tailwind'],
    github: '#',
    live: 'https://lucygarden.in',
    gradient: 'from-purple-500/20 to-pink-500/20',
    emoji: '💳',
  },
  {
    title: 'User Authentication System',
    desc: 'Secure login/signup interface with robust validation, clean UI/UX, and frontend connected to backend services.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Backend API'],
    github: 'https://github.com/divyanshu-builds-ui',
    live: '#',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    emoji: '🔐',
  },
]

export const stats = [
  { value: 3, suffix: '+', label: 'Projects' },
  { value: 'streak', suffix: '', label: 'Day Streak' }, // calculated live
  { value: 10, suffix: '+', label: 'Technologies' },
]

// Coding journey start date — streak auto-calculates from this
export const CODING_START_DATE = '2026-04-05'

// Add blog posts here when ready. Empty = "Coming Soon" state.
export const blogPosts = [
  // { title: 'My First Blog', desc: '...', date: '2026-06-01', tag: 'dev' },
]

// Add testimonials here when ready. Empty = "Coming Soon" state.
export const testimonials = [
  // { name: 'John', role: 'Client', text: '...' },
]

export const config = {
  backendUrl: 'https://portfolio-backend-six-azure.vercel.app',
  email: 'divyanshu.builds@gmail.com',
  phone: '+918051725780',
  github: 'https://github.com/divyanshu-builds-ui',
  linkedin: 'https://linkedin.com/in/divyanshu-builds',
  instagram: 'https://instagram.com/divyanshu.builds',
  whatsapp: 'https://wa.me/918051725780',
}
