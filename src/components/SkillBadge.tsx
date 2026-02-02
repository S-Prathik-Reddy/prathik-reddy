import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  index: number;
}

const SkillBadge = ({ name, index }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05, 
        y: -2,
        transition: { duration: 0.2 }
      }}
      className="skill-badge cursor-default"
    >
      {name}
    </motion.div>
  );
};

export default SkillBadge;
