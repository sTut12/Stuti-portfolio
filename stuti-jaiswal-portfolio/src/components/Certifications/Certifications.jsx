import React from "react";
import { certifications } from "../../constants"; 

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-widest">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold uppercase tracking-wider">
          Professional Recognitions and Academic Achievements
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="group relative p-6 rounded-2xl border border-white/20 bg-gray-900/50 backdrop-blur-xl shadow-[0_0_20px_rgba(130,69,236,0.2)] hover:shadow-[0_0_30px_rgba(130,69,236,0.4)] transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            {/* Background Gradient Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex items-start gap-6 relative z-10">
              {/* Logo Container */}
              <div className="min-w-[70px] h-[70px] bg-white rounded-xl flex items-center justify-center p-2 shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-110">
                <img
                  src={cert.img}
                  alt={cert.issuer}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Info */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  {cert.title}
                </h3>
                <h4 className="text-purple-300 font-medium text-sm mt-1">
                  {cert.issuer}
                </h4>
                <p className="text-gray-400 text-sm mt-3 line-clamp-3">
                  {cert.desc}
                </p>
                
                {/* Footer section of card */}
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                    ID: {cert.id.toString().padStart(3, '0')}
                  </span>
                  <span className="bg-[#8245ec]/20 text-[#8245ec] px-3 py-1 text-[10px] rounded-full border border-[#8245ec]/30 font-bold">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;