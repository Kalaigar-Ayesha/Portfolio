export interface EngagementPackage {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  startingPriceEstimate: string;
  priceNote: string;
  idealFor: string;
  timeline: string;
  scopeSummary: string;
  whatsIncluded: string[];
  deliverablesSummary: string[];
  popular?: boolean;
}

export const ENGAGEMENT_PACKAGES: EngagementPackage[] = [
  {
    id: 'fixed-scope',
    name: 'Small Fixed-Scope Project',
    badge: 'Quick Win / Rapid Delivery',
    tagline: 'A focused, standalone infrastructure improvement with a defined scope, clear timeline, and capped investment.',
    startingPriceEstimate: '$850 – $1,800',
    priceNote: 'Estimated starting range [Editable] • Capped fixed price per agreed scope',
    idealFor: 'Early-stage startups, SaaS founders, or dev agencies needing a specific bottleneck resolved fast.',
    timeline: '3 to 7 business days',
    scopeSummary: 'Targeted single-objective DevOps execution, such as building a GitHub Actions CI/CD pipeline, Dockerizing an existing web application, setting up a Terraform baseline, or conducting a container security scan.',
    whatsIncluded: [
      'Comprehensive 1-on-1 requirements & stack review call',
      'End-to-end implementation of single defined infrastructure deliverable',
      'Automated testing & deployment verification in staging',
      'Thorough handover walkthrough call for your developers',
      'Written runbook and 14 days of post-handover support'
    ],
    deliverablesSummary: [
      'Production-ready GitHub Actions workflow or Dockerfile',
      'Configured staging/prod environment variables & secrets',
      'Technical operating runbook & architecture notes'
    ]
  },
  {
    id: 'project-based',
    name: 'Project-Based DevOps Implementation',
    badge: 'Most Popular / Comprehensive',
    tagline: 'End-to-end cloud infrastructure, Kubernetes migration, or complete automated delivery architecture.',
    startingPriceEstimate: '$2,400 – $4,800',
    priceNote: 'Estimated starting range [Editable] • Milestone-based billing',
    idealFor: 'Growing SaaS companies, agencies launching a major client product, or teams migrating to AWS / Kubernetes.',
    timeline: '2 to 4 weeks',
    scopeSummary: 'Complete multi-component infrastructure buildout: multi-AZ AWS cloud foundation, automated CI/CD pipelines, Kubernetes container orchestration with Helm, DevSecOps vulnerability scanning, and full monitoring dashboards.',
    whatsIncluded: [
      'Full architectural blueprint & security assessment',
      'Multi-environment AWS infrastructure (VPC, compute, managed database, load balancer)',
      'Automated multi-stage CI/CD pipelines with zero-downtime deployment',
      'Production Kubernetes manifests or Helm charts with auto-scaling',
      'Prometheus/Grafana observability setup & actionable Slack alerting',
      'Full documentation, team training workshop, and 30 days of post-launch warranty'
    ],
    deliverablesSummary: [
      'Complete modular Terraform codebase in your Git repository',
      'Production-ready CI/CD pipelines & automated security scans',
      'Live monitoring dashboards, log routing & alert rules',
      'Complete disaster recovery plan & system runbook'
    ],
    popular: true
  },
  {
    id: 'fractional-retainer',
    name: 'Ongoing Freelance Engineering Support',
    badge: 'Fractional DevOps / SRE Retainer',
    tagline: 'On-demand senior DevOps and cloud engineering support without the expense of a full-time hire.',
    startingPriceEstimate: '$1,500 – $3,200 / month',
    priceNote: 'Estimated starting range [Editable] • Flexible month-to-month retainer',
    idealFor: 'Software teams requiring standing cloud maintenance, proactive updates, deployment help, and on-call troubleshooting.',
    timeline: 'Month-to-month (10 to 25 hours / month)',
    scopeSummary: 'Dedicated fractional DevOps partner embedded alongside your software team to handle ongoing deployment requests, infrastructure updates, cloud cost audits, security patches, and emergency incident troubleshooting.',
    whatsIncluded: [
      'Guaranteed monthly engineering hours (10–25 hrs/mo customizable)',
      'Priority Slack & email communication channel',
      'Continuous CI/CD pipeline tuning and build speed optimizations',
      'Monthly AWS/cloud cost optimization audits (FinOps)',
      'Security patching, dependency upgrades, and SSL renewals',
      'Fast incident response SLA during business hours'
    ],
    deliverablesSummary: [
      'Monthly infrastructure health & spending report',
      'Continuous repository maintenance & pipeline updates',
      'Direct on-call support for deployment emergencies'
    ]
  }
];
