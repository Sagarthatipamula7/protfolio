export default function Experience() {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "SystemTron Edutech (MSME)",
      duration: "Aug 2024 – Sep 2024",
      location: "Remote/On-site",
      responsibilities: [
        "Developed responsive web interfaces using HTML5, CSS3, and JavaScript",
        "Integrated MySQL database for efficient data storage and retrieval operations",
        "Implemented and tested Java-based solutions for complex problem-solving tasks",
        "Debugged and optimized code to improve performance and maintainability",
      ],
      achievements: [
        "Successfully delivered multiple responsive web components",
        "Improved application performance through code optimization",
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Professional experience and hands-on projects in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className={`ml-16 md:ml-0 md:${index % 2 === 0 ? 'mr-1/2 pr-8 md:pr-0 md:pl-8' : 'ml-1/2 pl-8'} md:w-1/2`}>
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                        <p className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</p>
                        <div className="flex items-center text-gray-600 text-sm">
                          <span className="mr-4">📅 {exp.duration}</span>
                          <span>📍 {exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="text-blue-600 mr-2 mt-1">▸</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <span className="w-2 h-2 bg-cyan-600 rounded-full mr-2"></span>
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <span className="text-cyan-600 mr-2 mt-1">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

