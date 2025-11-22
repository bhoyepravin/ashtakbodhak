"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import servicesData from "../../Constant/Services/servicesData";

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState("basicCyberAwareness");
  const [expandedServices, setExpandedServices] = useState({});

  // Safe access to data with fallbacks
  const currentCategory =
    servicesData[activeCategory] || servicesData.basicCyberAwareness;
  const categoryServices = currentCategory?.services || [];

  const toggleService = (categoryKey, serviceIndex) => {
    const key = `${categoryKey}-${serviceIndex}`;
    setExpandedServices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
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

  const categoryTabs = Object.keys(servicesData).map((key) => ({
    key,
    title: servicesData[key]?.title || "Untitled",
  }));

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
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base  ${
                activeCategory === tab.key
                  ? "bg-[#1F5453] text-white "
                  : "bg-transparent text-[#1F5453]"
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
            className="rounded-2xl p-6 lg:p-8 mb-8 bg-gray-50"
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
                  className="bg-white rounded-xl p-4 sm:p-6 "
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
                    onClick={() => toggleService(activeCategory, index)}
                    className="flex items-center font-medium text-sm sm:text-base mb-3 lg:mb-4 text-[#1F5453]"
                  >
                    {expandedServices[`${activeCategory}-${index}`]
                      ? "Hide Details"
                      : "Show Details"}
                    <svg
                      className={`ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform ${
                        expandedServices[`${activeCategory}-${index}`]
                          ? "rotate-180"
                          : ""
                      }`}
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

                  <AnimatePresence>
                    {expandedServices[`${activeCategory}-${index}`] && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700"
                      >
                        {service.points?.map((point, pointIndex) => (
                          <motion.li
                            key={pointIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: pointIndex * 0.05 }}
                            className="flex items-start p-2 sm:p-3 rounded-lg bg-gray-50"
                          >
                            <span className="mr-2 mt-1 flex-shrink-0 text-lg text-[#1F5453]">
                              •
                            </span>
                            <span className="leading-relaxed">{point}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  {service.deliveryMethod && (
                    <div className="mt-4 p-3 rounded-lg bg-gray-100">
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

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center"
        >
          <div className="bg-white rounded-xl p-4 sm:p-6  ">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F5453] mb-2">
              30%
            </div>
            <div className="text-sm sm:text-base text-gray-600">
              Teen-agers & Young Adults
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-6 ">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F5453] mb-2">
              25%
            </div>
            <div className="text-sm sm:text-base text-gray-600">
              Working Professionals
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-6  ">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F5453] mb-2">
              25%
            </div>
            <div className="text-sm sm:text-base text-gray-600">
              Senior Citizens
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-6  ">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F5453] mb-2">
              5+
            </div>
            <div className="text-sm sm:text-base text-gray-600">
              Industry Sectors
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 lg:mt-16 rounded-2xl p-8 sm:p-10 lg:p-12 bg-[#1F5453] text-white"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            Ready to Secure Your Digital World?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 opacity-90 leading-relaxed">
            Get in touch with our cybersecurity experts to discuss your specific
            needs
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg bg-[#F8810A] text-white">
            Contact Us Today
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
