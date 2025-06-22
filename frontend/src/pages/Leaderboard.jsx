import { useEffect, useState } from "react";
import axios from "axios";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:9000";
        const res = await axios.get(`${API_BASE_URL}/api/leaderboard`);

        if (res.data && Array.isArray(res.data.leaderboard)) {
          setLeaders(res.data.leaderboard);
        } else {
          setError("Invalid leaderboard data received.");
        }
      } catch (err) {
        console.error("Failed to fetch leaderboard", err);
        setError("Failed to load leaderboard. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const getRankBadge = (rank) => {
    switch (rank) {
      case 1: return "🥇";
      case 2: return "🥈";
      case 3: return "🥉";
      default: return "🏅";
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1: return "from-yellow-400 to-yellow-600";
      case 2: return "from-gray-300 to-gray-500";
      case 3: return "from-orange-400 to-orange-600";
      default: return "from-blue-400 to-blue-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 py-12">
      <div className="w-full px-4 xl:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2>""""</h2>
          <h1 className="text-5xl font-bold mb-4 text-orange-600">🏆 Leaderboard</h1>
          <p className="text-xl text-gray-600">
            Celebrating our top contributors who are helping discover the hidden gems of India!
          </p>
        </div>

        {/* Grid Layout Full Width */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {/* Side Left Column */}
          <div className="space-y-6">
            {/* Contribute Card */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 shadow-xl hover:scale-105 transition">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-bold mb-3">Contribute More!</h3>
              <p className="text-orange-100 text-sm mb-4">
                Add more places to climb up the leaderboard and earn exclusive badges!
              </p>
              <div className="bg-white/20 rounded-lg p-3">
                <div className="text-xs font-semibold mb-1">Quick Tips:</div>
                <div className="text-xs">• Add unique places</div>
                <div className="text-xs">• Upload quality photos</div>
                <div className="text-xs">• Write detailed descriptions</div>
              </div>
            </div>

            {/* Rewards */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-xl hover:scale-105 transition">
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="text-xl font-bold mb-3">Unlock Rewards</h3>
              <p className="text-green-100 text-sm mb-4">
                Reach milestones to unlock special titles and exclusive features!
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-yellow-400">🥇</span>
                  <span>100+ coins: Legend Status</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-gray-300">🥈</span>
                  <span>50+ coins: Explorer Badge</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-orange-400">🥉</span>
                  <span>25+ coins: Contributor Title</span>
                </div>
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-xl hover:scale-105 transition">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Community Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Contributors</span>
                  <span className="font-bold text-blue-600">{leaders.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Coins Earned</span>
                  <span className="font-bold text-orange-600">
                    {leaders.reduce((sum, user) => sum + user.coins, 0)} 🪙
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Active This Month</span>
                  <span className="font-bold text-green-600">{Math.floor(leaders.length * 0.7)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Leaderboard Card */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-200 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-green-600 p-6 text-white text-center font-bold text-2xl">
                🌟 Top Contributors
              </div>

              {isLoading ? (
                <div className="p-12 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
                  <p className="text-gray-500 text-lg">Loading amazing contributors...</p>
                </div>
              ) : error ? (
                <div className="p-12 text-center">
                  <div className="text-6xl mb-4">😔</div>
                  <p className="text-red-600 text-lg font-medium">{error}</p>
                </div>
              ) : (
                <div className="p-6">
                  {leaders.map((user, index) => (
                    <div
                      key={user._id}
                      className={`flex items-center justify-between p-4 mb-3 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                        index < 3
                          ? `bg-gradient-to-r ${getRankColor(index + 1)} text-white shadow-lg`
                          : "bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`text-3xl ${index < 3 ? "animate-bounce" : ""}`}>
                          {getRankBadge(index + 1)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`text-xl font-bold ${index >= 3 ? "text-gray-700" : ""}`}>
                              #{index + 1}
                            </span>
                            <span className={`text-lg font-semibold ${index >= 3 ? "text-gray-800" : ""}`}>
                              {user.username}
                            </span>
                          </div>
                          {index < 3 && (
                            <div className="text-sm opacity-90">
                              {index === 0 && "🎉 Champion Explorer"}
                              {index === 1 && "🌟 Adventure Master"}
                              {index === 2 && "🚀 Discovery Expert"}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-right text-2xl font-bold flex items-center gap-2">
                        {user.coins} <span className="text-yellow-500">🪙</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-orange-600 to-green-600 text-white rounded-2xl p-8 shadow-xl w-full">
            <h3 className="text-2xl font-bold mb-4">🌟 Ready to Join the Rankings?</h3>
            <p className="text-lg text-orange-100 mb-6">
              Start contributing amazing places and see your name on this leaderboard!
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-50 transition transform hover:scale-105 shadow-lg">
              🏛️ Start Contributing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
