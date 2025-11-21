// src/components/Home/TargetAudience.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import targetAudienceData from "../../Constant/Home/targetAudienceData.js";

const TargetAudience = () => {
  const { audiences } = targetAudienceData;

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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F5453] mb-4">
            Who We Protect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cybersecurity solutions tailored for every segment of society
          </p>
        </motion.div>

        {/* Audience Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <Link
                to={audience.path || `/audience/${audience.id}`}
                className="block h-full"
              >
                <div className="bg-white rounded-xl   p-6 h-full transition-all duration-300 group-hover:border-[#F8810A] group-hover:shadow-lg">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{audience.icon}</div>
                    <span className="text-sm font-bold bg-[#F8810A] text-white px-2 py-1 rounded-full">
                      {audience.percentage}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#1F5453] transition-colors">
                    {audience.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {audience.description}
                  </p>

                  {/* Key Challenges Preview */}
                  <div className="space-y-2 mb-4">
                    {audience.challenges.slice(0, 2).map((challenge, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#F8810A] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-xs">
                          {challenge}
                        </span>
                      </div>
                    ))}
                    {audience.challenges.length > 2 && (
                      <div className="flex items-center space-x-2 text-gray-500">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
                        <span className="text-xs">
                          +{audience.challenges.length - 2} more challenges
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 ">
                    <span className="text-[#F8810A] text-sm font-semibold group-hover:text-[#FA540C] transition-colors">
                      Learn More
                    </span>
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg
                        className="w-4 h-4 text-[#F8810A] group-hover:text-[#FA540C] transition-colors"
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
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;
