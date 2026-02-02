import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="section-heading">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
