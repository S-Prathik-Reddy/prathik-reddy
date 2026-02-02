import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  index: number;
}

const ProjectCard = ({ title, description, technologies, highlights, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl glass-card p-6 md:p-8 hover-glow h-full flex flex-col">
        {/* Gradient border effect on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, hsl(187 85% 53% / 0.1), hsl(270 76% 60% / 0.1))',
          }}
        />

        {/* Project number */}
        <span className="absolute top-4 right-4 text-6xl font-bold text-muted/20 select-none">
          0{index + 1}
        </span>

        {/* Content */}
        <div className="relative z-10 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
              {title}
            </h3>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 45 }}
              className="p-2 rounded-full bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
          </div>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>

          {/* Highlights */}
          <ul className="space-y-2 mb-6 flex-1">
            {highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
