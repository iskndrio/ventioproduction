import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faBuilding,
  faRectangleAd,
  faCamera,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faFilm,
    title: "Movie Production",
    description: "Narrative-driven short films with cinematic pacing.",
  },
  {
    icon: faBuilding,
    title: "Company Profile",
    description: "Brand storytelling that builds trust and authority.",
  },
  {
    icon: faRectangleAd,
    title: "Advertising Video",
    description: "Ads tailored for social platforms and digital campaigns.",
  },
  {
    icon: faVideo,
    title: "Campaign Strategy",
    description: "Pre-production planning that keeps shoots efficient.",
  },
  {
    icon: faCamera,
    title: "Videografi Profesional",
    description: "Editorial-quality photos for products, events, and brands.",
  },
  {
    icon: faFilm,
    title: "Creative Direction",
    description: "Visual concepts, art direction, and cohesive storytelling.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-[#0b121a]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] sm:tracking-[0.35em] text-white/60 mb-3 sm:mb-4">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "Pair" }}>What We Do</h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-3 sm:mt-4 text-base sm:text-lg">
            End-to-end production tailored for brands, films, and digital
            experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="group p-8 border border-white/10 hover:border-white/30 transition bg-white/5 rounded-2xl"
            >
              <div className="text-3xl mb-4 text-white/90 bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
