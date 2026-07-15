import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 px-4 md:px-12 lg:px-24 bg-[#050816] relative overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50 pointer-events-none" />

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          EDUCATION
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          My academic journey has been a foundation for my professional growth.
        </p>
      </div>

      {/* Education Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line: Mobile (left) | Desktop (center) */}
        <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex items-center justify-between mb-10 md:mb-20 w-full ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Timeline Dot (Logo) */}
            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-blue-500 bg-white overflow-hidden shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-contain p-1"
                />
              </div>
            </div>

            {/* Content Card */}
            {/* ml-12 ensures space for the timeline on mobile */}
            <div className="w-full md:w-[45%] ml-12 md:ml-0">
              <div className="relative p-5 md:p-8 rounded-2xl bg-[#1d1836] border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-xl group">
                
                {/* Header: School Logo & Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="hidden sm:block w-16 h-12 flex-shrink-0 bg-white rounded-md overflow-hidden p-1">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="text-blue-400 text-sm font-medium">
                      {edu.school}
                    </span>
                    <span className="text-gray-500 text-xs italic">
                      {edu.date}
                    </span>
                  </div>
                </div>

                {/* Grade Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-blue-500/10 text-blue-300 border border-blue-500/20 px-3 py-1 rounded-md text-xs font-bold">
                    Grade: {edu.grade}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {edu.desc}
                </p>

                {/* Desktop Arrow Decor */}
                <div className={`hidden md:block absolute top-10 w-3 h-3 bg-[#1d1836] border-t border-l border-white/10 rotate-45 ${
                  index % 2 === 0 ? "-right-1.5 border-t-0 border-l-0 border-r border-b" : "-left-1.5"
                }`}></div>
              </div>
            </div>

            {/* Empty Spacer for Desktop Layout */}
            <div className="hidden md:block md:w-[45%]"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;