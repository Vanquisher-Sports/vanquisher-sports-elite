import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useState } from "react";
import { X } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    src: "/images/achievers/Punya2.jpg",
    alt: "U13 Nationals Bronze Medalist",
  },
  {
    id: 2,
    src: "/images/achievers/Punya.jpeg",
    alt: "U13 State Champion",
  },
  {
    id: 3,
    src: "/images/achievers/adithi.jpg",
    alt: "U13 State Champion",
  },
  {
    id: 4,
    src: "/images/achievers/Kids.jpg",
    alt: "Open State Champion",
  },
  {
    id: 5,
    src: "/images/achievers/Vijaya.jpeg",
    alt: "60+ Nationals Champion",
  },
  {
    id: 6,
    src: "/images/achievers/Maanya.jpg",
    alt: "Open State Champion",
  },
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
                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
              >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs text-white font-medium">
                 🥇 {item.alt}
              </p>
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
             className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-50"
            >
             <X size={28} />
            </button>

            <div
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
           >
             <img
              src={galleryItems.find((item) => item.id === lightbox)?.src}
              alt="preview"
             className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
           </div>
          </motion.div>
    )}
      </div>
    </section>
  );
};

export default Gallery;
