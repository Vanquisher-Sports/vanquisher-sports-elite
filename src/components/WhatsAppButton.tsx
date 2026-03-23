import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const PHONE = "919876543210";
const MESSAGE = "Hello! I want to enquire about badminton training at Vanquisher Sports.";

const WhatsAppButton = () => (
  <motion.a
    href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white p-4 rounded-full shadow-lg transition-colors duration-200"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} />
  </motion.a>
);

export default WhatsAppButton;
