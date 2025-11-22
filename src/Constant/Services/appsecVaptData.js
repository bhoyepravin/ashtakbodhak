const appsecVaptData = {
  hero: {
    title: "Application Security & VAPT",
    subtitle: "Secure Development & Ethical Hacking",
    description:
      "Master application security principles and vulnerability assessment techniques to build secure software and identify security weaknesses",
  },
  overview: {
    title: "Course Overview",
    description:
      "This comprehensive training program combines secure development practices with hands-on ethical hacking skills to create security-conscious developers and skilled penetration testers.",
    duration: "10 Weeks | 60+ Hours",
    level: "Intermediate to Advanced",
    audience:
      "Developers, Security Professionals, QA Engineers, DevOps Engineers, IT Professionals",
  },
  curriculum: {
    title: "Application Security & VAPT Curriculum",
    modules: [
      {
        number: "01",
        title: "Cybersecurity Fundamentals",
        icon: "🛡️",
        duration: "5 Hours",
        topics: [
          "Threat landscape: malware, phishing, ransomware, insider threats",
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
        title: "Application Security Basics",
        icon: "🔐",
        duration: "8 Hours",
        topics: [
          "OWASP Top 10 vulnerabilities (e.g., XSS, SQLi, Broken Auth)",
          "Secure coding practices and input validation",
          "Role of DevSecOps and shift-left security",
        ],
        labs: [
          "OWASP Top 10 vulnerability identification",
          "Secure code review exercise",
          "Input validation implementation",
        ],
      },
      {
        number: "03",
        title: "Secure SDLC",
        icon: "🔄",
        duration: "7 Hours",
        topics: [
          "Security checkpoints in requirements, design, development, testing, deployment",
          "Threat modeling and code reviews",
          "Integrating SAST, DAST, and SCA tools",
        ],
        labs: [
          "Threat modeling workshop",
          "SAST tool implementation",
          "Secure SDLC process design",
        ],
      },
      {
        number: "04",
        title: "Vulnerability Assessment & Penetration Testing",
        icon: "🔍",
        duration: "12 Hours",
        topics: [
          "Difference between VA and PT",
          "VAPT methodology: reconnaissance, scanning, exploitation, reporting",
          "Tools: Nmap, Burp Suite, OWASP ZAP, Nessus, Metasploit",
        ],
        labs: [
          "Network reconnaissance with Nmap",
          "Web application testing with Burp Suite",
          "Vulnerability exploitation with Metasploit",
        ],
      },
      {
        number: "05",
        title: "Risk Prioritization & Remediation",
        icon: "📊",
        duration: "6 Hours",
        topics: [
          "CVSS scoring and risk classification",
          "Coordinating with development teams for patching",
          "Retesting and closure protocols",
        ],
        labs: [
          "CVSS scoring exercise",
          "Remediation planning workshop",
          "Vulnerability retesting process",
        ],
      },
      {
        number: "06",
        title: "Compliance & Regulatory Alignment",
        icon: "📋",
        duration: "5 Hours",
        topics: [
          "ISO 27001, PCI-DSS, DPDP Act, RBI / IRDAI mandates",
          "VAPT as part of audit readiness",
          "Documentation and reporting best practices",
        ],
        labs: [
          "Compliance gap analysis",
          "Audit report preparation",
          "Regulatory documentation exercise",
        ],
      },
      {
        number: "07",
        title: "Incident Response & Secure Deployment",
        icon: "🚨",
        duration: "6 Hours",
        topics: [
          "What to do if a vulnerability is exploited",
          "Patch management and rollback strategies",
          "Secure CI/CD pipelines and container security",
        ],
        labs: [
          "Incident response simulation",
          "Secure pipeline configuration",
          "Container security assessment",
        ],
      },
      {
        number: "08",
        title: "Cyber Hygiene & Culture Building",
        icon: "👥",
        duration: "4 Hours",
        topics: [
          "Role-based awareness for developers, testers, and business teams",
          "Daily practices: secure passwords, MFA, endpoint protection",
          "Building a security-first mindset across product teams",
        ],
        labs: [
          "Security awareness campaign design",
          "MFA implementation exercise",
          "Team security charter development",
        ],
      },
    ],
  },
  technicalSkills: {
    title: "Technical Skills You'll Master",
    skills: [
      {
        category: "Application Security",
        items: [
          "OWASP Top 10",
          "Secure Coding",
          "Threat Modeling",
          "Code Review",
        ],
      },
      {
        category: "VAPT Tools",
        items: ["Burp Suite", "Nmap", "Metasploit", "OWASP ZAP", "Nessus"],
      },
      {
        category: "Security Testing",
        items: [
          "SAST/DAST",
          "Penetration Testing",
          "Vulnerability Assessment",
          "Risk Analysis",
        ],
      },
      {
        category: "DevSecOps",
        items: [
          "Secure CI/CD",
          "Container Security",
          "Shift-Left Security",
          "Automated Testing",
        ],
      },
    ],
  },
  careerPaths: {
    title: "Career Opportunities",
    roles: [
      {
        title: "Application Security Engineer",
        salary: "₹8-18 LPA",
        growth: "High Demand",
      },
      {
        title: "Penetration Tester",
        salary: "₹6-15 LPA",
        growth: "Specialized",
      },
      {
        title: "DevSecOps Engineer",
        salary: "₹10-22 LPA",
        growth: "Emerging Field",
      },
      {
        title: "Security Consultant",
        salary: "₹12-25 LPA",
        growth: "Leadership",
      },
    ],
  },
  labEnvironment: {
    title: "Hands-On Lab Environment",
    features: [
      "Vulnerable web applications for testing",
      "Full penetration testing toolkit",
      "Cloud-based security testing platforms",
      "Container security assessment tools",
      "Secure coding practice environments",
    ],
  },
  certifications: {
    title: "Path to Industry Certifications",
    certs: [
      {
        name: "CEH",
        organization: "EC-Council",
        focus: "Ethical Hacking",
      },
      {
        name: "OSCP",
        organization: "Offensive Security",
        focus: "Penetration Testing",
      },
      {
        name: "GWAPT",
        organization: "GIAC",
        focus: "Web Application Penetration Testing",
      },
      {
        name: "CSSLP",
        organization: "ISC2",
        focus: "Secure Software Lifecycle",
      },
    ],
  },
  toolsCovered: {
    title: "Industry Tools Covered",
    tools: [
      { name: "Burp Suite", category: "Web Testing" },
      { name: "Nmap", category: "Network Scanning" },
      { name: "Metasploit", category: "Exploitation" },
      { name: "OWASP ZAP", category: "Web Testing" },
      { name: "Nessus", category: "Vulnerability Scanning" },
      { name: "Checkmarx", category: "SAST" },
      { name: "SonarQube", category: "Code Quality" },
      { name: "Docker", category: "Container Security" },
      { name: "Jenkins", category: "CI/CD Security" },
    ],
  },
  cta: {
    title: "Become an Application Security Expert",
    description:
      "Join our comprehensive Application Security & VAPT program and master the skills to build secure applications and identify vulnerabilities",
    button: "Enroll Now",
    secondary: "Download Course Outline",
  },
};

export default appsecVaptData;
