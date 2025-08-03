

import React from "react";

const skills = [
  { name: "C++", icon: "🧠" },
  { name: "JavaScript", icon: "⚡" },
  { name: "Python", icon: "🐍" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "React.js", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Bootstrap", icon: "📦" },
  { name: "Node.js", icon: "🌿" },
  { name: "Express.js", icon: "🚀" },
  { name: "REST APIs", icon: "🔗" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MySQL", icon: "🛢️" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "🔧" },
  { name: "GitHub", icon: "🐙" },
  { name: "DSA", icon: "📐" },
  { name: "OOP", icon: "🧩" },
  { name: "SDLC", icon: "📊" },
  { name: "System Design", icon: "🧱" },
  { name: "Agile", icon: "🏃" },
  { name: "TDD", icon: "🧪" },
  { name: "Version Control", icon: "🗂️" },
];

function Skills() {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
