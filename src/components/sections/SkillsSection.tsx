import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import SkillBadge from '@/components/SkillBadge';

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "React", "React Native", "Angular.js", "Flask", ".NET"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "Huggingface", "PyReft", "Autogen", "LangChain", "OpenCV", "Deep Learning"],
  },
  {
    title: "Data & Cloud",
    skills: ["AWS", "S3", "EC2", "EMR", "SageMaker", "Docker", "Kubernetes", "Hadoop", "Apache Spark", "GraphQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Jenkins", "Tableau", "Streamlit", "Salesforce", "Apex", "Figma", "Perforce", "GitHub Actions"],
  },
];

const certifications = [
  "IBM Artificial Intelligence Analyst",
  "Google Data Analytics Professional",
  "Complete Python Pro Bootcamp",
  "Google UX Design",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="section-container">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="Technologies I use to bring ideas to life"
        />

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge 
                    key={skill} 
                    name={skill} 
                    index={catIndex * 10 + skillIndex} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-border/50"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card px-5 py-3 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-all cursor-default"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
