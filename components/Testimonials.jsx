export default function Testimonials() {
  const testimonials = [
    {
      quote: "Sagar demonstrates exceptional problem-solving skills and a strong grasp of software engineering fundamentals. His dedication to learning and implementing efficient solutions makes him a valuable team member.",
      author: "SystemTron Edutech",
      role: "Web Development Internship Supervisor",
      icon: "💼"
    },
    {
      quote: "A quick learner with excellent analytical thinking. Sagar's academic excellence and hands-on project experience showcase his potential as a future software engineer.",
      author: "Academic Reference",
      role: "Faculty Member",
      icon: "🎓"
    },
    {
      quote: "Impressive technical skills combined with strong communication abilities. Sagar's projects demonstrate creativity and practical application of computer science concepts.",
      author: "Peer Review",
      role: "Team Collaboration",
      icon: "👥"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">What People Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Testimonials and feedback from colleagues, supervisors, and academic references
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{testimonial.icon}</div>
              <div className="text-yellow-400 mb-4">
                {"⭐⭐⭐⭐⭐".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="pt-6 border-t border-gray-200">
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

