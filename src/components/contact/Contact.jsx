import { CONTACT } from "../../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaSwatchbook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl sm:text-4xl md:text-5xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center traking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-sm sm:text-base md:text-lg"
        >
          {CONTACT.address}
        </motion.p>
        <div className="m-8 flex lg:flex-row sm:flex-col text-sm sm:text-base md:text-lg items-center justify-center gap-4 ">
          <motion.a
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="border-b"
            href={`tel:${CONTACT.phoneNo}`}
          >
            {CONTACT.phoneNo}
          </motion.a>
          <motion.a
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            href={`mailto:${CONTACT.email}`}
            className="border-b"
          >
            {CONTACT.email}
          </motion.a>
        </div>
        <div className="m-8 flex flex-wrap items-center justify-center gap-6 text-xl sm:text-2xl md:text-3xl">
          <a
            href="https://www.linkedin.com/in/tushar-patil-a1375221b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-500 transition duration-300" />
          </a>
          <a
            href="https://github.com/tushar0945/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-400 transition duration-300" />
          </a>
          <a
            href="https://x.com/_tushar__45_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter className="hover:text-gray-500 transition duration-300" />
          </a>
          <a
            href="https://www.instagram.com/_tushar__45._/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-500 transition duration-300" />
          </a>
        </div>
        {/* <motion.form
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mt-10 flex flex-col gap-4 text-left"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-2 rounded-md border bg-neutral-900 border-neutral-700 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-2 rounded-md border bg-neutral-900 border-neutral-700 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="p-2 rounded-md border bg-neutral-900 border-neutral-700 text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Send Message
          </button>
        </motion.form> */}
      </div>
    </div>
  );
};

export default Contact;

// import { useState } from "react";
// import { CONTACT } from "../../constants";
// import { motion } from "framer-motion";
// import { FaLinkedin, FaSwatchbook } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import emailjs from "emailjs-com";

// const Contact = () => {
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSuccess(false);
//     setError(false);

//     emailjs
//       .sendForm(
//         "your_service_id", // Replace with your EmailJS service ID
//         "your_template_id", // Replace with your EmailJS template ID
//         e.target,
//         "your_public_key" // Replace with your EmailJS public key
//       )
//       .then(
//         (result) => {
//           console.log("Message sent:", result.text);
//           setSuccess(true);
//           e.target.reset();
//         },
//         (error) => {
//           console.error("Sending failed:", error.text);
//           setError(true);
//         }
//       );
//   };

//   return (
//     <div id="contact" className="border-b border-neutral-900 pb-20">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="my-10 text-center text-4xl sm:text-4xl md:text-5xl"
//       >
//         Get in Touch
//       </motion.h2>

//       <div className="text-center tracking-tighter">
//         <motion.p
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: -100 }}
//           transition={{ duration: 1 }}
//           className="my-4 text-sm sm:text-base md:text-lg"
//         >
//           {CONTACT.address}
//         </motion.p>

//         <div className="m-8 flex lg:flex-row sm:flex-col text-sm sm:text-base md:text-lg items-center justify-center gap-4">
//           <motion.a
//             whileInView={{ opacity: 1, x: 0 }}
//             initial={{ opacity: 0, x: -100 }}
//             transition={{ duration: 1 }}
//             className="border-b hover:underline"
//             href={`tel:${CONTACT.phoneNo}`}
//           >
//             {CONTACT.phoneNo}
//           </motion.a>
//           <motion.a
//             whileInView={{ opacity: 1, x: 0 }}
//             initial={{ opacity: 0, x: 100 }}
//             transition={{ duration: 1 }}
//             href={`mailto:${CONTACT.email}`}
//             className="border-b hover:underline"
//           >
//             {CONTACT.email}
//           </motion.a>
//         </div>

//         <div className="m-8 flex flex-wrap items-center justify-center gap-6 text-xl sm:text-2xl md:text-3xl">
//           <a
//             href="https://www.linkedin.com/in/tushar-patil-a1375221b/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaLinkedin className="hover:text-blue-500 transition duration-300" />
//           </a>
//           <a
//             href="https://github.com/tushar0945/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaGithub className="hover:text-gray-400 transition duration-300" />
//           </a>
//           <a
//             href="https://x.com/_tushar__45_"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaSquareXTwitter className="hover:text-gray-500 transition duration-300" />
//           </a>
//           <a
//             href="https://www.instagram.com/_tushar__45._/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaInstagram className="hover:text-pink-500 transition duration-300" />
//           </a>
//         </div>
//         <div>
//           <motion.form
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: 100 }}
//             transition={{ duration: 0.6 }}
//             onSubmit={handleSubmit}
//             className="backdrop-blur-md bg-white/5 border border-white/10 shadow-lg max-w-2xl w-full mx-auto mt-12 p-8 rounded-2xl flex flex-col gap-5"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               required
//               className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               required
//               className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               required
//               rows={6}
//               className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
//             />
//             <button
//               type="submit"
//               className="mt-4 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-semibold px-6 py-3 rounded-lg shadow-md"
//             >
//               Send Message
//             </button>
//           </motion.form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
