const socData = {
  hero: {
    title: "Security Operations Centre",
    subtitle: "SOC Analyst Professional Training",
    description:
      "Master the skills to monitor, detect, and respond to cybersecurity threats in a modern Security Operations Center environment",
  },
  overview: {
    title: "Course Overview",
    description:
      "This intensive SOC training program provides hands-on experience in security monitoring, incident response, threat intelligence, and SOC operations using industry-standard tools and methodologies.",
    duration: "8 Weeks | 50+ Hours",
    level: "Beginner to Intermediate",
    audience:
      "Aspiring SOC Analysts, IT Professionals, Security Enthusiasts, Network Administrators",
  },
  curriculum: {
    title: "SOC Curriculum",
    modules: [
      {
        number: "01",
        title: "Cybersecurity Fundamentals",
        icon: "🛡️",
        duration: "6 Hours",
        topics: [
          "Threat landscape: malware, phishing, ransomware, insider threats",
          "CIA triad and layered defense",
          "Real-world breach examples and impact",
        ],
        labs: [
          "Threat analysis workshop",
          "Defense-in-depth implementation",
          "Case study analysis",
        ],
      },
      {
        number: "02",
        title: "Introduction to SOC",
        icon: "🏢",
        duration: "5 Hours",
        topics: [
          "What is a Security Operations Center?",
          "SOC roles: Tier 1, Tier 2, Tier 3 analysts, incident responders",
          "SOC tools: SIEM, SOAR, threat intelligence platforms",
        ],
        labs: [
          "SOC role-playing scenarios",
          "Tool familiarization exercise",
          "SOC workflow simulation",
        ],
      },
      {
        number: "03",
        title: "Threat Detection & Monitoring",
        icon: "🔍",
        duration: "8 Hours",
        topics: [
          "Log sources: firewalls, endpoints, servers, cloud",
          "Use cases and correlation rules",
          "Alert triage and false positive reduction",
        ],
        labs: [
          "Log source configuration",
          "Correlation rule development",
          "Alert triage practice",
        ],
      },
      {
        number: "04",
        title: "Incident Response Lifecycle",
        icon: "🚨",
        duration: "7 Hours",
        topics: [
          "Phases: identification, containment, eradication, recovery, post-incident review",
          "Escalation protocols and playbooks",
          "Communication strategies during incidents",
        ],
        labs: [
          "Incident response playbook development",
          "Escalation procedure practice",
          "Communication drill simulation",
        ],
      },
      {
        number: "05",
        title: "SOC Metrics & Reporting",
        icon: "📊",
        duration: "4 Hours",
        topics: [
          "KPIs: MTTR, MTTD, alert volume, incident severity",
          "Dashboards and executive summaries",
          "Regulatory reporting (CERT-In, RBI, IRDAI, etc.)",
        ],
        labs: [
          "KPI dashboard creation",
          "Executive report writing",
          "Regulatory compliance exercise",
        ],
      },
      {
        number: "06",
        title: "Threat Intelligence & Hunting",
        icon: "🎯",
        duration: "6 Hours",
        topics: [
          "IOC, TTPs, and MITRE ATT&CK framework",
          "Proactive threat hunting techniques",
          "Integrating threat feeds into SOC workflows",
        ],
        labs: [
          "IOC analysis and management",
          "Threat hunting exercises",
          "MITRE ATT&CK mapping",
        ],
      },
      {
        number: "07",
        title: "Compliance & Governance",
        icon: "📋",
        duration: "5 Hours",
        topics: [
          "ISO 27001, NIST CSF, DPDP Act, RBI/IRDAI mandates",
          "Audit readiness and documentation",
          "SOC's role in enterprise GRC alignment",
        ],
        labs: [
          "Compliance gap analysis",
          "Audit documentation preparation",
          "GRC alignment workshop",
        ],
      },
      {
        number: "08",
        title: "Building a Cyber-Aware Culture",
        icon: "👥",
        duration: "4 Hours",
        topics: [
          "Role-based awareness for SOC, IT, and business teams",
          "Daily cyber hygiene practices",
          "Simulations, phishing drills, and tabletop exercises",
        ],
        labs: [
          "Awareness campaign design",
          "Phishing simulation setup",
          "Tabletop exercise facilitation",
        ],
      },
    ],
  },
  technicalSkills: {
    title: "Technical Skills You'll Master",
    skills: [
      {
        category: "Security Monitoring",
        items: [
          "SIEM Operations",
          "Log Analysis",
          "Alert Triage",
          "Threat Detection",
        ],
      },
      {
        category: "Incident Response",
        items: [
          "Playbook Development",
          "Containment Strategies",
          "Forensic Basics",
          "Recovery Procedures",
        ],
      },
      {
        category: "SOC Tools",
        items: [
          "SIEM Platforms",
          "SOAR Solutions",
          "Threat Intelligence",
          "Case Management",
        ],
      },
      {
        category: "Compliance",
        items: [
          "Regulatory Reporting",
          "KPI Monitoring",
          "Audit Preparation",
          "Documentation",
        ],
      },
    ],
  },
  careerPaths: {
    title: "SOC Career Opportunities",
    roles: [
      {
        title: "SOC Analyst (Tier 1)",
        salary: "₹4-8 LPA",
        growth: "Entry Level",
      },
      {
        title: "SOC Analyst (Tier 2)",
        salary: "₹6-12 LPA",
        growth: "Mid Level",
      },
      {
        title: "Incident Responder",
        salary: "₹8-15 LPA",
        growth: "Specialized",
      },
      {
        title: "SOC Team Lead",
        salary: "₹12-20 LPA",
        growth: "Leadership",
      },
    ],
  },
  labEnvironment: {
    title: "Hands-On SOC Lab Environment",
    features: [
      "Live SIEM platform access",
      "Real-world log sources and datasets",
      "Incident response simulation platform",
      "Threat intelligence feeds",
      "SOAR tool sandbox environment",
    ],
  },
  certifications: {
    title: "Path to SOC Certifications",
    certs: [
      {
        name: "CompTIA CySA+",
        focus: "Cybersecurity Analyst",
      },
      {
        name: "EC-Council CSA",
        focus: "SOC Analyst",
      },
      {
        name: "GIAC GSOC",
        focus: "Security Operations",
      },
      {
        name: "Cisco CyberOps",
        focus: "Security Operations",
      },
    ],
  },
  toolsCovered: {
    title: "Industry Tools Covered",
    tools: [
      { name: "Splunk", type: "SIEM" },
      { name: "IBM QRadar", type: "SIEM" },
      { name: "ArcSight", type: "SIEM" },
      { name: "Elastic Stack", type: "SIEM" },
      { name: "ServiceNow", type: "Ticketing" },
      { name: "MISP", type: "Threat Intelligence" },
      { name: "PhishingBox", type: "Simulation" },
    ],
  },
  cta: {
    title: "Launch Your SOC Career",
    description:
      "Join our comprehensive SOC training program and become a skilled security operations professional ready for high-demand roles",
    button: "Enroll Now",
    secondary: "Request Syllabus",
  },
};

export default socData;
