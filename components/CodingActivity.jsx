export default function CodingActivity() {
  const leetcodeStats = {
    username: "thatipamulasagar7",
    rank: "#179360",
    totalSolved: 200,
    easy: { solved: 118, total: 918 },
    medium: { solved: 70, total: 1978 },
    hard: { solved: 4, total: 896 }
  };

  const platforms = [
    {
      name: "HackerRank",
      icon: "H",
      iconColor: "text-cyan-400",
      url: "https://www.hackerrank.com/profile/thatipamulasaga3"
    },
    {
      name: "GeeksforGeeks",
      icon: "🧠",
      iconColor: "text-blue-400",
      url: "https://www.geeksforgeeks.org/profile/thatipamua9yo?tab=overview"
    }
  ];

  const easyPercentage = (leetcodeStats.easy.solved / leetcodeStats.easy.total) * 100;
  const mediumPercentage = (leetcodeStats.medium.solved / leetcodeStats.medium.total) * 100;
  const hardPercentage = (leetcodeStats.hard.solved / leetcodeStats.hard.total) * 100;
  const overallPercentage = (leetcodeStats.totalSolved / (leetcodeStats.easy.total + leetcodeStats.medium.total + leetcodeStats.hard.total)) * 100;

  return (
    <section id="coding-activity" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Coding Activity</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A snapshot of my recent problem-solving and where else you can find me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* LeetCode Stats Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {/* User Info */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">&lt;</span>
                </div>
                <span className="text-gray-800 font-semibold text-lg">{leetcodeStats.username}</span>
              </div>
              <span className="text-gray-500 text-sm">{leetcodeStats.rank}</span>
            </div>

            {/* Overall Progress Circle */}
            <div className="flex items-center gap-8 mb-8">
              <div className="relative w-32 h-32">
                <svg className="transform -rotate-90 w-32 h-32">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#e5e7eb"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#f97316"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - overallPercentage / 100)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-800">{leetcodeStats.totalSolved}+</span>
                </div>
              </div>

              {/* Difficulty Breakdown */}
              <div className="flex-1 space-y-4">
                {/* Easy */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-800 font-medium">Easy</span>
                    <span className="text-gray-600 text-sm">
                      {leetcodeStats.easy.solved} / {leetcodeStats.easy.total}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-green-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${easyPercentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Medium */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-800 font-medium">Medium</span>
                    <span className="text-gray-600 text-sm">
                      {leetcodeStats.medium.solved} / {leetcodeStats.medium.total}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-orange-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${mediumPercentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Hard */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-800 font-medium">Hard</span>
                    <span className="text-gray-600 text-sm">
                      {leetcodeStats.hard.solved} / {leetcodeStats.hard.total}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-red-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${hardPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* LeetCode Link */}
            <a
              href="https://leetcode.com/u/thatipamulasagar7/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105"
            >
              View on LeetCode →
            </a>
          </div>

          {/* Other Platforms */}
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-6">Other Platforms</h3>
            <div className="space-y-4">
              {platforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all transform hover:scale-105 group"
                >
                  <div className={`w-12 h-12 flex items-center justify-center text-2xl font-bold ${platform.iconColor} bg-slate-600 rounded-lg group-hover:bg-slate-500 transition-colors`}>
                    {platform.icon}
                  </div>
                  <span className="text-lg font-medium">{platform.name}</span>
                  <span className="ml-auto text-gray-400 group-hover:text-white transition-colors">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

