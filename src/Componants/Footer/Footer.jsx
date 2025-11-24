// components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { logo } from "../../assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/service" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Individual Training",
      links: [
        { name: "Teen-agers & Young Adults (30%)", path: "/service" },
        { name: "Home Makers (10%)", path: "/service" },
        { name: "Working Professionals (25%)", path: "/service" },
        { name: "Self-Employed (10%)", path: "/service" },
        { name: "Senior Citizens (25%)", path: "/service" },
      ],
    },
    {
      title: "Technical Training",
      links: [
        { name: "Governance Risk and Compliance", path: "/service" },
        { name: "Network & Data Security", path: "/service" },
        { name: "Security Operations Centre", path: "/services/technical#soc" },
        { name: "Application Security & VAPT", path: "/service" },
        { name: "Identity and Access Management", path: "/service" },
      ],
    },
  ];

  return (
    <footer className="bg-[#1F5453] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#F8810A] flex items-center justify-center">
                <img className="W-10 h-10" src={logo} alt="" />
              </div>
              <span className="text-white font-bold text-xl">AshtakBodhak</span>
            </div>
            <p className="text-white/80 mb-4 text-sm">
              Building bridges between industry expectations and institutional
              readiness in cybersecurity education and awareness.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#1877F2] transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#E4405F] transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C8.396 0 7.987.012 6.756.06 5.526.108 4.704.27 3.995.517c-.762.256-1.408.597-2.066 1.255C1.272 2.431.93 3.077.674 3.839.427 4.548.265 5.37.217 6.6.169 7.831.157 8.24.157 11.861c0 3.621.012 4.03.06 5.261.048 1.231.21 2.053.457 2.762.256.762.597 1.408 1.255 2.066.658.658 1.304 1 2.066 1.255.709.247 1.531.409 2.762.457 1.231.048 1.64.06 5.261.06 3.621 0 4.03-.012 5.261-.06 1.231-.048 2.053-.21 2.762-.457.762-.256 1.408-.597 2.066-1.255.658-.658 1-1.304 1.255-2.066.247-.709.409-1.531.457-2.762.048-1.231.06-1.64.06-5.261 0-3.621-.012-4.03-.06-5.261-.048-1.231-.21-2.053-.457-2.762-.256-.762-.597-1.408-1.255-2.066C20.459 1.272 19.813.93 19.051.674c-.709-.247-1.531-.409-2.762-.457C15.058.169 14.649.157 11.028.157zm0 2.16c3.539 0 3.912.01 5.12.058 1.087.044 1.678.203 2.072.336.48.163.824.359 1.184.719.36.36.556.704.719 1.184.133.394.292.985.336 2.072.048 1.208.058 1.581.058 5.12 0 3.539-.01 3.912-.058 5.12-.044 1.087-.203 1.678-.336 2.072-.163.48-.359.824-.719 1.184-.36.36-.704.556-1.184.719-.394.133-.985.292-2.072.336-1.208.048-1.581.058-5.12.058-3.539 0-3.912-.01-5.12-.058-1.087-.044-1.678-.203-2.072-.336-.48-.163-1.184-.719-1.184-1.184-.133-.394-.292-.985-.336-2.072-.048-1.208-.058-1.581-.058-5.12 0-3.539.01-3.912.058-5.12.044-1.087.203-1.678.336-2.072.163-.48.359-.824.719-1.184.36-.36.704-.556 1.184-.719.394-.133.985-.292 2.072-.336 1.208-.048 1.581-.058 5.12-.058z" />
                  <path d="M12.017 5.838a6.18 6.18 0 1 0 0 12.36 6.18 6.18 0 0 0 0-12.36zm0 10.18a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                  <circle cx="18.406" cy="5.595" r="1.44" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#1DA1F2] transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#0A66C2] transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/c/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#FF0000] transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-[#F8810A]">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-[#F8810A] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} AshtakBodhak LLP. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              to="/privacy"
              className="text-white/60 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-white/60 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
