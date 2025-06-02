
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90, color: "bg-blue-500" },
        { name: "TypeScript", level: 85, color: "bg-blue-600" },
        { name: "JavaScript", level: 95, color: "bg-yellow-500" },
        { name: "HTML/CSS", level: 90, color: "bg-orange-500" },
        { name: "Tailwind CSS", level: 85, color: "bg-cyan-500" },
        { name: "Next.js", level: 80, color: "bg-gray-700" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-600" },
        { name: "Python", level: 80, color: "bg-yellow-600" },
        { name: "Express.js", level: 85, color: "bg-gray-600" },
        { name: "PostgreSQL", level: 75, color: "bg-blue-700" },
        { name: "MongoDB", level: 70, color: "bg-green-700" },
        { name: "REST APIs", level: 90, color: "bg-purple-600" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90, color: "bg-red-600" },
        { name: "Docker", level: 75, color: "bg-blue-600" },
        { name: "AWS", level: 70, color: "bg-orange-600" },
        { name: "Figma", level: 80, color: "bg-purple-500" },
        { name: "Linux", level: 75, color: "bg-gray-800" },
        { name: "VS Code", level: 95, color: "bg-blue-500" },
      ]
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              My Skills
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h2>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to continuous learning. 
              I regularly explore new frameworks, attend workshops, and contribute to 
              open-source projects to stay current with industry trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
