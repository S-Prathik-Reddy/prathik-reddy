import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: "E-Grocery Platform",
    description: "A responsive e-commerce platform optimized for seamless grocery shopping experiences with modern UI/UX principles.",
    technologies: ["React", "TypeScript", "GraphQL", "Figma", "Netlify"],
    highlights: [
      "Built responsive UI with React & TypeScript, achieving 95% mobile usability scores",
      "Conducted UX research and usability testing to optimize conversion rates",
      "Implemented GraphQL API for efficient data fetching, reducing load times by 40%",
      "Deployed with CI/CD pipelines ensuring seamless updates and scalability",
    ],
  },
  {
    title: "Assistive Communication Platform for Autism",
    description: "An AI-powered platform enabling personalized, adaptive communication for individuals with autism using PECS-based interaction.",
    technologies: ["Python", "Streamlit", "TensorFlow", "LangChain", "OpenCV"],
    highlights: [
      "Developed PECS-based interaction system for personalized adaptive learning",
      "Implemented NLP-driven speech synthesis converting visual symbols to speech",
      "Built AI chatbot facilitating context-aware, adaptive communication",
      "Processed behavioral analytics using PySpark for content recommendations",
    ],
  },
  {
    title: "Brain Tumor Classification (Published Research)",
    description: "Transfer learning model for medical image classification, published as a book chapter in 'Machine Learning and AI in Healthcare Systems'.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
    highlights: [
      "Developed transfer-learning model with feature extraction from 4 architectures",
      "Reduced false negatives by 8% through enhanced MR image analysis",
      "Published internationally in 'Machine Learning and AI in Healthcare Systems'",
      "Collaborated with research team on deep feature extraction techniques",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-20 md:py-32">
      <div className="section-container">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of work that showcases my skills and passion"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
