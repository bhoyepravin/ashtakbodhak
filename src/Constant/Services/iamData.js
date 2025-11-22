const iamData = {
  hero: {
    title: "Identity & Access Management",
    subtitle: "IAM Professional Training",
    description:
      "Master identity governance, access controls, and privileged account security to protect organizational assets and ensure compliance",
  },
  overview: {
    title: "Course Overview",
    description:
      "This comprehensive IAM training program provides in-depth knowledge of identity lifecycle management, authentication systems, and access governance in modern enterprise environments.",
    duration: "8 Weeks | 45+ Hours",
    level: "Intermediate",
    audience:
      "Security Professionals, IT Administrators, System Architects, Compliance Officers",
  },
  curriculum: {
    title: "IAM Curriculum",
    modules: [
      {
        number: "01",
        title: "Cybersecurity Fundamentals",

        duration: "4 Hours",
        topics: [
          "Threat landscape: phishing, ransomware, insider threats",
          "CIA triad and layered defense",
          "Real-world breach examples and impact",
        ],
        labs: [
          "Threat analysis workshop",
          "Security control mapping",
          "Case study analysis",
        ],
      },
      {
        number: "02",
        title: "Introduction to IAM",

        duration: "5 Hours",
        topics: [
          "What is Identity & Access Management?",
          "Key components: identification, authentication, authorization, audit",
          "Role of IAM in Zero Trust architecture",
        ],
        labs: [
          "IAM component mapping",
          "Zero Trust architecture design",
          "IAM workflow simulation",
        ],
      },
      {
        number: "03",
        title: "Authentication & Authorization",

        duration: "7 Hours",
        topics: [
          "Password hygiene and multi-factor authentication (MFA)",
          "Single Sign-On (SSO) and federated identity",
          "Role-based access control (RBAC) vs. attribute-based access control (ABAC)",
        ],
        labs: [
          "MFA implementation exercise",
          "SSO configuration lab",
          "RBAC/ABAC policy design",
        ],
      },
      {
        number: "04",
        title: "Privileged Access Management",

        duration: "8 Hours",
        topics: [
          "Risks of privileged accounts and admin access",
          "Vaulting, session monitoring, and just-in-time access",
          "PAM tools and best practices",
        ],
        labs: [
          "PAM tool configuration",
          "Privileged session monitoring",
          "Just-in-time access implementation",
        ],
      },
      {
        number: "05",
        title: "Identity Lifecycle & Governance",

        duration: "6 Hours",
        topics: [
          "Onboarding, provisioning, de-provisioning",
          "Access reviews, recertification, and segregation of duties (SoD)",
          "Identity governance platforms and workflows",
        ],
        labs: [
          "Identity lifecycle automation",
          "Access review process design",
          "SoD violation detection",
        ],
      },
      {
        number: "06",
        title: "IAM in Cloud & Hybrid Environments",

        duration: "7 Hours",
        topics: [
          "IAM for Azure AD, AWS IAM, Google Workspace",
          "Managing identities across SaaS, IaaS, and on-prem systems",
          "Shadow IT and third-party access risks",
        ],
        labs: [
          "Azure AD configuration",
          "AWS IAM policy development",
          "Hybrid identity management",
        ],
      },
      {
        number: "07",
        title: "Incident Response & IAM Failures",

        duration: "5 Hours",
        topics: [
          "What happens when IAM is misconfigured or bypassed",
          "Detecting and responding to identity-based attacks",
          "IAM's role in forensic investigations",
        ],
        labs: [
          "IAM failure scenario analysis",
          "Identity threat detection",
          "Forensic investigation simulation",
        ],
      },
      {
        number: "08",
        title: "Compliance & Regulatory Alignment",

        duration: "3 Hours",
        topics: [
          "ISO 27001, NIST, GDPR, DPDP Act, RBI/IRDAI mandates",
          "IAM as a control for audit readiness",
          "Documentation and reporting best practices",
        ],
        labs: [
          "Compliance gap assessment",
          "Audit documentation preparation",
          "Regulatory reporting exercise",
        ],
      },
    ],
  },
  technicalSkills: {
    title: "Technical Skills You'll Master",
    skills: [
      {
        category: "Authentication",
        items: [
          "MFA Implementation",
          "SSO Configuration",
          "Federated Identity",
          "Password Policies",
        ],
      },
      {
        category: "Access Governance",
        items: [
          "RBAC/ABAC Design",
          "Access Reviews",
          "SoD Management",
          "Lifecycle Automation",
        ],
      },
      {
        category: "Privileged Access",
        items: [
          "PAM Tools",
          "Session Monitoring",
          "Just-in-Time Access",
          "Vault Management",
        ],
      },
      {
        category: "Cloud IAM",
        items: ["Azure AD", "AWS IAM", "Google Workspace", "Hybrid Identity"],
      },
    ],
  },
  careerPaths: {
    title: "IAM Career Opportunities",
    roles: [
      {
        title: "IAM Specialist",
        salary: "₹8-16 LPA",
        growth: "High Demand",
      },
      {
        title: "PAM Engineer",
        salary: "₹10-18 LPA",
        growth: "Specialized",
      },
      {
        title: "Identity Governance Analyst",
        salary: "₹7-14 LPA",
        growth: "Compliance Focus",
      },
      {
        title: "Cloud IAM Architect",
        salary: "₹15-25 LPA",
        growth: "Emerging Field",
      },
    ],
  },
  labEnvironment: {
    title: "Hands-On IAM Lab Environment",
    features: [
      "Enterprise IAM platform access",
      "Cloud identity management consoles",
      "PAM tool simulation environments",
      "Identity governance workflows",
      "Multi-cloud IAM configuration",
    ],
  },
  certifications: {
    title: "Path to IAM Certifications",
    certs: [
      {
        name: "CIAM",
        organization: "Identity Management Institute",
        focus: "Identity and Access Management",
      },
      {
        name: "CIPM",
        organization: "IAPP",
        focus: "Privacy Management",
      },
      {
        name: "AWS Certified Security",
        organization: "Amazon",
        focus: "Cloud IAM Specialization",
      },
      {
        name: "Microsoft Identity and Access Administrator",
        organization: "Microsoft",
        focus: "Azure AD and Identity Services",
      },
    ],
  },
  toolsCovered: {
    title: "Industry IAM Tools Covered",
    tools: [
      { name: "Azure Active Directory", category: "Cloud IAM" },
      { name: "AWS IAM", category: "Cloud IAM" },
      { name: "Okta", category: "Identity Provider" },
      { name: "CyberArk", category: "PAM" },
      { name: "BeyondTrust", category: "PAM" },
      { name: "SailPoint", category: "Identity Governance" },
      { name: "ForgeRock", category: "Identity Platform" },
      { name: "Ping Identity", category: "Federation" },
    ],
  },
  cta: {
    title: "Become an IAM Expert",
    description:
      "Join our comprehensive Identity & Access Management program and master the skills to secure digital identities and enforce access controls",
    button: "Enroll Now",
    secondary: "Download Course Brochure",
  },
};

export default iamData;
