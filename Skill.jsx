import React from 'react'

function Skill() {
  const skills = [
    { name: "JavaScript", icon: "🟨" },
    { name: "React", icon: "⚛️" },
    { name: "HTML & CSS", icon: "🌐" },
    { name: "Node.js", icon: "🟩" },
    { name: "GitHub", icon: "🔧" },
  ];

  const [selectedSkill, setSelectedSkill] = React.useState(null);

  const skillDetails = {
    JavaScript: "JavaScript is a versatile scripting language used primarily for web development.",
    React: "React is a popular JavaScript library for building user interfaces, especially single-page applications.",
    "HTML & CSS": "HTML & CSS are the foundational technologies for building and styling web pages.",
    "Node.js": "Node.js is a runtime environment that lets you run JavaScript on the server side.",
    GitHub: "GitHub is a platform for version control and collaboration, allowing multiple people to work on projects together.",
  };

  return (
    <section className="py-14 bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-200 tracking-tight drop-shadow-lg">
        Technical Skills
      </h2>
      <ul className="flex flex-wrap gap-8 justify-center">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-4 bg-gray-800/80 hover:bg-gray-700/90 transition-colors duration-200 px-8 py-5 rounded-2xl font-semibold shadow-xl text-lg md:text-xl cursor-pointer"
            onClick={() => setSelectedSkill(skill.name)}
          >
            <span className="text-3xl md:text-4xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
      {selectedSkill && (
        <div className="mt-10 bg-gray-900/90 p-8 rounded-xl shadow-2xl max-w-xl w-full text-center">
          <h3 className="text-2xl font-bold mb-4">{selectedSkill}</h3>
          <p className="text-gray-300">{skillDetails[selectedSkill]}</p>
          <button
            className="mt-6 px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-semibold"
            onClick={() => setSelectedSkill(null)}
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
}

export default Skill