import React from "react";
import { motion } from "framer-motion";

// Background image provided by user (local path will be transformed to a URL by the system)
const bgUrl = "/mnt/data/58de4ca8-b4a0-43f1-a250-8f2fc2346b93.png";

export default function RoadmapTimeline() {
  const items = [
    {
      id: 1,
      title: "Teen-agers & Young Adults (30%)",
      desc: "High digital engagement, low cybersecurity awareness, and lack of parental controls.",
      top: "8%",
      left: "6%",
    },
    {
      id: 2,
      title: "Self-Employed (10%)",
      desc: "High trust in digital platforms, frequent app downloads, and oversharing on social media.",
      top: "52%",
      left: "28%",
      bottomAlign: true,
    },
    {
      id: 3,
      title: "Home Makers (10%)",
      desc: "Unlimited access to family devices (shared), digital multitasking and low cybersecurity awareness.",
      top: "8%",
      left: "44%",
    },
    {
      id: 4,
      title: "Senior Citizens (25%)",
      desc: "Lower digital literacy, reliance on email / phone, and trust in authority figures.",
      top: "52%",
      left: "60%",
      bottomAlign: true,
    },
    {
      id: 5,
      title: "Working Professionals (25%)",
      desc: "Access to corporate systems, work from home setups, financial assets, and family devices.",
      top: "8%",
      left: "76%",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div
        className="relative w-full max-w-6xl rounded-lg overflow-hidden"
        style={{ height: 420 }}
      >
        {/* Background image */}
        <img
          src={bgUrl}
          alt="roadmap-bg"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: "brightness(0.85)" }}
        />

        {/* Overlay to slightly tint background (matches image) */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-red-500 opacity-80 z-10"></div>

        {/* Timeline container */}
        <div className="relative z-20 h-full px-8">
          {/* Horizontal line */}
          <div className="absolute left-6 right-6 top-1/2 transform -translate-y-1/2">
            <div className="relative">
              <div className="h-1 bg-yellow-400 rounded-full w-full"></div>
              {/* small white connector dots on the line */}
              <div className="absolute -left-1.5 top-1/2 transform -translate-y-1/2 w-full flex justify-between px-6">
                <span className="w-3 h-3 bg-white rounded-full border-2 border-yellow-400"></span>
                <span className="w-3 h-3 bg-white rounded-full border-2 border-yellow-400"></span>
                <span className="w-3 h-3 bg-white rounded-full border-2 border-yellow-400"></span>
                <span className="w-3 h-3 bg-white rounded-full border-2 border-yellow-400"></span>
                <span className="w-3 h-3 bg-white rounded-full border-2 border-yellow-400"></span>
              </div>

              {/* Arrow at the right end */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3">
                <svg
                  width="28"
                  height="14"
                  viewBox="0 0 28 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 7H24"
                    stroke="#FBBF24"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20 1L27 7L20 13"
                    stroke="#FBBF24"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Vertical lines */}
          {items.map((it) => (
            <div
              key={`line-${it.id}`}
              className="absolute w-px bg-yellow-400"
              style={{
                left: `calc(${it.left} + 8px)`,
                top: it.bottomAlign ? "50%" : "8%",
                height: it.bottomAlign ? "42%" : "42%",
              }}
            ></div>
          ))}

          {/* Roadmap Items */}
          {items.map((it) => (
            <motion.div
              key={it.id}
              initial={{ opacity: 0, y: it.bottomAlign ? 20 : -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: it.id * 0.08 }}
              className="absolute max-w-sm"
              style={{ top: it.top, left: it.left }}
            >
              <div
                className={`flex ${
                  it.bottomAlign
                    ? "flex-col items-start ml-3 mt-3"
                    : "flex-col items-start ml-3 mb-3"
                }`}
              >
                {/* Yellow marker */}
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 rounded-full bg-yellow-300 border-2 border-yellow-400 shadow-md mr-3"></div>
                  <h3 className="text-white font-semibold text-lg leading-tight">
                    {it.title}
                  </h3>
                </div>

                <p className="text-yellow-50 text-sm leading-snug max-w-xs">
                  {it.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div
          className="absolute bottom-6 right-6 z-20 pointer-events-none"
          style={{ transform: "rotate(-12deg)" }}
        >
          <div className="h-0.5 w-24 bg-white opacity-20 mb-2"></div>
          <div className="h-0.5 w-20 bg-white opacity-12 mb-2"></div>
        </div>
      </div>
    </div>
  );
}
