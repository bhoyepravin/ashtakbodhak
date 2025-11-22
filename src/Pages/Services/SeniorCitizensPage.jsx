import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Shield,
  Phone,
  Users,
  CreditCard,
  MessageCircle,
  AlertTriangle,
  Heart,
} from "lucide-react";
import seniorCitizensData from "../../Constant/Services/seniorCitizensData";

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

const SeniorCitizensPage = () => {
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
              className="text-4xl lg:text-6xl font-bold mb-4 uppercase tracking-wide"
            >
              {seniorCitizensData.hero.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl lg:text-4xl font-bold mb-6 bg-white/20 backdrop-blur-sm inline-block px-6 py-3 rounded-full"
            >
              {seniorCitizensData.hero.subtitle}
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto"
            >
              {seniorCitizensData.hero.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#184E43] mb-6">
              {seniorCitizensData.overview.title}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {seniorCitizensData.overview.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#2359B0] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#184E43] mb-6">
              {seniorCitizensData.delivery.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {seniorCitizensData.delivery.methods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-[#70B486] to-[#184E43] text-white p-4 rounded-lg font-semibold text-center text-lg"
                >
                  {method}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-16 bg-gradient-to-r from-[#184E43] to-[#70B486] text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {seniorCitizensData.specialFeatures.title}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {seniorCitizensData.specialFeatures.items.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center hover:bg-white/15 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/80 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#184E43] mb-6">
              {seniorCitizensData.curriculum.title}
            </h2>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto space-y-8">
            {seniorCitizensData.curriculum.modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    {/* Module Number & Icon */}
                    <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center">
                      <div className="bg-gradient-to-r from-[#70B486] to-[#184E43] text-white rounded-2xl p-4 min-w-16 text-center">
                        <div className="text-2xl font-bold">
                          {module.number}
                        </div>
                      </div>
                      <div className="text-4xl lg:text-5xl">{module.icon}</div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#2359B0] mb-4">
                        {module.title}
                      </h3>
                      <ul className="space-y-3">
                        {module.topics.map((topic, topicIndex) => (
                          <motion.li
                            key={topicIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: topicIndex * 0.1 }}
                            className="flex items-start text-gray-700 text-lg"
                          >
                            <div className="w-2 h-2 bg-[#FB7E06] rounded-full mt-3 mr-3 flex-shrink-0"></div>
                            <span className="text-lg">{topic}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#184E43] mb-6">
              {seniorCitizensData.emergencyContacts.title}
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Save these important numbers for immediate help in case of cyber
              fraud
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {seniorCitizensData.emergencyContacts.contacts.map(
              (contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all"
                >
                  <div className="text-3xl mb-3">📞</div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">
                    {contact.name}
                  </h3>
                  <div className="text-2xl font-bold text-red-600 mb-3">
                    {contact.number}
                  </div>
                  <p className="text-red-700 text-sm">{contact.purpose}</p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-16 bg-gradient-to-r from-[#70B486] to-[#184E43] text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Golden Rules for Online Safety
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "❓",
                rule: "Verify Before You Trust",
                tip: "Always double-check with family before sharing personal information",
              },
              {
                icon: "🔒",
                rule: "Keep Passwords Private",
                tip: "Never share passwords, even with people claiming to be from banks",
              },
              {
                icon: "📱",
                rule: "Update Regularly",
                tip: "Keep your phone and apps updated to the latest version",
              },
              {
                icon: "💬",
                rule: "Think Before You Click",
                tip: "Don't click on links in messages from unknown numbers",
              },
              {
                icon: "🏦",
                rule: "Bank Safety First",
                tip: "Only use official banking apps and websites",
              },
              {
                icon: "👥",
                rule: "Talk to Family",
                tip: "Discuss suspicious messages with family members immediately",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.rule}</h3>
                <p className="text-white/80 text-sm">{item.tip}</p>
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
              {seniorCitizensData.cta.title}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {seniorCitizensData.cta.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FB7E06] hover:bg-[#e57306] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              {seniorCitizensData.cta.button}
            </motion.button>
            <p className="text-white/70 text-sm mt-4">
              Family members can also register on behalf of seniors
            </p>
          </AnimatedSection>
        </div>
      </section> */}
    </div>
  );
};

export default SeniorCitizensPage;
