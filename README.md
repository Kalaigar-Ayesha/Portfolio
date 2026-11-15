# K. Ayesha — DevOps, Cloud & DevSecOps Engineering Portfolio

A modern, high-performance, conversion-focused personal portfolio and client acquisition platform built for **K. Ayesha**, Freelance DevOps & Cloud Infrastructure Engineer based in Bengaluru, India.

[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-CSS%20v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🌟 Architecture & Highlights

- **Visual Identity**: Dark navy canvas (`#070b14`), deep slate surface (`#0b1120`), electric blue (`#3b82f6`), and vibrant cyan (`#06b6d4`) accents.
- **Custom Engineering Hero**: Interactive SVG cloud architecture visualization mapping Client DNS $\rightarrow$ WAF/ALB $\rightarrow$ VPC Private Subnets (EKS Microservices & Multi-AZ RDS) $\rightarrow$ CI/CD GitOps Pipeline.
- **Terminal Simulation**: Live interactive DevOps terminal emulator executing Docker, Kubernetes, Terraform, and FinOps commands.
- **Client Acquisition Architecture**:
  - Dedicated `/services` directory with 6 deep-dive landing pages for enterprise and startup clients.
  - 4 verified 12-point technical case studies with architecture diagrams, challenge retrospectives, and GitHub repository links.
  - "Who I Work With" target audience alignment (Founders, SaaS, Agencies, CTOs).
  - 3 transparent engagement tiers (Fixed-Scope, Full Implementation, Fractional Retainer).
  - Real backend contact API (`/api/contact`) with anti-bot honeypot, input sanitization, and structured JSON persistence.
- **Performance & Security**:
  - 100% Static HTML Prerendering (20 routes generated).
  - Strict Content-Security-Policy (CSP), HSTS, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`.
  - Accessible WCAG high-contrast focus rings and `@media (prefers-reduced-motion: reduce)` support.
  - Automated XML Sitemap (`/sitemap.xml`) and search-engine directives (`/robots.txt`).

---

## 📂 Project Structure

```
├── .env.example                     # Environment variable blueprint
├── next.config.ts                   # Security headers, CSP & Next.js config
├── package.json                     # Dependencies and build scripts
├── vercel.json                      # Vercel deployment configuration
├── data/                            # Persistent inquiry data (git-ignored)
│   └── inquiries.json               # Structured contact submissions
├── public/                          # Static assets and icons
└── src/
    ├── app/
    │   ├── api/contact/route.ts     # Contact endpoint (validation, honeypot, sanitization)
    │   ├── globals.css              # Custom themes, glow utilities, reduced-motion rules
    │   ├── layout.tsx               # Root layout, JSON-LD Schema (Person & ProfessionalService)
    │   ├── page.tsx                 # Core homepage (Hero, Terminal, Audience, Cases, Pricing, Contact)
    │   ├── projects/[slug]/page.tsx # 12-point technical case study template
    │   ├── robots.ts                # Dynamic robots.txt generation
    │   ├── services/
    │   │   ├── page.tsx             # Services hub catalog
    │   │   └── [slug]/page.tsx      # In-depth service breakdown pages
    │   └── sitemap.ts               # Automated XML sitemap generator
    ├── components/
    │   ├── About.tsx                # Professional bio & experience timeline
    │   ├── CloudInfrastructureVisual.tsx # Custom interactive cloud architecture SVG
    │   ├── Contact.tsx              # Conversion contact form with live receipts
    │   ├── EngagementOptions.tsx    # 3 transparent pricing & collaboration tiers
    │   ├── Footer.tsx               # Footer with links, status, and legal info
    │   ├── Hero.tsx                 # High-impact value proposition & quick stats
    │   ├── Navbar.tsx               # Glass navigation bar with live availability beacon
    │   ├── Projects.tsx             # Featured engineering case study showcase
    │   ├── Services.tsx             # Core DevOps capability cards
    │   ├── Skills.tsx               # Categorized technical stack breakdown
    │   ├── SocialIcons.tsx          # Pixel-perfect GitHub & LinkedIn SVG icons
    │   ├── TargetAudience.tsx       # "Who I Work With" positioning section
    │   └── TerminalWidget.tsx       # Live interactive multi-tab CLI emulator
    ├── data/
    │   ├── caseStudiesData.ts       # 4 verified GitHub project deep-dives
    │   ├── engagementOptions.ts     # Pricing packages & SLA definitions
    │   ├── portfolioData.ts         # Profile details, skills, and testimonials
    │   ├── servicesData.ts          # 6 comprehensive service specifications
    │   └── types.ts                 # TypeScript interfaces and domain models
    └── lib/
        └── analytics.ts             # Privacy-conscious client-side event tracking
```

---

## 🚀 Quickstart & Local Development

### 1. Prerequisites
- **Node.js**: v18.18+ or v20+
- **npm**: v9+ (or pnpm / yarn)

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/Kalaigar-Ayesha/website.git
cd website

# Install dependencies
npm install
```

### 3. Environment Setup
```bash
cp .env.example .env.local
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing & Quality Assurance

Run the following checks before committing code:

```bash
# 1. Run ESLint check
npm run lint

# 2. Run TypeScript strict type verification
npx tsc --noEmit

# 3. Build optimized production bundle
npm run build

# 4. Start production server locally
npm run start -- -p 3000
```

---

## 🚢 Deployment Guide (Vercel)

The site is optimized for zero-configuration, lightning-fast deployment on **Vercel Edge Network**.

### Option A: Deploy via GitHub (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete production-ready DevOps portfolio"
   git branch -M main
   git remote add origin https://github.com/Kalaigar-Ayesha/website.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **Add New...** $\rightarrow$ **Project**.
   - Select the `website` repository from your list.

3. **Configure Project Settings**:
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `./`
   - **Build Command**: `next build` (default)
   - **Output Directory**: `.next` (default)
   - **Environment Variables**: Add:
     - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.vercel.app`

4. **Deploy**:
   - Click **Deploy**. Vercel will build all 20 static pages within ~60 seconds.

---

### Option B: Deploy via Vercel CLI

```bash
# 1. Install Vercel CLI globally
npm i -g vercel

# 2. Login to your Vercel account
vercel login

# 3. Deploy preview
vercel

# 4. Deploy to production
vercel --prod
```

---

## 🌐 Custom Domain Setup

To connect a custom domain (e.g. `kalaigarayesha.dev` or `ayeshak.com`):

1. Go to your project on the **Vercel Dashboard** $\rightarrow$ **Settings** $\rightarrow$ **Domains**.
2. Enter your custom domain name (e.g. `ayeshak.dev`) and click **Add**.
3. In your DNS registrar (Namecheap, GoDaddy, Cloudflare, Route53), configure:
   - **Apex domain (`@`)**: `A` record pointing to `76.76.21.21`
   - **Subdomain (`www`)**: `CNAME` record pointing to `cname.vercel-dns.com`
4. Vercel will automatically provision a free SSL certificate via Let's Encrypt within 5 minutes.
5. Update `NEXT_PUBLIC_SITE_URL` in your Vercel Environment Variables to match your custom domain.

---

## 📋 Post-Deployment Verification Checklist

- [ ] Visit `https://your-domain/` and verify the interactive Cloud Architecture visual and Terminal emulator render smoothly.
- [ ] Visit `/services` and test navigation into all 6 individual service breakdown pages.
- [ ] Visit `/projects/ai-kubernetes-troubleshooting-agent` and test case study tabs and GitHub external links.
- [ ] Fill out the Contact Form with a test message and verify instant receipt generation.
- [ ] Verify `https://your-domain/sitemap.xml` returns valid XML with all 20 URL nodes.
- [ ] Verify `https://your-domain/robots.txt` specifies user-agent rules and points to your sitemap.
- [ ] Test mobile responsiveness across iPhone and Android viewport widths.
- [ ] Test keyboard navigation with `Tab` to confirm high-contrast cyan focus indicators appear.

---

## 🔒 Security Best Practices

- **Zero Hardcoded Secrets**: All configuration is managed via sanitized variables.
- **Honeypot Anti-Spam**: Contact form includes an invisible honeypot field (`honeypot`) that automatically filters bot submissions without requiring friction-heavy CAPTCHAs.
- **Input Sanitization**: All contact entries are strictly validated and HTML-escaped before persistence.
- **Serverless Resilient Storage**: Automatically detects Vercel serverless environments and writes inquiries safely to `/tmp/data/inquiries.json` to prevent read-only filesystem errors.

---

## 📬 Contact & Inquiries

**K. Ayesha** — DevOps & Cloud Engineer  
- 📍 Location: Bengaluru, Karnataka, India  
- 💼 LinkedIn: [linkedin.com/in/kalaigarayesha](https://www.linkedin.com/in/kalaigarayesha/)  
- 🐙 GitHub: [github.com/Kalaigar-Ayesha](https://github.com/Kalaigar-Ayesha)  
- ✉️ Direct Email: kalaigarayesha@gmail.com  
# Portfolio
# Portfolio
