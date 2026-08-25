import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Sparkles, Bot, ChevronDown, FileText, FolderGit2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';

interface HeroSectionProps {
  openResumeModal: () => void;
}

const ROLE_TITLES = ["Data & AI Engineer"];

export const HeroSection: React.FC<HeroSectionProps> = ({ openResumeModal }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  // Scroll driven pull-back effect from Hero Page into Hero Card
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.92]);
  const heroY = useTransform(scrollY, [0, 500], [0, 32]);
  const heroBorderRadius = useTransform(scrollY, [0, 500], [24, 40]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.9]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLE_TITLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen pt-16 sm:pt-20 pb-8 sm:pb-12 flex flex-col justify-center items-center overflow-hidden px-1 sm:px-4 lg:px-8"
    >
      {/* Dynamic Hero Page -> Pulled-Back Hero Card transformation */}
      <motion.div
        style={
          prefersReducedMotion
            ? {}
            : {
                scale: heroScale,
                y: heroY,
                borderRadius: heroBorderRadius,
                opacity: heroOpacity,
                transformOrigin: 'top center',
              }
        }
        className="relative w-full max-w-[98vw] xl:max-w-[1440px] mx-auto rounded-[24px] sm:rounded-[36px] border border-[#262626] bg-gradient-to-b from-[#171717] via-[#0A0A0A] to-[#000000] shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden p-6 sm:p-10 lg:p-14 flex flex-col justify-between min-h-[80vh] z-10 transition-all duration-200"
      >
        
        {/* Subtle Background Grid & Monochrome Glow overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:32px_32px] opacity-15 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#A3A3A3]/5 rounded-full blur-3xl pointer-events-none" />

        {/* GIANT BACKDROP TYPOGRAPHY: Continuous single word "Portfolio" */}
        <div className="absolute inset-0 flex items-center justify-center px-2 pointer-events-none z-0 select-none opacity-10 dark:opacity-15 overflow-hidden">
          <span className="font-sans font-black text-[110px] sm:text-[190px] md:text-[260px] lg:text-[320px] text-[#FAFAFA] leading-none tracking-tighter">
            Portfolio
          </span>
        </div>

        {/* TOP STATUS BAR INSIDE CANVAS - Center aligned */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-[#262626]/80 text-xs font-mono text-[#A3A3A3] pt-8 sm:pt-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-[#262626] text-[#FAFAFA]">
              <span className="w-2 h-2 rounded-full bg-[#FAFAFA] animate-pulse" />
              <span>Analytics · Machine Learning · GenAI</span>
            </span>
            <span className="hidden sm:inline-block text-[#737373]">·</span>
            <span className="hidden sm:inline-block text-[#A3A3A3]">Mumbai, India</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#A3A3A3]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for Remote &amp; Full-Time</span>
          </div>
        </div>

        {/* MAIN HERO CONTENT - FULLY CENTER ALIGNED */}
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center justify-center py-8 sm:py-12 my-auto space-y-6">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171717] border border-[#262626] text-xs font-mono uppercase tracking-widest text-[#FAFAFA] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FAFAFA]" />
            <span>Data &amp; AI Engineer</span>
          </div>

          {/* Headline Name - Staggered reveal on load */}
          {prefersReducedMotion ? (
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#FFFFFF] leading-[1.05]">
              Vaishnav Thorwat
            </h1>
          ) : (
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12 },
                },
              }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#FFFFFF] leading-[1.05]"
            >
              {['Vaishnav', 'Thorwat'].map((word, wIdx) => (
                <motion.span
                  key={wIdx}
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: 'easeOut' },
                    },
                  }}
                  className="inline-block mr-[0.25em] last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          )}

          {/* Cycling Role Pill - Centered */}
          <div className="h-9 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171717] border border-[#262626] text-[#FAFAFA] font-mono text-xs sm:text-sm shadow-xs"
              >
                <Bot className="w-4 h-4 text-[#FAFAFA]" />
                <span>{ROLE_TITLES[roleIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Objective Summary - Centered */}
          <p className="text-sm sm:text-base md:text-lg text-[#D4D4D4] font-sans leading-relaxed font-light max-w-2xl mx-auto">
            Using Python, SQL, and machine learning to turn data into useful decisions and intelligent products. Building toward reliable AI/ML engineering through hands-on work in NLP, RAG, agents, and evaluation.
          </p>

          {/* Action Buttons - Centered */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <MagneticButton>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FAFAFA] text-[#0A0A0A] font-mono text-xs uppercase tracking-wider hover:bg-[#E5E5E5] transition-all duration-200 shadow-[0_0_25px_rgba(255,255,255,0.15)] font-semibold cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4 text-[#171717]" />
                <span>Projects</span>
              </a>
            </MagneticButton>

            <button
              onClick={openResumeModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#262626] bg-[#171717]/80 text-[#FAFAFA] font-mono text-xs uppercase tracking-wider hover:bg-[#262626] transition-all cursor-pointer backdrop-blur-md shadow-xs"
            >
              <FileText className="w-4 h-4 text-[#A3A3A3]" />
              <span>Resume</span>
            </button>
          </div>

          {/* Social Icons Row - Centered with Magnetic effect */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <MagneticButton maxDisplacement={6}>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#171717] border border-[#262626] flex items-center justify-center text-[#A3A3A3] hover:text-[#FAFAFA] hover:border-[#FAFAFA] transition-colors shadow-xs"
                title="GitHub"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
            </MagneticButton>
            <MagneticButton maxDisplacement={6}>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#171717] border border-[#262626] flex items-center justify-center text-[#A3A3A3] hover:text-[#FAFAFA] hover:border-[#FAFAFA] transition-colors shadow-xs"
                title="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </MagneticButton>
            <MagneticButton maxDisplacement={6}>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-10 h-10 rounded-full bg-[#171717] border border-[#262626] flex items-center justify-center text-[#A3A3A3] hover:text-[#FAFAFA] hover:border-[#FAFAFA] transition-colors shadow-xs"
                title="Email"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </MagneticButton>
          </div>

        </div>

        {/* BOTTOM NOTCHED SCROLL ARROW BUTTON */}
        <div className="relative z-10 pt-4 flex justify-center">
          <button
            onClick={scrollToAbout}
            aria-label="Scroll down to About section"
            className="group flex flex-col items-center gap-1 cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full bg-[#171717] border border-[#262626] group-hover:border-[#FAFAFA] flex items-center justify-center text-[#FAFAFA] shadow-md transition-all group-hover:scale-110">
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </div>
            <span className="text-[10px] font-mono text-[#A3A3A3] uppercase tracking-widest group-hover:text-[#FAFAFA] transition-colors">
              Scroll Down
            </span>
          </button>
        </div>

      </motion.div>
    </section>
  );
};

