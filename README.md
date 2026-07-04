# Hatim Ahmed Hassan - Portfolio

Professional portfolio for Hatim Ahmed Hassan, Mechanical Engineer specializing in robotics, autonomous systems, and IoT innovation.

**Live Demo:** https://xaatim.github.io

## Overview

This is a modern, minimal portfolio website showcasing:

- **Robotics Projects** - Featured work in autonomous systems, agricultural robots, and security solutions
- **Hardware Innovation** - CAD designs and mechanical engineering projects on GrabCAD
- **Professional Experience** - Technical skills across ROS2, IoT, embedded systems, and software development
- **Cross-linked Content** - Optimized for search visibility with links to GitHub, LinkedIn, and GrabCAD

## Features

- Dark blue + white professional color scheme
- Light/dark mode toggle
- Responsive design (mobile, tablet, desktop)
- Professional icon system (no emojis)
- All contact information linked (Email, GitHub, LinkedIn, GrabCAD)
- SEO optimized metadata
- GitHub Pages hosted with automatic CI/CD deployment

## Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Deployment:** GitHub Pages via GitHub Actions
- **Analytics:** Vercel Analytics

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and theme tokens
├── components/
│   ├── theme-provider.tsx  # Light/dark mode context
│   ├── header.tsx          # Navigation and theme toggle
│   ├── hero.tsx            # Hero section with headshot
│   ├── featured.tsx        # Featured projects grid
│   ├── about.tsx           # About section with skills
│   ├── contact.tsx         # Contact section
│   └── footer.tsx          # Footer with social links
├── public/
│   ├── hatim-1.png         # First professional headshot
│   └── hatim-2.png         # Second professional headshot
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions deployment
```

## Setup & Development

### Prerequisites

- Node.js 18+
- pnpm 8+ (or npm/yarn)

### Install Dependencies

```bash
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
pnpm build
pnpm start
```

## Deployment

This portfolio is automatically deployed to GitHub Pages when code is pushed to the `main` branch.

### GitHub Pages Setup

1. Go to **Settings** → **Pages**
2. Select **GitHub Actions** as the source
3. Ensure `.github/workflows/deploy.yml` is in your repository

The workflow will:
1. Install dependencies
2. Build the Next.js project
3. Deploy to `gh-pages` branch
4. Publish to `https://xaatim.github.io`

### Manual Deployment

```bash
pnpm run build
pnpm run deploy
```

## Customization

### Colors

Edit theme colors in `app/globals.css`:

```css
:root {
  --background: #0f1419;
  --foreground: #ffffff;
  --accent: #d4af37;
  --accent-dark: #b8860b;
}
```

### Content

- **Hero Section:** Edit `components/hero.tsx`
- **Projects:** Update project data in `components/featured.tsx`
- **About:** Modify `components/about.tsx`
- **Contact:** Update links in `components/contact.tsx`

### Images

Replace headshot images:
- `public/hatim-1.png` - Hero section image
- `public/hatim-2.png` - About section image

## Performance

- Image optimization with Next.js Image component
- Static export for GitHub Pages compatibility
- Minified CSS and JavaScript
- Web Vitals tracking with Vercel Analytics

## SEO

Portfolio is optimized for search with:

- Semantic HTML structure
- Meta tags and Open Graph
- Structured content for robotics and engineering keywords
- Cross-linked professional profiles
- Mobile-friendly responsive design

## Contact

- **Email:** xayari229@gmail.com
- **GitHub:** [@xaatim](https://github.com/xaatim)
- **LinkedIn:** [Hatim Ahmed Hassan](https://www.linkedin.com/in/hatim-ahmed-713214194/)
- **GrabCAD:** [CAD Models](https://grabcad.com/hatim.ahmed.hassan-1/models)

## License

This portfolio is open source and available under the MIT License.

## Built With

Created with Next.js, Tailwind CSS, and deployed on GitHub Pages. Designed for showcasing robotics innovation and hardware engineering expertise.
