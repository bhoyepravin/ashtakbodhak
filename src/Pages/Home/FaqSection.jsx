import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import faqData from "../../Constant/Home/faqData";
import { useNavigate } from "react-router-dom";

const FaqSection = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
    if (playingVideo && playingVideo !== id) {
      // Pause other videos when opening new FAQ
      const video = videoRefs.current[playingVideo];
      if (video) {
        video.pause();
      }
    }
    setPlayingVideo(null);
  };

  const toggleVideo = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingVideo === id) {
      video.pause();
      setPlayingVideo(null);
    } else {
      // Pause currently playing video
      if (playingVideo) {
        const currentVideo = videoRefs.current[playingVideo];
        if (currentVideo) currentVideo.pause();
      }
      video.play();
      setPlayingVideo(id);
    }
  };

  const toggleMute = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.muted = !video.muted;
    }
  };

  const enterFullscreen = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      }
    }
  };

  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#184E43] mb-4">
            {faqData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {faqData.subtitle}
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#c9e3d2] transition-colors"
              >
                <h3 className="text-lg lg:text-xl font-semibold text-[#235ab0] pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeFaq === faq.id ? 180 : 0 }}
                  className="flex-shrink-0 w-6 h-6 text-[#fb7e04]"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              {/* Answer Content */}
              <AnimatePresence>
                {activeFaq === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6">
                      {/* Text Answer */}
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        {faq.answer}
                      </p>

                      {/* Video Section */}
                      <div className="bg-gray-900 rounded-xl overflow-hidden">
                        {/* Video Player */}
                        <div className="relative aspect-video bg-black">
                          <video
                            ref={(el) => (videoRefs.current[faq.id] = el)}
                            className="w-full h-full object-cover"
                            poster={faq.thumbnail}
                            onEnded={() => setPlayingVideo(null)}
                          >
                            <source src={faq.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>

                          {/* Video Overlay Controls */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                            {/* Top Bar */}
                            <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                              <span className="text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                                {faq.duration}
                              </span>
                              <button
                                onClick={() => enterFullscreen(faq.id)}
                                className="text-white hover:text-[#fb7e04] transition-colors"
                              >
                                <Maximize size={20} />
                              </button>
                            </div>

                            {/* Center Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <button
                                onClick={() => toggleVideo(faq.id)}
                                className="bg-[#fb7e04] hover:bg-[#e57306] text-white rounded-full p-4 transition-all transform hover:scale-110"
                              >
                                {playingVideo === faq.id ? (
                                  <Pause size={24} />
                                ) : (
                                  <Play size={24} />
                                )}
                              </button>
                            </div>

                            {/* Bottom Controls */}
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                              <button
                                onClick={() => toggleMute(faq.id)}
                                className="text-white hover:text-[#fb7e04] transition-colors"
                              >
                                {videoRefs.current[faq.id]?.muted ? (
                                  <VolumeX size={20} />
                                ) : (
                                  <Volume2 size={20} />
                                )}
                              </button>

                              {/* Progress Bar */}
                              <div className="flex-1 mx-4 bg-gray-600 rounded-full h-1">
                                <div
                                  className="bg-[#fb7e04] h-1 rounded-full transition-all"
                                  style={{
                                    width: videoRefs.current[faq.id]
                                      ? `${
                                          (videoRefs.current[faq.id]
                                            .currentTime /
                                            videoRefs.current[faq.id]
                                              .duration) *
                                          100
                                        }%`
                                      : "0%",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Video Info */}
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-white font-semibold">
                                Watch Video Explanation
                              </h4>
                              <p className="text-gray-400 text-sm">
                                Expert guidance from our cybersecurity
                                specialist
                              </p>
                            </div>
                            <button
                              onClick={() => toggleVideo(faq.id)}
                              className="bg-[#fb7e04] hover:bg-[#e57306] text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                            >
                              {playingVideo === faq.id ? (
                                <>
                                  <Pause size={16} />
                                  <span>Pause</span>
                                </>
                              ) : (
                                <>
                                  <Play size={16} />
                                  <span>Play</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8 text-[#235ab0] ">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-lg mb-6 text-gray-700">
              Our cybersecurity experts are here to help you with personalized
              guidance.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#fb7e04] hover:bg-[#e57306] text-white px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105"
            >
              Contact Our Experts
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
