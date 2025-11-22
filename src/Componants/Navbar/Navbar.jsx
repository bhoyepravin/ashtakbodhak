// components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "../../assets";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Service Offerings",
      path: "",
      submenu: [
        {
          name: "Individual Training",
          path: "/service-offerings/individual-training",
          items: [
            {
              name: "Teen Agers & Young Adults",
              subitems: [{ name: "Gen Z Edition", path: "/gen-z-edition" }],
            },
            {
              name: "Home Makers",
              path: "/home-makers",
              subitems: [
                {
                  name: "Griha Raksha",
                  path: "/griha-raksha",
                },
              ],
            },
            {
              name: "Working Professionals & Self Employed Individuals",
              subitems: [{ name: "Secure Mindset", path: "/secure-mindset" }],
            },
            {
              name: "Senior Citizens",
              path: "/secure-senior",
              subitems: [
                {
                  name: "Secure Senior",
                  path: "/secure-senior",
                },
              ],
            },
          ],
        },
        {
          name: "Technical Training",
          items: [
            {
              name: "Governance Risk and Compliance",
              path: "/governance-risk-and-compliance",
            },
            {
              name: "Network & Data Security",
              path: "/network-data-security",
            },
            {
              name: "Security Operations Centre",
              path: "/soc-training",
            },
            {
              name: "Application Security & VAPT",
              path: "/appsec-vapt",
            },
            {
              name: "Identity and Access Management",
              path: "/iam-training",
            },
          ],
        },
        {
          name: "Sector Specific Training",
          items: [
            {
              name: "FMCG Sector",
              path: "/fmcg-sector",
            },
            {
              name: "Banking Sector",
              path: "/banking-sector",
            },
            {
              name: "Manufacturing Sector",
              path: "/manufacturing-sector",
            },
            {
              name: "Insurance and NBFC Sectors",
              path: "/insurance-nbfc",
            },
            {
              name: "Pharma Sector",
              path: "/pharma-sector",
            },
          ],
        },
        {
          name: "Consulting Services",
          items: [
            {
              name: "vCISO Services",
              path: "/vciso-services",
            },
            {
              name: "Secure Network Architecture",
              path: "/secure-network-architecture",
            },
            {
              name: "Information Security Posture Setup",
              path: "/security-posture-setup",
            },
            {
              name: "Independent Audit & Risk Assessment",
              path: "/audit-risk-assessment",
            },
            {
              name: "GRC Services",
              path: "/grc-services",
            },
          ],
        },
        {
          name: "Education & Industry Bridge",
          items: [
            {
              name: "Industry-Academia Bridge",
              path: "/industry-academia-bridge",
            },
            {
              name: "Industry Specific Workshops",
              path: "/industry-workshops",
            },
            {
              name: "Security Awareness Trainings",
              path: "/awareness-trainings",
            },
            {
              name: "Curriculum Development",
              path: "/curriculum-development",
            },
          ],
        },
      ],
    },
    { name: "Contact Us", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
          isScrolled
            ? "py-1 bg-[#2d8573] shadow-lg"
            : "py-2 bg-[#2d8573]/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 flex justify-between items-center">
          {/* Logo - Compact on mobile */}
          <Link
            to="/"
            className="flex items-center group"
            onClick={handleLinkClick}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="AshtakBodhak Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-[#F8810A] to-[#FA540C] rounded-xl lg:rounded-2xl flex items-center justify-center hidden">
                <span className="text-white font-bold text-xl sm:text-2xl lg:text-4xl">
                  AB
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Unchanged */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => handleSubmenuHover(index)}
                onMouseLeave={handleSubmenuLeave}
              >
                <Link
                  to={item.path}
                  className={`relative py-4 px-2 text-white transition-all duration-300 font-bold text-lg ${
                    location.pathname === item.path
                      ? "text-[#F8810A]"
                      : "hover:text-[#F8810A]"
                  }`}
                >
                  {item.name}

                  {/* Animated Underline */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#F8810A] ${
                      location.pathname === item.path ? "w-full" : "w-0"
                    }`}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>

                {/* Enhanced Mega Menu for Service Offerings */}
                {item.submenu && activeSubmenu === index && (
                  <motion.div className="absolute pt-2 left-1/2 transform -translate-x-1/2 mt-2 w-[1200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white rounded-xl shadow-2xl py-6 border border-gray-100">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>

                      <div className="grid grid-cols-5 gap-6 px-8">
                        {item.submenu.map((subItem) => (
                          <div key={subItem.name} className="space-y-4">
                            <Link
                              to={subItem.path}
                              className="block text-lg font-bold text-[#1F5453] hover:text-[#F8810A] transition-colors duration-300 border-b-2 border-[#F8810A] pb-2"
                              onClick={handleLinkClick}
                            >
                              {subItem.name}
                            </Link>

                            <div className="space-y-2">
                              {subItem.items.map((service, serviceIndex) => (
                                <div
                                  key={service.path}
                                  className="group/service"
                                >
                                  <Link
                                    to={service.path}
                                    className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
                                    onClick={handleLinkClick}
                                  >
                                    <div className="w-2 h-2 bg-[#F8810A] rounded-full mt-1.5 flex-shrink-0 group-hover/service:scale-125 transition-transform duration-300"></div>
                                    <span className="text-gray-700 text-sm group-hover/service:text-[#1F5453] group-hover/service:font-medium transition-all duration-300 leading-relaxed">
                                      {service.name}
                                    </span>
                                  </Link>

                                  {/* Third Level Submenu */}
                                  {service.subitems && (
                                    <div className="ml-6 mt-1 space-y-1 opacity-0 max-h-0 group-hover/service:opacity-100 group-hover/service:max-h-96 transition-all duration-300 overflow-hidden">
                                      {service.subitems.map((subservice) => (
                                        <Link
                                          key={subservice.path}
                                          to={subservice.path}
                                          className="flex items-center space-x-2 py-1 px-2 rounded hover:bg-gray-100 transition-all duration-200 group/subservice"
                                          onClick={handleLinkClick}
                                        >
                                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 group-hover/subservice:bg-[#F8810A] group-hover/subservice:scale-125 transition-all duration-300"></div>
                                          <span className="text-gray-600 text-xs group-hover/subservice:text-gray-800 group-hover/subservice:font-medium transition-all duration-300">
                                            {subservice.name}
                                          </span>
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Bottom CTA */}
                      <div className="mt-6 pt-6 border-t border-gray-100 px-8">
                        <Link
                          to="/contact"
                          className="inline-flex items-center text-[#F8810A] font-bold hover:text-[#FA540C] transition-colors duration-300 group/cta text-base"
                          onClick={handleLinkClick}
                        >
                          <span>Get Customized Solution</span>
                          <svg
                            className="w-4 h-4 ml-2 transform group-hover/cta:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Desktop only */}
          <div className="hidden lg:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#F8810A] to-[#FA540C] text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-[#FA540C] hover:to-[#F8810A] text-base"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button - Very compact */}
          <motion.button
            className="lg:hidden text-white focus:outline-none relative w-7 h-7 flex items-center justify-center bg-white/10 rounded hover:bg-white/20 transition-colors"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-4 h-4 flex flex-col justify-between transition-all duration-300">
              <motion.span
                className={`w-full h-0.5 bg-white block transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 4.5 : 0,
                }}
              />
              <motion.span
                className={`w-full h-0.5 bg-white block transition-all ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
              />
              <motion.span
                className={`w-full h-0.5 bg-white block transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -4.5 : 0,
                }}
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Compact Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel - Ultra Compact */}
            <motion.div
              className="fixed right-0 top-0 z-50 h-full w-72 bg-gradient-to-b from-[#1F5453] to-[#2D716F] lg:hidden shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full pt-12 pb-4">
                {/* Close Button */}
                <button
                  className="absolute top-3 right-3 text-white hover:text-[#F8810A] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    className="w-5 h-5"
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

                {/* Navigation Items - Ultra Compact */}
                <div className="flex-1 overflow-y-auto px-3">
                  <div className="space-y-0">
                    {navItems.map((item, index) => (
                      <div
                        key={item.name}
                        className="border-b border-white/10 last:border-b-0"
                      >
                        <div className="py-1">
                          <Link
                            to={item.path}
                            className={`block text-base font-semibold py-2 px-2 rounded transition-all duration-300 ${
                              location.pathname === item.path
                                ? "bg-white/20 text-[#F8810A]"
                                : "text-white hover:bg-white/10 hover:text-[#F8810A]"
                            }`}
                            onClick={handleLinkClick}
                          >
                            <span className="flex items-center justify-between">
                              {item.name}
                              {item.submenu && (
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              )}
                            </span>
                          </Link>

                          {/* Mobile Submenu - Ultra Compact */}
                          {item.submenu && (
                            <motion.div
                              className="pl-3 mt-1 space-y-1 border-l-2 border-white/20"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.submenu.map((subItem) => (
                                <div key={subItem.name} className="space-y-1">
                                  <Link
                                    to={subItem.path}
                                    className="block py-1 text-white/90 hover:text-[#F8810A] font-medium transition-colors duration-300 text-sm"
                                    onClick={handleLinkClick}
                                  >
                                    {subItem.name}
                                  </Link>
                                  <div className="pl-2 space-y-0">
                                    {subItem.items.map((service) => (
                                      <div
                                        key={service.path}
                                        className="space-y-0"
                                      >
                                        <Link
                                          to={service.path}
                                          className="flex items-center space-x-1 py-1 px-2 rounded hover:bg-white/10 transition-all duration-300 group text-xs"
                                          onClick={handleLinkClick}
                                        >
                                          <div className="w-1.5 h-1.5 bg-[#F8810A] rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300"></div>
                                          <span className="text-white/70 group-hover:text-white transition-all duration-300 leading-tight">
                                            {service.name}
                                          </span>
                                        </Link>

                                        {/* Third Level Mobile Submenu */}
                                        {service.subitems && (
                                          <div className="pl-3 space-y-0 border-l border-white/20">
                                            {service.subitems.map(
                                              (subservice) => (
                                                <Link
                                                  key={subservice.path}
                                                  to={subservice.path}
                                                  className="flex items-center space-x-1 py-0.5 px-2 rounded hover:bg-white/5 transition-all duration-300 group/sub text-xs"
                                                  onClick={handleLinkClick}
                                                >
                                                  <div className="w-1 h-1 bg-white/50 rounded-full flex-shrink-0 group-hover/sub:bg-[#F8810A] transition-all duration-300"></div>
                                                  <span className="text-white/60 group-hover/sub:text-white/80 transition-all duration-300">
                                                    {subservice.name}
                                                  </span>
                                                </Link>
                                              )
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA - Compact */}
                <div className="px-3 pt-3 border-t border-white/20">
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/contact"
                      className="block w-full bg-gradient-to-r from-[#F8810A] to-[#FA540C] text-white text-center py-2 rounded-lg font-semibold shadow-lg transition-all duration-300 text-sm"
                      onClick={handleLinkClick}
                    >
                      Start Your Journey
                    </Link>
                  </motion.div>

                  <div className="mt-2 text-center">
                    <p className="text-white/70 text-xs">
                      Building a safer digital future
                    </p>
                  </div>
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

// // components/Navbar.js
// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { logo } from "../../assets";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     {
//       name: "Service Offerings",
//       path: "",
//       submenu: [
//         {
//           name: "Individual Training",
//           path: "/service-offerings/individual-training",
//           items: [
//             {
//               name: "Teen Agers & Young Adults",
//               //path: "/teenagers-young-adults",
//               subitems: [{ name: "Gen Z Edition", path: "/gen-z-edition" }],
//             },
//             {
//               name: "Home Makers",
//               path: "/home-makers",
//               subitems: [
//                 {
//                   name: "Griha Raksha",
//                   path: "/griha-raksha",
//                 },
//               ],
//             },
//             {
//               name: "Working Professionals & Self Employed Individuals",
//               //path: "/working-professionals",
//               subitems: [{ name: "Secure Mindset", path: "/secure-mindset" }],
//             },
//             {
//               name: "Senior Citizens",
//               path: "/secure-senior",
//               subitems: [
//                 {
//                   name: "Secure Senior",
//                   path: "/secure-senior",
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           name: "Technical Training",
//           //path: "/service-offerings/technical-training",
//           items: [
//             {
//               name: "Governance Risk and Compliance",
//               path: "/governance-risk-and-compliance",
//             },
//             {
//               name: "Network & Data Security",
//               path: "/network-data-security",
//             },
//             {
//               name: "Security Operations Centre",
//               path: "/soc-training",
//             },
//             {
//               name: "Application Security & VAPT",
//               path: "/appsec-vapt",
//             },
//             {
//               name: "Identity and Access Management",
//               path: "/iam-training",
//             },
//           ],
//         },
//         {
//           name: "Sector Specific Training",
//           //path: "/service-offerings/sector-training",
//           items: [
//             {
//               name: "FMCG Sector",
//               path: "/fmcg-sector",
//             },
//             {
//               name: "Banking Sector",
//               path: "/banking-sector",
//             },
//             {
//               name: "Manufacturing Sector",
//               path: "/manufacturing-sector",
//             },

//             {
//               name: "Insurance and NBFC Sectors",
//               path: "/insurance-nbfc",
//             },
//             {
//               name: "Pharma Sector",
//               path: "/pharma-sector",
//             },
//           ],
//         },
//       ],
//     },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleSubmenuHover = (index) => {
//     setActiveSubmenu(index);
//   };

//   const handleSubmenuLeave = () => {
//     setActiveSubmenu(null);
//   };

//   const handleLinkClick = () => {
//     setIsMenuOpen(false);
//     setActiveSubmenu(null);
//   };

//   return (
//     <>
//       <motion.nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled
//             ? "py-2 bg-[#2d8573] shadow-lg"
//             : "py-4 bg-[#2d8573]/95 backdrop-blur-sm"
//         }`}
//       >
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="flex items-center group"
//             onClick={handleLinkClick}
//           >
//             <div className="w-32 h-32 flex items-center justify-center overflow-hidden">
//               <img
//                 src={logo}
//                 alt="AshtakBodhak Logo"
//                 className="w-32 h-32 object-contain"
//                 onError={(e) => {
//                   e.target.style.display = "none";
//                   e.target.nextSibling.style.display = "flex";
//                 }}
//               />
//               <div className="w-32 h-32 bg-gradient-to-br from-[#F8810A] to-[#FA540C] rounded-2xl flex items-center justify-center hidden">
//                 <span className="text-white font-bold text-4xl">AB</span>
//               </div>
//             </div>
//           </Link>

//           {/* Desktop Navigation - Centered */}
//           <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8">
//             {navItems.map((item, index) => (
//               <div
//                 key={item.name}
//                 className="relative group"
//                 onMouseEnter={() => handleSubmenuHover(index)}
//                 onMouseLeave={handleSubmenuLeave}
//               >
//                 <Link
//                   to={item.path}
//                   className={`relative py-4  px-1 text-white transition-all duration-300 font-bold ${
//                     location.pathname === item.path
//                       ? "text-[#F8810A]"
//                       : "hover:text-[#F8810A]"
//                   }`}
//                 >
//                   {item.name}

//                   {/* Animated Underline */}
//                   <motion.div
//                     className={`absolute bottom-0 left-0 h-0.5 bg-[#F8810A] ${
//                       location.pathname === item.path ? "w-full" : "w-0"
//                     }`}
//                     whileHover={{ width: "100%" }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </Link>

//                 {/* Enhanced Mega Menu for Service Offerings */}
//                 {item.submenu && activeSubmenu === index && (
//                   <motion.div
//                     className="absolute pt-[-2] left-1/2 transform -translate-x-1/2 mt-4 w-[900px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
//                     // initial={{ opacity: 0, y: 10 }}
//                     // animate={{ opacity: 1, y: 0 }}
//                     // transition={{ duration: 0.3 }}
//                   >
//                     <div className="bg-white rounded-xl shadow-2xl py-6 border border-gray-100">
//                       <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>

//                       <div className="grid grid-cols-3 gap-6 px-6">
//                         {item.submenu.map((subItem) => (
//                           <div key={subItem.name} className="space-y-3">
//                             <Link
//                               to={subItem.path}
//                               className="block text-lg font-semibold text-[#1F5453] hover:text-[#F8810A] transition-colors duration-300 border-b-2 border-[#F8810A] pb-1"
//                               onClick={handleLinkClick}
//                             >
//                               {subItem.name}
//                             </Link>

//                             <div className="space-y-2">
//                               {subItem.items.map((service, serviceIndex) => (
//                                 <div
//                                   key={service.path}
//                                   className="group/service"
//                                 >
//                                   <Link
//                                     to={service.path}
//                                     className="flex items-start space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
//                                     onClick={handleLinkClick}
//                                   >
//                                     <div className="w-1.5 h-1.5 bg-[#F8810A] rounded-full mt-2 flex-shrink-0 group-hover/service:scale-125 transition-transform duration-300"></div>
//                                     <span className="text-gray-700 text-sm group-hover/service:text-[#1F5453] group-hover/service:font-medium transition-all duration-300">
//                                       {service.name}
//                                     </span>
//                                   </Link>

//                                   {/* Third Level Submenu */}
//                                   {service.subitems && (
//                                     <div className="ml-4 mt-1 space-y-1 opacity-0 max-h-0 group-hover/service:opacity-100 group-hover/service:max-h-96 transition-all duration-300 overflow-hidden">
//                                       {service.subitems.map((subservice) => (
//                                         <Link
//                                           key={subservice.path}
//                                           to={subservice.path}
//                                           className="flex items-center space-x-2 py-1 px-2 rounded hover:bg-gray-100 transition-all duration-200 group/subservice"
//                                           onClick={handleLinkClick}
//                                         >
//                                           <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0 group-hover/subservice:bg-[#F8810A] group-hover/subservice:scale-125 transition-all duration-300"></div>
//                                           <span className="text-gray-600 text-xs group-hover/subservice:text-gray-800 group-hover/subservice:font-medium transition-all duration-300">
//                                             {subservice.name}
//                                           </span>
//                                         </Link>
//                                       ))}
//                                     </div>
//                                   )}
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                       {/* Bottom CTA */}
//                       <div className="mt-6 pt-6 border-t border-gray-100 px-6">
//                         <Link
//                           to="/contact"
//                           className="inline-flex items-center text-[#F8810A] font-semibold hover:text-[#FA540C] transition-colors duration-300 group/cta"
//                           onClick={handleLinkClick}
//                         >
//                           <span>Get Customized Training</span>
//                           <svg
//                             className="w-4 h-4 ml-2 transform group-hover/cta:translate-x-1 transition-transform duration-300"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M9 5l7 7-7 7"
//                             />
//                           </svg>
//                         </Link>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <div className="hidden lg:block">
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link
//                 to="/contact"
//                 className="bg-gradient-to-r from-[#F8810A] to-[#FA540C] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-[#FA540C] hover:to-[#F8810A]"
//               >
//                 Get Started
//               </Link>
//             </motion.div>
//           </div>

//           {/* Mobile Menu Button */}
//           <motion.button
//             className="lg:hidden text-white focus:outline-none relative w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
//             onClick={toggleMenu}
//             whileTap={{ scale: 0.9 }}
//           >
//             <div className="w-6 h-6 flex flex-col justify-between transition-all duration-300">
//               <motion.span
//                 className={`w-full h-0.5 bg-white block transition-all ${
//                   isMenuOpen ? "rotate-45 translate-y-2.5" : ""
//                 }`}
//                 animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
//               />
//               <motion.span
//                 className={`w-full h-0.5 bg-white block transition-all ${
//                   isMenuOpen ? "opacity-0" : "opacity-100"
//                 }`}
//                 animate={{ opacity: isMenuOpen ? 0 : 1 }}
//               />
//               <motion.span
//                 className={`w-full h-0.5 bg-white block transition-all ${
//                   isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
//                 }`}
//                 animate={{
//                   rotate: isMenuOpen ? -45 : 0,
//                   y: isMenuOpen ? -8 : 0,
//                 }}
//               />
//             </div>
//           </motion.button>
//         </div>
//       </motion.nav>

//       {/* Enhanced Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsMenuOpen(false)}
//             />

//             {/* Menu Panel */}
//             <motion.div
//               className="fixed right-0 top-0 z-50 h-full w-80 bg-gradient-to-b from-[#1F5453] to-[#2D716F] lg:hidden shadow-2xl"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//             >
//               <div className="flex flex-col h-full pt-20 pb-8">
//                 {/* Close Button */}
//                 <button
//                   className="absolute top-6 right-6 text-white hover:text-[#F8810A] transition-colors"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   <svg
//                     className="w-8 h-8"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>

//                 {/* Navigation Items */}
//                 <div className="flex-1 overflow-y-auto px-6">
//                   <div className="space-y-1">
//                     {navItems.map((item, index) => (
//                       <div
//                         key={item.name}
//                         className="border-b border-white/10 last:border-b-0"
//                       >
//                         <div className="py-3">
//                           <Link
//                             to={item.path}
//                             className={`block text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300 ${
//                               location.pathname === item.path
//                                 ? "bg-white/20 text-[#F8810A]"
//                                 : "text-white hover:bg-white/10 hover:text-[#F8810A]"
//                             }`}
//                             onClick={handleLinkClick}
//                           >
//                             <span className="flex items-center justify-between">
//                               {item.name}
//                               {item.submenu && (
//                                 <svg
//                                   className="w-5 h-5"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M19 9l-7 7-7-7"
//                                   />
//                                 </svg>
//                               )}
//                             </span>
//                           </Link>

//                           {/* Mobile Submenu */}
//                           {item.submenu && (
//                             <motion.div
//                               className="pl-6 mt-2 space-y-2 border-l-2 border-white/20"
//                               initial={{ opacity: 0, height: 0 }}
//                               animate={{ opacity: 1, height: "auto" }}
//                               transition={{ duration: 0.3 }}
//                             >
//                               {item.submenu.map((subItem) => (
//                                 <div key={subItem.name} className="space-y-2">
//                                   <Link
//                                     to={subItem.path}
//                                     className="block py-2 text-white/90 hover:text-[#F8810A] font-medium transition-colors duration-300"
//                                     onClick={handleLinkClick}
//                                   >
//                                     {subItem.name}
//                                   </Link>
//                                   <div className="pl-4 space-y-1">
//                                     {subItem.items.map((service) => (
//                                       <div
//                                         key={service.path}
//                                         className="space-y-1"
//                                       >
//                                         <Link
//                                           to={service.path}
//                                           className="flex items-center space-x-2 py-2 px-2 rounded-lg hover:bg-white/10 transition-all duration-300 group"
//                                           onClick={handleLinkClick}
//                                         >
//                                           <div className="w-1.5 h-1.5 bg-[#F8810A] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
//                                           <span className="text-white/70 text-sm group-hover:text-white group-hover:font-medium transition-all duration-300">
//                                             {service.name}
//                                           </span>
//                                         </Link>

//                                         {/* Third Level Mobile Submenu */}
//                                         {service.subitems && (
//                                           <div className="pl-6 space-y-1 border-l border-white/20">
//                                             {service.subitems.map(
//                                               (subservice) => (
//                                                 <Link
//                                                   key={subservice.path}
//                                                   to={subservice.path}
//                                                   className="flex items-center space-x-2 py-1 px-2 rounded-lg hover:bg-white/5 transition-all duration-300 group/sub"
//                                                   onClick={handleLinkClick}
//                                                 >
//                                                   <div className="w-1 h-1 bg-white/50 rounded-full flex-shrink-0 group-hover/sub:bg-[#F8810A] transition-all duration-300"></div>
//                                                   <span className="text-white/60 text-xs group-hover/sub:text-white/90 transition-all duration-300">
//                                                     {subservice.name}
//                                                   </span>
//                                                 </Link>
//                                               )
//                                             )}
//                                           </div>
//                                         )}
//                                       </div>
//                                     ))}
//                                   </div>
//                                 </div>
//                               ))}
//                             </motion.div>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Mobile CTA */}
//                 <div className="px-6 pt-6 border-t border-white/20">
//                   <motion.div whileTap={{ scale: 0.95 }}>
//                     <Link
//                       to="/contact"
//                       className="block w-full bg-gradient-to-r from-[#F8810A] to-[#FA540C] text-white text-center py-4 rounded-xl font-semibold shadow-lg transition-all duration-300"
//                       onClick={handleLinkClick}
//                     >
//                       Start Your Journey
//                     </Link>
//                   </motion.div>

//                   <div className="mt-6 text-center">
//                     <p className="text-white/70 text-sm">
//                       Building a safer digital future, together
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;
