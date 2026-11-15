import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ayeshak.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "K. Ayesha | Freelance DevOps Engineer & AWS Cloud Consultant in Bengaluru",
    template: "%s | K. Ayesha - DevOps & Cloud Engineer",
  },
  description:
    "Freelance DevOps Engineer & AWS Cloud Consultant based in Bengaluru. Helping SaaS startups, founders, and engineering teams with CI/CD Pipeline Setup, Docker & Kubernetes Deployment, Terraform Infrastructure Automation, and DevSecOps.",
  keywords: [
    "Freelance DevOps Engineer",
    "DevOps Engineer in Bengaluru",
    "AWS Cloud Engineer",
    "CI/CD Pipeline Setup",
    "Docker and Kubernetes Deployment",
    "Terraform Infrastructure Automation",
    "DevSecOps Consultant",
    "FinOps Cost Optimization",
    "Site Reliability Engineering SRE",
    "Contract DevOps Engineer",
    "Cloud Architecture Consultant"
  ],
  authors: [{ name: "K. Ayesha", url: "https://github.com/Kalaigar-Ayesha" }],
  creator: "K. Ayesha",
  publisher: "K. Ayesha",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "K. Ayesha | Freelance DevOps Engineer & AWS Cloud Consultant",
    description:
      "Building Reliable Cloud Infrastructure. Automating Deployments. Securing Production Systems. Practical DevOps consulting for startups, agencies, and CTOs.",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "K. Ayesha // DevOps & Cloud Engineering",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "K. Ayesha - Freelance DevOps Engineer & AWS Cloud Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "K. Ayesha | Freelance DevOps Engineer & AWS Cloud Consultant",
    description:
      "Reliable Cloud Infrastructure, CI/CD Automation & Production Security for Startups and Engineering Teams.",
    creator: "@kalaigarayesha",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": "K. Ayesha",
      "jobTitle": "Freelance DevOps Engineer & Cloud Consultant",
      "url": SITE_URL,
      "sameAs": [
        "https://www.linkedin.com/in/kalaigarayesha/",
        "https://github.com/Kalaigar-Ayesha"
      ],
      "knowsAbout": [
        "AWS Cloud Infrastructure",
        "CI/CD Pipeline Setup",
        "Docker and Kubernetes Deployment",
        "Terraform Infrastructure Automation",
        "DevSecOps Security Hardening",
        "FinOps Cloud Cost Optimization",
        "Site Reliability Engineering (SRE)"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "India"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      "name": "K. Ayesha - DevOps & Cloud Engineering Consulting",
      "url": SITE_URL,
      "description": "Freelance DevOps, Cloud Infrastructure, and DevSecOps engineering services for startups and software agencies.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "India"
      },
      "areaServed": "Worldwide",
      "priceRange": "$$",
      "currenciesAccepted": "USD, EUR, GBP, INR",
      "paymentAccepted": "Bank Transfer, Contract Invoice",
      "openingHours": "Mo-Fr 09:00-18:00"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-cyan-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
