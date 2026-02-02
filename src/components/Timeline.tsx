import { motion } from 'framer-motion';
import { MapPin, Calendar, Building2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface TimelineItemProps {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  index: number;
}

const TimelineItem = ({ company, role, location, period, highlights, index }: TimelineItemProps) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative flex w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'} mb-8 md:mb-0`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
      
      {/* Card */}
      <div className={`ml-8 md:ml-0 md:w-[45%] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
        <div className="glass-card rounded-2xl p-6 hover-glow group">
          {/* Company & Role */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all">
              {role}
            </h3>
            <div className="flex items-center gap-2 mt-2 text-primary">
              <Building2 className="w-4 h-4" />
              <span className="font-medium">{company}</span>
            </div>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {location}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {period}
            </div>
          </div>

          {/* Highlights */}
          <ul className="space-y-2">
            {highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

interface TimelineProps {
  items: Omit<TimelineItemProps, 'index'>[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Center line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary/20" />
      
      <div className="space-y-8 md:space-y-16">
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
