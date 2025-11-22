import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Shield,
  Building,
  Smartphone,
  Mail,
  FileText,
  AlertTriangle,
  Users,
} from "lucide-react";
import bankingSectorData from "../../Constant/Services/bankingSectorData";

// Animation components
const AnimatedSection = ({ children, className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const BankingSectorPage = () => {
  return (
    <div className="min-h-screen pt-30 bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2359B0] via-[#184E43] to-[#1F5453] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-6xl font-bold mb-4"
            >
              {bankingSectorData.hero.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl lg:text-3xl font-bold mb-6 bg-white/20 backdrop-blur-sm inline-block px-6 py-3 rounded-full"
            >
              {bankingSectorData.hero.subtitle}
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed"
            >
              {bankingSectorData.hero.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#184E43] mb-6 text-center">
                {bankingSectorData.overview.title}
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
                {bankingSectorData.overview.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <Clock className="w-12 h-12 text-[#2359B0] mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Duration
                  </h3>
                  <p className="text-[#2359B0] font-semibold">
                    {bankingSectorData.overview.duration}
                  </p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                  <Target className="w-12 h-12 text-[#184E43] mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Level
                  </h3>
                  <p className="text-[#184E43] font-semibold">
                    {bankingSectorData.overview.level}
                  </p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-200">
                  <Users className="w-12 h-12 text-[#FB7E06] mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Audience
                  </h3>
                  <p className="text-[#FB7E06] font-semibold text-sm">
                    {bankingSectorData.overview.audience}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#184E43] mb-6">
              {bankingSectorData.industryChallenges.title}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {bankingSectorData.industryChallenges.challenges.map(
              (challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-[#2359B0] mb-3">
                    {challenge.challenge}
                  </h3>
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-600 mb-1">
                      Impact:
                    </div>
                    <div className="text-gray-700">{challenge.impact}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 mb-1">
                      Solution:
                    </div>
                    <div className="text-[#184E43] font-medium">
                      {challenge.solution}
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Target Roles */}
      <section className="py-16 bg-gradient-to-r from-[#2359B0] to-[#184E43] text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {bankingSectorData.targetRoles.title}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {bankingSectorData.targetRoles.roles.map((department, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <h3 className="text-lg font-bold mb-4 text-center">
                  {department.department}
                </h3>
                <ul className="space-y-2">
                  {department.roles.map((role, roleIndex) => (
                    <li
                      key={roleIndex}
                      className="flex items-center text-white/80 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-[#FB7E06] rounded-full mr-3 flex-shrink-0"></div>
                      {role}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Focus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#184E43] mb-6">
              {bankingSectorData.regulatoryFocus.title}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {bankingSectorData.regulatoryFocus.regulations.map(
              (regulation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all"
                >
                  <FileText className="w-12 h-12 text-[#2359B0] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {regulation.regulation}
                  </h3>
                  <p className="text-gray-600 text-sm">{regulation.focus}</p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#184E43] mb-6">
              {bankingSectorData.curriculum.title}
            </h2>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto space-y-8">
            {bankingSectorData.curriculum.modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Module Header */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-gradient-to-r from-[#184E43] to-[#2359B0] text-white rounded-xl p-3 min-w-16 text-center">
                          <div className="text-xl font-bold">
                            {module.number}
                          </div>
                        </div>
                        <div className="text-3xl">{module.icon}</div>
                      </div>
                      <h3 className="text-2xl font-bold text-[#2359B0] mb-2">
                        {module.title}
                      </h3>
                      <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3">
                        {module.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                            <div className="w-2 h-2 bg-[#FB7E06] rounded-full mr-2"></div>
                            Topics Covered
                          </h4>
                          <ul className="space-y-2">
                            {module.topics.map((topic, topicIndex) => (
                              <li
                                key={topicIndex}
                                className="flex items-start text-gray-700 text-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                            <div className="w-2 h-2 bg-[#70B486] rounded-full mr-2"></div>
                            Banking Case Studies
                          </h4>
                          <ul className="space-y-2">
                            {module.caseStudies.map((caseStudy, caseIndex) => (
                              <li
                                key={caseIndex}
                                className="flex items-start text-gray-700 text-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-[#70B486] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>{caseStudy}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#184E43] mb-6">
              {bankingSectorData.technicalSkills.title}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {bankingSectorData.technicalSkills.skills.map(
              (skillCategory, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-[#2359B0] mb-4 text-center">
                    {skillCategory.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-center text-gray-700 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-[#FB7E06] rounded-full mr-3 flex-shrink-0"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-16 bg-gradient-to-r from-[#70B486] to-[#184E43] text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {bankingSectorData.businessImpact.title}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bankingSectorData.businessImpact.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <h3 className="text-xl font-bold mb-3 text-[#FB7E06]">
                  {benefit.benefit}
                </h3>
                <p className="text-white/80">{benefit.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-[#184E43] to-[#2359B0] text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {bankingSectorData.cta.title}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {bankingSectorData.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FB7E06] hover:bg-[#e57306] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-3"
              >
                <Shield size={20} />
                {bankingSectorData.cta.button}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-[#184E43] px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-3"
              >
                <Users size={20} />
                {bankingSectorData.cta.secondary}
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section> */}
    </div>
  );
};

// Add missing icon components
const Clock = ({ size = 24, className = "" }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const Target = ({ size = 24, className = "" }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

export default BankingSectorPage;
