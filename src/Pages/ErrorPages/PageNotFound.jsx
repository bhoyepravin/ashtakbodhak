import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Shield } from "lucide-react";

const PageNotFound = () => {
  return (
    <div className="min-h-screen pt-30 bg-gradient-to-br from-[#184E43] to-[#2359B0] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-8xl md:text-9xl font-bold text-white opacity-20">
            404
          </h1>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          {/* Icon */}
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/30">
            <Shield className="w-8 h-8 text-white" />
          </div>

          {/* Title & Message */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Page Not Found
          </h2>
          <p className="text-white/80 mb-6 text-lg">
            The page you're looking for doesn't exist.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FB7E06] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors hover:bg-[#e57306]"
              >
                <Home size={18} />
                Go Home
              </motion.button>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors hover:bg-white hover:text-[#184E43]"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </motion.div>

        {/* Security Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-white/50 text-sm mt-6"
        >
          🔒 Secure 404 - Your digital safety is our priority
        </motion.p>
      </div>
    </div>
  );
};

export default PageNotFound;
