import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 shadow-md border-b border-yellow-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div className="flex items-center justify-center space-x-8">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold text-black hover:text-gray-800 transition-colors duration-200"
            >
              KhojIndia
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6">
              <Link
                to="/places"
                className="text-black hover:text-gray-800 font-medium transition-colors duration-200"
              >
                Places
              </Link>
              <Link
                to="/search"
                className="text-black hover:text-gray-800 font-medium transition-colors duration-200"
              >
                Search
              </Link>
              <Link
                to="/leaderboard"
                className="text-black hover:text-gray-800 font-medium transition-colors duration-200"
              >
                Leaderboard
              </Link>
            </div>

            {/* User Section */}
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Link
                    to="/contribute"
                    className="hidden sm:block text-black font-medium hover:text-gray-800 transition-colors duration-200"
                  >
                    Contribute
                  </Link>
                  <span className="hidden sm:block text-black font-medium">
                    Hi, {user.username}
                  </span>
                  <button
                    onClick={logout}
                    className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-full font-medium transition-colors duration-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-black hover:text-gray-800 font-medium transition-colors duration-200"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="text-black hover:text-gray-800 font-medium transition-colors duration-200"
                  >
                    Signup
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden pb-4">
          <div className="flex flex-wrap justify-center space-x-6">
            <Link
              to="/places"
              className="text-black hover:text-gray-800 font-medium transition-colors duration-200"
            >
              Places
            </Link>
            <Link
              to="/search"
              className="text-black hover:text-gray-800 font-medium transition-colors duration-200"
            >
              Search
            </Link>
            <Link
              to="/leaderboard"
              className="text-black hover:text-gray-800 font-medium transition-colors duration-200"
            >
              Leaderboard
            </Link>
            {user && (
              <Link
                to="/contribute"
                className="text-black hover:text-gray-800 font-medium transition-colors duration-200"
              >
                Contribute
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
