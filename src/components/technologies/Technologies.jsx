import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiCodeigniter } from "react-icons/si";
import { motion } from "framer-motion";

import { SiSpring } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div
      id="technologies"
      className="pt-[1rem] border-b border-neutral-800 pb-24"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl sm:text-4xl md:text-4xl lg:text-5xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* Spring */}
        <motion.div
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSpring className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-green-600" />
        </motion.div>

        {/* Spring Boot */}
        <motion.div
          variants={iconVariants(3.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSpring className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-green-500" />
        </motion.div>

        {/* Hibernate */}
        <motion.div
          variants={iconVariants(1.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiHibernate className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-yellow-600" />
        </motion.div>

        {/* JPA */}
        <motion.div
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaDatabase className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <SiMongodb className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-amber-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNodedotjs className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPhp className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-indigo-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiCodeigniter className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-sky-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGitAlt className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGithub className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-gray-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
