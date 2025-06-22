import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Tricolor top bar */}
      <div className="w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-500" />

      {/* Logo section */}
      <div className="text-center py-6">
        <h1>''''</h1>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          <span className="text-orange-600">Khoj</span>
          <span className="text-green-600">India</span>
        </h1>
        <p className="text-gray-600 text-lg mt-2">Discover India's Hidden Places</p>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mt-2 rounded-full" />
      </div>

      {/* Full width login section */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] w-full">
          {/* Left Panel */}
          <div className="flex flex-col justify-center items-center bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400 text-white p-12 relative overflow-hidden w-full h-full">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 text-center max-w-lg">
              <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
              <p className="text-lg mb-6 text-white/90">Continue your journey of discovering India's hidden gems</p>
              <div className="space-y-3 text-sm text-white/80">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-white/60 rounded-full" />
                  <span>Explore hidden destinations</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-white/60 rounded-full" />
                  <span>Earn coins and ranks</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-white/60 rounded-full" />
                  <span>Share your discoveries</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex flex-col justify-center items-center bg-white px-6 py-12 w-full h-full">
            <div className="w-full max-w-md">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Sign In</h2>
              <p className="text-center text-gray-600 mb-6">Enter your credentials to access your account</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <svg className="w-5 h-5 text-gray-400 absolute right-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <svg className="w-5 h-5 text-gray-400 absolute right-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-xl hover:from-orange-600 hover:to-orange-700 transition duration-200 transform hover:scale-[1.02]"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm mt-8 mb-4">
        <p>© 2024 KhojIndia. Discover India's Hidden Places.</p>
      </div>
    </div>
  );
}

export default Login;
