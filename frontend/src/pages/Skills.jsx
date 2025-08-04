import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const categorizedSkills = {
  "Programming Languages": [
    { name: "C++", icon: "🧠" },
    { name: "JavaScript", icon: "⚡" },
    { name: "Python", icon: "🐍" },
  ],
  "Frontend Development": [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "React.js", icon: "⚛️" },
    { name: "Redux", icon: "🔄" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Bootstrap", icon: "📦" },
    { name: "EJS", icon: "📝" },
  ],
  "Backend Development": [
    { name: "Node.js", icon: "🌿" },
    { name: "Express.js", icon: "🚀" },
    { name: "REST APIs", icon: "🔗" },
    { name: "socket.io", icon: "🔌" },
  ],
  "Databases": [
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MySQL", icon: "🛢️" },
  ],
  "DevOps & Cloud": [{ name: "AWS", icon: "☁️" }],
  "Tools & Platforms": [
    { name: "Git", icon: "🔧" },
    { name: "GitHub", icon: "🐙" },
    { name: "Render", icon: "🛰️" },
    { name: "Vercel", icon: "🧬" },
  ],
  "Concepts": [
    { name: "DSA", icon: "📐" },
    { name: "OOP", icon: "🧩" },
    { name: "SDLC", icon: "📊" },
    { name: "System Design", icon: "🧱" },
    { name: "Agile", icon: "🏃" },
    { name: "TDD", icon: "🧪" },
    { name: "Version Control", icon: "🗂️" },
    { name: "MVC", icon: "🧭" },
    { name: "JWT Auth", icon: "🔐" },
    { name: "WebSockets", icon: "📡" },
  ],
};

function Skills() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Tech Stack & Skills
        </motion.h2>

        {Object.entries(categorizedSkills).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-6 text-center hover:bg-white/20 transition"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <div className="text-md font-medium">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* CTA Button */}
        <div className="text-center mt-10">
          <a
            href="/myresume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition"
          >
            <FaDownload /> Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
