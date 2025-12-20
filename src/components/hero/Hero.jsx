// import { HERO_CONTENT } from "../../constants";
// import Resume from "../../assets/resume/_Tushar_Resume.pdf";
// import profilePic from "../../assets/HeroImg.jpg";
// import { motion } from "framer-motion";

// const container = (delay) => ({
//   hidden: { x: -100, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.5, delay: delay },
//   },
// });

// const Hero = () => {
//   function downloadResume() {
//     const link = document.createElement("a");
//     link.href = Resume;
//     link.download = "Tushar_Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }
//   return (
//     <div className="min-h-screen flex items-center justify-center overflow-hidden pb-4 border-b border-neutral-900">
//       <div className="   lg:mb-[1] lg:pt-[10rem] sm:pt-[0.5rem] lg:text-left sm:text-center">
//         <div className="flex flex-wrap">
//           <div className="w-full lg:w-1/2">
//             <div className="flex  flex-col items-center lg:items-start">
//               <motion.h1
//                 variants={container(0.1)}
//                 initial="hidden"
//                 animate="visible"
//                 className="pb-16  font-thin tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl sm:mb-[-30px]"
//               >
//                 Tushar Patil
//               </motion.h1>
//               <motion.span
//                 variants={container(0.5)}
//                 initial="hidden"
//                 animate="visible"
//                 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-4xl traking-tight text-transparent"
//               >
//                 Full Stack Developer
//               </motion.span>
//               <motion.p
//                 variants={container(1)}
//                 initial="hidden"
//                 animate="visible"
//                 className="my-2 max-w-xl py-6 font-light tracking-tighter text-sm sm:text-base md:text-lg lg:text-xl"
//               >
//                 {HERO_CONTENT}
//               </motion.p>

//               <motion.button
//                 variants={container(1.5)}
//                 initial="hidden"
//                 animate="visible"
//                 whileHover={{ scale: 1.08, borderRadius: "9999px" }} // ✅ Keeps rounded shape
//                 onClick={downloadResume}
//                 className="mb-8 relative font-bold text-black bg-white rounded-full overflow-hidden group shadow-[0_0_10px_rgba(236,72,153,0.5),0_0_20px_rgba(139,92,246,0.5),0_0_30px_rgba(103,232,249,0.5)] px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-7 lg:py-3.5 lg:text-lg"
//               >
//                 <span className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-300 blur-lg opacity-0 group-hover:opacity-100 transition-all"></span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-300 opacity-0 group-hover:opacity-100 transition-all"></span>

//                 <span className="relative">Download Resume</span>
//               </motion.button>
//             </div>
//           </div>
//           <div className="w-full lg:w-1/2 lg:p-8">
//             <div className="flex justify-center">
//               <motion.img
//                 initial={{ x: 100, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 1, delay: 1.2 }}
//                 className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[450px] xl:max-w-[440px] h-auto object-cover "
//                 src={profilePic}
//                 alt="Profile"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { HERO_CONTENT } from "../../constants";
import Resume from "../../assets/resume/_Tushar_Resume.pdf";
import profilePic from "../../assets/HeroImg.jpg";
import { motion } from "framer-motion";
import { useState } from "react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  function downloadResume() {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Tushar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden pb-4 border-b border-neutral-900">
      <div className="lg:mb-[1] lg:pt-[10rem] sm:pt-[0.5rem] lg:text-left sm:text-center">
        <div className="flex flex-wrap">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                variants={container(0.1)}
                initial="hidden"
                animate="visible"
                className="pb-16 font-thin tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl sm:mb-[-30px]"
              >
                Tushar Patil
              </motion.h1>

              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight text-transparent"
              >
                Full Stack Developer
              </motion.span>

              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter text-sm sm:text-base md:text-lg lg:text-xl"
              >
                {HERO_CONTENT}
              </motion.p>

              <motion.button
                variants={container(1.5)}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.08, borderRadius: "9999px" }}
                onClick={downloadResume}
                className="mb-8 relative font-bold text-black bg-white rounded-full overflow-hidden group shadow-[0_0_10px_rgba(236,72,153,0.5),0_0_20px_rgba(139,92,246,0.5),0_0_30px_rgba(103,232,249,0.5)] px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-7 lg:py-3.5 lg:text-lg"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-300 blur-lg opacity-0 group-hover:opacity-100 transition-all"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-300 opacity-0 group-hover:opacity-100 transition-all"></span>
                <span className="relative">Download Resume</span>
              </motion.button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center relative">
              {/* 🔹 Skeleton */}
              {!imgLoaded && (
                <div className="absolute rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[450px] xl:max-w-[440px] h-[320px] sm:h-[360px] md:h-[420px] lg:h-[460px] bg-neutral-800 animate-pulse" />
              )}

              {/* 🔹 Image */}
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: imgLoaded ? 1 : 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                onLoad={() => setImgLoaded(true)}
                src={profilePic}
                alt="Profile"
                className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[450px] xl:max-w-[440px] h-auto object-cover relative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
