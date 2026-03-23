import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Target, Users, Trophy, TrendingUp } from "lucide-react";

const pillars = [
  { icon: Target, title: "Structured Coaching", desc: "Systematic training plans aligned with BAI standards for every level." },
  { icon: Users, title: "Expert Mentors", desc: "Coaches with national and international tournament experience." },
  { icon: Trophy, title: "Competitive Edge", desc: "Regular tournament exposure at district, state & national level." },
  { icon: TrendingUp, title: "Athlete Development", desc: "Physical conditioning, mental toughness, and strategic game sense." },
];

const About = () => (
  <section id="about" className="section-padding court-texture">
    <div className="section-container">
      <SectionHeading
        accent="Who We Are"
        title="ABOUT VANQUISHER"
        subtitle="Founded with a mission to nurture India's next badminton champions, Vanquisher Sports transforms passionate beginners into competitive athletes through world-class coaching methodology."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card gradient-border p-6 md:p-8 group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
              <p.icon size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
