"use client";
import React, { useState } from "react";
import {
  Menu,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const apis = [
  {
    name: "Shimmering Avatars",
    url: "https://api.nexoracle.com/ephoto360/shimmering-aov-avaters?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Avengers",
    url: "https://api.nexoracle.com/ephoto360/avengers?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "American Flag 3D",
    url: "https://api.nexoracle.com/ephoto360/american-flag-3d?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Angel Wings",
    url: "https://api.nexoracle.com/ephoto360/angel-wings?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Angel Wings 2",
    url: "https://api.nexoracle.com/ephoto360/angel-wings2?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Anonymous Hacker",
    url: "https://api.nexoracle.com/ephoto360/annonymous-hacker?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Anniversary Cake",
    url: "https://api.nexoracle.com/ephoto360/anniversary-cake?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Blackpink",
    url: "https://api.nexoracle.com/ephoto360/blackpink?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Blackpink 2",
    url: "https://api.nexoracle.com/ephoto360/blackpink2?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Blackpink Neon",
    url: "https://api.nexoracle.com/ephoto360/blackpink-neon?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Birthday Cake",
    url: "https://api.nexoracle.com/ephoto360/birthday-cake?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Birthday Card",
    url: "https://api.nexoracle.com/ephoto360/birthday-card?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
  {
    name: "Born Pink",
    url: "https://api.nexoracle.com/ephoto360/born-pink?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "Black Team",
    url: "https://api.nexoracle.com/ephoto360/black-team?apikey=4aeb57e3ed0f238762&text1=&text2=",
    inputs: 2,
  },
  {
    name: "Bloody Text",
    url: "https://api.nexoracle.com/ephoto360/bloody-text1?apikey=4aeb57e3ed0f238762&text=",
    inputs: 1,
  },
];

const Dashboard = () => {
  const [selectedApi, setSelectedApi] = useState(apis[0]);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(true);

  const fetchImage = async () => {
    setError(null);
    setLoading(true);
    setImageUrl(null); // Reset the image when a new fetch starts

    try {
      let url = selectedApi.url;
      if (selectedApi.inputs === 1) {
        url = `${url}${encodeURIComponent(input1)}`;
      } else if (selectedApi.inputs === 2) {
        url = `${url.split("&text1=")[0]}&text1=${encodeURIComponent(
          input1
        )}&text2=${encodeURIComponent(input2)}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch the image.");
      }

      const blob = await response.blob();
      const imageObjectURL = URL.createObjectURL(blob);
      setImageUrl(imageObjectURL);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ width: isNavOpen ? "w-64" : "w-20" }}
        className={`relative bg-white shadow-lg transition-all duration-300 ease-in-out flex-shrink-0`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="absolute -right-3 top-4 bg-white rounded-full p-1 shadow-md z-10"
        >
          {isNavOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>

        {/* Header */}
        <div className="p-4 border-b flex items-center">
          <Menu className="mr-2" size={20} />
          {isNavOpen && (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xl font-bold"
            >
              Image Generator
            </motion.h2>
          )}
        </div>

        {/* Scrollable API List */}
        <div className="h-[calc(100vh-4rem)] overflow-y-auto">
          <ul className="space-y-1 p-2">
            {apis.map((api) => (
              <motion.li
                key={api.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`rounded-lg cursor-pointer ${
                  selectedApi.name === api.name
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                <button
                  onClick={() => {
                    setSelectedApi(api);
                    setImageUrl(null);
                    setInput1("");
                    setInput2("");
                  }}
                  className="w-full p-3 flex items-center"
                >
                  <ImageIcon
                    size={18}
                    className={
                      selectedApi.name === api.name
                        ? "text-blue-500"
                        : "text-gray-500"
                    }
                  />
                  {isNavOpen && (
                    <span className="ml-3 truncate">{api.name}</span>
                  )}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 flex items-center">
            <ImageIcon size={24} className="mr-2 text-blue-500" />
            {selectedApi.name}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                fetchImage();
              }}
              className="space-y-4"
            >
              {selectedApi.inputs >= 1 && (
                <div>
                  <label
                    htmlFor="input1"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Input 1
                  </label>
                  <input
                    type="text"
                    id="input1"
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter first input"
                    required
                  />
                </div>
              )}

              {selectedApi.inputs === 2 && (
                <div>
                  <label
                    htmlFor="input2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Input 2
                  </label>
                  <input
                    type="text"
                    id="input2"
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter second input"
                    required
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Loader2 className="w-5 h-5" />
                  </motion.div>
                ) : (
                  "Generate Image"
                )}
              </button>
            </form>

            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 p-4 bg-red-50 text-red-500 rounded-lg flex items-center"
                >
                  <AlertCircle className="mr-2" size={20} />
                  {error}
                </motion.div>
              )}

              {imageUrl && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="mt-6 flex justify-center items-center"
                >
                  <img
                    src={imageUrl}
                    alt={selectedApi.name}
                    // className="rounded-lg  w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 object-contain"
                    className="rounded-lg  w-1/2 h-1/2 object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
