import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(username, email, password);
      navigate("/");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Accent Bar */}
      <div className="w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-500"></div>

      {/* Header */}
      <div className="text-center py-8">
        <h1>''''</h1>
        <h1 className="text-5xl font-bold text-gray-800">
          <span className="text-orange-600">Khoj</span>
          <span className="text-green-600">India</span>
        </h1>
        <p className="text-gray-600 text-lg">Discover India's Hidden Places</p>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Grid that spans full width */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
        {/* Left Pane */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-br from-green-500 to-green-400 text-white px-16 py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 text-center w-full">
            <div className="w-24 h-24 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-6">Join Our Community!</h2>
            <p className="text-xl mb-8 text-white/90">Continue your journey of discovering India's hidden gems</p>
            <ul className="text-left text-white/90 space-y-3 text-lg max-w-sm mx-auto">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                Explore hidden destinations
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                Earn coins and ranks
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                Share your discoveries
              </li>
            </ul>
          </div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-lg"></div>
        </div>

        {/* Right Pane (Signup Form) */}
        <div className="flex flex-col justify-center items-center bg-white px-8 py-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Create Your Account</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-600 mb-1">Username</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Password</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-md transition-all"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm bg-gray-50">
        <p>© 2024 KhojIndia. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Signup;
