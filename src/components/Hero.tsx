import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Badminton player performing a smash"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
    </div>

    {/* Court texture overlay */}
    <div className="absolute inset-0 court-texture opacity-30" />

    <div className="section-container relative z-10 pt-20">
      <div className="max-w-3xl">
        <motion.img
          src={logo}
          alt="Vanquisher Sports"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-20 sm:h-28 w-auto mb-6"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl lg:text-8xl font-display tracking-wider leading-[0.9] mb-6"
        >
          Train Fierce.
          <br />
          <span className="neon-text">Play Bold.</span>
          <br />
          <span className="neon-text">Win Relentless.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
        >
          Structured badminton coaching for kids, beginners, and tournament players.
          <br />
          Scientific training system focused on footwork, fitness, technique, and match performance.

        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#summer-camp" className="btn-primary-glow text-base">
            Join Summer Camp
          </a>
          <a href="#contact" className="btn-outline-glow text-base">
            Book Free Trial
          </a>
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex items-start justify-center p-1.5"
      >
        <div className="w-1.5 h-3 bg-primary rounded-full" />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
