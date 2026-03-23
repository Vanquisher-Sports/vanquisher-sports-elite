import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: string;
}

const SectionHeading = ({ title, subtitle, accent }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="text-center mb-14 md:mb-20"
  >
    {accent && (
      <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
        {accent}
      </span>
    )}
    <h2 className="text-4xl md:text-6xl font-display tracking-wide text-foreground">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
        {subtitle}
      </p>
    )}
    <div className="mt-6 mx-auto w-16 h-1 bg-primary rounded-full" />
  </motion.div>
);

export default SectionHeading;
