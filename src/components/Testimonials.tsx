import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kulkarni",
    role: "Parent of U-13 player",
    text: "My son's game improved dramatically in just 3 months. The coaches are incredibly dedicated and the training structure is top-notch.",
  },
  {
    name: "Deepika Rao",
    role: "State-level player",
    text: "Vanquisher gave me the competitive edge I needed. The high-performance program pushed me to qualify for nationals.",
  },
  {
    name: "Suresh Naidu",
    role: "Parent of two trainees",
    text: "Both my kids love the summer camp. The environment is motivating, and the coaches make every session enjoyable and productive.",
  },
];

const Testimonials = () => (
  <section className="section-padding bg-secondary/30">
    <div className="section-container">
      <SectionHeading
        accent="What They Say"
        title="TESTIMONIALS"
        subtitle="Hear from the families and athletes who train with us."
      />

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 md:p-8"
          >
            <Quote size={20} className="text-primary/40 mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-display text-sm">
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
