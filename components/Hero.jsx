"use client";

export default function Hero() {
  const taglines = [
    "Building efficient solutions through code",
    "Transforming ideas into digital reality",
    "Passionate about creating impactful software",
    "Engineering excellence, one line at a time",
    "Building the future with intelligent code"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              👋 Hello, I'm
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Thatipamula Sagar
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-blue-100">
            Aspiring Software Engineer
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {taglines[0]}
          </p>
          
          <p className="text-lg text-blue-50 mb-10 max-w-3xl mx-auto leading-relaxed">
            I specialize in <strong>Data Structures & Algorithms</strong>, <strong>Object-Oriented Programming</strong>, 
            and building scalable web solutions with <strong>Java</strong>, <strong>MySQL</strong>, and modern web technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a 
              href="#resume" 
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all transform hover:scale-110">
              <span className="text-xl">💼</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all transform hover:scale-110">
              <span className="text-xl">🔗</span>
            </a>
            <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer"
               className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all transform hover:scale-110">
              <span className="text-xl">⚡</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

