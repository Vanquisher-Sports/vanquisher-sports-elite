import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useState } from "react";

const experienceLevels = ["Beginner", "Intermediate", "Advanced"];

interface EnquiryFormProps {
  id: string;
  title: string;
  accent: string;
  heading: string;
  subtitle: string;
  highlight?: string;
  type: "summer" | "upskill";
}

const EnquiryForm = ({ id, title, accent, heading, subtitle, highlight, type }: EnquiryFormProps) => {
  const [form, setForm] = useState({ name: "", age: "", phone: "", experience: "Beginner" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi! I'd like to enrol for the ${title} at Vanquisher Sports.\n\nName: ${form.name}\nAge: ${form.age}\nPhone: ${form.phone}\nExperience: ${form.experience}`;
    window.open(`https://wa.me/917760581133?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id={id} className="section-padding">
      <div className="section-container">
        <SectionHeading accent={accent} title={heading} subtitle={subtitle} />

        <div className="max-w-2xl mx-auto">
          {highlight && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card neon-border p-5 mb-8 text-center"
            >
              <p className="text-primary font-semibold text-sm">{highlight}</p>
            </motion.div>
          )}

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="glass-card p-6 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Full Name</label>
                <input
                  required
                  type="text"
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Age</label>
                <input
                  required
                  type="number"
                  min={4}
                  max={60}
                  value={form.age}
                  onChange={(e) => setForm({ ...form, age: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="Your age"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Phone Number</label>
                <input
                  required
                  type="tel"
                  maxLength={15}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="+91 9876543210"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Experience Level</label>
                <select
                  value={form.experience}
                  onChange={(e) => setForm({ ...form, experience: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                >
                  {experienceLevels.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="btn-primary-glow w-full text-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitted ? "Sent! Redirecting to WhatsApp…" : `Enquire via WhatsApp`}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export const SummerCamp = () => (
  <EnquiryForm
    id="summer-camp"
    title="Summer Camp"
    accent="Limited Seats"
    heading="SUMMER CAMP 2025"
    subtitle="Intensive 4-week badminton camp starting April 1st — daily sessions, mini tournaments, and certificates."
    highlight="🏸 Starting April 1st · Limited to 30 seats per batch · 3 hours daily training"
    type="summer"
  />
);

export const Upskilling = () => (
  <EnquiryForm
    id="upskilling"
    title="Upskilling Program"
    accent="Level Up"
    heading="UPSKILLING PROGRAM"
    subtitle="Focused skill improvement sessions targeting your specific weaknesses — smash power, net finesse, or court speed."
    type="upskill"
  />
);
