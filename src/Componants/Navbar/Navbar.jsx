// // components/Navbar.js
// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { logo } from "../../assets";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openMobileSubmenus, setOpenMobileSubmenus] = useState({});
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
//     { name: "Services", path: "/service" },
//     // {
//     //   name: "Service Offerings",
//     //   path: "",
//     //   submenu: [
//     //     {
//     //       name: "Individual Training",
//     //       path: "/individual-training",
//     //       items: [
//     //         {
//     //           name: "Teen Agers & Young Adults",
//     //           subitems: [{ name: "Gen Z Edition", path: "/gen-z-edition" }],
//     //         },
//     //         {
//     //           name: "Home Makers",
//     //           path: "/home-makers",
//     //           subitems: [
//     //             {
//     //               name: "Griha Raksha",
//     //               path: "/griha-raksha",
//     //             },
//     //           ],
//     //         },
//     //         {
//     //           name: "Working Professionals & Self Employed Individuals",
//     //           subitems: [{ name: "Secure Mindset", path: "/secure-mindset" }],
//     //         },
//     //         {
//     //           name: "Senior Citizens",
//     //           path: "/senior-citizens",
//     //           subitems: [
//     //             {
//     //               name: "Secure Senior",
//     //               path: "/secure-senior",
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //     },
//     //     {
//     //       name: "Technical Training",
//     //       path: "/technical-training",
//     //       items: [
//     //         {
//     //           name: "Governance Risk and Compliance",
//     //           path: "/governance-risk-and-compliance",
//     //         },
//     //         {
//     //           name: "Network & Data Security",
//     //           path: "/network-data-security",
//     //         },
//     //         {
//     //           name: "Security Operations Centre",
//     //           path: "/soc-training",
//     //         },
//     //         {
//     //           name: "Application Security & VAPT",
//     //           path: "/appsec-vapt",
//     //         },
//     //         {
//     //           name: "Identity and Access Management",
//     //           path: "/iam-training",
//     //         },
//     //       ],
//     //     },
//     //     {
//     //       name: "Sector Specific Training",
//     //       path: "/sector-specific-training",
//     //       items: [
//     //         {
//     //           name: "FMCG Sector",
//     //           path: "/fmcg-sector",
//     //         },
//     //         {
//     //           name: "Banking Sector",
//     //           path: "/banking-sector",
//     //         },
//     //         {
//     //           name: "Manufacturing Sector",
//     //           path: "/manufacturing-sector",
//     //         },
//     //         {
//     //           name: "Insurance and NBFC Sectors",
//     //           path: "/insurance-nbfc",
//     //         },
//     //         {
//     //           name: "Pharma Sector",
//     //           path: "/pharma-sector",
//     //         },
//     //       ],
//     //     },
//     //     {
//     //       name: "Consulting Services",
//     //       path: "/consulting-services",
//     //       items: [
//     //         {
//     //           name: "vCISO Services",
//     //           path: "/vciso-services",
//     //         },
//     //         {
//     //           name: "Secure Network Architecture",
//     //           path: "/secure-network-architecture",
//     //         },
//     //         {
//     //           name: "Information Security Posture Setup",
//     //           path: "/security-posture-setup",
//     //         },
//     //         {
//     //           name: "Independent Audit & Risk Assessment",
//     //           path: "/audit-risk-assessment",
//     //         },
//     //         {
//     //           name: "GRC Services",
//     //           path: "/grc-services",
//     //         },
//     //       ],
//     //     },
//     //     {
//     //       name: "Education & Industry Bridge",
//     //       path: "/education-industry-bridge",
//     //       items: [
//     //         {
//     //           name: "Industry-Academia Bridge",
//     //           path: "/industry-academia-bridge",
//     //         },
//     //         {
//     //           name: "Industry Specific Workshops",
//     //           path: "/industry-workshops",
//     //         },
//     //         {
//     //           name: "Security Awareness Trainings",
//     //           path: "/awareness-trainings",
//     //         },
//     //         {
//     //           name: "Curriculum Development",
//     //           path: "/curriculum-development",
//     //         },
//     //       ],
//     //     },
//     //   ],
//     // },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     // Reset mobile submenus when main menu closes
//     if (isMenuOpen) {
//       setOpenMobileSubmenus({});
//     }
//   };

//   const toggleMobileSubmenu = (index) => {
//     setOpenMobileSubmenus((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
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
//     setOpenMobileSubmenus({});
//   };

//   const handleServiceLinkClick = (e, hasSubitems) => {
//     if (hasSubitems) {
//       e.preventDefault(); // Prevent navigation if it has subitems
//       // Let the toggle handle the expansion
//     } else {
//       handleLinkClick(); // Close menu if it's a final link
//     }
//   };

//   return (
//     <>
//       {/* Logo Section - Responsive */}
//       <div className="fixed top-0 left-0 z-50 w-40 h-24 md:w-60 md:h-34 bg-[#2d8573]">
//         <Link to="/" onClick={handleLinkClick}>
//           <img
//             className="w-45 h-26 md:w-60 md:h-full "
//             src={logo}
//             alt="AshtakBodhak Logo"
//           />
//         </Link>
//       </div>

//       {/* Navigation Bar - Responsive */}
//       <motion.nav
//         className={`fixed top-0 left-40 md:left-60 w-[calc(100%-160px)] md:w-[calc(100%-240px)] right-0 z-30 h-24 md:h-34 transition-all duration-300 ${
//           isScrolled ? "py-2 bg-[#2d8573] shadow-lg" : "py-3 bg-[#2d8573]"
//         }`}
//       >
//         <div className="mx-auto ml-34 md:ml-2.5 px-2 md:px-4 h-full">
//           <div className="flex items-center justify-between h-full">
//             {/* Desktop Navigation - Center */}
//             <div className="hidden lg:flex items-center  justify-center flex-1">
//               <div className="flex items-center space-x-8">
//                 {navItems.map((item, index) => (
//                   <div
//                     key={item.name}
//                     className="relative group"
//                     onMouseEnter={() => handleSubmenuHover(index)}
//                     onMouseLeave={handleSubmenuLeave}
//                   >
//                     <Link
//                       to={item.path}
//                       className={`relative py-2 px-3 text-white transition-all duration-300 font-medium text-lg ${
//                         location.pathname === item.path
//                           ? "text-[#F8810A]"
//                           : "hover:text-[#F8810A]"
//                       }`}
//                     >
//                       {item.name}

//                       {/* Animated Underline */}
//                       <motion.div
//                         className={`absolute bottom-0 left-0 h-0.5 bg-[#F8810A] ${
//                           location.pathname === item.path ? "w-full" : "w-0"
//                         }`}
//                         whileHover={{ width: "100%" }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </Link>

//                     {/* Mega Menu for Service Offerings */}
//                     {item.submenu && activeSubmenu === index && (
//                       <motion.div
//                         className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="bg-white rounded-xl shadow-2xl py-6 border border-gray-100">
//                           <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>

//                           <div className="grid grid-cols-5 gap-6 px-8">
//                             {item.submenu.map((subItem) => (
//                               <div key={subItem.name} className="space-y-4">
//                                 <Link
//                                   to={subItem.path}
//                                   className="block text-lg font-bold text-[#1F5453] hover:text-[#F8810A] transition-colors duration-300 border-b-2 border-[#F8810A] pb-2"
//                                   onClick={handleLinkClick}
//                                 >
//                                   {subItem.name}
//                                 </Link>

//                                 <div className="space-y-2">
//                                   {subItem.items.map(
//                                     (service, serviceIndex) => (
//                                       <div
//                                         key={service.path}
//                                         className="group/service"
//                                       >
//                                         <Link
//                                           to={service.path}
//                                           className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
//                                           onClick={handleLinkClick}
//                                         >
//                                           <div className="w-2 h-2 bg-[#F8810A] rounded-full mt-1.5 flex-shrink-0 group-hover/service:scale-125 transition-transform duration-300"></div>
//                                           <span className="text-gray-700 text-sm group-hover/service:text-[#1F5453] group-hover/service:font-medium transition-all duration-300 leading-relaxed">
//                                             {service.name}
//                                           </span>
//                                         </Link>

//                                         {/* Third Level Submenu */}
//                                         {service.subitems && (
//                                           <div className="ml-6 mt-1 space-y-1 opacity-0 max-h-0 group-hover/service:opacity-100 group-hover/service:max-h-96 transition-all duration-300 overflow-hidden">
//                                             {service.subitems.map(
//                                               (subservice) => (
//                                                 <Link
//                                                   key={subservice.path}
//                                                   to={subservice.path}
//                                                   className="flex items-center space-x-2 py-1 px-2 rounded hover:bg-gray-100 transition-all duration-200 group/subservice"
//                                                   onClick={handleLinkClick}
//                                                 >
//                                                   <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 group-hover/subservice:bg-[#F8810A] group-hover/subservice:scale-125 transition-all duration-300"></div>
//                                                   <span className="text-gray-600 text-xs group-hover/subservice:text-gray-800 group-hover/subservice:font-medium transition-all duration-300">
//                                                     {subservice.name}
//                                                   </span>
//                                                 </Link>
//                                               )
//                                             )}
//                                           </div>
//                                         )}
//                                       </div>
//                                     )
//                                   )}
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* CTA Button - Right Side */}
//             <div className="hidden lg:block flex-shrink-0">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Link
//                   to="/contact"
//                   className="bg-gradient-to-r from-[#F8810A] to-[#FA540C] text-white px-12  py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-[#FA540C] hover:to-[#F8810A] text-base"
//                 >
//                   Get Started
//                 </Link>
//               </motion.div>
//             </div>

//             {/* Mobile Menu Button */}
//             <motion.button
//               className="lg:hidden text-white focus:outline-none relative w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
//               onClick={toggleMenu}
//               whileTap={{ scale: 0.9 }}
//             >
//               <div className="w-6 h-6 flex flex-col justify-between transition-all duration-300">
//                 <motion.span
//                   className={`w-full h-0.5 bg-white block transition-all ${
//                     isMenuOpen ? "rotate-45 translate-y-2.5" : ""
//                   }`}
//                   animate={{
//                     rotate: isMenuOpen ? 45 : 0,
//                     y: isMenuOpen ? 7 : 0,
//                   }}
//                 />
//                 <motion.span
//                   className={`w-full h-0.5 bg-white block transition-all ${
//                     isMenuOpen ? "opacity-0" : "opacity-100"
//                   }`}
//                   animate={{ opacity: isMenuOpen ? 0 : 1 }}
//                 />
//                 <motion.span
//                   className={`w-full h-0.5 bg-white block transition-all ${
//                     isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
//                   }`}
//                   animate={{
//                     rotate: isMenuOpen ? -45 : 0,
//                     y: isMenuOpen ? -7 : 0,
//                   }}
//                 />
//               </div>
//             </motion.button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={toggleMenu}
//             />

//             {/* Menu Panel */}
//             <motion.div
//               className="fixed right-0 top-0 z-50 h-full w-80 bg-gradient-to-b from-[#1F5453] to-[#2D716F] lg:hidden shadow-2xl"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//             >
//               <div className="flex flex-col h-full pt-20 pb-6">
//                 {/* Close Button */}
//                 <button
//                   className="absolute top-4 right-4 text-white hover:text-[#F8810A] transition-colors p-2"
//                   onClick={toggleMenu}
//                 >
//                   <svg
//                     className="w-6 h-6"
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
//                   <div className="space-y-2">
//                     {navItems.map((item, index) => (
//                       <div
//                         key={item.name}
//                         className="border-b border-white/10 last:border-b-0"
//                       >
//                         <div className="py-2">
//                           {item.submenu ? (
//                             <button
//                               onClick={() => toggleMobileSubmenu(index)}
//                               className={`block w-full text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-left ${
//                                 openMobileSubmenus[index]
//                                   ? "bg-white/20 text-[#F8810A]"
//                                   : "text-white hover:bg-white/10 hover:text-[#F8810A]"
//                               }`}
//                             >
//                               <span className="flex items-center justify-between">
//                                 {item.name}
//                                 <motion.svg
//                                   className="w-5 h-5"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                   animate={{
//                                     rotate: openMobileSubmenus[index] ? 180 : 0,
//                                   }}
//                                   transition={{ duration: 0.3 }}
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M19 9l-7 7-7-7"
//                                   />
//                                 </motion.svg>
//                               </span>
//                             </button>
//                           ) : (
//                             <Link
//                               to={item.path}
//                               className={`block text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300 ${
//                                 location.pathname === item.path
//                                   ? "bg-white/20 text-[#F8810A]"
//                                   : "text-white hover:bg-white/10 hover:text-[#F8810A]"
//                               }`}
//                               onClick={toggleMenu}
//                             >
//                               {item.name}
//                             </Link>
//                           )}

//                           {/* Mobile Submenu */}
//                           {item.submenu && (
//                             <AnimatePresence>
//                               {openMobileSubmenus[index] && (
//                                 <motion.div
//                                   className="pl-6 mt-2 space-y-3 border-l-2 border-white/20"
//                                   initial={{ opacity: 0, height: 0 }}
//                                   animate={{ opacity: 1, height: "auto" }}
//                                   exit={{ opacity: 0, height: 0 }}
//                                   transition={{ duration: 0.3 }}
//                                 >
//                                   {item.submenu.map((subItem, subIndex) => (
//                                     <div
//                                       key={subItem.name}
//                                       className="space-y-3"
//                                     >
//                                       <Link
//                                         to={subItem.path}
//                                         className="block py-2 text-white/90 hover:text-[#F8810A] font-medium transition-colors duration-300 text-base"
//                                         onClick={toggleMenu}
//                                       >
//                                         {subItem.name}
//                                       </Link>
//                                       <div className="pl-4 space-y-2">
//                                         {subItem.items.map((service) => (
//                                           <div
//                                             key={service.path}
//                                             className="space-y-2"
//                                           >
//                                             <Link
//                                               to={service.path}
//                                               className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300 group text-sm"
//                                               onClick={(e) => {
//                                                 if (
//                                                   service.subitems &&
//                                                   service.subitems.length > 0
//                                                 ) {
//                                                   e.preventDefault();
//                                                   // Handle submenu expansion here if needed
//                                                 } else {
//                                                   toggleMenu();
//                                                 }
//                                               }}
//                                             >
//                                               <div className="w-2 h-2 bg-[#F8810A] rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300"></div>
//                                               <span className="text-white/70 group-hover:text-white transition-all duration-300 leading-tight">
//                                                 {service.name}
//                                               </span>
//                                             </Link>

//                                             {/* Third Level Mobile Submenu */}
//                                             {service.subitems && (
//                                               <div className="pl-6 space-y-2 border-l border-white/20">
//                                                 {service.subitems.map(
//                                                   (subservice) => (
//                                                     <Link
//                                                       key={subservice.path}
//                                                       to={subservice.path}
//                                                       className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-300 group/sub text-sm"
//                                                       onClick={toggleMenu}
//                                                     >
//                                                       <div className="w-1.5 h-1.5 bg-white/50 rounded-full flex-shrink-0 group-hover/sub:bg-[#F8810A] transition-all duration-300"></div>
//                                                       <span className="text-white/60 group-hover/sub:text-white/80 transition-all duration-300">
//                                                         {subservice.name}
//                                                       </span>
//                                                     </Link>
//                                                   )
//                                                 )}
//                                               </div>
//                                             )}
//                                           </div>
//                                         ))}
//                                       </div>
//                                     </div>
//                                   ))}
//                                 </motion.div>
//                               )}
//                             </AnimatePresence>
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
//                       className="block w-full bg-gradient-to-r from-[#F8810A] to-[#FA540C] text-white text-center py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 text-base"
//                       onClick={toggleMenu}
//                     >
//                       Get Started
//                     </Link>
//                   </motion.div>
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

// components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "../../assets";

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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Contact Us", path: "/contact" },
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
                    <Link
                      to={item.path}
                      className={`relative py-2  px-3 text-[#235ab0] transition-all duration-300 font-bold text-lg ${
                        location.pathname === item.path
                          ? "text-[#fb7e04]"
                          : "hover:text-[#fb7e04]"
                      }`}
                    >
                      {item.name}

                      {/* Animated Underline */}
                      <motion.div
                        className={`absolute bottom-0 left-0 h-0.5 bg-[#fb7e04] ${
                          location.pathname === item.path ? "w-full" : "w-0"
                        }`}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
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
                  to="/contact"
                  className="bg-gradient-to-r from-[#fb7e04] to-[#e57306] text-white px-12 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-base"
                >
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
              <div className="flex flex-col h-full  pt-20 pb-16 ">
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
                          <Link
                            to={item.path}
                            className={`block text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300 ${
                              location.pathname === item.path
                                ? "bg-[#235ab0] text-white"
                                : "text-[#235ab0] hover:bg-[#235ab0] hover:text-white"
                            }`}
                            onClick={toggleMenu}
                          >
                            {item.name}
                          </Link>
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
                      className="block w-full bg-gradient-to-r from-[#fb7e04] to-[#e57306] text-white text-center py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 text-base"
                      onClick={toggleMenu}
                    >
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
