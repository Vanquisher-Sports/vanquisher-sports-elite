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
              <p className="font-semibold text-foreground text-sm">Elite Badminton Arena</p>
              <p className="text-sm text-muted-foreground mt-1">7A, 4th C Main Road Dr. Vivekananda Layout, Santrupthi Nagar, Sankranthi Layout, near Naturals Ice Cream, JP Nagar 7th Phase, Arekere, Bengaluru, Karnataka 560078</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground text-sm">Phone</p>
              <a href="tel:+919611691277" className="text-sm text-muted-foreground hover:text-primary transition-colors mt-1 block">
                +91 9611691277 +91 9008474782
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground text-sm">Email</p>
              <a href="mailto:Vanquishersportsevents@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors mt-1 block">
                Vanquishersportsevents@gmail.com
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
                  href="https://www.instagram.com/vanquisherssports?igsh=MXVnNmh4Z2pmY2h6aQ%3D%3D&utm_source=qr"
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
            src="https://www.google.com/maps/place/Elite+Badminton+Arena/@12.8856267,77.5809934,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae156a60567cc1:0xdd424a851d576561!8m2!3d12.8856215!4d77.5835683!16s%2Fg%2F11h4t9fjv3?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
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
