import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useEffect, useRef, useState } from "react";

const champions = [
  { name: "Aditi Sushanth", tournament: "State Sub-Junior Championship 2024", medal: "Gold" as const, age: "U-13" },
  { name: "Priya Sharma", tournament: "National Junior Open 2024", medal: "Silver" as const, age: "U-17" },
  { name: "Rohan Iyer", tournament: "All India Inter-District 2023", medal: "Gold" as const, age: "U-15" },
  { name: "Sneha Patil", tournament: "State Senior Championship 2024", medal: "Bronze" as const, age: "U-19" },
  { name: "Vikram Reddy", tournament: "National Sub-Junior Championship 2024", medal: "Gold" as const, age: "U-13" },
  { name: "Ananya Das", tournament: "South Zone Inter-State 2023", medal: "Silver" as const, age: "U-15" },
  { name: "Karthik Nair", tournament: "State Junior Championship 2024", medal: "Gold" as const, age: "U-17" },
  { name: "Meera Krishnan", tournament: "All India Ranking Tournament 2024", medal: "Bronze" as const, age: "U-19" },
];

const medalClass: Record<string, string> = {
  Gold: "medal-gold",
  Silver: "medal-silver",
  Bronze: "medal-bronze",
};

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 500, suffix: "+", label: "Students Trained" },
  { value: 85, suffix: "+", label: "Medals Won" },
  { value: 12, suffix: "", label: "National Players" },
  { value: 8, suffix: "", label: "Years of Excellence" },
];

const Achievements = () => (
  <section id="achievements" className="section-padding bg-secondary/30">
    <div className="section-container">
      <SectionHeading
        accent="Track Record"
        title="OUR CHAMPIONS"
        subtitle="Our athletes consistently perform at state and national level tournaments, bringing home medals and pride."
      />

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center p-6"
          >
            <div className="text-4xl md:text-5xl font-display neon-text mb-2">
              <AnimatedCounter target={s.value} suffix={s.suffix} />
            </div>
            <p className="text-sm text-muted-foreground font-medium">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Champions grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {champions.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-5 hover:border-primary/30 transition-all duration-300 group"
          >
            {/* Avatar placeholder */}
            <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mb-4 text-primary font-display text-xl group-hover:bg-primary/25 transition-colors">
              {c.name.split(" ").map(n => n[0]).join("")}
            </div>
            <h4 className="font-semibold text-foreground text-base font-sans">{c.name}</h4>
            <p className="text-xs text-muted-foreground mt-1 mb-3">{c.tournament}</p>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${medalClass[c.medal]}`}>
                {c.medal}
              </span>
              <span className="text-xs text-muted-foreground">{c.age}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
