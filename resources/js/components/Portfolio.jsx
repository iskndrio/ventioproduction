import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const toYoutubeEmbed = (url) => {
    if (!url) return null;
    if (url.includes("youtu.be")) {
      const id = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes("watch?v=")) {
      const id = new URL(url).searchParams.get("v");
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes("/embed/")) {
      return url;
    }

    return url;
  };

  const getYoutubeVideoId = (url) => {
    if (!url) return null;

    // youtu.be/VIDEO_ID
    if (url.includes("youtu.be")) {
      return url.split("youtu.be/")[1]?.split("?")[0];
    }

    // youtube.com/watch?v=VIDEO_ID
    if (url.includes("watch?v=")) {
      try {
        return new URL(url).searchParams.get("v");
      } catch {
        return null;
      }
    }

    // youtube.com/embed/VIDEO_ID
    if (url.includes("/embed/")) {
      const match = url.match(/\/embed\/([^?&]+)/);
      return match ? match[1] : null;
    }

    return null;
  };

  const getYoutubeThumbnail = (url) => {
    const videoId = getYoutubeVideoId(url);
    if (!videoId) return null;

    // Use maxresdefault for highest quality, fallback to hqdefault if not available
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await fetch("/api/portfolios");
        const data = await response.json();
        setPortfolioItems(data);
      } catch (error) {
        console.error("Error fetching portfolios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="portfolio" className="py-24 bg-[#090f15]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Our Portfolio
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Explore our latest projects and creative works
          </p>
        </motion.div>

        {loading && (
          <div className="text-center text-white py-8">
            <FontAwesomeIcon icon={faSpinner} spin className="text-4xl" />
            <p className="mt-4">Loading portfolios...</p>
          </div>
        )}

        {!loading && portfolioItems.length === 0 && (
          <div className="text-center text-white">
            No portfolios available yet.
          </div>
        )}

        {!loading && portfolioItems.length > 0 && (
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {portfolioItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg h-64 bg-gray-800">
                  <img
                    src={
                      item.video_url && getYoutubeThumbnail(item.video_url)
                        ? getYoutubeThumbnail(item.video_url)
                        : item.image
                          ? `/storage/${item.image}`
                          : "https://via.placeholder.com/400x300"
                    }
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />

                  {item.video_url && (
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/60 transition"
                      onClick={() => setSelectedVideo(item.video_url)}
                    >
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-blue-700 text-white text-xs rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    {item.sinopsis}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 text-white text-2xl z-10 bg-black/60 w-10 h-10 rounded-full"
              >
                ✕
              </button>

              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                {selectedVideo.includes("youtube") ||
                  selectedVideo.includes("youtu.be") ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={toYoutubeEmbed(selectedVideo)}
                    title="Portfolio Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    className="absolute inset-0 w-full h-full object-contain"
                    src={selectedVideo}
                    controls
                    autoPlay
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
