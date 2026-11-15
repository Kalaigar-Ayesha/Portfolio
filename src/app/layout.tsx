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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-4fh7.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "K. Ayesha | Freelance DevOps & Cloud Infrastructure Engineer",
    template: "%s | K. Ayesha - DevOps & Cloud Engineer",
  },
  description:
    "Freelance DevOps & Cloud Infrastructure Engineer. Specializing in Cloud Cost Optimization (FinOps), Secure Infrastructure (DevSecOps), CI/CD Automation, and Kubernetes across AWS, Azure, GCP, or any cloud.",
  keywords: [
    "Freelance DevOps Engineer",
    "Cloud Engineer",
    "AWS Cloud Engineer",
    "GCP Cloud Engineer",
    "Azure DevOps",
    "Multi-Cloud DevOps",
    "CI/CD Pipeline Setup",
    "Docker and Kubernetes Deployment",
    "Terraform Infrastructure Automation",
    "DevSecOps Consultant",
    "FinOps Cost Optimization",
    "Site Reliability Engineering SRE",
    "Contract DevOps Engineer"
  ],
  authors: [{ name: "K. Ayesha", url: "https://github.com/Kalaigar-Ayesha" }],
  creator: "K. Ayesha",
  publisher: "K. Ayesha",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "K. Ayesha | Freelance DevOps & Cloud Infrastructure Engineer",
    description:
      "Cloud Infrastructure Cost Optimization & Secure DevSecOps Systems across AWS, Azure, GCP, and Kubernetes.",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "K. Ayesha // DevOps & Cloud Engineering",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "K. Ayesha - Freelance DevOps & Cloud Infrastructure Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "K. Ayesha | Freelance DevOps & Cloud Infrastructure Engineer",
    description:
      "Cloud Infrastructure Cost Optimization & Secure DevSecOps Systems across AWS, Azure, GCP, and Kubernetes.",
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
      "jobTitle": "Freelance DevOps & Cloud Infrastructure Engineer",
      "url": SITE_URL,
      "sameAs": [
        "https://www.linkedin.com/in/kalaigarayesha/",
        "https://github.com/Kalaigar-Ayesha"
      ],
      "knowsAbout": [
        "Cloud Infrastructure (AWS, Azure, GCP)",
        "CI/CD Pipeline Setup",
        "Docker and Kubernetes Deployment",
        "Terraform Infrastructure Automation",
        "DevSecOps Security Hardening",
        "FinOps Cloud Cost Optimization",
        "Site Reliability Engineering (SRE)"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      "name": "K. Ayesha - DevOps & Cloud Engineering Consulting",
      "url": SITE_URL,
      "description": "Freelance DevOps, Cloud Infrastructure, and DevSecOps engineering services for startups and software engineering teams.",
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
      <body className="min-h-screen bg-[#0e2a1d] text-emerald-50 selection:bg-emerald-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
