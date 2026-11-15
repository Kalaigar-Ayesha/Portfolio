import { ProjectItem, ServiceItem, ProblemSolutionItem, ExperienceItem, TestimonialItem } from './types';

export const PERSONAL_INFO = {
  name: "K. Ayesha",
  title: "DevOps & Cloud Engineer | FinOps & DevSecOps",
  tagline: "Cloud Infrastructure Cost Optimization & Secure DevSecOps Systems.",
  bio: "Specializing in slashing cloud infrastructure bills, right-sizing AWS workloads, and hardening production systems with automated DevSecOps and Kubernetes.",
  status: "Available for Freelance & Contract Projects",
  location: "Bengaluru, India (Open to Global Remote)",
  linkedin: "https://www.linkedin.com/in/kalaigarayesha/",
  github: "https://github.com/Kalaigar-Ayesha",
  email: "kalaigarayesha@gmail.com",
  phone: "+91 91136 84892", // [Editable Phone Number / WhatsApp]
  calendarUrl: "https://calendly.com",
};

export const BUSINESS_PROBLEMS: ProblemSolutionItem[] = [
  {
    id: "fragile-deployments",
    painPoint: "Downtime During Releases & Fragile Deployments",
    costOfInaction: "Manual deployments lead to human error, unexpected downtime, broken releases, and delayed feature rollouts.",
    solution: "Production-Grade Automated CI/CD & Zero-Downtime Releases",
    engineeringExecution: [
      "Custom GitHub Actions pipelines with automated testing, linting, and container builds",
      "GitOps-driven continuous deployment with ArgoCD and Helm chart versioning",
      "Blue/Green and Canary deployment strategies to eliminate user-facing disruption",
      "Automated rollbacks on health-check failures"
    ],
    iconName: "GitMerge"
  },
  {
    id: "cloud-waste",
    painPoint: "Runaway Cloud Costs & AWS Overspending (FinOps Sprawl)",
    costOfInaction: "Unused resources, unattached EBS volumes, over-provisioned EC2 instances, and unoptimized Kubernetes clusters drain runway.",
    solution: "Intelligent FinOps Right-Sizing & Multi-Cloud Cost Optimization",
    engineeringExecution: [
      "Deep infrastructure spend audits across compute, storage, and networking layers",
      "Implementation of auto-scaling policies, Karpenter, and spot instance strategies",
      "AI-assisted telemetry scraping (CloudPilot-AI methodology) for right-sizing recommendations",
      "Automated resource scheduling and FinOps cost governance guardrails"
    ],
    iconName: "TrendingDown"
  },
  {
    id: "security-risks",
    painPoint: "Vulnerable Containers, Secrets Leakage & Compliance Exposure",
    costOfInaction: "Shipping unvetted Docker images and misconfigured cloud IAM risks data breaches and failed security audits.",
    solution: "Shift-Left DevSecOps & Automated Security Hardening",
    engineeringExecution: [
      "Automated container image scanning with Trivy and SAST code analysis with SonarQube",
      "Least-privilege AWS IAM policies, KMS secret management, and HashiCorp Vault integration",
      "Kubernetes Network Policies, Pod Security Standards, and RBAC enforcement",
      "Pre-commit security hooks preventing secret and credential leakage"
    ],
    iconName: "ShieldCheck"
  },
  {
    id: "cluster-chaos",
    painPoint: "Kubernetes Complexity & Slow Incident Troubleshooting",
    costOfInaction: "Debugging CrashLoopBackOffs, OOMKilled pods, and network routing in production costs hours of engineering time.",
    solution: "Automated Cluster Diagnostics & Reliable Observability",
    engineeringExecution: [
      "Full-stack observability with Prometheus, Grafana, and structured logging",
      "Custom AI troubleshooting engine (k8s-agent) for automated root-cause analysis",
      "High-availability cluster architecture with automated node self-healing",
      "Actionable runbooks and SLO/SLA alerting to catch degradation before outages"
    ],
    iconName: "Activity"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "cloud-infrastructure",
    title: "AWS & Cloud Infrastructure Engineering",
    tagline: "Scalable, resilient, and cost-effective cloud foundations.",
    description: "Design and implement production-ready AWS environments built for high availability, fault tolerance, and security from day one.",
    deliverables: [
      "Multi-VPC network architectures (subnets, NAT gateways, security groups)",
      "AWS ECS/EKS container infrastructure setup and hardening",
      "Secure IAM roles, policies, and least-privilege access governance",
      "Serverless architectures with AWS Lambda, API Gateway, and S3"
    ],
    tools: ["AWS", "Terraform", "CloudFormation", "Linux", "Bash"],
    businessOutcome: "Scalable cloud foundation with zero single points of failure.",
    iconName: "Cloud"
  },
  {
    id: "kubernetes-orchestration",
    title: "Kubernetes & Container Orchestration",
    tagline: "Streamlined microservices management without the operational headache.",
    description: "Production Kubernetes deployments configured for automated scaling, self-healing, zero-downtime rollouts, and streamlined maintenance.",
    deliverables: [
      "Production cluster setup (EKS, GKE, or self-hosted)",
      "Helm charts creation and standardization across all services",
      "Ingress controllers, TLS automation (Cert-Manager), and DNS routing",
      "Resource requests, limits, HPA, and node autoscaling configuration"
    ],
    tools: ["Kubernetes", "Docker", "Helm", "kubectl", "ArgoCD"],
    businessOutcome: "High-density container utilization and painless zero-downtime releases.",
    iconName: "Boxes"
  },
  {
    id: "cicd-automation",
    title: "CI/CD & Delivery Pipeline Automation",
    tagline: "Move code from commit to production in minutes, safely.",
    description: "Build rapid, repeatable, and fail-safe continuous integration and continuous deployment pipelines tailored to your stack.",
    deliverables: [
      "Custom GitHub Actions workflows for multi-branch environments",
      "Automated unit, integration, and end-to-end test execution",
      "Fast multi-stage Docker image builds with caching optimizations",
      "Zero-downtime deployment hooks and instant rollback triggers"
    ],
    tools: ["GitHub Actions", "Docker Hub", "ArgoCD", "Node.js", "Python"],
    businessOutcome: "Faster release velocity with zero manual deployment stress.",
    iconName: "Workflow"
  },
  {
    id: "devsecops-hardening",
    title: "DevSecOps & Security Automation",
    tagline: "Embed security into your delivery pipeline without slowing down engineers.",
    description: "Proactive security posture integration directly within your software delivery cycle to catch vulnerabilities before they hit production.",
    deliverables: [
      "Container vulnerability scanning with Trivy in CI pipelines",
      "Static code security analysis (SAST) with SonarQube",
      "Secrets scanning to block API keys and tokens from entering Git history",
      "Infrastructure-as-Code policy enforcement and cloud compliance checks"
    ],
    tools: ["Trivy", "SonarQube", "AWS IAM", "KMS", "HashiCorp Vault"],
    businessOutcome: "Audit-ready cloud environments and resilient security posture.",
    iconName: "Lock"
  },
  {
    id: "finops-optimization",
    title: "Cloud FinOps & Cost Optimization",
    tagline: "Eliminate cloud waste and reduce your monthly AWS bills.",
    description: "Systematic auditing and rightsizing of cloud resources to drive down monthly spending while maintaining peak performance and availability.",
    deliverables: [
      "Comprehensive infrastructure cost audit and waste identification",
      "EC2 rightsizing, Graviton migration, and Spot instance strategies",
      "S3 storage tiering lifecycle policies and database connection pooling",
      "Budget alerts, spending anomaly monitors, and cost allocation tags"
    ],
    tools: ["CloudPilot-AI", "AWS Cost Explorer", "CloudWatch", "Terraform"],
    businessOutcome: "Measurable reduction in cloud burn rate without sacrificing performance.",
    iconName: "DollarSign"
  },
  {
    id: "observability-sre",
    title: "Observability, Telemetry & SRE",
    tagline: "Full visibility into your application and cluster health.",
    description: "Implement end-to-end monitoring, centralized logging, and proactive alerting so you detect and resolve anomalies before users notice.",
    deliverables: [
      "Prometheus metric collectors and node exporters setup",
      "Custom Grafana dashboards for business and system metrics",
      "Centralized log aggregation and structured log routing",
      "Actionable incident alerts via Slack, PagerDuty, or Email"
    ],
    tools: ["Prometheus", "Grafana", "CloudWatch", "OpenTelemetry", "Linux"],
    businessOutcome: "Sub-minute incident detection and clear root-cause visibility.",
    iconName: "Cpu"
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "k8s-troubleshooter",
    title: "AI Kubernetes Troubleshooting Agent",
    tagline: "Automated Cluster Diagnostics & Root-Cause Analysis via LLM Reasoning",
    role: "DevOps & AI Systems Engineer",
    category: "AI & Kubernetes",
    description: "An on-demand, intelligent SRE assistant designed to automate Kubernetes cluster diagnostics. Connects directly to cluster contexts, inspects pod failures, streams container logs, analyzes warning events, validates network routing, and leverages advanced LLM reasoning to pinpoint root causes and recommend exact kubectl fixes.",
    architectureHighlights: [
      "Next.js interactive dashboard with real-time cluster selection and diagnostic event streaming",
      "FastAPI backend orchestrator executing modular kubectl inspection pipelines",
      "Pod Inspector submodule targeting CrashLoopBackOff, OOMKilled, restarts, and resource starvation",
      "Automated container log extraction, cluster warning event correlation, and root-cause fix synthesis",
      "InsForge BaaS integration for Postgres storage, authentication, and realtime pub/sub diagnostics"
    ],
    techStack: ["Kubernetes", "kubectl", "FastAPI", "Python", "Next.js", "TypeScript", "OpenRouter LLM", "PostgreSQL"],
    githubUrl: "https://github.com/Kalaigar-Ayesha/AI-Kubernetes-Troubleshooting-Agent",
    status: "Open Source"
  },
  {
    id: "cloudpilot-ai",
    title: "CloudPilot-AI: Enterprise Multi-Cloud FinOps Copilot",
    tagline: "Multi-Cloud Resource Aggregation & Cost Optimization Engine",
    role: "DevOps & FinOps Architect",
    category: "DevOps & FinOps",
    description: "A production-grade, dark-mode-first multi-cloud FinOps engine designed to aggregate cloud resources, scrape telemetry metrics, generate right-sizing recommendations, and support secure AI chat agent queries across AWS, Azure, and Google Cloud.",
    architectureHighlights: [
      "Clean Architecture & SOLID design principles separating cloud integrations from orchestration",
      "Multi-cloud telemetry collector scraping CPU utilization, memory thresholds, and spend distribution",
      "Automated cost anomaly detection and actionable right-sizing recommendations engine",
      "Interactive LLM-powered Copilot with structured Tool Calling for live infrastructure queries",
      "Dockerized microservices deployment with security-first API boundaries"
    ],
    techStack: ["Python", "FastAPI", "Docker", "AWS SDK", "Azure SDK", "GCP SDK", "FinOps", "REST APIs"],
    githubUrl: "https://github.com/Kalaigar-Ayesha/CloudPilot-AI",
    status: "Production-Ready"
  },
  {
    id: "devsecops-chat",
    title: "Production-Grade DevSecOps Chat Application",
    tagline: "Full-Stack Realtime Microservices with GitOps & Container Security",
    role: "Lead DevSecOps Engineer",
    category: "DevSecOps & CI/CD",
    description: "A production-ready, enterprise-grade cloud-native chat platform demonstrating GitOps-driven Kubernetes deployments, automated GitHub Actions CI/CD pipelines, container vulnerability scanning, and an observability-first architecture.",
    architectureHighlights: [
      "Microservices architecture: React frontend, Nginx reverse proxy, Node.js WebSocket backend, MongoDB",
      "Primary CI/CD powered by GitHub Actions for automated unit testing and container image builds",
      "Shift-left DevSecOps with Trivy container vulnerability scanning and SonarQube code quality checks",
      "GitOps continuous deployment with ArgoCD and Helm chart packaging for Kubernetes",
      "End-to-end observability stack integrating Prometheus metric scraping and Grafana dashboards"
    ],
    techStack: ["Kubernetes", "Helm", "ArgoCD", "GitHub Actions", "Docker", "Trivy", "SonarQube", "React", "Node.js", "MongoDB", "Nginx"],
    githubUrl: "https://github.com/Kalaigar-Ayesha/DevSecOps-Chat-Apllication",
    status: "Production-Ready"
  },
  {
    id: "digital-library",
    title: "Digital Library Ingestion & Retrieval Platform",
    tagline: "High-Capacity Digital Document Archive for 6,000+ PDFs",
    role: "Backend & Systems Engineer",
    category: "Cloud & Systems",
    description: "A scalable digital library architecture engineered to ingest, catalog, and index a collection of 6,000+ PDF documents. Features automated metadata parsing, fast structured querying, and resilient data storage management.",
    architectureHighlights: [
      "Resilient document ingestion pipeline processing batch uploads of 6,000+ PDF files",
      "Metadata extraction and structured indexing for rapid search and retrieval",
      "Optimized storage hierarchy ensuring minimal latency and high availability",
      "RESTful API endpoints allowing seamless search, catalog queries, and file access",
      "Designed for cloud portability and scalable object storage integration"
    ],
    techStack: ["Python", "REST APIs", "Data Ingestion", "PDF Processing", "Linux", "Storage Architecture"],
    githubUrl: "https://github.com/Kalaigar-Ayesha/Registration-of-Digital-Library",
    status: "Enterprise Prototype"
  }
];

export const TECHNICAL_SKILLS = {
  cloud: [
    { name: "AWS (Amazon Web Services)", level: "Advanced", items: ["EC2", "VPC", "S3", "ECS", "EKS", "IAM", "CloudWatch", "Lambda", "Route 53"] },
    { name: "Multi-Cloud Fundamentals", level: "Proficient", items: ["Azure Fundamentals", "Google Cloud (GCP)", "FinOps Cloud Cost Governance"] }
  ],
  containers: [
    { name: "Docker & Containerization", level: "Advanced", items: ["Multi-stage Builds", "Docker Compose", "Docker Hub", "Image Optimization"] },
    { name: "Kubernetes Orchestration", level: "Advanced", items: ["Cluster Architecture", "kubectl", "Helm Charts", "Pod Lifecycle", "HPA", "Services & Ingress"] }
  ],
  cicdDevSecOps: [
    { name: "CI/CD Automation", level: "Advanced", items: ["GitHub Actions", "Jenkins CI", "GitOps", "ArgoCD", "Automated Release Pipelines"] },
    { name: "DevSecOps & Security", level: "Proficient", items: ["Trivy Container Scanning", "SonarQube SAST", "IAM Least-Privilege", "Secret Management"] }
  ],
  iacConfig: [
    { name: "Infrastructure as Code", level: "Proficient", items: ["Terraform", "HCL", "State Management", "Modular IaC", "CloudFormation"] },
    { name: "Configuration Management", level: "Proficient", items: ["Ansible", "Puppet Basics", "Environment Standardization"] }
  ],
  monitoring: [
    { name: "Observability & SRE", level: "Proficient", items: ["Prometheus", "Grafana", "AWS CloudWatch", "Log Aggregation", "Health Probes"] }
  ],
  scriptingAndWeb: [
    { name: "Scripting & Automation", level: "Advanced", items: ["Python (FastAPI, Automation)", "Bash / Linux Shell Scripting"] },
    { name: "Full Stack & Data", level: "Proficient", items: ["React.js", "Node.js", "REST APIs", "MongoDB", "PostgreSQL", "Nginx"] }
  ]
};

export const PROFESSIONAL_EXPERIENCE: ExperienceItem[] = [
  {
    id: "asariya-forum",
    organization: "Asariya Forum",
    role: "DevOps & Cloud Engineer [Consultant / Contributor]",
    period: "[Dates / Duration: Editable Placeholder]",
    location: "Remote",
    description: "Contributed to cloud infrastructure, deployment reliability, and automation initiatives.",
    responsibilities: [
      "Configured and maintained scalable cloud environments ensuring high availability and uptime",
      "Automated repetitive deployment workflows and established standardized CI/CD pipelines",
      "Implemented security best practices for access control, environment variables, and cloud configurations",
      "[Key quantifiable impact / project scope: Editable Placeholder]"
    ],
    technologies: ["AWS", "Docker", "CI/CD", "Linux", "Terraform", "Git"],
    verifiedStatus: "Verified Professional Experience"
  },
  {
    id: "mentor-me",
    organization: "Mentor Me",
    role: "Technical Mentor & DevOps Contributor",
    period: "[Dates / Duration: Editable Placeholder]",
    location: "Remote",
    description: "Mentored engineering peers and contributed to DevOps best practices, cloud deployments, and pipeline architectures.",
    responsibilities: [
      "Guided developers on Docker containerization, Kubernetes fundamentals, and cloud migration strategies",
      "Advised on pipeline design using GitHub Actions, automated testing, and security scanning",
      "Conducted architecture reviews and troubleshooting sessions for distributed applications",
      "[Key mentorship milestone / community metric: Editable Placeholder]"
    ],
    technologies: ["Docker", "Kubernetes", "GitHub Actions", "Linux", "Python", "Cloud Architecture"],
    verifiedStatus: "Verified Professional Experience"
  }
];

export const ENGINEERING_APPROACH = [
  {
    step: "01",
    title: "Audit & Architecture Assessment",
    summary: "Deep dive into your existing infrastructure, bottlenecks, and security posture.",
    details: "I inspect your current cloud setup, deployment pipelines, spending reports, and pain points to establish a baseline and identify high-priority vulnerabilities or cost leaks."
  },
  {
    step: "02",
    title: "Infrastructure as Code & Standardization",
    summary: "Codify infrastructure into modular, version-controlled Terraform modules.",
    details: "Eliminate manual console changes. Everything from VPC networking to EKS clusters is defined as reproducible, state-tracked Infrastructure as Code."
  },
  {
    step: "03",
    title: "Automated CI/CD & DevSecOps Guardrails",
    summary: "Zero-touch release automation with security integrated into every commit.",
    details: "Implement GitHub Actions workflows with Trivy container scanning, SonarQube quality gates, and automated deployment via Helm and ArgoCD."
  },
  {
    step: "04",
    title: "Observability, Telemetry & Clean Handoff",
    summary: "Total visibility with Prometheus, Grafana, alerts, and comprehensive documentation.",
    details: "Deploy proactive telemetry dashboards and alerting rules, followed by clean runbooks and team walkthroughs so your engineers operate with confidence."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testimonial-1",
    quote: "[Editable Placeholder: 'K. Ayesha overhauled our deployment pipeline into a seamless GitHub Actions workflow. Our deployment time dropped significantly, and we stopped having weekend deployment panics.']",
    author: "[Client Name / Founder]",
    title: "[CTO / Head of Engineering]",
    company: "[Early-Stage SaaS Startup]",
    context: "[AWS Cloud Infrastructure & CI/CD Project]",
    avatarSeed: "sarah"
  },
  {
    id: "testimonial-2",
    quote: "[Editable Placeholder: 'Her expertise in Kubernetes and DevSecOps brought immediate maturity to our infrastructure. She identified critical container vulnerabilities and set up automated scanning.']",
    author: "[Client Name / Engineering Lead]",
    title: "[VP of Technology]",
    company: "[Software Development Agency]",
    context: "[Kubernetes Hardening & DevSecOps Implementation]",
    avatarSeed: "alex"
  },
  {
    id: "testimonial-3",
    quote: "[Editable Placeholder: 'Working with Ayesha was one of the smoothest freelance engagements we have had. Clean communication, precise Terraform code, and complete documentation.']",
    author: "[Client Name / Product Owner]",
    title: "[Co-Founder & COO]",
    company: "[B2B Tech Company]",
    context: "[Cloud Migration & Infrastructure as Code]",
    avatarSeed: "marcus"
  }
];
