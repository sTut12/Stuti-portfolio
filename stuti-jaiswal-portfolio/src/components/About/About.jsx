import React, { useEffect, useRef } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import profileImg from "../../assets/image1.jpeg";

const About = () => {
  const blobRef = useRef(null);

  // GSAP animation for the floating vibrant blobs
  useEffect(() => {
    gsap.to(".blob", {
      duration: 10,
      x: "random(-40, 40)",
      y: "random(-40, 40)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 2
    });
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 px-[7vw] lg:px-[16vw] font-sans min-h-[90vh] flex items-center"
    >
      {/* BACKGROUND MOVING ELEMENTS */}
      <div className="absolute inset-0 -z-10">
        <div className="blob absolute top-1/4 left-1/4 w-72 h-72 bg-[#8245ec] rounded-full mix-blend-screen filter blur-[80px] opacity-30"></div>
        <div className="blob absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#a855f7] rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 w-full">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-3/5 text-center lg:text-left z-10"
        >
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-400 mb-2 tracking-wide">
            Hi, I am
          </h1>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Stuti <span className="text-[#8245ec]">Kumari</span>
          </h2>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-white">
            I am a{' '}
            <span className="text-[#8245ec]">
              <ReactTypingEffect
                text={[
  'Full Stack Developer',
  'Software Developer',
  'AI Enthusiast',
]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
              />
            </span>
          </h3>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
  I am a passionate <span className="text-white font-semibold">BCA student at Galgotias University</span> with a strong interest in Full Stack Development, Artificial Intelligence, and Software Engineering. I enjoy building modern, scalable, and user-friendly applications while continuously improving my problem-solving and development skills through real-world projects and internships.
</p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
             href="/resume.pdf"
               download
              className="relative group overflow-hidden inline-block text-white py-4 px-10 rounded-xl text-lg font-bold transition-all duration-300"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 10px 30px -10px #8245ec',
              }}
            >
              <span className="relative z-10">DOWNLOAD CV</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </div>
        </motion.div>

        {/* Right Side: Vibrant Elegant Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-2/5 relative flex justify-center items-center"
        >
          {/* This replaces the image with an elegant geometric glass element */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Rotating border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#8245ec] to-[#f472b6] animate-spin-slow opacity-30 blur-xl"></div>
            
            {/* The "Elegant Card" */}
            <div className="absolute inset-0 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl flex flex-col justify-center items-center p-8 text-center overflow-hidden">
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#8245ec] rounded-full filter blur-3xl opacity-50"></div>
               
               <div className="z-10">
                 <img src={profileImg} alt="Profile" className=" rounded-full border-4 border-white/20 mb-4" />
                 </div>
               
               {/* Decorative Lines */}
               <div className="absolute bottom-4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8245ec] to-transparent"></div>
            </div>
          </div>
        </motion.div>

      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;