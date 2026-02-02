# Prathik Reddy | Portfolio Website

![Portfolio Preview](public/og-image.png)

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Design** - Dark theme with cyan/purple gradient accents
- **Fully Responsive** - Optimized for all devices
- **Smooth Animations** - Powered by Framer Motion
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- **Interactive Timeline** - Professional experience visualization
- **Testimonials Carousel** - Auto-advancing with smooth transitions
- **Contact Form** - Ready for backend integration
- **Resume Download** - Direct PDF download

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS + CSS Variables
- **Animations:** Framer Motion
- **UI Components:** shadcn/ui
- **Build Tool:** Vite
- **Icons:** Lucide React

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/                # shadcn components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── SkillBadge.tsx
│   ├── Timeline.tsx
│   └── SectionHeading.tsx
├── pages/
│   └── Index.tsx
├── index.css              # Design system
└── main.tsx
public/
├── Prathik_Reddy_Resume.pdf
├── og-image.png
└── favicon.ico
```

## 🎨 Design System

### Color Palette
| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--primary` | `187 85% 53%` | Cyan accent |
| `--accent` | `270 76% 60%` | Purple accent |
| `--background` | `222 47% 6%` | Dark base |
| `--foreground` | `210 40% 98%` | Text color |
| `--secondary` | `217 33% 17%` | Card backgrounds |
| `--muted-foreground` | `215 20% 55%` | Subtle text |

### Typography
- **Headings:** Inter (700-900 weight)
- **Body:** Inter (400-500 weight)
- **Code:** JetBrains Mono

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/prathik-portfolio.git
cd prathik-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

## 📝 Customization

1. **Personal Info:** Edit data in each section component
2. **Colors:** Modify CSS variables in `src/index.css`
3. **Resume:** Replace `public/Prathik_Reddy_Resume.pdf`
4. **Images:** Add to `src/assets/` and import

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

### Netlify
```bash
npm run build
# Drag & drop dist/ folder to Netlify
```

## 👤 About

**Prathik Reddy SannapuReddy**

MS Computer Science @ Syracuse University | Full-Stack Developer | AI Enthusiast

- **Email:** psannapu@syr.edu
- **LinkedIn:** [linkedin.com/in/prathik-reddy](https://linkedin.com/in/prathik-reddy)
- **Phone:** (680) 356-6586

## 📄 License

MIT © Prathik Reddy SannapuReddy

---

Built with ❤️ using [Lovable](https://lovable.dev)
