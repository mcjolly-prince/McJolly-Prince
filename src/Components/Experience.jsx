import React from 'react'

import Resume from "./Resume";
import resumeUrl from "../Assets/Mcjolly.pdf";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#130b1c]/80 to-transparent opacity-30 rounded-2xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[#6f1cd7] text-sm tracking-[0.25em] uppercase mb-4 block font-medium">Experience</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl   poppins font-clashbold text-white mb-6 tracking-tight">
            Professional Journey
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-[#6f1cd7] to-transparent mb-8" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-12 top-0 w-[1px] h-full bg-gradient-to-b from-[#6f2cd7]/40 via-[#f8c3]/20 to-transparent rounded-2xl" />

                <div className="space-y-12">
          {[
            {
              title: "Web Designer",
              company: "ApexoAI, Africa",
              location: "",
              period: "3rd March, 2025 – Present",
              description: [
                "Designed and developed the landing page, which strongly resonated with investors’ appeal and customers’ demand.",
                "Created branding materials, including logos, business cards, and marketing collateral, increasing brand recognition.",
                "Utilized Adobe Photoshop, Premiere Pro, and After Effects to produce high-quality video content and motion graphics.",
                "Collaborated with cross-functional teams to deliver projects under tight deadlines, maintaining brand compliance."
              ]
            },
            {
              title: "Web Developer",
              company: "Rekraft Studios",
              location: "Port Harcourt, Rivers State",
              period: "February 2023 – November 2024",
              description: [
                "Designed print and digital assets, including brochures, banners, and social media graphics, for 20+ clients, ensuring brand consistency.",
                "Developed interactive web elements using HTML, CSS, and JavaScript, enhancing website functionality and user experiences for clients.",
                "Edited promotional videos using Adobe Premiere Pro, contributing to a 20% increase in client campaign conversions."
              ]
            },
            {
              title: "Motion Designer",
              company: "Teachmint",
              location: "India",
              period: "June 2024",
              description: [
                "Curated educational icons and motion videos to effectively communicate the company’s idea.",
                "Managed multiple projects simultaneously, meeting all deadlines and maintaining a 95% project retention rate."
              ]
            }
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-6 md:pl-24"
              >
                <motion.div
                  className="absolute left-0 top-3 transform -translate-x-1/2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#130b1c] border-2 border-[#6f1cd7] shadow-lg shadow-[#6f1cd7]/20" />
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: 'rgba(111, 28, 215, 0.08)'
                  }}
                  className="group relative bg-[#130b1c]/60 backdrop-blur-sm border border-[#ffffff08] p-8 rounded-sm transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6f1cd7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-clashbold text-white mb-3">
                      {experience.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
                      <p className="text-[#fff] font-medium tracking-wide">{experience.company}</p>
                      <div className="flex items-center gap-4">
                        <span className="hidden md:inline text-[#fff]">•</span>
                        <span className="text-[#fff] text-sm">{experience.location}</span>
                        <span className="text-[#fff]">•</span>
                        <span className="text-[#fff] text-sm tracking-wider">{experience.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {experience.description.map((item, i) => (
                        <li key={i} className="text-[#fff] leading-relaxed font-light flex items-start">
                          <span className="text-[#fff] mr-3 mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pl-16 md:pl-24 text-white"
            
          >
            <Resume
              pdfUrl={resumeUrl}
              fileName="mcjolly prince.pdf"
              buttonText="Download Resume"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;