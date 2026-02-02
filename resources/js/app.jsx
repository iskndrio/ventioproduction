import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faBuilding,
  faRectangleAd,
  faCamera,
  faVideo,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
const bgImage = "/images/btsfotopin.jpg";
const bgVidio = "/vidio/heros-video.mp4";

export default function App() {
  return (
    <div className="text-gray-100 bg-[#090f15]">
      <Navbar />

      <section id="home" className="min-h-screen flex items-center pt-24 relative overflow-hidden">
        <video
          src={bgVidio}
          alt="Ventio production background"
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-black from-black/80 via-black/70 to-black/90"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/60 mb-4">
                Creative Production House
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Cinematic stories that move, breathe, and linger.
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10">
                Ventio crafts visual narratives with quiet pressure and bold
                impact—slow, soft, unforgettable.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-white text-black px-7 py-3 font-semibold rounded-full hover:scale-105 transition inline-flex items-center gap-2"
                >
                  Start a Project
                </a>
                <a
                  href="#portfolio"
                  className="border border-white/70 text-white px-7 py-3 font-semibold rounded-full hover:bg-white/10 transition inline-flex items-center gap-2"
                >
                  View Portfolio
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
                <h3 className="text-xl font-semibold mb-4">What clients get</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white"></span>
                    End-to-end creative direction and production
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white"></span>
                    Cinematic visuals tailored to your brand
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white"></span>
                    Fast turnaround with premium quality
                  </li>
                </ul>
                {/* <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">25+</div>
                    <div className="text-xs text-white/60">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">8</div>
                    <div className="text-xs text-white/60">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">14</div>
                    <div className="text-xs text-white/60">Awards</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/60 mb-4">
                About us
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Pairdlay" }}>
                V E N T I O . M E D I A
              </h2>
              <p className="text-white/80 mb-6">
                Ventio is a creative production house focused on cinematic
                storytelling and visual identity. We help brands and artists
                translate ideas into imagery that moves audiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold">360°</div>
                  <div className="text-xs text-white/60">Full production</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold">4K</div>
                  <div className="text-xs text-white/60">Cinematic delivery</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-xs text-white/60">Industries</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold">48h</div>
                  <div className="text-xs text-white/60">First cut</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={bgImage}
                alt="Ventio production"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 relative">
        <div className="absolute inset-0 bg-[#0b121a]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60 mb-4">
              Services
            </p>
            <h2 className="text-4xl font-bold">Creative Services</h2>
            <p className="text-white/70 max-w-2xl mx-auto mt-4">
              End-to-end production tailored for brands, films, and digital
              experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group p-8 border border-white/10 hover:border-white/30 transition bg-white/5 rounded-2xl">
              <div className="text-3xl mb-4 text-white/90 bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faFilm} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Short Movie</h3>
              <p className="text-white/70">
                Narrative-driven short films with cinematic pacing.
              </p>
            </div>

            <div className="group p-8 border border-white/10 hover:border-white/30 transition bg-white/5 rounded-2xl">
              <div className="text-3xl mb-4 text-white/90 bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Company Profile</h3>
              <p className="text-white/70">
                Brand storytelling that builds trust and authority.
              </p>
            </div>

            <div className="group p-8 border border-white/10 hover:border-white/30 transition bg-white/5 rounded-2xl">
              <div className="text-3xl mb-4 text-white/90 bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faRectangleAd} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Iklan</h3>
              <p className="text-white/70">
                Ads tailored for social platforms and digital campaigns.
              </p>
            </div>

            <div className="group p-8 border border-white/10 hover:border-white/30 transition bg-white/5 rounded-2xl">
              <div className="text-3xl mb-4 text-white/90 bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faVideo} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Storyboard & Shotlist
              </h3>
              <p className="text-white/70">
                Pre-production planning that keeps shoots efficient.
              </p>
            </div>

            <div className="group p-8 border border-white/10 hover:border-white/30 transition bg-white/5 rounded-2xl">
              <div className="text-3xl mb-4 text-white/90 bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCamera} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Fotografi Profesional
              </h3>
              <p className="text-white/70">
                Editorial-quality photos for products, events, and brands.
              </p>
            </div>

            <div className="group p-8 border border-white/10 hover:border-white/30 transition bg-white/5 rounded-2xl">
              <div className="text-3xl mb-4 text-white/90 bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faFilm} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Creative Direction</h3>
              <p className="text-white/70">
                Visual concepts, art direction, and cohesive storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Portfolio />
      <section id="contact" className="py-24 bg-[#314b6e]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>
              <p className="text-white/80 mb-6">
                Have a project in mind? Tell us your idea and we’ll help you
                craft a powerful visual story.
              </p>
              <div className="flex gap-5">
                <a
                  href="https://wa.me/"
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
                  href="mailto:your-email@example.com"
                  className="text-3xl hover:scale-110 transition"
                  title="Email"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold">Timeline</div>
                  <div className="text-white/60">2–4 weeks</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold">Budget</div>
                  <div className="text-white/60">Flexible</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold">Location</div>
                  <div className="text-white/60">Indonesia</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold">Delivery</div>
                  <div className="text-white/60">4K / Social</div>
                </div>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-block w-full text-center bg-white text-black px-6 py-3 font-semibold rounded-full hover:scale-105 transition"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
