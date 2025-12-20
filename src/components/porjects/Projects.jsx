// import { PROJECTS } from "../../constants/index";
// // import LaunchIcon from "@mui/icons-material/Launch";?\
// import { motion } from "framer-motion";

// const Projects = () => {
//   return (
//     <div id="projects" className="pt-[1rem] border-b border-neutral-900 bp-4">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="my-20 text-center text-3xl sm:text-4xl md:text-4xl lg:text-5xl"
//       >
//         Projects
//       </motion.h2>
//       <div>
//         {PROJECTS.map((Project, index) => (
//           <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1 }}
//               className="w-full lg:w-1/4"
//             >
//               <img
//                 src={Project.image}
//                 alt={Project.title}
//                 className="mb-6 rounded w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52"
//               />
//             </motion.div>
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: 100 }}
//               transition={{ duration: 1 }}
//               className="w-full max-w-xl lg:w-3/4"
//             >
//               <h6 className="mb-2 font-semibold text-lg sm:text-xl md:text-2xl">
//                 {Project.title}
//               </h6>
//               <p className="mb-4 text-neutral-400 text-sm sm:text-base md:text-lg">
//                 {Project.description}
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {Project.technologies.map((tech, index) => (
//                   <span
//                     key={index}
//                     className="mr-2 rounded bg-neutral-900 px-2 py-1 text-xs sm:text-sm md:text-base font-medium text-purple-900"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="mt-4 flex gap-4">
//                 <a
//                   href={Project.liveLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-400 hover:underline"
//                 >
//                   Live Demo
//                 </a>
//                 <a
//                   href={Project.githubLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-400 hover:underline"
//                 >
//                   GitHub
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

import { PROJECTS } from "../../constants/index";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  return (
    <div id="projects" className="pt-[1rem] border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl sm:text-4xl md:text-4xl lg:text-5xl"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((Project, index) => (
          <ProjectItem key={index} Project={Project} />
        ))}
      </div>
    </div>
  );
};

/* ---------------- SINGLE PROJECT ITEM ---------------- */
const ProjectItem = ({ Project }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="mb-8 flex flex-wrap lg:justify-center">
      {/* IMAGE */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/4 flex justify-center relative"
      >
        {/* Skeleton */}
        {!imgLoaded && (
          <div className="absolute rounded w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 bg-neutral-800 animate-pulse" />
        )}

        {/* Image */}
        <motion.img
          src={Project.image}
          alt={Project.title}
          onLoad={() => setImgLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: imgLoaded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 rounded w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 object-cover relative"
        />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-xl lg:w-3/4"
      >
        <h6 className="mb-2 font-semibold text-lg sm:text-xl md:text-2xl">
          {Project.title}
        </h6>

        <p className="mb-4 text-neutral-400 text-sm sm:text-base md:text-lg">
          {Project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {Project.technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded bg-neutral-900 px-2 py-1 text-xs sm:text-sm md:text-base font-medium text-purple-900"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-4">
          <a
            href={Project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Live Demo
          </a>
          <a
            href={Project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
