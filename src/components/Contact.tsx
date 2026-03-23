import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { MapPin, Phone, Mail, Instagram, Youtube, Facebook } from "lucide-react";

const Contact = () => (
  <section id="contact" className="section-padding court-texture">
    <div className="section-container">
      <SectionHeading
        accent="Get In Touch"
        title="CONTACT US"
        subtitle="Visit our training centre or reach out to start your badminton journey today."
      />

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-8 space-y-6"
        >
          <div className="flex items-start gap-4">
            <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground text-sm">Training Centre</p>
              <p className="text-sm text-muted-foreground mt-1">Sports Complex, Sector 12, HSR Layout, Bengaluru, Karnataka 560102</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground text-sm">Phone</p>
              <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-primary transition-colors mt-1 block">
                +91 98765 43210
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground text-sm">Email</p>
              <a href="mailto:info@vanquishersports.com" className="text-sm text-muted-foreground hover:text-primary transition-colors mt-1 block">
                info@vanquishersports.com
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="pt-4 border-t border-border">
            <p className="text-sm font-medium text-foreground mb-3">Follow Us</p>
            <div className="flex gap-3">
              {[Instagram, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card overflow-hidden min-h-[320px]"
        >
          <iframe
            title="Vanquisher Sports Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9!2d77.63!3d12.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzM2LjAiTiA3N8KwMzcnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
            className="w-full h-full min-h-[320px] border-0 opacity-70 grayscale"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
