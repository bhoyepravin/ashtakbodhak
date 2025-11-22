const bankingSectorData = {
  hero: {
    title: "SECTOR / INDUSTRY SPECIFIC TRAININGS",
    subtitle: "Banking Sector Cybersecurity",
    description:
      "Specialized cybersecurity training designed for banking institutions to protect financial systems, customer data, and ensure regulatory compliance",
  },
  overview: {
    title: "Course Overview",
    description:
      "This industry-specific cybersecurity program addresses the critical challenges faced by banking institutions, focusing on core banking systems, digital channels, fraud prevention, and regulatory compliance in the financial sector.",
    duration: "7 Weeks | 40+ Hours",
    level: "Sector-Specific",
    audience:
      "Banking Executives, IT Teams, Branch Managers, Compliance Officers, Customer Service Staff",
  },
  curriculum: {
    title: "Banking Sector Curriculum",
    modules: [
      {
        number: "01",
        title: "Cyber Threat Landscape in Banking",
        icon: "🎯",
        duration: "6 Hours",
        topics: [
          "Prime targets: financial, reputational, and regulatory stakes",
          "Real-world case studies: phishing, ransomware, insider fraud",
          "Threat actors: cybercriminals, hacktivists, nation-state groups",
        ],
        caseStudies: [
          "Major bank ransomware attack analysis",
          "Insider trading fraud case study",
          "Nation-state banking sector espionage",
        ],
      },
      {
        number: "02",
        title: "Securing Core Banking Systems",
        icon: "🏦",
        duration: "8 Hours",
        topics: [
          "Risks in CBS, ATM networks, mobile banking, and APIs",
          "Role of encryption, firewalls, and access controls",
          "Third-party risk and vendor management",
        ],
        caseStudies: [
          "Core banking system compromise",
          "ATM network security breach",
          "Third-party vendor security incident",
        ],
      },
      {
        number: "03",
        title: "Customer-Facing Channels & Fraud Prevention",
        icon: "📱",
        duration: "7 Hours",
        topics: [
          "UPI, net banking, mobile apps — threat vectors and hygiene",
          "QR code fraud, fake payment links, OTP scams",
          "Educating customers on safe digital banking practices",
        ],
        caseStudies: [
          "UPI payment fraud analysis",
          "Mobile banking app security breach",
          "Social engineering fraud prevention",
        ],
      },
      {
        number: "04",
        title: "Email, Messaging & Social Engineering",
        icon: "📧",
        duration: "5 Hours",
        topics: [
          "Spotting phishing, vishing, and smishing attacks",
          "Business Email Compromise (BEC) and spoofing",
          "Protecting internal communications and escalation protocols",
        ],
        caseStudies: [
          "CEO fraud email compromise",
          "Vishing attack on bank employees",
          "Internal communication security breach",
        ],
      },
      {
        number: "05",
        title: "Data Privacy & Regulatory Compliance",
        icon: "📋",
        duration: "6 Hours",
        topics: [
          "Overview of RBI guidelines, ISO 27001, PCI-DSS etc.",
          "Handling customer data and consent management",
          "Audit trails, logging, and breach notification protocols",
        ],
        caseStudies: [
          "RBI compliance audit preparation",
          "Data privacy violation incident",
          "PCI-DSS compliance failure analysis",
        ],
      },
      {
        number: "06",
        title: "Incident Response & Crisis Management",
        icon: "🚨",
        duration: "5 Hours",
        topics: [
          "What to do during a breach or fraud attempt",
          "Role of SOC, CERT-In, and internal escalation teams",
          "Building a basic incident response playbook",
        ],
        caseStudies: [
          "Banking sector incident response simulation",
          "CERT-In reporting protocol exercise",
          "Crisis communication during security incidents",
        ],
      },
      {
        number: "07",
        title: "Cyber Hygiene for Bank Staff",
        icon: "👥",
        duration: "3 Hours",
        topics: [
          "Password policies, device security, and secure remote access",
          "Role-based access and privilege management",
          "Avoiding shadow IT and unauthorized tools",
        ],
        caseStudies: [
          "Employee credential compromise",
          "Shadow IT security risk assessment",
          "Privilege misuse incident analysis",
        ],
      },
    ],
  },
  industryChallenges: {
    title: "Banking Sector Specific Challenges",
    challenges: [
      {
        challenge: "Digital Payment Fraud",
        impact: "Increasing UPI and mobile banking fraud incidents",
        solution: "Multi-layered fraud detection systems",
      },
      {
        challenge: "Regulatory Compliance",
        impact: "Stringent RBI guidelines and reporting requirements",
        solution: "Compliance automation and audit readiness",
      },
      {
        challenge: "Third-Party Risk",
        impact: "Vendor and partner security vulnerabilities",
        solution: "Comprehensive vendor risk management",
      },
      {
        challenge: "Customer Trust",
        impact: "Reputation damage from security incidents",
        solution: "Proactive security communication and transparency",
      },
    ],
  },
  technicalSkills: {
    title: "Banking-Specific Skills You'll Master",
    skills: [
      {
        category: "Core Banking Security",
        items: [
          "CBS Protection",
          "ATM Network Security",
          "API Security",
          "Encryption Implementation",
        ],
      },
      {
        category: "Digital Channels",
        items: [
          "Mobile Banking Security",
          "UPI Fraud Prevention",
          "Net Banking Protection",
          "QR Code Security",
        ],
      },
      {
        category: "Compliance & Audit",
        items: [
          "RBI Guidelines",
          "PCI-DSS Compliance",
          "ISO 27001",
          "Audit Trail Management",
        ],
      },
      {
        category: "Incident Response",
        items: [
          "Banking IR Playbooks",
          "CERT-In Reporting",
          "Fraud Investigation",
          "Crisis Communication",
        ],
      },
    ],
  },
  targetRoles: {
    title: "Who Should Attend in Banking Organizations?",
    roles: [
      {
        department: "IT & Security",
        roles: [
          "IT Managers",
          "Security Analysts",
          "Network Administrators",
          "SOC Team",
        ],
      },
      {
        department: "Branch Operations",
        roles: [
          "Branch Managers",
          "Operations Staff",
          "Customer Service",
          "Tellers",
        ],
      },
      {
        department: "Compliance & Risk",
        roles: [
          "Compliance Officers",
          "Risk Managers",
          "Internal Auditors",
          "Legal Team",
        ],
      },
      {
        department: "Digital Banking",
        roles: [
          "Digital Channel Managers",
          "Mobile App Teams",
          "UPI Operations",
          "API Developers",
        ],
      },
    ],
  },
  regulatoryFocus: {
    title: "Regulatory Framework Coverage",
    regulations: [
      {
        regulation: "RBI Cybersecurity Framework",
        focus: "Banking sector specific security guidelines",
      },
      {
        regulation: "PCI-DSS",
        focus: "Payment card data security standards",
      },
      {
        regulation: "DPDP Act",
        focus: "Customer data privacy and protection",
      },
      {
        regulation: "ISO 27001",
        focus: "Information security management system",
      },
      {
        regulation: "CERT-In Directives",
        focus: "Incident reporting and response requirements",
      },
    ],
  },
  businessImpact: {
    title: "Business Impact & Financial Protection",
    benefits: [
      {
        benefit: "Fraud Prevention",
        impact: "Reduce financial losses from digital payment fraud",
      },
      {
        benefit: "Regulatory Compliance",
        impact: "Avoid penalties and maintain banking license",
      },
      {
        benefit: "Customer Confidence",
        impact: "Maintain trust in digital banking services",
      },
      {
        benefit: "Operational Resilience",
        impact: "Ensure continuous banking operations",
      },
    ],
  },
  cta: {
    title: "Secure Your Banking Operations",
    description:
      "Join our sector-specific cybersecurity program and protect your financial systems, customer assets, and regulatory compliance from evolving cyber threats",
    button: "Enroll Banking Team",
    secondary: "Request Banking Demo",
  },
};

export default bankingSectorData;
