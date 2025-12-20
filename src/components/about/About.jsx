// import AboutImg from "../../assets/about1.png";
// import { ABOUT_TEXT } from "../../constants";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <div
//       id="about"
//       className="pt-[0.1rem] border-b border-neutral-900 pb-4 lg:text-left sm:text-center"
//     >
//       <h1 className="my-20 text-center text-3xl sm:text-4xl md:text-4xl lg:text-5xl">
//         About <span className="text-neutral-500">Me</span>
//       </h1>
//       <div className="flex flex-wrap">
//         <motion.div
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: -100 }}
//           transition={{ duration: 0.5 }}
//           className="w-full lg:w-1/2 lg:p-8"
//         >
//           <div className="flex items-center justify-center">
//             <img
//               className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[450px] xl:max-w-[400px] h-auto object-cover"
//               src={AboutImg}
//               alt="About"
//             />
//           </div>
//         </motion.div>
//         <motion.div
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: 100 }}
//           transition={{ duration: 0.5 }}
//           className="w-full lg:w-1/2"
//         >
//           <div className="flex justify-center lg:justify-start">
//             <p className="my-2 max-w-xl py-6 text-sm sm:text-base md:text-lg lg:text-xl">
//               {ABOUT_TEXT}
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default About;

import AboutImg from "../../assets/about1.png";
import { ABOUT_TEXT } from "../../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      id="about"
      className="pt-[0.1rem] border-b border-neutral-900 pb-4 lg:text-left sm:text-center"
    >
      <h1 className="my-20 text-center text-3xl sm:text-4xl md:text-4xl lg:text-5xl">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex flex-wrap">
        {/* IMAGE */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center relative">
            {/* Skeleton */}
            {!imgLoaded && (
              <div className="absolute rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[450px] xl:max-w-[400px] h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px] bg-neutral-800 animate-pulse" />
            )}

            {/* Image */}
            <motion.img
              src={AboutImg}
              alt="About"
              onLoad={() => setImgLoaded(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: imgLoaded ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[450px] xl:max-w-[400px] h-auto object-cover relative"
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-sm sm:text-base md:text-lg lg:text-xl">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
