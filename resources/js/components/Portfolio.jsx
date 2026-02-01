import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const portfolioItems = [
    {
      id: 1,
      title: "USAI Film",
      category: "Video",
      sinopsis: "Professional corporate video for multinational company",
      image: "https://via.placeholder.com/400x300?text=Corporate+Video",
      thumbnail: "s/thumbnails/usai.jpg", // place your manual thumbnail in public/thumbnails/usai.jpg
      videoUrl: "https://www.youtube.com/embed/lTY3ZnFc48c",
    },
  ];

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
    <section id="portfolio" className="py-24" style={{ backgroundColor: "#090f15" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Our Portfolio</h2>
          <p
            className="text-white max-w-2xl mx-auto opacity-90"
            style={{ fontFamily: "Poppins" }}
          >
            Explore our latest projects and creative works across various categories
          </p>
        </motion.div>

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
              <div className="relative overflow-hidden rounded-lg h-64 bg-gray-300">
                {item.videoUrl ? (
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300 cursor-pointer"
                      onClick={() => setSelectedVideo(item.videoUrl)}
                    >
                      <motion.div
                        className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg
                          className="w-8 h-8 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </motion.div>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex items-center justify-center">
                      <motion.div
                        className="text-center text-white opacity-0 group-hover:opacity-100 transition duration-300"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                      >
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p
                          className="text-sm"
                          style={{ fontFamily: "Poppins" }}
                        >
                          {item.category}
                        </p>
                      </motion.div>
                    </div>
                  </>
                )}
              </div>
              <div className="mt-4">
                <span
                  className="inline-block px-3 py-1 bg-blue-800 text-white text-xs font-semibold rounded-full mb-2"
                  style={{ fontFamily: "Poppins" }}
                >
                  {item.category}
                </span>
                <h3
                  className="text-lg font-semibold text-white mb-2"
                  style={{ fontFamily: "Poppins" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-gray-300 text-sm"
                  style={{ fontFamily: "Poppins" }}
                >
                  {item.sinopsis}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 text-white text-2xl z-10 bg-black bg-opacity-50 w-10 h-10 flex items-center justify-center rounded-full hover:bg-opacity-80"
              >
                ✕
              </button>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={selectedVideo + "?autoplay=1"}
                  title="Portfolio Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
