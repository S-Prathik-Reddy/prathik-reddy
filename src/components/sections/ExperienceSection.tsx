import SectionHeading from '@/components/SectionHeading';
import Timeline from '@/components/Timeline';

const experiences = [
  {
    company: "CodeFacts Solutions",
    role: "React Native Developer Intern",
    location: "Hyderabad, India",
    period: "Jan 2023 - May 2023",
    highlights: [
      "Built cross-platform dashboard app with React Native CLI for iOS & Android",
      "Developed 3 functional modules using Angular.js with real-time data updates",
      "Integrated frontend with .NET backend ensuring smooth data flow",
      "Contributed to Agile sprints, code reviews, and timely delivery",
    ],
  },
  {
    company: "Appshark Software",
    role: "Frontend Developer Intern",
    location: "Hyderabad, India",
    period: "Sep 2022 - Dec 2023",
    highlights: [
      "Architected data pipeline processing surveys across 5+ international markets",
      "Designed Salesforce Surveys data model capturing $3M market opportunity",
      "Automated CI/CD pipelines with Docker, Kubernetes & Jenkins",
      "Achieved 95% test coverage and 50% reduction in post-release defects",
    ],
  },
  {
    company: "Signode India",
    role: "Data Engineering Intern",
    location: "Hyderabad, India",
    period: "Jun 2022 - Aug 2022",
    highlights: [
      "Built Big Data solution with Hadoop & Spark, improving efficiency by 40%",
      "Implemented AWS Personalize & SageMaker for recommendation engines",
      "Engineered ETL processes with Python & AWS (S3, EC2, EMR)",
      "Developed ML models with TensorFlow improving forecast accuracy by 30%",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden">
      <div className="section-container">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey in tech"
        />

        <Timeline items={experiences} />
      </div>
    </section>
  );
};

export default ExperienceSection;
