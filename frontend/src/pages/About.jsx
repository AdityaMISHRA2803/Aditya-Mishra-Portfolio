import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaCheckCircle } from "react-icons/fa";
import { SiLeetcode, SiReact, SiMongodb } from "react-icons/si";

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    y: direction === "up" ? 40 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.6,
      type: "spring",
    },
  },
});

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center px-6 py-10"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          className="flex justify-center md:justify-start"
        >
          <img
            src="/profile-pic.png" // ← Public folder image reference
            alt="Aditya Mishra"
            className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-purple-600"
          />
        </motion.div>

        {/* Text Content */}
        <div>
          <motion.h2
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold text-white mb-6 border-b-4 border-purple-500 inline-block"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            className="text-lg sm:text-xl text-gray-300 leading-8 mb-6"
          >
            I’m <span className="text-purple-400 font-semibold">Aditya Mishra</span>, a Full Stack Developer 
            proficient in the <span className="text-yellow-400">MERN stack</span>. I specialize in building 
            fast, secure, and scalable applications. My focus is on clean code, performance, and system architecture.
          </motion.p>

          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            className="text-lg sm:text-xl text-gray-300 leading-8 mb-6"
          >
            Currently pursuing B.Tech in IT from IIIT Sonepat, I have developed
            multiple full-stack web applications and actively contribute to 
            open development communities. I’m comfortable working in 
            collaborative environments using Git, GitHub, and Agile practices.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 gap-6 text-gray-200"
          >
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Core Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><FaCode className="text-green-400 mr-2" /> JavaScript, C++, Python</li>
                <li className="flex items-center"><SiReact className="text-blue-400 mr-2" /> React.js, Node.js, Express.js</li>
                <li className="flex items-center"><SiMongodb className="text-green-500 mr-2" /> MongoDB, MySQL, PostgreSQL</li>
                <li className="flex items-center"><SiLeetcode className="text-orange-400 mr-2" /> LeetCode, GFG, CodeStudio</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Highlights</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><FaCheckCircle className="text-teal-400 mr-2" /> Solved 200+ DSA problems</li>
                <li className="flex items-center"><FaCheckCircle className="text-teal-400 mr-2" /> Proficient in scalable MERN apps</li>
                <li className="flex items-center"><FaCheckCircle className="text-teal-400 mr-2" /> REST APIs & database design</li>
                <li className="flex items-center"><FaCheckCircle className="text-teal-400 mr-2" /> Strong DBMS & OS understanding</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
