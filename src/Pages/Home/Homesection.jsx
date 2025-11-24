import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Users, Target, TrendingUp } from "lucide-react";
import homeData from "../../Constant/Home/homeData";
import { useNavigate } from "react-router-dom";

// Animation components
const AnimatedSection = ({ children, className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const navigate = useNavigate();
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

const Homesection = () => {
  return (
    <div className="min-h-screen pt-2 bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#a8cfb8] via-[#98c5a8] to-[#88bb98] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FB7E06]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#70B486]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              {homeData.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              {homeData.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
            >
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#FB7E06] hover:bg-[#e57306] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
              >
                {homeData.hero.cta.primary}
              </button>
              <button
                onClick={() => navigate("/about")}
                className="border-2 border-white text-white hover:bg-white hover:text-[#184E43] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all w-full sm:w-auto"
              >
                {homeData.hero.cta.secondary}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#184E43] mb-6">
              {homeData.problem.title}
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {homeData.problem.description}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {homeData.problem.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-50 p-8 rounded-2xl  text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#FB7E06] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-800 font-semibold text-lg mb-2">
                  {stat.label}
                </div>
                <div
                  className={`text-sm font-medium ${
                    stat.trend === "increasing"
                      ? "text-red-500"
                      : stat.trend === "growing"
                      ? "text-orange-500"
                      : "text-red-600"
                  }`}
                >
                  {stat.trend} concern
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Landscape Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#184E43] mb-6">
              {homeData.landscape.title}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {homeData.landscape.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-8 rounded-2xl transition-all"
              >
                <div className="text-5xl mb-4">{section.icon}</div>
                <h3 className="text-2xl font-bold text-[#2359B0] mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {section.description}
                </p>
                <ul className="space-y-2">
                  {section.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#FB7E06] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#235ab0] mb-6">
              {homeData.solution.title}
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              {homeData.solution.mission}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {homeData.solution.pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className=" rounded-2xl p-6 text-center  transition-all"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#235ab0] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#235ab0] mb-6">
              {homeData.impact.title}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {homeData.impact.goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 bg-gray-50 rounded-2xl transition-all"
              >
                <div className="text-3xl lg:text-4xl font-bold text-[#fb7e04] mb-2">
                  {goal.target}
                </div>
                <div className="text-gray-700 text-lg font-medium">
                  {goal.description}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          {/* <AnimatedSection className="text-center mt-16">
            <div className="bg-white border-2 border-[#235ab0] rounded-2xl p-8 text-[#235ab0] max-w-4xl mx-auto shadow-lg">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Secure Your Digital Journey?
              </h3>
              <p className="text-lg mb-6 text-gray-700">
                Join AshtakBodhak in building a cyber-resilient India
              </p>
            </div>
          </AnimatedSection> */}
        </div>
      </section>
    </div>
  );
};

export default Homesection;
