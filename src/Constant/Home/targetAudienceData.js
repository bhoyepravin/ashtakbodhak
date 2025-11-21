// src/Constant/Home/targetAudienceData.json

const targetAudienceData = {
  audiences: [
    {
      id: 1,
      title: "Teen-agers & Young Adults",
      percentage: "30%",
      description:
        "High digital engagement, low cybersecurity awareness, and lack of parental controls.",
      challenges: [
        "High digital engagement",
        "Low cybersecurity awareness",
        "Lack of parental controls",
        "Social media oversharing",
        "Gaming platform risks",
      ],
      //icon: "🎮",
      color: "from-purple-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-blue-50",
      borderColor: "border-purple-200",
    },
    {
      id: 2,
      title: "Home Makers",
      percentage: "10%",
      description:
        "Unlimited access to family devices (shared), digital multitasking and low cybersecurity awareness.",
      challenges: [
        "Shared family devices",
        "Digital multitasking",
        "Low cybersecurity awareness",
        "Online shopping risks",
        "Social media usage",
      ],
      // icon: "🏠",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
      borderColor: "border-green-200",
    },
    {
      id: 3,
      title: "Working Professionals",
      percentage: "25%",
      description:
        "Access to corporate systems, work from home setups, financial assets, and family devices.",
      challenges: [
        "Corporate system access",
        "Work from home setups",
        "Financial assets exposure",
        "Family device sharing",
        "Business email compromise",
      ],
      //icon: "💼",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
    },
    {
      id: 4,
      title: "Self Employed",
      percentage: "10%",
      description:
        "High trust in digital platforms, frequent app downloads, and oversharing on social media.",
      challenges: [
        "High trust in digital platforms",
        "Frequent app downloads",
        "Social media oversharing",
        "Business data protection",
        "Client information security",
      ],
      //icon: "🚀",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-200",
    },
    {
      id: 5,
      title: "Senior Citizens",
      percentage: "25%",
      description:
        "Lower digital literacy, reliance on email/phone, and trust in authority figures.",
      challenges: [
        "Lower digital literacy",
        "Reliance on email/phone",
        "Trust in authority figures",
        "Online banking risks",
        "Tech support scams",
      ],
      //icon: "👴",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200",
    },
  ],
};

export default targetAudienceData;
