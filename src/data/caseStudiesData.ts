export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  category: 'Kubernetes & AI' | 'FinOps & Cloud' | 'DevSecOps & CI/CD' | 'Data & Storage';
  timeline: string;
  status: 'Open Source' | 'Production-Ready' | 'Enterprise Prototype';
  verifiedRepo: string;
  liveDemoUrl?: string;
  heroImage?: string;
  architectureDiagramType: 'k8s-agent' | 'cloudpilot' | 'devsecops' | 'digital-library';
  summary: string;

  // 12 Case Study Sections
  overview: string;
  problem: {
    statement: string;
    whyItMatters: string;
    impactAreas: string[];
  };
  architecture: {
    description: string;
    components: { name: string; purpose: string; tech: string }[];
    dataFlow: string[];
    diagramCaption: string;
  };
  technologies: {
    category: string;
    tools: { name: string; role: string }[];
  }[];
  implementation: {
    phase: string;
    title: string;
    details: string;
    codeSnippetTitle?: string;
    codeSnippet?: string;
  }[];
  technicalDecisions: {
    decision: string;
    rationale: string;
    tradeoffs: string;
  }[];
  challenges: {
    challenge: string;
    resolution: string;
  }[];
  securityAndReliability: {
    category: string;
    measures: string[];
  }[];
  results: {
    verifiedOutcomes: string[];
    metricsPlaceholder: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'ai-kubernetes-troubleshooting-agent',
    title: 'AI Kubernetes Troubleshooting Agent',
    subtitle: 'Automated Cluster Diagnostics & Root-Cause Analysis via LLM Reasoning',
    role: 'DevOps & AI Systems Engineer',
    category: 'Kubernetes & AI',
    timeline: 'Verified Repository Work',
    status: 'Open Source',
    verifiedRepo: 'https://github.com/Kalaigar-Ayesha/AI-Kubernetes-Troubleshooting-Agent',
    heroImage: 'https://raw.githubusercontent.com/Kalaigar-Ayesha/AI-Kubernetes-Troubleshooting-Agent/main/docs/images/architecture.png',
    architectureDiagramType: 'k8s-agent',
    summary: 'An on-demand, intelligent SRE assistant designed to automate cluster diagnostics by connecting directly to Kubernetes contexts, inspecting failing pods, extracting logs, correlating warning events, and synthesizing actionable kubectl fixes using LLM reasoning.',
    overview: 'In production Kubernetes environments, resolving service outages often requires on-call engineers to manually run dozens of kubectl commands, inspect pod events, tail crash logs across containers, and cross-reference ingress/endpoint routing. The AI Kubernetes Troubleshooting Agent automates this investigative pipeline into a sub-minute, real-time diagnostic engine.',
    problem: {
      statement: 'Kubernetes operational complexity creates high Mean Time to Recovery (MTTR) when pods enter CrashLoopBackOff, OOMKilled, or routing black holes.',
      whyItMatters: 'Every minute of unresolved cluster degradation risks customer transactions, SLA breaches, and engineering fatigue. Novice and intermediate developers often struggle with complex failure modes such as missing endpoint selectors or silent memory threshold kills.',
      impactAreas: [
        'Prolonged MTTR during production incidents',
        'Developer cognitive overload parsing thousands of lines of container logs',
        'Repetitive diagnostic kubectl toil for on-call SREs',
        'Difficulty correlating transient warning events with container exit codes'
      ]
    },
    architecture: {
      description: 'The system uses a modular decoupled architecture: a Next.js interactive frontend dashboard, a FastAPI backend orchestrator, modular Python Kubernetes investigation sub-inspectors using kubectl, and an InsForge BaaS integration (Postgres database, Authentication, Realtime pub/sub) with OpenRouter LLM reasoning.',
      components: [
        { name: 'Interactive UI Dashboard', purpose: 'Cluster selection, live diagnostic step streaming, and run history', tech: 'Next.js, TypeScript, Tailwind CSS' },
        { name: 'Investigation Orchestrator', purpose: 'Diagnostics pipeline execution and evidence aggregation', tech: 'FastAPI, Python 3.11+' },
        { name: 'Pod Inspector', purpose: 'Detects CrashLoopBackOff, OOMKilled (Exit 137), restarts, and resource starvation', tech: 'kubectl, Python subprocess' },
        { name: 'Logs & Events Collector', purpose: 'Extracts container stdout/stderr and correlates warning events', tech: 'kubectl logs, kubectl get events' },
        { name: 'Network & Routing Inspector', purpose: 'Validates Service definitions, label selectors, and Endpoint mappings', tech: 'Kubernetes API / kubectl' },
        { name: 'AI Reasoning Layer', purpose: 'Synthesizes gathered cluster evidence into concise root causes and remediation commands', tech: 'OpenRouter LLM API' },
        { name: 'Persistence & Auth', purpose: 'Investigation history, run logging, and secure session management', tech: 'InsForge BaaS, PostgreSQL' }
      ],
      dataFlow: [
        'User triggers diagnostic run for a specific Kubernetes namespace from the Next.js dashboard',
        'FastAPI backend orchestrator initiates parallel inspection workers (Pods, Logs, Events, Networking)',
        'Evidence payload is compiled into structured JSON containing exact failure points and logs',
        'Payload is forwarded to the OpenRouter reasoning layer with specialized SRE prompt constraints',
        'Synthesized root-cause analysis (RCA) and exact kubectl patch commands stream back to the UI in real time'
      ],
      diagramCaption: 'Verified architecture from project repository: Next.js frontend → FastAPI orchestrator → Kubernetes inspection engine → OpenRouter LLM → Realtime UI output.'
    },
    technologies: [
      {
        category: 'Orchestration & Containerization',
        tools: [
          { name: 'Kubernetes', role: 'Target container orchestration platform' },
          { name: 'kubectl CLI', role: 'Context inspection and cluster resource querying' },
          { name: 'Docker & Docker Compose', role: 'Containerized packaging of frontend and backend services' }
        ]
      },
      {
        category: 'Backend & AI Systems',
        tools: [
          { name: 'FastAPI (Python)', role: 'Asynchronous backend orchestrator and REST endpoints' },
          { name: 'OpenRouter API', role: 'Multi-model LLM reasoning engine for root-cause synthesis' },
          { name: 'Pydantic', role: 'Schema validation for cluster evidence payloads' }
        ]
      },
      {
        category: 'Frontend & Persistence',
        tools: [
          { name: 'Next.js & TypeScript', role: 'Real-time diagnostic streaming dashboard' },
          { name: 'InsForge / PostgreSQL', role: 'Session authentication and diagnostic run history' },
          { name: 'Tailwind CSS', role: 'Dark-mode-first SRE telemetry styling' }
        ]
      }
    ],
    implementation: [
      {
        phase: 'Phase 1',
        title: 'Cluster Connection & Modular Sub-Inspectors',
        details: 'Architected modular inspection modules (`pod_inspector.py`, `deployment_inspector.py`, `events_analyzer.py`, `logs_collector.py`, `network_inspector.py`). Rather than running monolithic scripts, each module has a distinct responsibility—such as verifying whether an endpoint has matching pod IPs or whether an OOMKilled exit code matches container memory limits.'
      },
      {
        phase: 'Phase 2',
        title: 'Evidence Aggregation & Prompt Engineering',
        details: 'Constructed an evidence aggregation pipeline in FastAPI that compiles disparate kubectl outputs into a token-efficient JSON payload. Designed strict SRE prompt templates instructing the LLM to output only verified facts, exact container names, failure mechanisms, and actionable kubectl repair commands.'
      },
      {
        phase: 'Phase 3',
        title: 'Realtime Streaming & Dashboard Integration',
        details: 'Built a Next.js user interface with live diagnostic step progression, allowing on-call engineers to visually follow which pod is being checked, inspect raw container logs, and review the final synthesized fix.'
      }
    ],
    technicalDecisions: [
      {
        decision: 'Direct kubectl CLI integration over heavy in-cluster daemon agents',
        rationale: 'Avoided deploying privileged cluster-wide daemons across client clusters. Running through authenticated kubectl context enables secure, zero-installation troubleshooting on any accessible cluster.',
        tradeoffs: 'Dependent on the execution environment having network connectivity and RBAC permissions for the target cluster.'
      },
      {
        decision: 'Modular sub-inspectors over a single catch-all query',
        rationale: 'Decoupling pod inspection, event correlation, and network routing enables targeted checks and clean error isolation when individual APIs return timeouts.',
        tradeoffs: 'Requires orchestrating multiple asynchronous subprocess calls.'
      }
    ],
    challenges: [
      {
        challenge: 'Handling massive, noisy container logs without exhausting LLM context windows or incurring runaway token costs.',
        resolution: 'Implemented an intelligent log windowing filter in `logs_collector.py` that isolates stack traces, fatal panics, and the final 100 lines preceding container termination.'
      },
      {
        challenge: 'Preventing hallucinated or dangerous kubectl commands from being recommended.',
        resolution: 'Implemented prompt guardrails requiring the LLM to provide dry-run flags (`--dry-run=client -o yaml`) and explicit step-by-step validation commands.'
      }
    ],
    securityAndReliability: [
      {
        category: 'Access Control',
        measures: [
          'Read-only diagnostic execution prevents accidental cluster modifications during inspection',
          'Kubernetes RBAC least-privilege scoping per namespace',
          'InsForge token-based authentication protecting diagnostic session histories'
        ]
      },
      {
        category: 'Data Privacy',
        measures: [
          'Automatic redaction of known environment variables and sensitive secret values from container logs before LLM transmission',
          'Strict TLS encryption on all API calls and OpenRouter endpoints'
        ]
      }
    ],
    results: {
      verifiedOutcomes: [
        'Automated detection of CrashLoopBackOff, OOMKilled (137), ImagePullBackOff, and Evicted states',
        'Sub-minute automated diagnostic report generation replacing manual triage steps',
        'Zero-privilege agent design requiring no custom daemonset installation on user clusters',
        'End-to-end working repository with complete FastAPI backend and Next.js frontend'
      ],
      metricsPlaceholder: '[Editable Metric Placeholder: e.g. Reduced initial incident triage time from 25 minutes to under 90 seconds in test staging clusters]'
    }
  },
  {
    slug: 'cloudpilot-ai',
    title: 'CloudPilot-AI: Enterprise Multi-Cloud FinOps Copilot',
    subtitle: 'Multi-Cloud Resource Aggregation & Cost Optimization Engine',
    role: 'DevOps & FinOps Architect',
    category: 'FinOps & Cloud',
    timeline: 'Verified Repository Work',
    status: 'Production-Ready',
    verifiedRepo: 'https://github.com/Kalaigar-Ayesha/CloudPilot-AI',
    heroImage: 'https://raw.githubusercontent.com/Kalaigar-Ayesha/CloudPilot-AI/main/Proof/Screenshot%202026-07-02%20173053.png',
    architectureDiagramType: 'cloudpilot',
    summary: 'A production-grade, dark-mode-first multi-cloud FinOps engine designed to aggregate cloud resources, scrape telemetry metrics, generate right-sizing recommendations, and support secure AI chat agent queries across AWS, Azure, and Google Cloud.',
    overview: 'As cloud infrastructures scale across multi-cloud environments, engineering teams frequently suffer from resource sprawl: unattached EBS volumes, oversized EC2 instances running at 4% CPU utilization, outdated GP2 storage volumes, and forgotten staging databases. CloudPilot-AI provides unified spend transparency and proactive rightsizing with tool-calling AI capabilities.',
    problem: {
      statement: 'Unmonitored cloud sprawl across AWS, Azure, and GCP leads to massive monthly budget waste and zero visibility for engineering leaders.',
      whyItMatters: 'Startups burn runway needlessly on idle resources, while engineering teams lack the time to manually audit hundreds of cloud resource IDs across multiple provider consoles.',
      impactAreas: [
        'Monthly cloud bills ballooning without proportional business growth',
        'Fragmented cost visibility across multiple disparate cloud dashboards',
        'Lack of automated right-sizing recommendations with confidence scoring',
        'Delayed discovery of unattached storage volumes and idle compute instances'
      ]
    },
    architecture: {
      description: 'CloudPilot-AI adheres strictly to Clean Architecture and SOLID design patterns. The codebase completely separates cloud provider target integrations (AWS SDK, Azure SDK, GCP SDK) from internal orchestration, telemetry scraping, rightsizing calculation, and AI tool-calling layers.',
      components: [
        { name: 'Multi-Cloud Integration Adapters', purpose: 'Standardized interfaces fetching inventory and cost metrics', tech: 'AWS Boto3, Azure SDK, Google Cloud SDK' },
        { name: 'FinOps Optimization Engine', purpose: 'Rules engine calculating rightsizing, idle detection, and storage migration', tech: 'Python, FastAPI' },
        { name: 'AI DevOps Copilot Agent', purpose: 'Executes natural language queries via structured tool calling', tech: 'FastAPI, LLM Tool Calling' },
        { name: 'Unified FinOps Dashboard', purpose: 'Visualizing spend trends, potential savings, and CPU telemetry', tech: 'Modern Dark-Mode Web UI' },
        { name: 'Database & Migrations', purpose: 'Historical cost tracking, tenant data, and audit records', tech: 'PostgreSQL, Alembic' }
      ],
      dataFlow: [
        'Cloud adapters poll resource states and metrics (CPU, RAM, IOPS, billing tags) across cloud accounts',
        'Optimization engine compares metrics against threshold algorithms (e.g. CPU < 5% over 14 days)',
        'Savings opportunities are calculated with confidence scores and monthly dollar estimates',
        'AI Copilot accepts natural language queries, invokes internal tools, and returns structured data',
        'Dashboard updates spend distribution charts and prioritized action items in real time'
      ],
      diagramCaption: 'Verified architecture from repository diagram: Cloud Providers (AWS/Azure/GCP) → Clean Architecture Adapters → Optimization Engine & AI Tool Calling → FinOps Dashboard.'
    },
    technologies: [
      {
        category: 'Cloud Providers & SDKs',
        tools: [
          { name: 'Amazon Web Services (AWS)', role: 'EC2, EBS, RDS, S3, Cost Explorer, Boto3 SDK' },
          { name: 'Microsoft Azure', role: 'Azure Compute, Storage, and Cost Management APIs' },
          { name: 'Google Cloud Platform (GCP)', role: 'Compute Engine, Cloud Storage, and Billing APIs' }
        ]
      },
      {
        category: 'Backend & Architecture',
        tools: [
          { name: 'Python & FastAPI', role: 'Clean Architecture microservices orchestrator' },
          { name: 'Alembic & SQLAlchemy', role: 'Database migration management and ORM models' },
          { name: 'Docker', role: 'Containerized service packaging and deployment' }
        ]
      },
      {
        category: 'FinOps & Optimization',
        tools: [
          { name: 'Karpenter / Autoscaling', role: 'Dynamic node consolidation hooks' },
          { name: 'Confidence Scoring Engine', role: 'Risk-weighted right-sizing recommendations' }
        ]
      }
    ],
    implementation: [
      {
        phase: 'Phase 1',
        title: 'Multi-Cloud Adapter Layer',
        details: 'Constructed an abstraction barrier between cloud provider APIs and internal services following SOLID principles. Adding a new cloud provider or region requires only implementing the standardized inventory and metrics interface.'
      },
      {
        phase: 'Phase 2',
        title: 'Rightsizing & Waste Detection Engine',
        details: 'Implemented automated rules in `optimization.py` and `billing.py` to identify: 1. Idle compute instances (< 5% CPU utilization over sliding evaluation periods); 2. Unattached storage volumes; 3. Candidates for GP2 to GP3 block store migrations yielding instant 20% cost savings with zero downtime.'
      },
      {
        phase: 'Phase 3',
        title: 'Tool-Calling AI Copilot Interface',
        details: 'Equipped an AI assistant with structured function schemas so developers can ask plain-text questions like "What are my highest cost drivers in AWS this month?" and receive validated, data-backed tables and recommendations.'
      }
    ],
    technicalDecisions: [
      {
        decision: 'Clean Architecture with explicit dependency inversion',
        rationale: 'Decoupling provider-specific API calls ensures the optimization math and UI schemas remain independent of whether data originates from AWS, Azure, or GCP.',
        tradeoffs: 'Requires more initial boilerplate and adapter interfaces than direct SDK scripting.'
      },
      {
        decision: 'Non-destructive advisory model over immediate automated deletion',
        rationale: 'Production cloud engineering requires high trust. CloudPilot flags waste with confidence scores and generated Terraform/CLI commands rather than deleting live resources unprompted.',
        tradeoffs: 'Requires engineer confirmation for execution.'
      }
    ],
    challenges: [
      {
        challenge: 'Normalizing disparate billing metrics, currency formats, and resource metadata across AWS, Azure, and GCP.',
        resolution: 'Designed a unified internal schema mapping all instances, storage units, and egress bandwidth to standardized units of measure.'
      },
      {
        challenge: 'Handling rate-limiting and throttling when querying extensive multi-region resource catalogs.',
        resolution: 'Implemented batched asynchronous collectors with exponential backoff and localized caching.'
      }
    ],
    securityAndReliability: [
      {
        category: 'Credential Security',
        measures: [
          'Read-only IAM role assumptions (SecurityAudit and CostManagement roles only)',
          'Strict segregation of cloud credentials using environment secrets and token rotation',
          'Zero transmission of raw cloud credentials to external LLM providers'
        ]
      },
      {
        category: 'System Reliability',
        measures: [
          'Dockerized microservices isolated behind API gateway',
          'Health probe endpoints (`/api/v1/health`) for container orchestration readiness'
        ]
      }
    ],
    results: {
      verifiedOutcomes: [
        'Complete working multi-cloud FinOps dashboard supporting AWS, Azure, and GCP',
        'Automated detection of idle compute, unattached storage, and GP2-to-GP3 migration candidates',
        'Interactive AI copilot with tool-calling for real-time infrastructure spending queries',
        'Production-tested architecture documented with comprehensive schemas and proof artifacts'
      ],
      metricsPlaceholder: '[Editable Metric Placeholder: e.g. Identified 32% potential monthly cloud savings on benchmark multi-cloud testbed]'
    }
  },
  {
    slug: 'devsecops-chat-application',
    title: 'Production-Grade DevSecOps Chat Application',
    subtitle: 'Full-Stack Realtime Microservices with GitOps & Container Security',
    role: 'Lead DevSecOps Engineer',
    category: 'DevSecOps & CI/CD',
    timeline: 'Verified Repository Work',
    status: 'Production-Ready',
    verifiedRepo: 'https://github.com/Kalaigar-Ayesha/DevSecOps-Chat-Apllication',
    heroImage: 'https://raw.githubusercontent.com/Kalaigar-Ayesha/DevSecOps-Chat-Apllication/main/diagram.png',
    architectureDiagramType: 'devsecops',
    summary: 'A production-ready, enterprise-grade cloud-native chat platform demonstrating GitOps-driven Kubernetes deployments, automated GitHub Actions CI/CD pipelines, container vulnerability scanning, and an observability-first architecture.',
    overview: 'Modern SaaS applications demand real-time reliability alongside rigorous security posture. This project demonstrates an enterprise DevSecOps workflow: code is automatically vetted with SAST, scanned for secrets, checked for container vulnerabilities using Trivy, packaged as Helm charts, and continuously deployed to Kubernetes via ArgoCD with complete Prometheus/Grafana observability.',
    problem: {
      statement: 'Traditional deployment pipelines treat security as an afterthought at the end of the release cycle, creating deployment bottlenecks, vulnerable images in production, and downtime during updates.',
      whyItMatters: 'Unpatched container vulnerabilities (CVEs) and hardcoded secrets lead to severe security incidents. Manual cluster deployments cause human error and inconsistent staging/production configurations.',
      impactAreas: [
        'Vulnerabilities shipped to production clusters unnoticed',
        'Secrets and API tokens inadvertently committed to Git history',
        'Configuration drift between staging and production environments',
        'Lack of real-time application and cluster health observability'
      ]
    },
    architecture: {
      description: 'The system is built as a cloud-native microservices architecture: React frontend, Nginx reverse proxy, Node.js backend with WebSocket support, and MongoDB. The infrastructure is provisioned via Terraform, with continuous delivery managed through GitHub Actions and ArgoCD GitOps onto Kubernetes.',
      components: [
        { name: 'Application Layer', purpose: 'React UI, Nginx reverse proxy, Node.js WebSocket API, MongoDB persistence', tech: 'React, Node.js, WebSockets, MongoDB, Nginx' },
        { name: 'CI/CD Pipeline', purpose: 'Automated testing, linting, Docker image packaging, and vulnerability gates', tech: 'GitHub Actions, Docker Hub' },
        { name: 'Security Automation (DevSecOps)', purpose: 'Trivy image scanning, SonarQube SAST, CodeQL, and secret scanning', tech: 'Trivy, CodeQL, GitHub Security' },
        { name: 'GitOps Continuous Deployment', purpose: 'Declarative cluster sync, staging/prod environments, automated rollback', tech: 'ArgoCD, Helm' },
        { name: 'Kubernetes Orchestration', purpose: 'HPA autoscaling, PodDisruptionBudgets, Ingress, persistent volume claims', tech: 'Kubernetes, Helm Charts' },
        { name: 'Infrastructure as Code', purpose: 'Repeatable AWS cloud foundation (VPC, compute, networking)', tech: 'Terraform' },
        { name: 'Observability & Monitoring', purpose: 'Cluster and application metrics, dashboards, and alerting', tech: 'Prometheus, Grafana' }
      ],
      dataFlow: [
        'Developer pushes code to feature or release branches on GitHub',
        'GitHub Actions executes linting, unit tests, and static code analysis (CodeQL/SonarQube)',
        'Multi-stage Docker builds generate lean container images',
        'Trivy scans images for CRITICAL/HIGH CVEs, failing the build and uploading SARIF reports if violated',
        'Images are pushed to Docker Hub and Helm values are updated',
        'ArgoCD detects Git commit and applies declarative Helm charts to the Kubernetes cluster',
        'Prometheus collects container metrics and Grafana visualizes real-time performance'
      ],
      diagramCaption: 'Verified architecture from repository: Microservices (React/Node/Mongo) → GitHub Actions DevSecOps (Trivy/SAST) → Docker Hub → ArgoCD GitOps → Kubernetes Cluster with Prometheus/Grafana.'
    },
    technologies: [
      {
        category: 'Continuous Delivery & GitOps',
        tools: [
          { name: 'GitHub Actions', role: 'Multi-environment CI/CD workflows and automated pipelines' },
          { name: 'ArgoCD', role: 'Declarative GitOps continuous deployment to Kubernetes' },
          { name: 'Helm', role: 'Standardized Kubernetes package management (values-dev, staging, prod)' }
        ]
      },
      {
        category: 'Security & Scanning (DevSecOps)',
        tools: [
          { name: 'Trivy (Aqua Security)', role: 'Container vulnerability scanning with SARIF reporting' },
          { name: 'CodeQL', role: 'Semantic code analysis for security vulnerabilities' },
          { name: 'Secret & DAST Scanning', role: 'Automated pre-deployment security inspection' }
        ]
      },
      {
        category: 'Infrastructure & Containerization',
        tools: [
          { name: 'Kubernetes', role: 'Container orchestration, HPAs, and PodDisruptionBudgets' },
          { name: 'Docker', role: 'Optimized multi-stage container builds' },
          { name: 'Terraform', role: 'AWS infrastructure provisioning as code' },
          { name: 'Prometheus & Grafana', role: 'Full observability stack and telemetry dashboards' }
        ]
      }
    ],
    implementation: [
      {
        phase: 'Phase 1',
        title: 'Microservices & Containerization',
        details: 'Architected the full-stack chat application separating concerns into distinct services: React frontend served via Nginx, Node.js REST API with WebSocket handling, and MongoDB database with persistent volume claims.'
      },
      {
        phase: 'Phase 2',
        title: 'Shift-Left DevSecOps Pipeline',
        details: 'Engineered automated GitHub Actions workflows including `security-scan.yml`. Integrated Trivy to scan every built Docker image, configured with `exit-code: 1` on CRITICAL and HIGH severity vulnerabilities to enforce hard quality gates before any image can reach Docker Hub.'
      },
      {
        phase: 'Phase 3',
        title: 'GitOps Continuous Delivery & Kubernetes Hardening',
        details: 'Created production Helm templates with HorizontalPodAutoscalers (`backend-hpa.yaml`), PodDisruptionBudgets (`backend-pdb.yaml`), and separate environment values (`values-dev.yaml`, `values-staging.yaml`, `values-prod.yaml`). Configured ArgoCD for zero-touch declarative cluster synchronization.'
      }
    ],
    technicalDecisions: [
      {
        decision: 'Migrating legacy Jenkins pipeline to native GitHub Actions',
        rationale: 'Consolidating source control and CI/CD inside GitHub Actions eliminated Jenkins controller maintenance overhead, enabled native SARIF security tab integration, and sped up pipeline execution.',
        tradeoffs: 'Required rewriting existing groovy Jenkinsfiles into declarative YAML workflows.'
      },
      {
        decision: 'ArgoCD pull-based GitOps deployment over push-based CI deployment',
        rationale: 'Avoided storing cluster admin credentials inside GitHub Actions runners. ArgoCD runs within the cluster, continuously reconciling desired Git state with actual cluster state.',
        tradeoffs: 'Requires hosting and operating the ArgoCD controller inside the cluster.'
      }
    ],
    challenges: [
      {
        challenge: 'Preventing pipeline failures on non-fixable upstream OS package vulnerabilities in base container images.',
        resolution: 'Configured Trivy with `ignore-unfixed: true`, ensuring builds only block on vulnerabilities with verified, actionable patches available.'
      },
      {
        challenge: 'Maintaining zero-downtime WebSocket connection handovers during Kubernetes rolling updates.',
        resolution: 'Implemented PodDisruptionBudgets (`backend-pdb.yaml`) ensuring minimum available replicas during updates, coupled with Nginx upstream keep-alive configurations.'
      }
    ],
    securityAndReliability: [
      {
        category: 'Pipeline Security',
        measures: [
          'Hard exit code 1 on CRITICAL/HIGH container vulnerabilities',
          'SARIF vulnerability upload directly to GitHub Security tab for automated tracking',
          'Secret scanning ensuring no credentials enter the Git tree'
        ]
      },
      {
        category: 'Cluster Resilience',
        measures: [
          'HorizontalPodAutoscaler (HPA) automatically scaling pods based on CPU/Memory load',
          'PodDisruptionBudgets preventing accidental service outages during node upgrades',
          'PersistentVolumeClaims (PVC) protecting MongoDB state from pod eviction'
        ]
      }
    ],
    results: {
      verifiedOutcomes: [
        'End-to-end automated pipeline executing tests, builds, scans, and GitOps deployments',
        'Zero critical/high vulnerabilities allowed into Docker Hub via Trivy automated gates',
        'Full production Helm chart with multi-environment values for dev, staging, and prod',
        'ArgoCD GitOps synchronization eliminating configuration drift'
      ],
      metricsPlaceholder: '[Editable Metric Placeholder: e.g. Reduced release cycle time from 4 hours to 12 minutes with zero manual deployment steps]'
    }
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find(c => c.slug === slug);
}
