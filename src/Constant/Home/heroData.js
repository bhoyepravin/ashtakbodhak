// src/data/heroData.js
const heroData = {
  slides: [
    {
      id: 1,
      title: "Building Cyber Resilience",
      subtitle: "For Individuals & Organizations",
      description:
        "Comprehensive cybersecurity training and awareness programs tailored for every segment of society. From teenagers to senior citizens, corporates to homemakers.",
      ctaText: "Explore Our Programs",
      ctaLink: "/service-offerings",
      stats: [
        { value: "30%", label: "Teenagers & Young Adults" },
        { value: "25%", label: "Working Professionals" },
        { value: "25%", label: "Senior Citizens" },
      ],
      backgroundColor: "from-[#1F5453] to-[#2D716F]",
      icon: "🛡️",
    },
    {
      id: 2,
      title: "Technical Cybersecurity Training",
      subtitle: "Expert-Led Professional Development",
      description:
        "Advanced technical training in GRC, Network Security, SOC Operations, Application Security, and Identity Management for cybersecurity professionals.",
      ctaText: "View Technical Courses",
      ctaLink: "/service-offerings/technical-training",
      stats: [
        { value: "GRC", label: "Governance Risk Compliance" },
        { value: "SOC", label: "Security Operations" },
        { value: "VAPT", label: "Vulnerability Assessment" },
      ],
      backgroundColor: "from-[#1F5453] to-[#1F5453]",
      icon: "💻",
    },
    {
      id: 3,
      title: "Sector-Specific Solutions",
      subtitle: "Industry-Tailored Cybersecurity",
      description:
        "Customized cybersecurity programs for Banking, Pharma, Manufacturing, FMCG, and Insurance sectors with compliance and regulatory focus.",
      ctaText: "Discover Sector Solutions",
      ctaLink: "/service-offerings/sector-training",
      stats: [
        { value: "Banking", label: "Financial Security" },
        { value: "Pharma", label: "IP Protection" },
        { value: "Manufacturing", label: "OT Security" },
      ],
      backgroundColor: "from-[#2D716F] to-[#1F5453]",
      icon: "🏢",
    },
    {
      id: 4,
      title: "Service to Society",
      subtitle: "Cyber Awareness for All",
      description:
        "Free cybersecurity awareness initiatives including FAQ sessions and cyber fraud awareness programs to build a safer digital India.",
      ctaText: "Learn More",
      ctaLink: "/service-offerings/society",
      stats: [
        { value: "FAQ", label: "Expert Answers" },
        { value: "Awareness", label: "Fraud Prevention" },
        { value: "Community", label: "Digital Safety" },
      ],
      backgroundColor: "from-[#1F5453] to-[#2D716F]",
      icon: "🌐",
    },
  ],
};

export default heroData;
