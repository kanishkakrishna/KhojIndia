import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      {/* Hero Section */}
      <div className="pt-20 pb-16 flex justify-center">
        {/* 👇 WRAPPED WITH A FLEX CENTERING DIV */}
        <div className="max-w-full w-full px-4 text-center">
          {/* Main Hero */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-12 mb-16 border-l-8 border-orange-500">
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-orange-600">Khoj</span>
              <span className="text-white bg-blue-600 px-4 py-2 rounded-lg mx-2">India</span>
              <span className="text-green-700">🇮🇳</span>
            </h1>
            <p className="text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover the hidden gems of <span className="font-bold text-orange-600">Incredible India</span>! 
              Explore unexplored cities, contribute places, and earn coins while building the ultimate Indian travel community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/places" 
                className="bg-grey-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🏛️ Explore Places
              </Link>
              <Link 
                to="/contribute" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                ➕ Contribute & Earn
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Feature 1 - Contribute */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🪙</div>
              <h3 className="text-2xl font-bold mb-4">Earn Coins</h3>
              <p className="text-orange-100 leading-relaxed">
                Contribute new places, hidden gems, and local attractions to earn valuable coins. 
                Every verified contribution rewards you!
              </p>
              <div className="mt-6 bg-white/20 rounded-lg p-3">
                <div className="text-sm font-semibold">Rewards:</div>
                <div className="text-xs">🥇 Add Places which are not even on Map</div>
                <div className="text-xs">📸 Upload Photos and Videos</div>
              </div>
            </div>

            {/* Feature 2 - Leaderboard */}
            <div className="bg-white border-4 border-blue-500 rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Leaderboard Glory</h3>
              <p className="text-gray-700 leading-relaxed">
                Compete with fellow explorers! Top contributors get featured on our leaderboard 
                and unlock exclusive badges.
              </p>
              <div className="mt-6 bg-blue-50 rounded-lg p-3">
                <div className="text-sm font-semibold text-blue-700">Current Leaders:</div>
                <div className="text-xs text-blue-600">🥇 Travel Guru</div>
                <div className="text-xs text-blue-600">🥈 Explorer Pro</div>
                <div className="text-xs text-blue-600">🥉 Adventure Seeker</div>
              </div>
            </div>

            {/* Feature 3 - Discover */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold mb-4">Unexplored Cities</h3>
              <p className="text-green-100 leading-relaxed">
                Find hidden treasures in every corner of India. From remote hill stations 
                to forgotten historical sites.
              </p>
              <div className="mt-6 bg-white/20 rounded-lg p-3">
                <div className="text-sm font-semibold">Featured Regions:</div>
                <div className="text-xs">🏔️ Hidden Himalayas</div>
                <div className="text-xs">🏝️ Secret Coastal Gems</div>
                <div className="text-xs">🏛️ Forgotten Forts</div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">KhojIndia by Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">2,450+</div>
                <div className="text-gray-700 font-semibold">Places Discovered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">850+</div>
                <div className="text-gray-700 font-semibold">Active Explorers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">28</div>
                <div className="text-gray-700 font-semibold">States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600">95,000+</div>
                <div className="text-gray-700 font-semibold">Coins Earned</div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border-t-8 border-orange-500">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">How KhojIndia Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1️⃣</span>
                </div>
                <h3 className="text-xl font-bold text-orange-600 mb-3">Explore & Discover</h3>
                <p className="text-gray-600">Search through our database of incredible Indian destinations or discover new ones through our community.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2️⃣</span>
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Contribute Places</h3>
                <p className="text-gray-600">Found a hidden gem? Add it to our platform with photos, descriptions, and earn coins for every verified contribution.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3️⃣</span>
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-3">Climb the Leaderboard</h3>
                <p className="text-gray-600">Compete with fellow travelers, unlock badges, and become a top contributor in the KhojIndia community.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-600 to-green-600 text-white rounded-2xl p-12 shadow-xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Explore Incredible India?</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join thousands of explorers discovering the real India, one hidden gem at a time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/leaderboard" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                🏆 View Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
            