export default function Skills() {
  const skillCategories = {
    "Programming Languages": ["C", "Java"],
    "Web Technologies": ["HTML5", "CSS3", "JavaScript"],
    "Database Systems": ["MySQL"],
    "Tools & Platforms": ["GitHub", "VS Code"],
    "Core Concepts": ["Object-Oriented Programming (OOP)", "Data Structures & Algorithms (DSA)"],
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillCategories).map(([category, skills], catIndex) => (
            <div 
              key={category} 
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-cyan-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Problem Analysis", "Planning", "Quick Learner", "Adaptable", "Team Collaboration"].map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-md hover:shadow-lg transition-all transform hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

