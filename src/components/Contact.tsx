import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { MapPin, Phone, Mail, Instagram, Youtube, Facebook } from "lucide-react";

const centres = [
  {
    name: "Elite Badminton Arena",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3433970388423!2d77.58099337599478!3d12.88562671675551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156a60567cc1%3A0xdd424a851d576561!2sElite%20Badminton%20Arena!5e0!3m2!1sen!2sin!4v1774286652502!5m2!1sen!2sin",
    directions: "https://www.google.com/maps/dir/?api=1&destination=Elite+Badminton+Arena",
  },
  {
    name: "Fettle Sports Arena",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5817423286403!2d77.57158027599463!3d12.870269417089883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6bb476ad31f9%3A0x77d4470dceff4641!2sFettle%20Fitness%20and%20Sports!5e0!3m2!1sen!2sin!4v1774286797500!5m2!1sen!2sin",
    directions: "https://www.google.com/maps/dir/?api=1&destination=Fettle+Sports+Arena",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding court-texture">
      <div className="section-container">
        
        <SectionHeading
          accent="Get In Touch"
          title="CONTACT US"
          subtitle="Visit our training centres or reach out to start your badminton journey today."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* LEFT: CONTACT INFO */}
         <motion.div
            initial={{ opacity: 0, x: -24 }}
             whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.6 }}
             className="glass-card p-8 flex flex-col h-full"
          >

      {/* TOP CONTENT */}
       <div className="space-y-6">

       {/* Address */}
       <div className="flex items-start gap-4">
          <MapPin size={20} className="text-primary mt-1" />
       <div>
        <p className="font-semibold text-sm">Elite Badminton Arena</p>
        <p className="text-sm text-muted-foreground mt-1">
          JP Nagar 7th Phase, Arekere, Bengaluru
        </p>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-start gap-4">
      <Phone size={20} className="text-primary mt-1" />
      <div>
        <p className="font-semibold text-sm">Phone</p>
        <a href="tel:+919611691277" className="text-sm block hover:text-primary">
          +91 9611691277
        </a>
        <a href="tel:+919008474782" className="text-sm block hover:text-primary">
          +91 9008474782
        </a>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-start gap-4">
      <Mail size={20} className="text-primary mt-1" />
      <div>
        <p className="font-semibold text-sm">Email</p>
        <a href="mailto:vanquishersportsevents@gmail.com" className="text-sm hover:text-primary">
          vanquishersportsevents@gmail.com
        </a>
      </div>
    </div>

    {/* 🔥 CTA MOVED UP */}
   <div className="mt-6 p-6 rounded-xl bg-primary/10 border border-primary/30 flex flex-col justify-between h-[200px]">
  
  <div>
    <p className="text-base font-semibold mb-2">
      Start Your Free Trial 🏸
    </p>

    <p className="text-sm text-muted-foreground leading-relaxed">
      Experience high-quality badminton coaching with expert guidance, structured training, and personalized attention before you enroll.
    </p>
  </div>

  <a
    href="https://wa.me/919611691277?text=Hi%20I%20want%20to%20book%20a%20free%20trial"
    target="_blank"
    className="mt-4 block text-center bg-primary text-white py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition"
  >
    Book Free Trial
  </a>

</div>

  </div>

  {/* 🔽 FOLLOW US PUSHED TO BOTTOM */}
  <div className="mt-auto pt-6 border-t border-border">
    <p className="text-sm font-medium mb-3">Follow Us</p>
    <div className="flex gap-3">
      <a href="https://www.instagram.com/vanquisherssports" target="_blank">
        <Instagram />
      </a>
      <a href="#"><Youtube /></a>
      <a href="#"><Facebook /></a>
    </div>
  </div>

</motion.div>
           {/* RIGHT: MULTIPLE CENTRES MAP */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {centres.map((centre, index) => (
              <div key={index} className="glass-card overflow-hidden rounded-xl">
                
                {/* Title */}
                <div className="p-4 border-b border-white/10">
                  <h3 className="font-semibold">{centre.name}</h3>
                </div>

                {/* Map */}
                <iframe
                  title={centre.name}
                  src={centre.map}
                  className="w-full h-[250px] border-0"
                  loading="lazy"
                  allowFullScreen
                />

                {/* Buttons */}
                <div className="p-4 flex justify-between items-center">
                  <a
                    href={centre.directions}
                    target="_blank"
                    className="text-primary text-sm hover:underline"
                  >
                    Get Directions →
                  </a>

                  <a
                    href={`https://wa.me/919611691277?text=Hi%20I%20want%20to%20enquire%20about%20training%20at%20${encodeURIComponent(
                      centre.name
                    )}`}
                    target="_blank"
                    className="bg-primary text-white text-xs px-3 py-1 rounded-lg"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;