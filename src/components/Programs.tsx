import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Zap, Star, Flame, Sun, ArrowUpRight } from "lucide-react";

const programs = [
  {
    icon: Star,
    title: "Beginner Program",
    age: "Ages 6–12",
    desc: "Foundation building with grip techniques, basic strokes, footwork fundamentals, and court awareness.",
    benefits: ["Proper grip & stance", "Basic rallying skills", "Fun-based learning"],
  },
  {
    icon: Zap,
    title: "Intermediate Program",
    age: "Ages 10–16",
    desc: "Advanced stroke play, match strategy, and competitive readiness for district-level tournaments.",
    benefits: ["Net play mastery", "Match tactics", "Tournament preparation"],
  },
  {
    icon: Flame,
    title: "High Performance",
    age: "Ages 13–21",
    desc: "Intensive training for state and national level athletes with video analysis and sports science support.",
    benefits: ["Video analysis", "Strength & conditioning", "Mental coaching"],
  },
  {
    icon: Sun,
    title: "Summer Camp",
    age: "Ages 6–16",
    desc: "Intensive 4-week program starting April 1st. Limited seats available — daily 3-hour sessions.",
    benefits: ["Daily intensive training", "Mini tournament", "Certificate & medals"],
    highlight: true,
  },
  {
    icon: ArrowUpRight,
    title: "Upskilling Program",
    age: "All Ages",
    desc: "Targeted skill improvement for players who want to elevate specific areas of their game.",
    benefits: ["Personalized drills", "Weak area focus", "Flexible scheduling"],
  },
];

const Programs = () => (
  <section id="programs" className="section-padding bg-secondary/30 court-texture">
    <div className="section-container">
      <SectionHeading
        accent="What We Offer"
        title="TRAINING PROGRAMS"
        subtitle="Structured programs for every stage of your badminton journey — from first racket to national podium."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`glass-card p-6 md:p-8 flex flex-col group transition-all duration-300 hover:border-primary/30 ${
              p.highlight ? "neon-border border-primary/40 relative overflow-hidden" : ""
            }`}
          >
            {p.highlight && (
              <div className="absolute top-3 right-3 text-[10px] font-bold tracking-widest uppercase bg-primary text-primary-foreground px-3 py-1 rounded-full">
                Starting April 1st
              </div>
            )}
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <p.icon size={22} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-1 font-sans">{p.title}</h3>
            <span className="text-xs font-medium text-primary mb-3">{p.age}</span>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-grow">{p.desc}</p>
            <ul className="space-y-1.5 mb-6">
              {p.benefits.map((b) => (
                <li key={b} className="text-xs text-muted-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi, I'd like to enquire about the ${p.title} at Vanquisher Sports.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-glow text-sm text-center !py-2"
            >
              Enquire Now
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Programs;
