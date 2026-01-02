export default function Projects() {
  const projects = [
    {
      title: "AI-Based Security Solution for Data Encryption using AES Algorithm",
      description: "An advanced AI-enhanced security system that implements AES encryption to improve data protection and confidentiality. The system features intelligent key management and anomaly detection capabilities.",
      tech: ["Java", "AES Encryption", "AI/ML", "Security"],
      features: [
        "AI-enhanced encryption system for superior data protection",
        "Intelligent key management for improved security",
        "Anomaly detection to strengthen encryption reliability",
        "High-performance Java implementation",
      ],
      impact: "Strengthened data confidentiality and encryption reliability",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Personal Expense Tracker",
      description: "An interactive web application for tracking daily income and expenses with real-time calculations and category-based expense management.",
      tech: ["JavaScript", "HTML5", "CSS3", "Web Development"],
      features: [
        "Interactive interface for income and expense tracking",
        "Real-time dynamic calculations and data updates",
        "Category-based expense management system",
        "Fully responsive design for all devices",
      ],
      impact: "Enhanced user experience with seamless expense tracking",
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Showcasing innovative solutions and practical applications of my technical skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4`}>
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-blue-600 mr-2 mt-1">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-800">Impact:</strong> {project.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

