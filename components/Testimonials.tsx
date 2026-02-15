
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons.tsx';

const testimonials = [
  {
    quote: "SarwHub transformed our annual tech summit. The white-labeling is so seamless that our attendees thought we built the platform in-house.",
    author: "Aman Gupta",
    role: "Founder",
    company: "TechLabs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "Finally a platform that lets us own our data. The check-in process for our 2,000+ guest club night was flawless and extremely fast.",
    author: "Sarah D'Souza",
    role: "Event Director",
    company: "ClubX",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "The best ticketing experience we've had in 5 years. Institutional rates are a lifesaver for our university budget without sacrificing professional quality.",
    author: "Prof. Rajesh Sharma",
    role: "Dean of Students",
    company: "IIT Delhi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(slideNext, 8000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-normal mb-4 tracking-tighter">
            What Organizers <span className="metal italic">Say</span>
          </h2>
          <p className="text-white/40 text-sm uppercase tracking-[0.3em] font-medium">Proven by Industry Leaders</p>
        </div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}
              className="absolute w-full"
            >
              <div className="glass p-10 md:p-16 rounded-[48px] border-white/10 text-center">
                <div className="mb-10 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].author}
                      className="w-20 h-20 rounded-full border-2 border-white/20 relative z-10 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                
                <blockquote className="text-2xl md:text-3xl font-normal text-white/90 leading-relaxed mb-10 tracking-tight italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div>
                  <h4 className="text-xl font-medium tracking-tight mb-1">{testimonials[currentIndex].author}</h4>
                  <p className="text-white/40 text-sm font-medium uppercase tracking-widest">
                    {testimonials[currentIndex].role} — <span className="metal">{testimonials[currentIndex].company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -left-4 md:-left-20 top-1/2 -translate-y-1/2 z-20">
            <button 
              onClick={slidePrev}
              className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all active:scale-95"
            >
              <ChevronLeftIcon />
            </button>
          </div>
          <div className="absolute -right-4 md:-right-20 top-1/2 -translate-y-1/2 z-20">
            <button 
              onClick={slideNext}
              className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all active:scale-95"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-1 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-12 bg-white' : 'w-4 bg-white/10'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
