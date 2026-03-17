import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faBuilding,
  faRectangleAd,
  faCamera,
  faVideo,
  faStar,
  faBullhorn,
  faLightbulb,
  faPalette,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  faFilm,
  faBuilding,
  faRectangleAd,
  faCamera,
  faVideo,
  faStar,
  faBullhorn,
  faLightbulb,
  faPalette,
  faPhotoFilm,
};

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch(() => {});
  }, []);

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
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="group p-8 border border-white/10 hover:border-white/30 transition bg-white/5"
            >
              <div className="text-3xl mb-4 text-white/90 bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={iconMap[service.icon] ?? faFilm} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block text-blue/80 hover:text-white px-8 py-3 transition-all duration-300 tracking-widest text-sm uppercase group"
          >
            Interested in our services? Let's talk
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
