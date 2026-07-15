import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-4 md:px-12 lg:px-24 bg-[#050816] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50 pointer-events-none" />

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          EXPERIENCE
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line: Aligned to left on mobile, center on desktop */}
        <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-purple-500 via-blue-500 to-transparent"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex items-center justify-between mb-10 md:mb-20 w-full ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Timeline Dot (Logo) */}
            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-purple-500 bg-white overflow-hidden shadow-[0_0_10px_rgba(130,69,236,0.5)]">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-contain p-1"
                />
              </div>
            </div>

            {/* Content Card */}
            {/* ml-12 provides space for the line/dot on mobile, md:ml-0 resets it for desktop grid */}
            <div className="w-full md:w-[45%] ml-12 md:ml-0">
              <div className="relative p-5 md:p-8 rounded-2xl bg-[#1d1836] border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-xl group">
                
                {/* Header Information */}
                <div className="flex flex-col mb-4">
                  <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors leading-tight">
                    {experience.role}
                  </h3>
                  
                  {/* Company and Date - Stacked on mobile, row on desktop */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1 gap-1">
                    <span className="text-purple-400 font-medium text-sm md:text-base">
                      {experience.company}
                    </span>
                    <span className="text-gray-500 text-xs md:text-sm italic">
                      {experience.date}
                    </span>
                  </div>
                </div>

                {/* Description - Clear and readable */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  {experience.desc}
                </p>

                {/* Skills Section */}
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-500/10 text-purple-300 border border-purple-500/20 px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Desktop Arrow Decor */}
                <div className={`hidden md:block absolute top-10 w-3 h-3 bg-[#1d1836] border-t border-l border-white/10 rotate-45 ${
                  index % 2 === 0 ? "-right-1.5 border-t-0 border-l-0 border-r border-b" : "-left-1.5"
                }`}></div>
              </div>
            </div>

            {/* Empty Spacer to maintain desktop alternating layout */}
            <div className="hidden md:block md:w-[45%]"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;