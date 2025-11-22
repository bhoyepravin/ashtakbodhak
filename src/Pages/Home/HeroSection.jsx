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
    <section className="min-h-screen  bg-gradient-to-br from-[#1F5453] via-[#2D716F] to-[#1F5453] relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
          opacity: 0.15,
        }}
      ></div>

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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
