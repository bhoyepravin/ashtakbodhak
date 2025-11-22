import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import contactData from "../../Constant/Home/contactData";

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

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateWhatsAppMessage = () => {
    const { name, email, phone, service, message } = formData;

    const formattedMessage = `
Hello AshtakBodhak Team!

I would like to get in touch regarding your cybersecurity services.

*Contact Details:*
Name: ${name}
Email: ${email}
Phone: ${phone}

*Service Interested In:* ${service || "Not specified"}

*Message:*
${message}

Looking forward to your response!

Best regards,
${name}
    `.trim();

    return encodeURIComponent(formattedMessage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.message) {
      alert("Please fill in at least your name and message");
      return;
    }

    const phoneNumber = "919967045817"; // Replace with your actual WhatsApp number
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // Show success message
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleQuickMessage = (serviceType) => {
    const phoneNumber = "919967045817"; // Replace with your actual WhatsApp number
    const message = encodeURIComponent(
      `
Hello AshtakBodhak Team!

I'm interested in your ${serviceType} services. Could you please provide more information?

Thank you!
    `.trim()
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen pt-18 bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#184E43] to-[#2359B0] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl lg:text-2xl max-w-4xl mx-auto"
          >
            {contactData.company.tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto mt-4"
          >
            {contactData.company.description}
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#184E43] mb-6">
              Get In Touch
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactData.contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-[#2359B0] mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                {method.type === "whatsapp" ? (
                  <a
                    href={`https://wa.me/${method.value.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <MessageCircle size={20} />
                    Message on WhatsApp
                  </a>
                ) : method.type === "email" ? (
                  <a
                    href={`mailto:${method.value}`}
                    className="inline-flex items-center gap-2 bg-[#FB7E06] hover:bg-[#e57306] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Mail size={20} />
                    Send Email
                  </a>
                ) : (
                  <div className="text-gray-700 font-medium">
                    <MapPin size={20} className="inline mr-2" />
                    {method.value}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Form & Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h2 className="text-3xl font-bold text-[#184E43] mb-6">
                  Send Message via WhatsApp
                </h2>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3"
                  >
                    <CheckCircle className="text-green-600" size={24} />
                    <div>
                      <div className="font-semibold text-green-800">
                        Message Ready!
                      </div>
                      <div className="text-green-600 text-sm">
                        You'll be redirected to WhatsApp to send your message
                      </div>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB7E06] focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB7E06] focus:border-transparent transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB7E06] focus:border-transparent transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB7E06] focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        {contactData.services.map((service, index) => (
                          <option key={index} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB7E06] focus:border-transparent transition-all"
                      placeholder="Tell us about your cybersecurity needs, training requirements, or any questions you have..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-3"
                  >
                    <MessageCircle size={24} />
                    Send via WhatsApp
                    <Send size={20} />
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#184E43] to-[#2359B0] text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Secure Your Digital Presence?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how AshtakBodhak can help you build cyber resilience
            </p>
            <motion.a
              href={`https://wa.me/919967045817?text=${encodeURIComponent(
                "Hello! I would like to discuss cybersecurity services with AshtakBodhak."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#FB7E06] hover:bg-[#e57306] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <MessageCircle size={24} />
              Start Conversation on WhatsApp
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
