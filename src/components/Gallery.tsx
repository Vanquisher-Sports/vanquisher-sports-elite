import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useState } from "react";
import { X } from "lucide-react";

const galleryItems = [
  { id: 1, alt: "Training session on court", color: "from-primary/20 to-secondary" },
  { id: 2, alt: "Medal ceremony", color: "from-[hsl(45,80%,40%)]/20 to-secondary" },
  { id: 3, alt: "Group coaching", color: "from-primary/15 to-secondary" },
  { id: 4, alt: "Footwork drills", color: "from-primary/25 to-secondary" },
  { id: 5, alt: "Tournament action", color: "from-[hsl(45,80%,40%)]/15 to-secondary" },
  { id: 6, alt: "Summer camp batch", color: "from-primary/20 to-secondary" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding">
      <div className="section-container">
        <SectionHeading
          accent="Our Journey"
          title="PLAYER GALLERY"
          subtitle="Moments of excellence captured from our training sessions and tournament victories."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setLightbox(item.id)}
              className={`relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br ${item.color} group cursor-pointer`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-display text-foreground/10 group-hover:text-foreground/20 transition-colors">
                  🏸
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs text-foreground font-medium">{item.alt}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            >
              <X size={28} />
            </button>
            <div className="w-full max-w-3xl aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
              <span className="text-8xl">🏸</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
