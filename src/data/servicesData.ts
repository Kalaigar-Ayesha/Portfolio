export interface DetailedService {
  slug: string;
  title: string;
  subtitle: string;
  iconName: string;
  badge: string;
  targetAudience: string;
  summary: string;
  problem: {
    title: string;
    description: string;
    symptoms: string[];
  };
  solution: {
    title: string;
    description: string;
    keyBenefits: string[];
  };
  scopeOfWork: {
    phase: string;
    title: string;
    tasks: string[];
  }[];
  deliverables: string[];
  technologies: {
    name: string;
    role: string;
  }[];
  businessValue: {
    title: string;
    description: string;
  }[];
  startingEstimate: string;
  faq: {
    question: string;
    answer: string;
  }[];
}

export const DETAILED_SERVICES: DetailedService[] = [
  {
    slug: 'ci-cd-pipeline-automation',
    title: 'CI/CD Pipeline Automation',
    subtitle: 'Automated Builds, Fast Testing & Zero-Downtime Deployments with GitHub Actions',
    iconName: 'Workflow',
    badge: 'High Impact / Fast Delivery',
    targetAudience: 'SaaS Startups, Web & Mobile Agencies, Growing Software Teams',
    summary: 'Eliminate manual deployment friction and release fear. I design and implement automated, production-grade GitHub Actions pipelines that test, build, and deploy your software automatically with every pull request or merge.',
    problem: {
      title: 'Manual Deployments, Broken Friday Releases & Developer Bottlenecks',
      description: 'When engineers deploy code by manually SSHing into servers, running build scripts by hand, or copying files via FTP, errors are inevitable. Deployments take hours, team members dread releases, and production breaks during peak customer traffic.',
      symptoms: [
        'Deployments take 45+ minutes of manual engineer supervision',
        'Fear of releasing on Fridays or before major marketing campaigns',
        'Inconsistent environments where code "works on my machine" but fails on the server',
        'Zero rollback strategy when a breaking bug slips into production'
      ]
    },
    solution: {
      title: 'Zero-Touch, Automated Delivery Pipelines Built for Speed and Safety',
      description: 'I build clean, declarative GitHub Actions workflows tailored to your stack. Every commit is automatically linted, tested, built into optimized Docker images, and deployed to your staging or production environments with automated rollback triggers.',
      keyBenefits: [
        'Push code to GitHub and let the pipeline handle the rest safely',
        'Cut deployment times down from hours to sub-10-minute automated cycles',
        'Automated rollbacks on health check failures to protect customer uptime',
        'Separate staging and production workflows for stress-free QA approval'
      ]
    },
    scopeOfWork: [
      {
        phase: 'Phase 1: Pipeline Audit & Architecture',
        title: 'Workflow Mapping',
        tasks: [
          'Review existing application build scripts, environment variables, and branch strategies',
          'Define multi-environment promotion pipeline (feature branch -> staging -> production)',
          'Establish caching strategies for node_modules, pip, or Go dependencies to maximize speed'
        ]
      },
      {
        phase: 'Phase 2: Workflow Implementation',
        title: 'GitHub Actions Automation',
        tasks: [
          'Author modular, reusable GitHub Actions workflow YAML files',
          'Configure multi-stage Docker builds with layer caching for rapid build times',
          'Integrate automated testing and linting gates prior to any artifact packaging',
          'Configure secure environment secret injection via GitHub Secrets'
        ]
      },
      {
        phase: 'Phase 3: Zero-Downtime Deployment & Handover',
        title: 'Release & Rollback Guardrails',
        tasks: [
          'Configure blue/green or rolling update deployment triggers',
          'Implement automated health probe verification before traffic cutover',
          'Create clear documentation and runbook so any developer on your team can operate the pipeline'
        ]
      }
    ],
    deliverables: [
      'Production-ready `.github/workflows/` repository configurations',
      'Optimized multi-stage Dockerfile with dependency caching',
      'Environment secret management documentation & configuration guide',
      'Zero-downtime release hook scripts and automated rollback triggers',
      'Comprehensive pipeline maintenance runbook & 30-day post-launch support'
    ],
    technologies: [
      { name: 'GitHub Actions', role: 'Declarative workflow automation engine' },
      { name: 'Docker', role: 'Multi-stage container packaging' },
      { name: 'Bash / Linux', role: 'Deployment hooks & system verification' },
      { name: 'ArgoCD / Helm (Optional)', role: 'GitOps continuous deployment for Kubernetes' }
    ],
    businessValue: [
      {
        title: 'Faster Time-to-Market',
        description: 'Ship features and critical bug fixes to customers in minutes rather than waiting days for manual deployment windows.'
      },
      {
        title: 'Reclaimed Engineering Hours',
        description: 'Free your senior engineers from babysitting deployments so they can focus on shipping revenue-generating features.'
      },
      {
        title: 'Eliminated Downtime Anxiety',
        description: 'Gain total confidence that every release has passed tests and will roll back automatically if an anomaly occurs.'
      }
    ],
    startingEstimate: 'From $850 [Estimated starting price / Editable]',
    faq: [
      {
        question: 'How long does a CI/CD pipeline automation project take?',
        answer: 'Typically between 3 to 7 business days, depending on the complexity of your stack and the number of environments (staging, production).'
      },
      {
        question: 'Will our developers need to learn complex DevOps tools?',
        answer: 'No. The pipeline is designed to be invisible to your developers: they simply push code or merge pull requests as usual on GitHub, and the automation handles the rest.'
      }
    ]
  },
  {
    slug: 'aws-cloud-infrastructure',
    title: 'AWS Cloud Infrastructure Engineering',
    subtitle: 'Production AWS Architecture, Scalable EC2/ECS Environments, Networking & Cost Control',
    iconName: 'Cloud',
    badge: 'Foundational Infrastructure',
    targetAudience: 'Early-Stage Founders, SaaS Startups, E-commerce Platforms',
    summary: 'Launch or modernize your AWS cloud environment with a secure, highly available architecture built for stability, data security, and long-term cost efficiency.',
    problem: {
      title: 'Fragile Cloud Setups, Single Points of Failure & Runaway AWS Invoices',
      description: 'Many startups assemble their AWS cloud manually through the AWS console over months of hurried development. The result: exposed public databases, single points of failure that cause full outages when an EC2 instance crashes, and baffling monthly AWS bills full of unused resources.',
      symptoms: [
        'Single server running web app, database, and background workers with no failover',
        'Overly permissive AWS IAM credentials with root or full admin access shared across team',
        'Database exposed directly to the public internet without private VPC subnetting',
        'Monthly AWS bill keeps climbing even when active user traffic remains flat'
      ]
    },
    solution: {
      title: 'Reliable, Secure & Cost-Aware Cloud Architecture Tailored to Your Stage',
      description: 'I design and deploy clean AWS environments following the AWS Well-Architected Framework: isolated private VPC subnets, automated load balancing, auto-scaling compute, managed databases with automated backups, and strict least-privilege access.',
      keyBenefits: [
        'Multi-AZ high availability ensuring your app stays online even during data center outages',
        'Zero public database exposure: databases isolated safely behind private subnets and NAT gateways',
        'Auto-scaling compute (EC2/ECS) that expands during traffic spikes and contracts to save money',
        'FinOps review eliminating unattached storage volumes and right-sizing over-provisioned instances'
      ]
    },
    scopeOfWork: [
      {
        phase: 'Phase 1: Architecture Blueprint & Security Plan',
        title: 'Cloud Assessment',
        tasks: [
          'Review application architecture, expected traffic volume, and compliance requirements',
          'Design VPC network topology (public subnets, private app subnets, isolated database subnets)',
          'Define IAM least-privilege roles, security groups, and encryption key requirements'
        ]
      },
      {
        phase: 'Phase 2: Cloud Infrastructure Provisioning',
        title: 'AWS Buildout',
        tasks: [
          'Configure multi-AZ VPC with internet gateways, NAT gateways, and Route 53 DNS',
          'Set up managed compute (EC2 with Auto Scaling Groups or ECS Fargate containers)',
          'Provision managed relational database (AWS RDS PostgreSQL/MySQL) with read replicas and automated snapshots',
          'Configure Application Load Balancers (ALB) with SSL/TLS termination via AWS Certificate Manager'
        ]
      },
      {
        phase: 'Phase 3: Cost Guardrails & Architecture Handover',
        title: 'FinOps & Governance',
        tasks: [
          'Configure AWS Budget alerts and CloudWatch spending anomaly monitors',
          'Set up S3 lifecycle policies for media assets and automated backup retention',
          'Conduct comprehensive walkthrough with your engineering lead with full architecture documentation'
        ]
      }
    ],
    deliverables: [
      'Fully provisioned, production-ready AWS environment (VPC, ALB, Compute, RDS, S3)',
      'SSL/TLS automated certificate configuration and DNS routing',
      'Hardened IAM roles and security group firewall configurations',
      'AWS CloudWatch alarms and budget notification setup',
      'Architecture diagram blueprint and infrastructure runbook'
    ],
    technologies: [
      { name: 'Amazon Web Services (AWS)', role: 'Primary cloud platform' },
      { name: 'EC2 & Auto Scaling', role: 'Resilient compute layer' },
      { name: 'AWS RDS & S3', role: 'Managed persistence & scalable object storage' },
      { name: 'VPC & IAM', role: 'Network isolation and least-privilege security' },
      { name: 'AWS ALB & ACM', role: 'Traffic load balancing and HTTPS encryption' }
    ],
    businessValue: [
      {
        title: 'Uptime You Can Rely On',
        description: 'Eliminate single points of failure so your application remains accessible even during unexpected cloud hardware failures.'
      },
      {
        title: 'Controlled Cloud Runway',
        description: 'Prevent bill shock with automated right-sizing and spending alerts, ensuring you only pay for resources your users actually utilize.'
      },
      {
        title: 'Investor & Customer Confidence',
        description: 'Pass technical due diligence from investors or enterprise customers with a verified, secure AWS network topology.'
      }
    ],
    startingEstimate: 'From $1,200 [Estimated starting price / Editable]',
    faq: [
      {
        question: 'Can you work with our existing AWS account?',
        answer: 'Yes. I can either build in a fresh AWS account or audit and re-architect your existing account without causing downtime to active users.'
      },
      {
        question: 'Do you provide Infrastructure as Code for the AWS setup?',
        answer: 'Yes. I can codify the entire AWS infrastructure in modular Terraform so it is version-controlled and reproducible at any time.'
      }
    ]
  },
  {
    slug: 'docker-and-kubernetes',
    title: 'Docker & Kubernetes Orchestration',
    subtitle: 'Microservice Containerization, Docker Compose & Production Kubernetes Deployments',
    iconName: 'Boxes',
    badge: 'Container & Cluster Specialist',
    targetAudience: 'SaaS Platforms, Fast-Growing Engineering Teams, Multi-Service Architectures',
    summary: 'Containerize your applications and deploy them to reliable Kubernetes clusters configured for automated scaling, self-healing, and zero-downtime microservice management.',
    problem: {
      title: 'Inconsistent Local Environments & Kubernetes Operational Complexity',
      description: 'Managing multi-service applications without standardized containerization leads to "works on my machine" bugs that stall engineering sprints. When teams attempt to adopt Kubernetes without proper configurations, they face CrashLoopBackOffs, OOMKilled pods, and complex ingress routing issues.',
      symptoms: [
        'Onboarding a new developer takes 2-3 days configuring local dependencies',
        'Pods crashing in production with cryptic exit codes and memory threshold kills',
        'Manual configuration drift between development, staging, and production clusters',
        'Lack of automated horizontal pod autoscaling during unexpected traffic surges'
      ]
    },
    solution: {
      title: 'Clean Containerization & Hardened, Self-Healing Kubernetes Clusters',
      description: 'I package your applications into lean, secure Docker containers and orchestrate them on Kubernetes (EKS, GKE, or self-hosted) with standardized Helm charts, Horizontal Pod Autoscalers, and self-healing health probes.',
      keyBenefits: [
        'One-command developer onboarding with standardized Docker Compose environments',
        'Self-healing pods that restart automatically if an unhandled crash or memory leak occurs',
        'Horizontal Pod Autoscaling (HPA) automatically scaling replicas based on CPU and memory thresholds',
        'Declarative Helm charts for reliable, consistent deployments across all environments'
      ]
    },
    scopeOfWork: [
      {
        phase: 'Phase 1: Containerization & Optimization',
        title: 'Docker Packaging',
        tasks: [
          'Audit application runtimes (Node.js, Python, React, Go, etc.) and dependencies',
          'Write multi-stage Dockerfiles optimizing image size (reducing 1GB+ images down to < 150MB)',
          'Create local `docker-compose.yml` environment with databases, redis, and service mockups'
        ]
      },
      {
        phase: 'Phase 2: Kubernetes Manifests & Helm Charts',
        title: 'Cluster Architecture',
        tasks: [
          'Design modular Helm charts parameterized for development, staging, and production',
          'Configure Kubernetes Deployments, Services, ConfigMaps, and encrypted Secrets',
          'Set up Liveness and Readiness probes to guarantee zero-downtime rolling updates',
          'Configure Ingress controllers (Nginx/Traefik) with automatic TLS certificate issuance'
        ]
      },
      {
        phase: 'Phase 3: Cluster Diagnostics & Reliability Hardening',
        title: 'Troubleshooting & Resilience',
        tasks: [
          'Configure PodDisruptionBudgets (PDB) to prevent service interruptions during node updates',
          'Set resource requests and limits to permanently eradicate out-of-memory (OOM) node crashes',
          'Deliver AI-assisted cluster troubleshooting guidelines (based on verified k8s-agent patterns)'
        ]
      }
    ],
    deliverables: [
      'Production-grade multi-stage Dockerfiles and `.dockerignore` files',
      'Standardized `docker-compose.yml` for instant local development',
      'Modular Helm charts with clean `values-dev.yaml` and `values-prod.yaml` configs',
      'Kubernetes Ingress and automated Cert-Manager TLS integration',
      'Cluster health checklist, pod troubleshooting guide, and handover walkthrough'
    ],
    technologies: [
      { name: 'Docker', role: 'Container runtime & multi-stage packaging' },
      { name: 'Kubernetes (EKS / GKE)', role: 'Container orchestration & auto-scaling' },
      { name: 'Helm', role: 'Kubernetes package management & templating' },
      { name: 'kubectl', role: 'Cluster inspection and diagnostics' },
      { name: 'Nginx Ingress & Cert-Manager', role: 'Traffic routing and automatic SSL/TLS' }
    ],
    businessValue: [
      {
        title: 'Instant Developer Productivity',
        description: 'New developers spin up the entire application stack locally in seconds with Docker Compose.'
      },
      {
        title: 'High Availability Through Self-Healing',
        description: 'Kubernetes detects failing containers and replaces them automatically without waking up an engineer.'
      },
      {
        title: 'Seamless Microservices Scalability',
        description: 'Scale individual services independently during high demand without re-architecting your backend.'
      }
    ],
    startingEstimate: 'From $1,400 [Estimated starting price / Editable]',
    faq: [
      {
        question: 'Do we need Kubernetes, or is Docker Compose / AWS ECS enough?',
        answer: 'For many early-stage startups, Docker on AWS ECS or a simple Docker Compose setup is more cost-effective and simpler. I will give you an honest recommendation on whether Kubernetes is justified for your scale.'
      },
      {
        question: 'Can you help diagnose our existing failing Kubernetes pods?',
        answer: 'Yes! I specialize in diagnosing CrashLoopBackOff, OOMKilled pods, and routing issues, drawing from my hands-on AI Kubernetes troubleshooting engine.'
      }
    ]
  },
  {
    slug: 'infrastructure-as-code',
    title: 'Infrastructure as Code (IaC) with Terraform',
    subtitle: 'Declarative Cloud Provisioning, Modular Architecture & Zero-Drift Cloud Automation',
    iconName: 'FileCode2',
    badge: 'DevOps Standardization',
    targetAudience: 'CTOs, Engineering Managers, Growing Startups with Cloud Sprawl',
    summary: 'Codify your entire cloud infrastructure into clean, modular Terraform configurations. Eliminate manual console tweaks, track changes in Git, and spin up identical staging environments in minutes.',
    problem: {
      title: 'Manual Cloud Console Tweaks, Configuration Drift & Disastrous Rebuilds',
      description: 'When cloud infrastructure is built by clicking buttons inside the AWS or Azure web console, no one knows what was changed, who changed it, or how to rebuild it if an account is compromised. Staging never matches production, and accidental deletions cause catastrophic downtime.',
      symptoms: [
        'Nobody knows the exact configuration of production servers',
        'Staging environment is completely out of sync with production',
        'Disaster recovery is impossible because recreating the setup requires weeks of manual guesswork',
        'Fear of modifying cloud security groups because it might break an undocumented dependency'
      ]
    },
    solution: {
      title: 'Version-Controlled, Modular Terraform Infrastructure You Can Reproduce Anytime',
      description: 'I write clean, modular HashiCorp Terraform code to manage your cloud resources declaratively. Every VPC, database, server, and firewall rule is defined in Git, state-locked securely in remote backends, and deployed through automated plans.',
      keyBenefits: [
        'Complete infrastructure versioning: review changes in Git pull requests before applying to the cloud',
        'Spin up identical staging, QA, or demo environments on demand with a single variable change',
        'Zero configuration drift: Terraform detects and alerts on unauthorized manual console edits',
        'State locked securely in encrypted S3 backends with DynamoDB locking to prevent conflicts'
      ]
    },
    scopeOfWork: [
      {
        phase: 'Phase 1: Cloud Audit & State Architecture',
        title: 'Infrastructure Discovery',
        tasks: [
          'Inventory existing cloud resources and map dependencies across network, compute, and data layers',
          'Configure remote encrypted Terraform state backend (AWS S3 + DynamoDB state locking)',
          'Structure modular repository layout separating networking, database, compute, and security modules'
        ]
      },
      {
        phase: 'Phase 2: Terraform Module Development',
        title: 'IaC Implementation',
        tasks: [
          'Write parameterized Terraform modules for VPCs, subnets, security groups, and routing tables',
          'Codify compute clusters, managed databases, load balancers, and DNS records',
          'Implement environment separation using Terraform workspaces or clean folder structures (`env/staging`, `env/prod`)'
        ]
      },
      {
        phase: 'Phase 3: Validation, Import & CI Integration',
        title: 'Automated Plans & Handover',
        tasks: [
          'Import existing cloud assets or execute clean provisioning with `terraform plan` verification',
          'Integrate automated `terraform fmt` and `terraform validate` into GitHub Actions pipelines',
          'Deliver detailed documentation on how to update variables, plan changes, and execute applies safely'
        ]
      }
    ],
    deliverables: [
      'Modular, production-ready Terraform codebase organized into clean modules',
      'Configured remote state backend with encryption and concurrency locking',
      'Multi-environment configurations (e.g. dev, staging, prod)',
      'Automated Terraform validation workflow in GitHub Actions',
      'Comprehensive Terraform operating guide and team training session'
    ],
    technologies: [
      { name: 'Terraform (HCL)', role: 'Declarative Infrastructure as Code engine' },
      { name: 'AWS S3 & DynamoDB', role: 'Encrypted remote state storage and distributed locking' },
      { name: 'GitHub Actions', role: 'Automated Terraform plan and linting checks' },
      { name: 'AWS / Multi-Cloud Providers', role: 'Target cloud provisioning APIs' }
    ],
    businessValue: [
      {
        title: 'True Disaster Recovery',
        description: 'Rebuild your entire cloud infrastructure in an alternate region or new account in minutes instead of weeks.'
      },
      {
        title: 'Audit & Compliance Readiness',
        description: 'Every infrastructure modification is tracked in Git commit history with author attribution and approval records.'
      },
      {
        title: 'On-Demand Staging Environments',
        description: 'Test major software updates against an exact clone of your production infrastructure without paying for idle duplicate servers.'
      }
    ],
    startingEstimate: 'From $1,100 [Estimated starting price / Editable]',
    faq: [
      {
        question: 'Can you convert our existing AWS setup into Terraform without destroying it?',
        answer: 'Yes. Using `terraform import` and state mapping, I bring existing cloud resources under Terraform management without downtime or recreation.'
      },
      {
        question: 'What happens if two engineers try to change infrastructure at the same time?',
        answer: 'I implement remote DynamoDB state locking, which prevents simultaneous modifications and eliminates state corruption risks.'
      }
    ]
  },
  {
    slug: 'devsecops',
    title: 'DevSecOps & Security Hardening',
    subtitle: 'Automated Container Security Scanning, Secret Leak Prevention & Pipeline Security Gates',
    iconName: 'ShieldCheck',
    badge: 'Proactive Security Posture',
    targetAudience: 'Fintech, Healthtech, SaaS Startups & Security-Conscious Teams',
    summary: 'Shift security left into your software delivery lifecycle. I integrate automated vulnerability scanning, secret detection, and cloud permission hardening directly into your CI/CD pipeline so security never slows you down.',
    problem: {
      title: 'Vulnerable Container Images, Leaked API Keys & Failed Compliance Audits',
      description: 'Engineering teams often ship code fast while neglecting third-party package vulnerabilities and container security. Hardcoded API secrets get pushed to Git, unvetted Docker base images contain critical CVEs, and over-privileged cloud credentials leave companies exposed to disastrous breaches.',
      symptoms: [
        'Third-party libraries and container images have never been scanned for known vulnerabilities',
        'API keys and database credentials committed into Git history or hardcoded in frontends',
        'Developers using root or admin AWS credentials for basic deployment tasks',
        'Fear of failing enterprise client security questionnaires or compliance audits (SOC2 / ISO)'
      ]
    },
    solution: {
      title: 'Automated Shift-Left Security Embedded Into Your Existing Workflow',
      description: 'I implement automated DevSecOps guardrails using proven tools like Trivy, SonarQube, and secret scanners. Security checks run automatically on every pull request, catching critical vulnerabilities and leaked secrets before they ever reach production.',
      keyBenefits: [
        'Automated container scanning with Trivy blocking builds on CRITICAL/HIGH vulnerabilities',
        'Automated secret detection preventing API tokens and private keys from entering Git history',
        'Static Application Security Testing (SAST) identifying SQL injection and security flaws in code',
        'Least-privilege cloud IAM hardening reducing the blast radius of any potential compromise'
      ]
    },
    scopeOfWork: [
      {
        phase: 'Phase 1: Security Audit & Exposure Assessment',
        title: 'Vulnerability Discovery',
        tasks: [
          'Audit current container base images, dependencies, and environment variable handling',
          'Scan Git history for inadvertently committed secrets, credentials, or private keys',
          'Review cloud IAM policies to eliminate wildcard permissions (`*`) and enforce least-privilege'
        ]
      },
      {
        phase: 'Phase 2: CI/CD Security Integration',
        title: 'Shift-Left Pipeline Buildout',
        tasks: [
          'Integrate Trivy container scanning into GitHub Actions with SARIF report generation',
          'Configure security gates with `ignore-unfixed: true` so builds only block on actionable patches',
          'Integrate pre-commit hooks and Git secret scanners to block credential commits at the developer terminal',
          'Implement SAST code quality scanning using CodeQL or SonarQube'
        ]
      },
      {
        phase: 'Phase 3: Secrets Management & Compliance Handover',
        title: 'Hardening & Reporting',
        tasks: [
          'Migrate plaintext environment secrets to AWS Secrets Manager or KMS-encrypted stores',
          'Configure Pod Security Standards and RBAC policies for Kubernetes deployments',
          'Provide a comprehensive DevSecOps posture report with remediation steps and compliance proof'
        ]
      }
    ],
    deliverables: [
      'Automated Trivy container scanning workflow integrated in GitHub Actions',
      'Automated secret scanning guardrails and pre-commit security configs',
      'Hardened IAM least-privilege role templates and policy definitions',
      'Centralized secrets management integration guide (AWS Secrets Manager / KMS)',
      'Security audit report & remediation checklist for enterprise questionnaires'
    ],
    technologies: [
      { name: 'Trivy (Aqua Security)', role: 'Container and filesystem vulnerability scanner' },
      { name: 'GitHub Actions & SARIF', role: 'Automated security pipeline execution & GitHub Security tab integration' },
      { name: 'CodeQL / SonarQube', role: 'Static Application Security Testing (SAST)' },
      { name: 'AWS IAM & KMS', role: 'Least-privilege access governance & data encryption' },
      { name: 'Git-Secrets / Gitleaks', role: 'Pre-commit and branch secret detection' }
    ],
    businessValue: [
      {
        title: 'Pass Enterprise Vendor Reviews',
        description: 'Confidently win enterprise and B2B contracts with documented, automated container vulnerability scanning.'
      },
      {
        title: 'Prevent Catastrophic Breaches',
        description: 'Stop leaked database credentials and vulnerable dependencies from turning into costly public data leaks.'
      },
      {
        title: 'Zero Friction for Developers',
        description: 'Security runs as an automated background pipeline check with clear remediation instructions rather than manual bureaucratic reviews.'
      }
    ],
    startingEstimate: 'From $1,300 [Estimated starting price / Editable]',
    faq: [
      {
        question: 'Will vulnerability scanning fail our builds on every minor warning?',
        answer: 'No. I configure security thresholds specifically to block only on CRITICAL and HIGH severity CVEs with actionable upstream fixes (`ignore-unfixed: true`), ensuring engineers are never blocked by noise.'
      },
      {
        question: 'How do you handle secrets that were already committed to Git in the past?',
        answer: 'I can guide you through rotating the exposed credentials immediately and scrubbing Git history cleanly using tools like git-filter-repo.'
      }
    ]
  },
  {
    slug: 'monitoring-and-reliability',
    title: 'Monitoring, Observability & Reliability (SRE)',
    subtitle: 'Prometheus & Grafana Dashboards, Centralized Logging & Real-Time Alerting',
    iconName: 'Activity',
    badge: 'Proactive Telemetry',
    targetAudience: 'SaaS Founders, E-commerce, High-Traffic Web Apps, CTOs',
    summary: 'Gain total visibility into your application and infrastructure health. I implement centralized metrics, actionable Grafana dashboards, and proactive alerting so you resolve issues before your customers ever notice.',
    problem: {
      title: 'Flying Blind in Production, Late Outage Discovery & Frantic Debugging',
      description: 'Without observability, engineering teams only discover production outages when angry customers complain on social media or email support. When an outage happens, engineers scramble across fragmented server logs with no clear idea of whether the bottleneck is database locks, CPU throttling, or memory exhaustion.',
      symptoms: [
        'Discovering outages from user complaints rather than automated monitors',
        'Logs scattered across separate servers with no centralized search capability',
        'No visibility into API response times, error rates (5xx), or database query latencies',
        'Alert fatigue from useless generic emails that get filtered directly to spam'
      ]
    },
    solution: {
      title: 'Full-Stack Observability & Intelligent Alerting That Catches Issues Early',
      description: 'I set up end-to-end monitoring using Prometheus, Grafana, and cloud telemetry. You get clean visual dashboards displaying key business and system metrics, coupled with actionable Slack or email alerts routed only when critical thresholds are exceeded.',
      keyBenefits: [
        'Real-time dashboards showing active users, API latencies, CPU/memory, and error rates',
        'Centralized log aggregation allowing you to search and filter logs across all servers in one place',
        'Actionable alerts sent to Slack, PagerDuty, or Email with direct links to the root cause',
        'Proactive warning alerts triggered before resources exhaust (e.g. disk reaches 85% full)'
      ]
    },
    scopeOfWork: [
      {
        phase: 'Phase 1: Metrics Strategy & Instrumentation',
        title: 'Telemetry Planning',
        tasks: [
          'Identify key service level indicators (SLIs): API error rates, latency p95/p99, database connection pools',
          'Deploy Node Exporter and application metric scrapers across compute and container layers',
          'Configure Prometheus server with retention policies and metric aggregation rules'
        ]
      },
      {
        phase: 'Phase 2: Dashboard Visualization & Centralized Logging',
        title: 'Grafana & Log Aggregation',
        tasks: [
          'Build custom Grafana dashboards for executive overview and deep technical debugging',
          'Set up centralized logging (CloudWatch Logs, Loki, or Elasticsearch) for instant querying',
          'Configure container stdout/stderr log shipping and structured JSON log formatting'
        ]
      },
      {
        phase: 'Phase 3: Actionable Alerting & Incident Runbooks',
        title: 'Alerting Setup',
        tasks: [
          'Configure Alertmanager notification routing to Slack channels or email',
          'Implement alert debouncing to eliminate duplicate spam and false positives',
          'Author concise incident runbooks with exact remediation steps for each triggered alert'
        ]
      }
    ],
    deliverables: [
      'Configured Prometheus metric scraping server and exporters',
      'Custom Grafana dashboards tailored to your application and database',
      'Centralized log aggregation setup with fast query filters',
      'Configured Alertmanager routing rules with Slack/Email integration',
      'Incident response runbook and on-call troubleshooting guide'
    ],
    technologies: [
      { name: 'Prometheus', role: 'Time-series metric collection and monitoring engine' },
      { name: 'Grafana', role: 'Real-time telemetry visualization and dashboards' },
      { name: 'AWS CloudWatch', role: 'Cloud-native log aggregation and system metrics' },
      { name: 'Alertmanager', role: 'Intelligent alert deduplication and notification routing' },
      { name: 'Linux Exporters', role: 'Host and container resource metrics (CPU, RAM, Disk, Network)' }
    ],
    businessValue: [
      {
        title: 'Sub-Minute Outage Detection',
        description: 'Detect and isolate application anomalies before they cascade into user-facing downtime.'
      },
      {
        title: 'Rapid Root-Cause Identification (Low MTTR)',
        description: 'Stop guessing what broke: jump straight to the exact spike, error log, or slow query in Grafana.'
      },
      {
        title: 'Proactive Capacity Planning',
        description: 'Know exactly when you need to upgrade database tiers or expand clusters weeks before hitting ceilings.'
      }
    ],
    startingEstimate: 'From $950 [Estimated starting price / Editable]',
    faq: [
      {
        question: 'Will setting up Prometheus and Grafana slow down our application?',
        answer: 'No. Metrics collection uses lightweight scrape endpoints that consume negligible CPU/RAM (typically less than 1%) and runs asynchronously.'
      },
      {
        question: 'Can you integrate alerts into our team’s Slack channel?',
        answer: 'Yes. I configure alerts with custom Slack webhooks including color-coded severity, metric graphs, and direct runbook links.'
      }
    ]
  }
];

export function getServiceBySlug(slug: string): DetailedService | undefined {
  return DETAILED_SERVICES.find(s => s.slug === slug);
}
