// src/components/Home/HeroSection.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Shield, Users, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { icon: Users, number: "500K+", label: "Individuals Trained" },
    { icon: Shield, number: "50+", label: "Corporate Partners" },
    { icon: TrendingUp, number: "95%", label: "Success Rate" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen pt-10 bg-gradient-to-br from-[#1F5453] via-[#2D716F] to-[#1F5453] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#F8810A]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FA540C]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">
                Trusted Cybersecurity Partner
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Building Cyber
              <span className="bg-gradient-to-r from-[#F8810A] to-[#FA540C] bg-clip-text text-transparent">
                {" "}
                Resilience
              </span>{" "}
              for India
            </h1>

            {/* <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              AshtakBodhak - Your trusted partner in navigating the digital
              transformation with robust Information & Cybersecurity awareness
              and training solutions.
            </p> */}

            {/* <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/service-offerings"
                className="bg-gradient-to-r from-[#F8810A] to-[#FA540C] hover:from-[#FA540C] hover:to-[#F8810A] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 text-center"
              >
                Explore Our Programs
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#1F5453] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Overview</span>
              </button>
            </div> */}

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-[#F8810A]" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          {/* Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              {/* Cybersecurity Visualization */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#F8810A]/20 rounded-2xl p-4 text-center">
                  <div className="text-2xl">🛡️</div>
                  <div className="text-white text-sm mt-2">
                    Threat Protection
                  </div>
                </div>
                <div className="bg-[#FA540C]/20 rounded-2xl p-4 text-center">
                  <div className="text-2xl">🔒</div>
                  <div className="text-white text-sm mt-2">Data Security</div>
                </div>
                <div className="bg-[#1F5453]/20 rounded-2xl p-4 text-center">
                  <div className="text-2xl">👥</div>
                  <div className="text-white text-sm mt-2">
                    Awareness Training
                  </div>
                </div>
                <div className="bg-[#2D716F]/20 rounded-2xl p-4 text-center">
                  <div className="text-2xl">🌐</div>
                  <div className="text-white text-sm mt-2">Digital Safety</div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-white text-xl font-semibold mb-4">
                  Why AshtakBodhak?
                </h3>
                <ul className="text-gray-200 space-y-2 text-left">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#F8810A] rounded-full"></div>
                    <span>Comprehensive cybersecurity education</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#F8810A] rounded-full"></div>
                    <span>Tailored for Indian digital landscape</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#F8810A] rounded-full"></div>
                    <span>Bridging the awareness gap</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
