import { useState } from "react";
import { Search, MapPin, Award, Eye, Heart } from "lucide-react";
import API from "../axios";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    if (!query) return;

    setIsLoading(true);

    try {
      const res = await API.get(`/search?query=${query}`);
      setResults(res.data);
    } catch (err) {
      console.error("Search failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 w-full">
      {/* Header with Indian Flag Colors */}
      <div className="bg-gradient-to-r from-orange-500 via-white to-green-600 h-2 w-full"></div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-100 to-green-100 py-16 w-full">
        <div className="absolute inset-0 bg-white/60 w-full"></div>
        <div className="relative w-full px-6 md:px-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            <span className="text-orange-600">Khoj</span>
            <span className="text-gray-700">India</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-5xl mx-auto">
            Discover India's hidden gems, secret places, and untold stories. 
            Explore the incredible diversity of our beautiful nation.
          </p>

          {/* Search Form */}
          <div className="w-full max-w-5xl mx-auto px-4 md:px-0">
            <div className="relative flex items-center bg-white rounded-full shadow-xl border-2 border-orange-200 focus-within:border-orange-400 transition-colors">
              <Search className="absolute left-6 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, district or state..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                className="flex-1 px-14 py-4 text-lg rounded-full focus:outline-none placeholder-gray-400"
              />
              <button
                onClick={handleSearch}
                disabled={isLoading}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Searching..." : "Explore"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="w-full px-6 md:px-20 py-12">
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
            <p className="mt-4 text-gray-600">Discovering hidden places...</p>
          </div>
        )}

        {results.length > 0 && !isLoading && (
          <>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Hidden Treasures Found
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((place) => (
                <div key={place._id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                  {place.mediaUrl && (
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={place.mediaUrl}
                        alt={`Hidden gem: ${place.localName}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                          <Award className="w-4 h-4 text-orange-500" />
                          <span className="text-sm font-semibold text-gray-700">{place.coins || 0}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                      {place.localName}
                    </h3>

                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-1 text-green-600" />
                      <span className="text-sm font-medium">
                        {place.district}, {place.state}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {place.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{place.views || 0}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{place.likes || 0}</span>
                        </div>
                      </div>
                      <button className="text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors">
                        Explore →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {results.length === 0 && query && !isLoading && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No hidden places found</h3>
            <p className="text-gray-500">Try searching with different keywords or explore all places</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 mt-16 w-full">
        <div className="w-full px-6 md:px-20 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-orange-400">Khoj</span>
            <span className="text-2xl font-bold text-white">India</span>
          </div>
          <p className="text-gray-300">
            Discovering India's hidden treasures, one place at a time
          </p>
        </div>
      </footer>
    </div>
  );
}

export default SearchPage;
