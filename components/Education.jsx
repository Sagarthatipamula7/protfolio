export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      specialization: "Data Science",
      institution: "Marri Laxman Reddy Institute of Technology and Management",
      duration: "2022 – 2026",
      status: "Ongoing",
      grade: "CGPA: 9.26",
      icon: "🎓",
      color: "from-blue-600 to-cyan-600"
    },
    {
      degree: "Intermediate",
      specialization: "",
      institution: "Resonance Junior College",
      duration: "July 2020 – June 2022",
      status: "Completed",
      grade: "Percentage: 98.6%",
      icon: "📚",
      color: "from-purple-600 to-pink-600"
    },
    {
      degree: "SSC (Secondary School Certificate)",
      specialization: "",
      institution: "AVS High School",
      duration: "June 2019 – March 2020",
      status: "Completed",
      grade: "CGPA: 10.0",
      icon: "🏆",
      color: "from-green-600 to-emerald-600"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Academic journey and achievements in computer science and engineering
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 relative"
            >
              <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>
              
              <div className="p-8">
                <div className="text-5xl mb-4">{edu.icon}</div>
                
                <div className="mb-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${edu.color} text-white text-xs font-semibold rounded-full`}>
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                
                {edu.specialization && (
                  <p className="text-blue-600 font-semibold mb-2">{edu.specialization}</p>
                )}
                
                <p className="text-gray-600 mb-4 font-medium">{edu.institution}</p>
                
                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-800">Duration:</strong> {edu.duration}
                  </p>
                  <p className="text-lg font-bold text-gray-800">
                    {edu.grade}
                  </p>
                </div>
              </div>

              {index === 0 && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full">
                    Current
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Academic Highlights */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Academic Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">9.26</div>
              <div className="text-gray-700">Current CGPA</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">98.6%</div>
              <div className="text-gray-700">Intermediate Score</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">10.0</div>
              <div className="text-gray-700">SSC CGPA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

