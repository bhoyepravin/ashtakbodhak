import React from "react";
import { motion } from "framer-motion";
import aboutData from "../../Constant/AboutUs/aboutData";
import TrainerComponent from "./TrainerComponent";

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#a8cfb8] via-[#98c5a8] to-[#88bb98]">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-extrabold mb-6 text-white"
          >
            About{" "}
            <span className="text-white font-extrabold">Ashtak Bodhak</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-700"
          >
            {aboutData.about.title}
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutData.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 bg-gray-50  transition-shadow"
              >
                <div className="text-3xl lg:text-4xl font-bold text-[#235ab0] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-800 font-semibold text-lg">
                  {stat.label}
                </div>
                <div className="text-[#fb7e04] text-sm">{stat.suffix}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-[#184E43] mb-12">
            Ashtak Bodhak Story
          </h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            {aboutData.about.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-start gap-6"
              >
                <div className="text-3xl text-[#fb7e04] flex-shrink-0">
                  {section.icon}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-[#184E43] mb-12">
            {aboutData.mission.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutData.mission.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 bg-gray-50 rounded-lg  transition-colors"
              >
                <div className="text-4xl mb-4 text-[#235ab0]">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-[#184E43] mb-12">
            {aboutData.services.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {aboutData.services.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-lg "
              >
                <h3 className="text-2xl font-bold mb-6 text-[#235ab0]">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li
                      key={serviceIndex}
                      className="flex items-center text-gray-700"
                    >
                      <div className="w-2 h-2 bg-[#fb7e04] rounded-full mr-3 flex-shrink-0"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message Section */}
      {/* <section className="py-16 bg-gray-50">
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
      </section> */}
      <TrainerComponent />
    </div>
  );
};

export default AboutUs;

// import React from "react";
// import { motion } from "framer-motion";
// import aboutData from "../../Constant/AboutUs/aboutData";
// import TrainerComponent from "./TrainerComponent";

// const AboutUs = () => {
//   return (
//     <div className="min-h-screen pt-32 bg-white">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-r from-[#184E43] to-[#1a6df3] text-white">
//         <div className="container mx-auto px-4 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl lg:text-6xl font-bold mb-6"
//           >
//             About <span className="text-[#FB7E06]">AshtakBodhak</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-xl lg:text-2xl max-w-4xl mx-auto"
//           >
//             {aboutData.about.title}
//           </motion.p>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {aboutData.stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="text-center p-8  rounded-lg  transition-shadow"
//               >
//                 <div className="text-3xl lg:text-4xl font-bold text-[#184E43] mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-800 font-semibold text-lg">
//                   {stat.label}
//                 </div>
//                 <div className="text-[#FB7E06] text-sm">{stat.suffix}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Story Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#184E43] mb-12">
//             Our Story
//           </h2>
//           <div className="space-y-12 max-w-4xl mx-auto">
//             {aboutData.about.sections.map((section, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 className="flex items-start gap-6"
//               >
//                 <div className="text-3xl text-[#FB7E06] flex-shrink-0">
//                   {section.icon}
//                 </div>
//                 <p className="text-gray-700 text-lg leading-relaxed">
//                   {section.content}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#184E43] mb-12">
//             {aboutData.mission.title}
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {aboutData.mission.items.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="text-center p-6  rounded-lg  transition-colors"
//               >
//                 <div className="text-4xl mb-4 text-[#2359B0]">{item.icon}</div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {item.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#184E43] mb-12">
//             {aboutData.services.title}
//           </h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//             {aboutData.services.categories.map((category, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="bg-gray-50 p-8 rounded-lg "
//               >
//                 <h3
//                   className="text-2xl font-bold mb-6"
//                   style={{ color: category.color }}
//                 >
//                   {category.title}
//                 </h3>
//                 <ul className="space-y-3">
//                   {category.services.map((service, serviceIndex) => (
//                     <li
//                       key={serviceIndex}
//                       className="flex items-center text-gray-700"
//                     >
//                       <div
//                         className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
//                         style={{ backgroundColor: category.color }}
//                       ></div>
//                       {service}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Founder Message Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               className="bg-[#c9e3d2] text-[#235ab0] rounded-2xl p-8 lg:p-12 "
//             >
//               <h3 className="text-2xl lg:text-3xl font-bold mb-6">
//                 {aboutData.founder.name}
//               </h3>
//               <p className="text-lg lg:text-xl leading-relaxed mb-8 text-gray-700">
//                 {aboutData.founder.message}
//               </p>
//               <div className="text-xl lg:text-2xl font-bold text-[#fb7e04]">
//                 {aboutData.founder.cta}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <TrainerComponent />
//     </div>
//   );
// };

// export default AboutUs;
