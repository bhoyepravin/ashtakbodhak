import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award,
  BookOpen,
  Shield,
  Users,
  Mic,
  FileText,
  CheckCircle,
  Star,
  Building,
  GraduationCap,
  BookMarked,
} from "lucide-react";
import trainerData from "../../Constant/AboutUs/trainerData";
import { trainerimg } from "../../assets";
import { useNavigate } from "react-router-dom";
import aboutData from "../../Constant/AboutUs/aboutData";

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

const TrainerComponent = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <section className=" bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-gray-50 text-[#184E43] rounded-2xl p-8 lg:p-12"
              >
                <h3 className="text-2xl lg:text-5xl font-extrabold mb-6">
                  {aboutData.founder.name}
                </h3>
                <p className="text-lg lg:text-xl leading-relaxed mb-8 text-gray-700">
                  {aboutData.founder.message}
                </p>
                <div className="text-xl lg:text-2xl font-bold text-[#fb7e04]">
                  {aboutData.founder.cta}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AnimatedSection className="mb-20">
          <div className="bg-gray-50 rounded-2xl  p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Image & Stats */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-[#235ab0] to-[#13763d] border-4 border-white shadow-xl overflow-hidden">
                    <img
                      src={trainerimg}
                      alt="Cyber Security Leader"
                      className="w-full h-full object-fit"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-[#235ab0] to-[#13763d] flex items-center justify-center hidden">
                      <Users className="w-20 h-20 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-[#fb7e04] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    22+ Years
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#235ab0] mb-2">
                  Cyber Security Leader
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  Senior Cybersecurity Expert & Trainer
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {trainerData.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-[#235ab0]">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-700">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Side - About Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#235ab0] mb-6 flex items-center">
                  <Shield className="w-6 h-6 text-[#235ab0] mr-2" />
                  Professional Profile
                </h3>
                {trainerData.about.sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="text-2xl text-[#fb7e04] flex-shrink-0 mt-1">
                      {section.icon}
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Achievements */}
        <AnimatedSection className="mb-12">
          <div className="bg-gradient-to-br from-[#c9e3d2] to-[#b8d9c8] rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#235ab0] mb-4">
                {trainerData.achievements.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trainerData.achievements.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-[[#c9e3d2] rounded-xl "
                >
                  <div className="text-3xl text-[#235ab0] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#235ab0] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Core Competencies */}
        <AnimatedSection className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#235ab0] mb-4">
              {trainerData.mission.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainerData.mission.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6  transition-all"
              >
                <div className="text-3xl text-[#235ab0] mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#235ab0] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Professional Domains */}
        <AnimatedSection className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#235ab0] mb-4">
              {trainerData.services.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {trainerData.services.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-[#235ab0] mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li
                      key={serviceIndex}
                      className="flex items-center text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-[#fb7e04] mr-3 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Education & Credentials */}
        <AnimatedSection className="mb-12">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#235ab0] mb-4">
                {trainerData.education.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainerData.education.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-xl"
                >
                  <div className="text-3xl text-[#235ab0] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#235ab0] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default TrainerComponent;

// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import {
//   Award,
//   BookOpen,
//   Shield,
//   Users,
//   Mic,
//   FileText,
//   CheckCircle,
//   Star,
//   Building,
//   GraduationCap,
//   BookMarked,
// } from "lucide-react";
// import trainerData from "../../Constant/AboutUs/trainerData";
// import { trainerimg } from "../../assets";
// import { useNavigate } from "react-router-dom";

// // Animation components
// const AnimatedSection = ({ children, className = "" }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });
//   const navigate = useNavigate();

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 60 }}
//       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
//       transition={{ duration: 0.8 }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// };

// const TrainerComponent = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <AnimatedSection className="text-center mb-12 lg:mb-16">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
//           >
//             Meet Your Trainer
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
//           >
//             Learn from an industry expert with decades of real-world
//             cybersecurity experience
//           </motion.p>
//         </AnimatedSection>

//         {/* About Section */}
//         <AnimatedSection className="mb-12">
//           <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//               {/* Left Side - Image & Stats */}
//               <div className="text-center lg:text-left">
//                 <div className="relative inline-block mb-6">
//                   <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-[#184E43] to-[#2359B0] border-4 border-white shadow-xl overflow-hidden">
//                     {/* Direct image path */}
//                     <img
//                       src={trainerimg}
//                       alt="Cyber Security Leader"
//                       className="w-full h-full object-fit"
//                       onError={(e) => {
//                         // Fallback if image doesn't exist
//                         e.target.style.display = "none";
//                       }}
//                     />
//                     {/* Fallback shown only if image fails to load */}
//                     <div className="w-full h-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center hidden">
//                       <Users className="w-20 h-20 text-white" />
//                     </div>
//                   </div>
//                   <div className="absolute -bottom-2 -right-2 bg-[#FB7E06] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
//                     22+ Years
//                   </div>
//                 </div>

//                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
//                   Cyber Security Leader
//                 </h2>
//                 <p className="text-gray-600 text-lg mb-6">
//                   Senior Cybersecurity Expert & Trainer
//                 </p>

//                 {/* Stats */}
//                 <div className="grid grid-cols-3 gap-4 mb-6">
//                   {trainerData.stats.map((stat, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="text-center"
//                     >
//                       <div className="text-2xl font-bold text-[#2359B0]">
//                         {stat.number}
//                       </div>
//                       <div className="text-sm text-gray-600">{stat.label}</div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* Right Side - About Content */}
//               <div className="space-y-6">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
//                   <Shield className="w-6 h-6 text-[#2359B0] mr-2" />
//                   Professional Profile
//                 </h3>
//                 {trainerData.about.sections.map((section, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.2 }}
//                     className="flex items-start space-x-4"
//                   >
//                     <div className="text-2xl flex-shrink-0 mt-1">
//                       {section.icon}
//                     </div>
//                     <p className="text-gray-700 leading-relaxed">
//                       {section.content}
//                     </p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </AnimatedSection>

//         {/* Core Competencies */}
//         <AnimatedSection className="mb-12">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               {trainerData.mission.title}
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {trainerData.mission.items.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-gray-50 rounded-xl  p-6 transition-all"
//               >
//                 <div className="text-3xl mb-4">{item.icon}</div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   {item.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </AnimatedSection>

//         {/* Professional Domains */}
//         <AnimatedSection className="mb-12">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               {trainerData.services.title}
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {trainerData.services.categories.map((category, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-gray-50 rounded-xl p-6 "
//                 style={{ borderLeftColor: category.color }}
//               >
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">
//                   {category.title}
//                 </h3>
//                 <ul className="space-y-3">
//                   {category.services.map((service, serviceIndex) => (
//                     <li
//                       key={serviceIndex}
//                       className="flex items-center text-gray-700"
//                     >
//                       <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
//                       {service}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </AnimatedSection>

//         {/* Education & Credentials */}
//         <AnimatedSection className="mb-12">
//           <div className="bg-gray-50 rounded-2xl p-8">
//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                 {trainerData.education.title}
//               </h2>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {trainerData.education.items.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="text-center p-6 bg-gray-50 rounded-xl "
//                 >
//                   <div className="text-3xl mb-4">{item.icon}</div>
//                   <h3 className="text-lg font-bold text-gray-900 mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-700 text-sm">{item.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </AnimatedSection>

//         {/* Achievements */}
//         <AnimatedSection className="mb-12">
//           <div className="bg-gradient-to-r from-[#184E43] to-[#2359B0] rounded-2xl p-8 text-white">
//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-bold mb-4">
//                 {trainerData.achievements.title}
//               </h2>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {trainerData.achievements.items.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
//                 >
//                   <div className="text-3xl mb-4">{item.icon}</div>
//                   <h3 className="text-lg font-bold mb-2">{item.title}</h3>
//                   <p className="text-white/90 text-sm">{item.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </AnimatedSection>

//         {/* CTA Section */}
//         <AnimatedSection className="text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="bg-gray-50 p-8 "
//           >
//             <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
//               {trainerData.founder.name}
//             </h3>
//             <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
//               {trainerData.founder.message}
//             </p>
//             <div className="text-xl font-bold text-[#2359B0] mb-6">
//               {trainerData.founder.cta}
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.button
//                 onClick={() => navigate("/service")}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-[#FB7E06] hover:bg-[#e57306] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
//               >
//                 View Courses
//               </motion.button>
//               <motion.button
//                 onClick={() => (window.location.href = "tel:+919967045817")}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="border-2 border-[#2359B0] text-[#2359B0] hover:bg-[#2359B0] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
//               >
//                 Contact Trainer
//               </motion.button>
//             </div>
//           </motion.div>
//         </AnimatedSection>
//       </div>
//     </div>
//   );
// };

// export default TrainerComponent;
