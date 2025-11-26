import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "../../assets";
// Import only available icons from lucide-react
import {
  Users,
  Laptop,
  Building,
  Briefcase,
  GraduationCap,
  User,
  Home,
  Shield,
  Network,
  Monitor,
  Code,
  Key,
  Factory,
  Package,
  Pill,
  Eye,
  Layout,
  FileCheck,
  BookOpen,
  Users2,
  BookMarked,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState({});
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Icons for service offerings - using only available icons
  const serviceIcons = {
    // Main categories
    "Individual Training": Users,
    "Technical Training": Laptop,
    "Sector Specific Training": Building,
    "Consulting Services": Briefcase,
    "Education & Industry Bridge": GraduationCap,

    // Individual Training sub-items
    "Teen Agers & Young Adults": User,
    "Home Makers": Home,
    "Working Professionals & Self Employed Individuals": Briefcase,
    "Senior Citizens": User,

    // Individual Training sub-sub-items
    "Gen Z Edition": Users2,
    "Griha Raksha": Shield,
    "Secure Mindset": Shield,
    "Secure Senior": Shield,

    // Technical Training items
    "Governance Risk and Compliance": FileCheck,
    "Network & Data Security": Network,
    "Security Operations Centre": Monitor,
    "Application Security & VAPT": Code,
    "Identity and Access Management": Key,

    // Sector Specific Training - using available icons as fallbacks
    "FMCG Sector": Package,
    "Banking Sector": Building, // Using Building as fallback for Bank
    "Manufacturing Sector": Factory,
    "Insurance and NBFC Sectors": Briefcase,
    "Pharma Sector": Pill,

    // Consulting Services
    "vCISO Services": Shield,
    "Secure Network Architecture": Network,
    "Information Security Posture Setup": Layout,
    "Independent Audit & Risk Assessment": FileCheck,
    "GRC Services": FileCheck,

    // Education & Industry Bridge
    "Industry-Academia Bridge": GraduationCap,
    "Industry Specific Workshops": Users2,
    "Security Awareness Trainings": Shield,
    "Curriculum Development": BookMarked,
  };

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About Us", path: "/about", icon: Users },
    { name: "Services", path: "/service", icon: Briefcase },
    // {
    //   name: "Service Offerings",
    //   path: "",
    //   icon: Layout,
    //   submenu: [
    //     {
    //       name: "Individual Training",
    //       path: "/individual-training",
    //       icon: Users,
    //       items: [
    //         {
    //           name: "Teen Agers & Young Adults",
    //           icon: User,
    //           subitems: [
    //             { name: "Gen Z Edition", path: "/gen-z-edition", icon: Users2 },
    //           ],
    //         },
    //         {
    //           name: "Home Makers",
    //           path: "/home-makers",
    //           icon: Home,
    //           subitems: [
    //             {
    //               name: "Griha Raksha",
    //               path: "/griha-raksha",
    //               icon: Shield,
    //             },
    //           ],
    //         },
    //         {
    //           name: "Working Professionals & Self Employed Individuals",
    //           icon: Briefcase,
    //           subitems: [
    //             {
    //               name: "Secure Mindset",
    //               path: "/secure-mindset",
    //               icon: Shield,
    //             },
    //           ],
    //         },
    //         {
    //           name: "Senior Citizens",
    //           path: "/senior-citizens",
    //           icon: User,
    //           subitems: [
    //             {
    //               name: "Secure Senior",
    //               path: "/secure-senior",
    //               icon: Shield,
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //     {
    //       name: "Technical Training",
    //       path: "/technical-training",
    //       icon: Laptop,
    //       items: [
    //         {
    //           name: "Governance Risk and Compliance",
    //           path: "/governance-risk-and-compliance",
    //           icon: FileCheck,
    //         },
    //         {
    //           name: "Network & Data Security",
    //           path: "/network-data-security",
    //           icon: Network,
    //         },
    //         {
    //           name: "Security Operations Centre",
    //           path: "/soc-training",
    //           icon: Monitor,
    //         },
    //         {
    //           name: "Application Security & VAPT",
    //           path: "/appsec-vapt",
    //           icon: Code,
    //         },
    //         {
    //           name: "Identity and Access Management",
    //           path: "/iam-training",
    //           icon: Key,
    //         },
    //       ],
    //     },
    //     {
    //       name: "Sector Specific Training",
    //       path: "/sector-specific-training",
    //       icon: Building,
    //       items: [
    //         {
    //           name: "FMCG Sector",
    //           path: "/fmcg-sector",
    //           icon: Package,
    //         },
    //         {
    //           name: "Banking Sector",
    //           path: "/banking-sector",
    //           icon: Building, // Fallback icon
    //         },
    //         {
    //           name: "Manufacturing Sector",
    //           path: "/manufacturing-sector",
    //           icon: Factory,
    //         },
    //         {
    //           name: "Insurance and NBFC Sectors",
    //           path: "/insurance-nbfc",
    //           icon: Briefcase,
    //         },
    //         {
    //           name: "Pharma Sector",
    //           path: "/pharma-sector",
    //           icon: Pill,
    //         },
    //       ],
    //     },
    //     {
    //       name: "Consulting Services",
    //       path: "/consulting-services",
    //       icon: Briefcase,
    //       items: [
    //         {
    //           name: "vCISO Services",
    //           path: "/vciso-services",
    //           icon: Shield,
    //         },
    //         {
    //           name: "Secure Network Architecture",
    //           path: "/secure-network-architecture",
    //           icon: Network,
    //         },
    //         {
    //           name: "Information Security Posture Setup",
    //           path: "/security-posture-setup",
    //           icon: Layout,
    //         },
    //         {
    //           name: "Independent Audit & Risk Assessment",
    //           path: "/audit-risk-assessment",
    //           icon: FileCheck,
    //         },
    //         {
    //           name: "GRC Services",
    //           path: "/grc-services",
    //           icon: FileCheck,
    //         },
    //       ],
    //     },
    //     {
    //       name: "Education & Industry Bridge",
    //       path: "/education-industry-bridge",
    //       icon: GraduationCap,
    //       items: [
    //         {
    //           name: "Industry-Academia Bridge",
    //           path: "/industry-academia-bridge",
    //           icon: GraduationCap,
    //         },
    //         {
    //           name: "Industry Specific Workshops",
    //           path: "/industry-workshops",
    //           icon: Users2,
    //         },
    //         {
    //           name: "Security Awareness Trainings",
    //           path: "/awareness-trainings",
    //           icon: Shield,
    //         },
    //         {
    //           name: "Curriculum Development",
    //           path: "/curriculum-development",
    //           icon: BookMarked,
    //         },
    //       ],
    //     },
    //   ],
    // },
    { name: "Contact Us", path: "/contact", icon: Eye },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setOpenMobileSubmenus({});
    }
  };

  const toggleMobileSubmenu = (index) => {
    setOpenMobileSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSubmenuHover = (index) => {
    setActiveSubmenu(index);
  };

  const handleSubmenuLeave = () => {
    setActiveSubmenu(null);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
    setOpenMobileSubmenus({});
  };

  const getIcon = (name) => {
    const IconComponent = serviceIcons[name];
    return IconComponent ? (
      <IconComponent className="w-4 h-4" />
    ) : (
      <Shield className="w-4 h-4" />
    );
  };

  return (
    <>
      {/* Logo Section */}
      <div className="fixed top-0 left-0 z-50 w-40 h-24 md:w-60 md:h-34 bg-[#c9e3d2]">
        <Link to="/" onClick={handleLinkClick}>
          <img
            className="w-45 h-26 md:w-60 md:h-full"
            src={logo}
            alt="AshtakBodhak Logo"
          />
        </Link>
      </div>

      {/* Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-40 md:left-60 w-[calc(100%-160px)] md:w-[calc(100%-240px)] right-0 z-30 h-24 md:h-34 transition-all duration-300 ${
          isScrolled ? "py-2 bg-[#c9e3d2] shadow-lg" : "py-3 bg-[#c9e3d2]"
        }`}
      >
        <div className="mx-auto ml-34 md:ml-2.5 px-2 md:px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => handleSubmenuHover(index)}
                    onMouseLeave={handleSubmenuLeave}
                  >
                    {item.submenu ? (
                      // Service Offerings with Mega Menu
                      <div className="relative">
                        <button
                          className={`relative py-2 px-3 text-[#235ab0] transition-all duration-300 font-bold text-lg flex items-center gap-2 ${
                            location.pathname === item.path
                              ? "text-[#fb7e04]"
                              : "hover:text-[#fb7e04]"
                          }`}
                        >
                          {item.icon && <item.icon className="w-4 h-4" />}
                          {item.name}
                          <motion.div
                            className={`absolute bottom-0 left-0 h-0.5 bg-[#fb7e04] ${
                              location.pathname === item.path ? "w-full" : "w-0"
                            }`}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </button>

                        {/* Mega Menu for Service Offerings */}
                        {activeSubmenu === index && (
                          <motion.div
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="bg-white rounded-xl shadow-2xl py-6 border border-gray-100">
                              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>

                              <div className="grid grid-cols-5 gap-6 px-8">
                                {item.submenu.map((subItem) => (
                                  <div key={subItem.name} className="space-y-4">
                                    <Link
                                      to={subItem.path}
                                      className="block text-lg font-bold text-[#235ab0] hover:text-[#fb7e04] transition-colors duration-300 border-b-2 border-[#fb7e04] pb-2 flex items-center gap-3"
                                      onClick={handleLinkClick}
                                    >
                                      {subItem.icon && (
                                        <subItem.icon className="w-5 h-5" />
                                      )}
                                      {subItem.name}
                                    </Link>

                                    <div className="space-y-2">
                                      {subItem.items.map(
                                        (service, serviceIndex) => (
                                          <div
                                            key={service.path}
                                            className="group/service"
                                          >
                                            {service.subitems ? (
                                              // Service with subitems
                                              <div className="group/service">
                                                <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-default">
                                                  <div className="text-[#fb7e04] mt-1 flex-shrink-0">
                                                    {service.icon && (
                                                      <service.icon className="w-4 h-4" />
                                                    )}
                                                  </div>
                                                  <span className="text-gray-700 text-sm group-hover/service:text-[#235ab0] group-hover/service:font-medium transition-all duration-300 leading-relaxed">
                                                    {service.name}
                                                  </span>
                                                </div>

                                                {/* Third Level Submenu */}
                                                {service.subitems && (
                                                  <div className="ml-6 mt-1 space-y-1 opacity-0 max-h-0 group-hover/service:opacity-100 group-hover/service:max-h-96 transition-all duration-300 overflow-hidden">
                                                    {service.subitems.map(
                                                      (subservice) => (
                                                        <Link
                                                          key={subservice.path}
                                                          to={subservice.path}
                                                          className="flex items-center space-x-2 py-1 px-2 rounded hover:bg-gray-100 transition-all duration-200 group/subservice"
                                                          onClick={
                                                            handleLinkClick
                                                          }
                                                        >
                                                          <div className="text-[#fb7e04] flex-shrink-0">
                                                            {subservice.icon && (
                                                              <subservice.icon className="w-3 h-3" />
                                                            )}
                                                          </div>
                                                          <span className="text-gray-600 text-xs group-hover/subservice:text-gray-800 group-hover/subservice:font-medium transition-all duration-300">
                                                            {subservice.name}
                                                          </span>
                                                        </Link>
                                                      )
                                                    )}
                                                  </div>
                                                )}
                                              </div>
                                            ) : (
                                              // Direct service link
                                              <Link
                                                to={service.path}
                                                className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
                                                onClick={handleLinkClick}
                                              >
                                                <div className="text-[#fb7e04] mt-1 flex-shrink-0">
                                                  {service.icon && (
                                                    <service.icon className="w-4 h-4" />
                                                  )}
                                                </div>
                                                <span className="text-gray-700 text-sm group-hover/service:text-[#235ab0] group-hover/service:font-medium transition-all duration-300 leading-relaxed">
                                                  {service.name}
                                                </span>
                                              </Link>
                                            )}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      // Regular navigation items
                      <Link
                        to={item.path}
                        className={`relative py-2 px-3 text-[#235ab0] transition-all duration-300 font-bold text-lg flex items-center gap-2 ${
                          location.pathname === item.path
                            ? "text-[#fb7e04]"
                            : "hover:text-[#fb7e04]"
                        }`}
                      >
                        {item.icon && <item.icon className="w-4 h-4" />}
                        {item.name}
                        <motion.div
                          className={`absolute bottom-0 left-0 h-0.5 bg-[#fb7e04] ${
                            location.pathname === item.path ? "w-full" : "w-0"
                          }`}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button - Right Side */}
            <div className="hidden lg:block flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/service"
                  className="bg-gradient-to-r from-[#fb7e04] to-[#e57306] text-white px-12 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-base flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden text-[#235ab0] focus:outline-none relative w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-6 flex flex-col justify-between transition-all duration-300">
                <motion.span
                  className={`w-full h-0.5 bg-[#235ab0] block transition-all ${
                    isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 7 : 0,
                  }}
                />
                <motion.span
                  className={`w-full h-0.5 bg-[#235ab0] block transition-all ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                  animate={{ opacity: isMenuOpen ? 0 : 1 }}
                />
                <motion.span
                  className={`w-full h-0.5 bg-[#235ab0] block transition-all ${
                    isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -7 : 0,
                  }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed right-0 top-0 z-50 h-full w-90 bg-gradient-to-b from-[#c9e3d2] to-[#b8d9c8] lg:hidden shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full pt-20 pb-16">
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-[#235ab0] hover:text-[#fb7e04] transition-colors p-2"
                  onClick={toggleMenu}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Navigation Items */}
                <div className="flex-1 overflow-y-auto px-6">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <div
                        key={item.name}
                        className="border-b border-[#235ab0]/20 last:border-b-0"
                      >
                        <div className="py-2">
                          {item.submenu ? (
                            // Mobile Service Offerings with dropdown
                            <>
                              <button
                                onClick={() => toggleMobileSubmenu(index)}
                                className={`block w-full text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-left flex items-center justify-between ${
                                  openMobileSubmenus[index]
                                    ? "bg-[#235ab0] text-white"
                                    : "text-[#235ab0] hover:bg-[#235ab0] hover:text-white"
                                }`}
                              >
                                <span className="flex items-center gap-3">
                                  {item.icon && (
                                    <item.icon className="w-4 h-4" />
                                  )}
                                  {item.name}
                                </span>
                                <motion.svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  animate={{
                                    rotate: openMobileSubmenus[index] ? 180 : 0,
                                  }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </motion.svg>
                              </button>

                              {/* Mobile Submenu */}
                              <AnimatePresence>
                                {openMobileSubmenus[index] && (
                                  <motion.div
                                    className="pl-6 mt-2 space-y-3 border-l-2 border-[#235ab0]/20"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    {item.submenu.map((subItem, subIndex) => (
                                      <div
                                        key={subItem.name}
                                        className="space-y-3"
                                      >
                                        <Link
                                          to={subItem.path}
                                          className="block py-2 text-[#235ab0] hover:text-[#fb7e04] font-medium transition-colors duration-300 text-base flex items-center gap-3"
                                          onClick={handleLinkClick}
                                        >
                                          {subItem.icon && (
                                            <subItem.icon className="w-4 h-4" />
                                          )}
                                          {subItem.name}
                                        </Link>
                                        <div className="pl-4 space-y-2">
                                          {subItem.items.map((service) => (
                                            <div
                                              key={service.path}
                                              className="space-y-2"
                                            >
                                              {service.subitems ? (
                                                // Service with subitems
                                                <>
                                                  <div className="text-[#235ab0] font-medium text-sm py-2 flex items-center gap-3">
                                                    {service.icon && (
                                                      <service.icon className="w-4 h-4" />
                                                    )}
                                                    {service.name}
                                                  </div>
                                                  <div className="pl-4 space-y-2">
                                                    {service.subitems.map(
                                                      (subservice) => (
                                                        <Link
                                                          key={subservice.path}
                                                          to={subservice.path}
                                                          className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-white/30 transition-all duration-300 group text-sm text-[#235ab0]"
                                                          onClick={
                                                            handleLinkClick
                                                          }
                                                        >
                                                          <div className="text-[#fb7e04] flex-shrink-0">
                                                            {subservice.icon && (
                                                              <subservice.icon className="w-3 h-3" />
                                                            )}
                                                          </div>
                                                          <span className="leading-tight">
                                                            {subservice.name}
                                                          </span>
                                                        </Link>
                                                      )
                                                    )}
                                                  </div>
                                                </>
                                              ) : (
                                                // Direct service link
                                                <Link
                                                  to={service.path}
                                                  className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-white/30 transition-all duration-300 group text-sm text-[#235ab0]"
                                                  onClick={handleLinkClick}
                                                >
                                                  <div className="text-[#fb7e04] flex-shrink-0">
                                                    {service.icon && (
                                                      <service.icon className="w-3 h-3" />
                                                    )}
                                                  </div>
                                                  <span className="leading-tight">
                                                    {service.name}
                                                  </span>
                                                </Link>
                                              )}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </>
                          ) : (
                            // Regular mobile navigation items
                            <Link
                              to={item.path}
                              className={`block text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                                location.pathname === item.path
                                  ? "bg-[#235ab0] text-white"
                                  : "text-[#235ab0] hover:bg-[#235ab0] hover:text-white"
                              }`}
                              onClick={handleLinkClick}
                            >
                              {item.icon && <item.icon className="w-4 h-4" />}
                              {item.name}
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="px-6 pt-6 border-t border-[#235ab0]/20">
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/contact"
                      className="block w-full bg-gradient-to-r from-[#fb7e04] to-[#e57306] text-white text-center py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 text-base flex items-center justify-center gap-2"
                      onClick={handleLinkClick}
                    >
                      <Eye className="w-4 h-4" />
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
