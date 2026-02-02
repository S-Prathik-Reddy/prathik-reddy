import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { GraduationCap, Award, BookOpen, FileText } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: "MS in Computer Science",
    description: "Syracuse University, Expected May 2025",
  },
  {
    icon: Award,
    title: "4 Certifications",
    description: "IBM AI, Google Analytics, Python, UX Design",
  },
  {
    icon: BookOpen,
    title: "Published Researcher",
    description: "Brain Tumor Classification using Transfer Learning",
  },
  {
    icon: FileText,
    title: "3+ Years Experience",
    description: "Full-stack development & data engineering",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="section-container">
        <SectionHeading 
          title="About Me" 
          subtitle="Passionate about building technology that makes a difference"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">Computer Science graduate student</span> at 
              Syracuse University with a passion for creating intelligent, scalable solutions. My journey 
              spans from building cross-platform mobile applications to architecting big data pipelines 
              that process millions of records.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With hands-on experience in <span className="text-primary">React, Python, TensorFlow, and AWS</span>, 
              I've contributed to projects that have driven real business impact—from capturing <span className="text-primary">$3M 
              market opportunities</span> to improving data processing efficiency by <span className="text-primary">40%</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I'm exploring the latest in AI/ML, contributing to open-source, 
              or working on research that pushes the boundaries of what's possible with technology.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gradient">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">5+</div>
                <div className="text-sm text-muted-foreground">Projects Shipped</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">1</div>
                <div className="text-sm text-muted-foreground">Research Publication</div>
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-5 hover-glow group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
