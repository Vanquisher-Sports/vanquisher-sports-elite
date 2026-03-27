import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useState } from "react";
import { Handshake } from "lucide-react";

const partners = [
  { name: "Elite Badminton Arena", location: "JP Nagar 7th Phase" },
  { name: "Fettle Fitness & Sports", location: "JP Nagar 9th Phase" },
];

const Collaboration = () => {
  const [form, setForm] = useState({ centre: "", location: "", contact: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Partnership Enquiry — Vanquisher Sports\n\nCentre: ${form.centre}\nLocation: ${form.location}\nContact: ${form.contact}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    window.open(`https://wa.me/917760581133?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="collaborate" className="section-padding bg-secondary/30">
      <div className="section-container">
        <SectionHeading
          accent="Grow Together"
          title="PARTNER WITH US"
          subtitle="We collaborate with sports arenas and academies to expand high-quality badminton training across India."
        />

        {/* Current partners */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card px-6 py-4 flex items-center gap-3"
            >
              <Handshake size={20} className="text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
          className="glass-card max-w-2xl mx-auto p-6 md:p-10 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Centre Name</label>
              <input
                required type="text" maxLength={100}
                value={form.centre}
                onChange={(e) => setForm({ ...form, centre: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                placeholder="Your academy / arena name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Location</label>
              <input
                required type="text" maxLength={100}
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                placeholder="City, State"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Contact Person</label>
              <input
                required type="text" maxLength={100}
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Phone</label>
              <input
                required type="tel" maxLength={15}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-1.5">Message</label>
            <textarea
              maxLength={500}
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
              placeholder="Tell us about your facility and how you'd like to collaborate"
            />
          </div>
          <button type="submit" disabled={submitted} className="btn-primary-glow w-full text-center disabled:opacity-60">
            {submitted ? "Sent! Redirecting to WhatsApp…" : "Submit Partnership Enquiry"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Collaboration;
