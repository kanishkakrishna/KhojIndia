import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import API from "../axios";

function Contribute() {
  const { user } = useAuth();
  const [form, setForm] = useState({
    localName: "",
    state: "",
    district: "",
    description: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!user) {
    //   alert("Please login first to contribute a place.");
    //   return;
    // }

    // Only perform image size validation if an image is provided
    if (form.image && form.image.size > 5 * 1024 * 1024) {
      alert("Image size exceeds 5MB limit. Please choose a smaller image.");
      return;
    }

    setLoading(true);

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      // Only append the image if it's not null (i.e., if a file was selected)
      if (key === "image" && value === null) {
        // Skip appending image if it's null (optional field)
        return;
      }
      data.append(key, value);
    });

    try {
      const res = await API.post("/contribute", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("✅ Place contributed successfully!");
      setForm({
        localName: "",
        state: "",
        district: "",
        description: "",
        image: null,
      });
      setFileInputKey(Date.now());
    } catch (err) {
      console.error("Contribution error:", err);
      alert(err.response?.data?.error || "❌ Failed to contribute place. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header with tricolor accent */}
      <div className="w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-500"></div>
      
      <div className="px-4 py-8">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <h1>''''</h1>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            <span className="text-orange-600">Khoj</span>
            <span className="text-green-600">India</span>
          </h1>
          <p className="text-gray-600 text-lg">Discover India's Hidden Places</p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Main Content - Full Screen Width Layout */}
        <div className="w-full">
          <div className="grid md:grid-cols-2 min-h-[700px] bg-white shadow-2xl overflow-hidden">
            
            {/* Left Side - Blue Decorative Section */}
            <div className="flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 text-white p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4">Share Your Discovery!</h2>
                <p className="text-lg mb-6 text-white/90">
                  Help fellow travelers discover India's hidden gems by sharing your favorite places
                </p>
                <div className="space-y-3 text-sm text-white/80">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    <span>Share hidden destinations</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    <span>Help others explore</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    <span>Build travel community</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-lg"></div>
            </div>

            {/* Right Side - Form Section */}
            <div className="flex flex-col justify-center p-8 md:p-12 bg-white">
              <div className="w-full max-w-md mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Contribute a Place</h2>
                  <p className="text-gray-600">Share a hidden gem with the community</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="localName" className="block text-sm font-medium text-gray-700 mb-2">
                      Local Name
                    </label>
                    <div className="relative">
                      <input
                        id="localName"
                        name="localName"
                        type="text"
                        placeholder="Enter the local name"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-gray-50 focus:bg-white"
                        value={form.localName}
                        onChange={handleChange}
                        required
                      />
                      <svg className="w-5 h-5 text-gray-400 absolute right-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>
                    <div className="relative">
                      <input
                        id="state"
                        name="state"
                        type="text"
                        placeholder="Enter the state"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-gray-50 focus:bg-white"
                        value={form.state}
                        onChange={handleChange}
                        required
                      />
                      <svg className="w-5 h-5 text-gray-400 absolute right-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-2">
                      District
                    </label>
                    <div className="relative">
                      <input
                        id="district"
                        name="district"
                        type="text"
                        placeholder="Enter the district"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-gray-50 focus:bg-white"
                        value={form.district}
                        onChange={handleChange}
                        required
                      />
                      <svg className="w-5 h-5 text-gray-400 absolute right-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <div className="relative">
                      <textarea
                        id="description"
                        name="description"
                        placeholder="Describe this amazing place..."
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-gray-50 focus:bg-white resize-none"
                        value={form.description}
                        onChange={handleChange}
                        required
                      />
                      <svg className="w-5 h-5 text-gray-400 absolute right-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="imageInput" className="block text-sm font-medium text-gray-700 mb-2">
                      Image (Optional)
                    </label>
                    <div className="relative">
                      <input
                        id="imageInput"
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                        key={fileInputKey}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-gray-50 focus:bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                      <svg className="w-5 h-5 text-gray-400 absolute right-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Maximum file size: 5MB</p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </div>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2024 KhojIndia. Discover India's Hidden Places.</p>
        </div>
      </div>
    </div>
  );
}

export default Contribute;