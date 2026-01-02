export default function Certifications() {
  const certifications = [
    {
      name: "Data Structures and Algorithms",
      issuer: "Smart Interviews",
      icon: "📊",
      color: "from-blue-600 to-cyan-600",
      description: "Comprehensive certification covering core DSA concepts and problem-solving techniques"
    },
    {
      name: "Java Certification",
      issuer: "HackerRank",
      icon: "☕",
      color: "from-orange-600 to-red-600",
      description: "Verified Java programming skills and object-oriented programming expertise"
    },
    {
      name: "MySQL Certification",
      issuer: "HackerRank",
      icon: "🗄️",
      color: "from-blue-500 to-indigo-600",
      description: "Database management and SQL query optimization certification"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Certifications & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Verified skills and professional certifications from recognized platforms
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-10 rounded-full -mr-16 -mt-16`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4">{cert.icon}</div>
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${cert.color} text-white text-xs font-semibold rounded-full mb-4`}>
                  {cert.issuer}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">✓</span>
                    <span>Verified Certification</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievements Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-cyan-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Additional Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🎯</span>
                <h4 className="font-semibold text-gray-800">Outstanding Academic Performance</h4>
              </div>
              <p className="text-gray-600 text-sm">Maintaining exceptional academic record with CGPA of 9.26</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">💼</span>
                <h4 className="font-semibold text-gray-800">Industry Experience</h4>
              </div>
              <p className="text-gray-600 text-sm">Successfully completed web development internship at SystemTron Edutech</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

