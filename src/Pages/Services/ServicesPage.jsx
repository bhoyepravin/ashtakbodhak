"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import servicesData from "../../Constant/Services/servicesData";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState("basicCyberAwareness");
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Safe access to data with fallbacks
  const currentCategory =
    servicesData[activeCategory] || servicesData.basicCyberAwareness;
  const categoryServices = currentCategory?.services || [];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    // Restore body scroll
    document.body.style.overflow = "unset";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const categoryTabs = Object.keys(servicesData).map((key) => ({
    key,
    title: servicesData[key]?.title || "Untitled",
  }));

  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-45 bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F5453] mb-4">
            Our Cybersecurity Services
          </h1>
          <p className="text-lg sm:text-xl text-[#1F5453] max-w-3xl mx-auto opacity-90 leading-relaxed">
            Comprehensive cybersecurity solutions tailored for individuals,
            corporations, and educational institutions. Building digital
            resilience across all sectors.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 lg:mb-12"
        >
          {categoryTabs.map((tab) => (
            <motion.button
              key={tab.key}
              variants={itemVariants}
              onClick={() => setActiveCategory(tab.key)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeCategory === tab.key
                  ? "bg-[#1F5453] text-white shadow-lg"
                  : "bg-gray-100 text-[#1F5453] hover:bg-gray-200"
              }`}
            >
              {tab.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl p-6 lg:p-8 mb-8 bg-white"
          >
            <div className="mb-6 lg:mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F5453] mb-3 lg:mb-4">
                {currentCategory.title}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-[#1F5453] opacity-90 leading-relaxed">
                {currentCategory.description}
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {categoryServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#1F5453] mb-2 lg:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <button
                    onClick={() => openModal(service)}
                    className="flex items-center font-medium text-sm sm:text-base mb-3 lg:mb-4 text-[#1F5453] hover:text-[#F8810A] transition-colors duration-300"
                  >
                    Show Details
                    <svg
                      className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform"
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
                  </button>

                  {service.deliveryMethod && (
                    <div className="mt-4 p-3 rounded-lg bg-gray-50 border border-gray-200">
                      <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-1">
                        Delivery Method:
                      </p>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {service.deliveryMethod}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              {/* Modal Content */}
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="bg-[#1F5453] p-6 text-white">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                        {selectedService.title}
                      </h2>
                      <p className="text-gray-200 text-lg opacity-90">
                        {selectedService.description}
                      </p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="ml-4 text-white hover:text-[#F8810A] transition-colors duration-300 p-2 rounded-full hover:bg-white hover:bg-opacity-10"
                    >
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8"
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
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
                  {/* Service Points */}
                  {selectedService.points &&
                    selectedService.points.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-xl sm:text-2xl font-semibold text-[#1F5453] mb-4">
                          Key Features & Benefits
                        </h3>
                        <div className="space-y-3">
                          {selectedService.points.map((point, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start p-4 rounded-lg bg-gray-50 border border-gray-200"
                            >
                              <div className="flex-shrink-0 w-6 h-6 bg-[#F8810A] rounded-full flex items-center justify-center mr-3 mt-1">
                                <span className="text-white text-sm font-bold">
                                  ✓
                                </span>
                              </div>
                              <p className="text-gray-700 text-base leading-relaxed">
                                {point}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Delivery Method */}
                  {selectedService.deliveryMethod && (
                    <div className="mb-6">
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#1F5453] mb-3">
                        Delivery Method
                      </h3>
                      <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                        <p className="text-gray-700 text-base leading-relaxed">
                          {selectedService.deliveryMethod}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Additional Information */}
                  {selectedService.additionalInfo && (
                    <div className="mb-6">
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#1F5453] mb-3">
                        Additional Information
                      </h3>
                      <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                        <p className="text-gray-700 text-base leading-relaxed">
                          {selectedService.additionalInfo}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Duration */}
                  {selectedService.duration && (
                    <div className="mb-6">
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#1F5453] mb-3">
                        Duration
                      </h3>
                      <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
                        <p className="text-gray-700 text-base leading-relaxed">
                          {selectedService.duration}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Target Audience */}
                  {selectedService.targetAudience && (
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#1F5453] mb-3">
                        Target Audience
                      </h3>
                      <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
                        <p className="text-gray-700 text-base leading-relaxed">
                          {selectedService.targetAudience}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm text-center sm:text-left">
                      Ready to get started with {selectedService.title}?
                    </p>
                    <button
                      onClick={() => navigate("/contact")}
                      className="bg-gradient-to-r from-[#F8810A] to-[#FA540C] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-[#FA540C] hover:to-[#F8810A] text-base"
                    >
                      Contact Us Now
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesPage;

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import servicesData from "../../Constant/Services/servicesData";

// const ServicesPage = () => {
//   const [activeCategory, setActiveCategory] = useState("basicCyberAwareness");
//   const [expandedServices, setExpandedServices] = useState({});

//   // Safe access to data with fallbacks
//   const currentCategory =
//     servicesData[activeCategory] || servicesData.basicCyberAwareness;
//   const categoryServices = currentCategory?.services || [];

//   const toggleService = (categoryKey, serviceIndex) => {
//     const key = `${categoryKey}-${serviceIndex}`;
//     setExpandedServices((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   const categoryTabs = Object.keys(servicesData).map((key) => ({
//     key,
//     title: servicesData[key]?.title || "Untitled",
//   }));

//   return (
//     <div className="min-h-screen pt-45 bg-white py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 lg:mb-16"
//         >
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F5453] mb-4">
//             Our Cybersecurity Services
//           </h1>
//           <p className="text-lg sm:text-xl text-[#1F5453] max-w-3xl mx-auto opacity-90 leading-relaxed">
//             Comprehensive cybersecurity solutions tailored for individuals,
//             corporations, and educational institutions. Building digital
//             resilience across all sectors.
//           </p>
//         </motion.div>

//         {/* Category Tabs */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 lg:mb-12"
//         >
//           {categoryTabs.map((tab) => (
//             <motion.button
//               key={tab.key}
//               variants={itemVariants}
//               onClick={() => setActiveCategory(tab.key)}
//               className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base  ${
//                 activeCategory === tab.key
//                   ? "bg-[#1F5453] text-white "
//                   : "bg-transparent text-[#1F5453]"
//               }`}
//             >
//               {tab.title}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Services Content */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeCategory}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             transition={{ duration: 0.3 }}
//             className="rounded-2xl p-6 lg:p-8 mb-8 bg-gray-50"
//           >
//             <div className="mb-6 lg:mb-8">
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F5453] mb-3 lg:mb-4">
//                 {currentCategory.title}
//               </h2>
//               <p className="text-base sm:text-lg lg:text-xl text-[#1F5453] opacity-90 leading-relaxed">
//                 {currentCategory.description}
//               </p>
//             </div>

//             <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
//               {categoryServices.map((service, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="bg-white rounded-xl p-4 sm:p-6 "
//                 >
//                   <div className="mb-4">
//                     <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#1F5453] mb-2 lg:mb-3">
//                       {service.title}
//                     </h3>
//                     <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
//                       {service.description}
//                     </p>
//                   </div>

//                   <button
//                     onClick={() => toggleService(activeCategory, index)}
//                     className="flex items-center font-medium text-sm sm:text-base mb-3 lg:mb-4 text-[#1F5453]"
//                   >
//                     {expandedServices[`${activeCategory}-${index}`]
//                       ? "Hide Details"
//                       : "Show Details"}
//                     <svg
//                       className={`ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform ${
//                         expandedServices[`${activeCategory}-${index}`]
//                           ? "rotate-180"
//                           : ""
//                       }`}
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </button>

//                   <AnimatePresence>
//                     {expandedServices[`${activeCategory}-${index}`] && (
//                       <motion.ul
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700"
//                       >
//                         {service.points?.map((point, pointIndex) => (
//                           <motion.li
//                             key={pointIndex}
//                             initial={{ opacity: 0, x: -10 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: pointIndex * 0.05 }}
//                             className="flex items-start p-2 sm:p-3 rounded-lg bg-gray-50"
//                           >
//                             <span className="mr-2 mt-1 flex-shrink-0 text-lg text-[#1F5453]">
//                               •
//                             </span>
//                             <span className="leading-relaxed">{point}</span>
//                           </motion.li>
//                         ))}
//                       </motion.ul>
//                     )}
//                   </AnimatePresence>

//                   {service.deliveryMethod && (
//                     <div className="mt-4 p-3 rounded-lg bg-gray-100">
//                       <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-1">
//                         Delivery Method:
//                       </p>
//                       <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
//                         {service.deliveryMethod}
//                       </p>
//                     </div>
//                   )}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;
