import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#314b6e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Let's Work Together</h2>
            <p className="text-white/80 mb-5 sm:mb-6 text-base sm:text-lg">
              Have a project in mind? Tell us your idea and we'll help you
              craft a powerful visual story.
            </p>
            <div className="flex gap-5">
              <a
                href="https://wa.me/+6287717918481"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:scale-110 transition"
                title="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a
                href="https://instagram.com/ventio.production"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:scale-110 transition"
                title="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="mailto:ventioproductions@gmail.com"
                className="text-3xl hover:scale-110 transition"
                title="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="flex items-center justify-center"
          >
            <img
              src="/images/ventiologo.png"
              alt="Ventio Media Logo"
              className="w-48 sm:w-60 opacity-90 hover:opacity-100 transition"
            />
          </motion.div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            &copy; 2026 Ventio Production. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
