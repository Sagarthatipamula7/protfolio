export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              I'm an <strong className="text-blue-600">Aspiring Software Engineer</strong> with a strong foundation in 
              <strong className="text-purple-600"> Data Structures, Algorithms, and Object-Oriented Programming</strong>. 
              Currently pursuing my B.Tech in Computer Science and Engineering (Data Science) with an outstanding CGPA of 9.26.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My passion lies in building <strong className="text-cyan-600">efficient, scalable solutions</strong> that solve 
              real-world problems. I'm skilled in <strong>Java, SQL, HTML5, and CSS3</strong>, and I've gained hands-on 
              experience through academic projects and a web development internship at SystemTron Edutech.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800 mb-2">Problem Solver</h3>
                <p className="text-sm text-gray-600">Strong analytical thinking and problem-solving abilities</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-cyan-50 rounded-xl">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="font-semibold text-gray-800 mb-2">Quick Learner</h3>
                <p className="text-sm text-gray-600">Continuously adapting and learning new technologies</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                <div className="text-3xl mb-2">👥</div>
                <h3 className="font-semibold text-gray-800 mb-2">Team Player</h3>
                <p className="text-sm text-gray-600">Excellent collaboration and communication skills</p>
              </div>
            </div>
          </div>

          {/* Key Strengths */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Core Competencies</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span>
                  Data Structures & Algorithms
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span>
                  Object-Oriented Programming
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span>
                  Web Development (Frontend)
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span>
                  Database Management (MySQL)
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Soft Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="text-purple-600 mr-2">✓</span>
                  Problem Analysis & Planning
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-purple-600 mr-2">✓</span>
                  Adaptable & Flexible
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-purple-600 mr-2">✓</span>
                  Strong Communication
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-purple-600 mr-2">✓</span>
                  Team Collaboration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

