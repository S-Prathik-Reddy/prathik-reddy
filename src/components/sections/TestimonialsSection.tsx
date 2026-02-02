import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "Prathik's ability to bridge the gap between complex data engineering and user-friendly interfaces is remarkable. His work on our survey translation system was instrumental in expanding to 5+ international markets.",
    author: "Tech Lead",
    role: "Appshark Software",
    initials: "TL",
  },
  {
    quote: "A rare talent who combines deep technical knowledge with excellent communication skills. Prathik delivered a cross-platform app that exceeded our client's expectations in both functionality and design.",
    author: "Project Manager",
    role: "CodeFacts Solutions",
    initials: "PM",
  },
  {
    quote: "His innovative approach to building ML models and data pipelines helped us improve forecast accuracy by 30%. Prathik is a self-starter who consistently delivers high-quality work.",
    author: "Senior Engineer",
    role: "Signode India",
    initials: "SE",
  },
  {
    quote: "Working with Prathik on the brain tumor classification research was an exceptional experience. His dedication to accuracy and his collaborative spirit made the project a success.",
    author: "Research Collaborator",
    role: "Healthcare ML Research",
    initials: "RC",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        <SectionHeading 
          title="What People Say" 
          subtitle="Feedback from colleagues and collaborators"
        />

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="relative glass-card rounded-3xl p-8 md:p-12 min-h-[300px]">
            {/* Quote icon */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col items-center text-center"
              >
                {/* Quote */}
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 italic">
                  "{testimonials[current].quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                    {testimonials[current].initials}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">
                      {testimonials[current].author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full hover:bg-primary/10 hover:text-primary"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > current ? 1 : -1);
                      setCurrent(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === current 
                        ? 'w-6 bg-primary' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full hover:bg-primary/10 hover:text-primary"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
