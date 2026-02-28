import { motion } from "framer-motion";

const bgImage = "/images/ventioteam.jpeg";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] sm:tracking-[0.35em] text-white/60 mb-3 sm:mb-4">
              About us
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ fontFamily: "Pairfly" }}>
              V E N T I O <br /> P R O D U C T I O N
            </h2>
            <p className="text-white/80 mb-6 text-base sm:text-lg">
              Ventio is a creative production house focused on cinematic
              storytelling and visual identity. We help brands and artists
              translate ideas into imagery that moves audiences.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="rounded-2xl overflow-hidden border border-white/10"
          >
            <img
              src={bgImage}
              alt="Ventio production"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
