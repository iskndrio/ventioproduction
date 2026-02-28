import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const bgVidio = "/vidio/heros-video.mp4";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  const words = ["ideas", "imaginations", "vision", "dreams"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 sm:pt-24 relative overflow-hidden">
      <video
        src={bgVidio}
        alt="Ventio production background"
        className="hidden md:block absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-black from-black/85 via-black/80 to-black/95"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center">
        <motion.p
          {...fadeUp(0.1)}
          className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-white/60 mb-4"
        >
          Creative Production House
        </motion.p>
        <motion.h1
          {...fadeUp(0.25)}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          We turns{" "}
          <span
            className="inline-block transition-opacity duration-500"
            style={{ opacity: fade ? 1 : 0, color: "#b7dad7" }}
          >
            {words[currentWordIndex]}
          </span>{" "}
          into Impactful Visual Story.
        </motion.h1>
        <motion.p
          {...fadeUp(0.4)}
          className="text-base sm:text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto"
        >
          Ventio crafts visual narratives with quiet pressure and bold
          impact — slow, soft, unforgettable.
        </motion.p>
        <motion.div
          {...fadeUp(0.55)}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            className="px-7 py-3 font-semibold rounded-full inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            initial={{ backgroundColor: "#ffffff", color: "#000000" }}
            whileHover={{ backgroundColor: "#000000", color: "#ffffff" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Start a Project
          </motion.a>
          <a
            href="#portfolio"
            className="border border-white/70 text-white px-7 py-3 font-semibold rounded-full hover:bg-white/10 transition inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
