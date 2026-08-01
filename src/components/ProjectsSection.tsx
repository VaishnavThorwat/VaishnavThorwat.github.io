import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useMotionTemplate, useReducedMotion } from 'motion/react';
import {
  Github,
  ChevronRight,
  X,
  ArrowUpRight,
  FolderGit2,
  Pause,
  Play,
  Grid,
  ChevronLeft,
  Sparkles
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { Reveal } from './Reveal';

interface ProjectCardItemProps {
  project: Project;
  keyPrefix: string;
  cardWidthClass?: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const ProjectCardItem: React.FC<ProjectCardItemProps> = ({
  project,
  keyPrefix,
  cardWidthClass = 'w-[320px] sm:w-[360px]',
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [imgError, setImgError] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 25,
  });

  const sheenX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const sheenY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);
  const sheenBg = useMotionTemplate`radial-gradient(400px circle at ${sheenX} ${sheenY}, rgba(255,255,255,0.15), transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeaveCard = () => {
    x.set(0);
    y.set(0);
    onMouseLeave();
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={handleMouseLeaveCard}
      whileHover={{ y: -6, scale: 1.01 }}
      style={{
        rotateX: prefersReducedMotion ? 0 : rotateX,
        rotateY: prefersReducedMotion ? 0 : rotateY,
        transformStyle: 'preserve-3d',
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`group relative shrink-0 ${cardWidthClass} min-h-[350px] rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden shadow-lg ${
        isHovered
          ? 'bg-[#171717] dark:bg-[#262626] text-[#FAFAFA] border-[#737373] dark:border-[#FAFAFA] shadow-2xl scale-[1.01]'
          : 'bg-[#F5F5F5] dark:bg-[#171717] text-[#171717] dark:text-[#FAFAFA] border-[#E5E5E5] dark:border-[#262626] hover:border-[#A3A3A3]'
      }`}
      onClick={onClick}
    >
      {/* Specular Sheen for 3D Tilt */}
      {!prefersReducedMotion && isHovered && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-70 transition-opacity duration-300 z-10"
          style={{ background: sheenBg }}
        />
      )}

      <div>
        {/* Project Image Banner */}
        {project.imageUrl && !imgError ? (
          <div className="relative w-full h-36 -mx-6 -mt-6 mb-4 overflow-hidden border-b border-[#E5E5E5] dark:border-[#262626]">
            <img
              src={project.imageUrl}
              alt={project.title}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between">
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-black/80 text-[#FAFAFA] backdrop-blur-md border border-white/20">
                {project.category}
              </span>
              <div className="p-1 rounded-full bg-black/80 text-[#FAFAFA] backdrop-blur-md border border-white/20">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-36 -mx-6 -mt-6 mb-4 overflow-hidden border-b border-[#E5E5E5] dark:border-[#262626] bg-gradient-to-br from-[#262626] to-[#0A0A0A] flex flex-col items-center justify-center p-4">
            <FolderGit2 className="w-8 h-8 text-[#A3A3A3] mb-2" />
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-black/60 text-[#FAFAFA] border border-white/10">
              {project.category}
            </span>
          </div>
        )}

        {/* Main Title */}
        <h3
          className={`font-serif text-2xl font-normal tracking-tight mb-1 transition-colors ${
            isHovered ? 'text-white' : 'text-[#171717] dark:text-[#FAFAFA]'
          }`}
        >
          {project.title}
        </h3>

        {/* Subtitle / Headline */}
        <p
          className={`text-xs font-mono mb-3 transition-colors ${
            isHovered ? 'text-white/80' : 'text-[#737373] dark:text-[#A3A3A3]'
          }`}
        >
          {project.subtitle}
        </p>

        {/* Description */}
        <p
          className={`text-xs font-sans font-light leading-relaxed line-clamp-3 transition-colors ${
            isHovered ? 'text-white/90' : 'text-[#404040] dark:text-[#D4D4D4]'
          }`}
        >
          {project.description}
        </p>
      </div>

      {/* Card Bottom Metadata Footer */}
      <div className="mt-5 pt-3.5 border-t transition-colors border-current/15">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.techStack.slice(0, 3).map((tech, tIdx) => (
            <span
              key={tIdx}
              className={`px-2.5 py-0.5 text-[10px] font-mono rounded-full transition-colors ${
                isHovered
                  ? 'bg-white/20 text-white'
                  : 'bg-[#FFFFFF] dark:bg-[#0A0A0A] text-[#171717] dark:text-[#FAFAFA] border border-[#E5E5E5] dark:border-[#262626]'
              }`}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span
              className={`px-1.5 py-0.5 text-[10px] font-mono ${
                isHovered ? 'text-white/80' : 'text-[#737373] dark:text-[#A3A3A3]'
              }`}
            >
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-xs font-mono">
          <span className="flex items-center gap-1.5 opacity-90">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Architecture</span>
          </span>

          <span className="underline underline-offset-4">
            Details →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [modalImgError, setModalImgError] = useState<boolean>(false);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isHoverPaused, setIsHoverPaused] = useState<boolean>(false);

  const marqueeRef = useRef<HTMLDivElement>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Agents', 'RAG', 'Eval & Testing', 'Deep Learning'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  // For continuous infinite looping ribbon when 'All' is selected
  const marqueeProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS];

  const isStaticMode = selectedCategory !== 'All';
  const effectivePaused = isPaused || isHoverPaused;

  const handleScrollRibbon = (direction: 'left' | 'right') => {
    if (marqueeRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      marqueeRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleOpenModal = (e: React.MouseEvent<HTMLDivElement>, project: Project) => {
    lastActiveElementRef.current = e.currentTarget;
    setModalImgError(false);
    setActiveProjectModal(project);
  };

  const handlePrevProject = () => {
    if (!activeProjectModal) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === activeProjectModal.id);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setModalImgError(false);
    setActiveProjectModal(filteredProjects[prevIndex]);
  };

  const handleNextProject = () => {
    if (!activeProjectModal) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === activeProjectModal.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setModalImgError(false);
    setActiveProjectModal(filteredProjects[nextIndex]);
  };

  // Keyboard support and Focus Trap inside modal
  useEffect(() => {
    if (!activeProjectModal) return;

    // Move focus to close button
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setActiveProjectModal(null);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevProject();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextProject();
      } else if (e.key === 'Tab' && modalContainerRef.current) {
        const focusableElements = modalContainerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      lastActiveElementRef.current?.focus();
    };
  }, [activeProjectModal, filteredProjects]);

  const renderProjectCard = (project: Project, keyPrefix: string, cardWidthClass = 'w-[320px] sm:w-[360px]') => {
    const isHovered = hoveredProjectId === `${keyPrefix}-${project.id}`;

    return (
      <ProjectCardItem
        key={`${keyPrefix}-${project.id}`}
        project={project}
        keyPrefix={keyPrefix}
        cardWidthClass={cardWidthClass}
        isHovered={isHovered}
        onMouseEnter={() => setHoveredProjectId(`${keyPrefix}-${project.id}`)}
        onMouseLeave={() => setHoveredProjectId(null)}
        onClick={(e) => handleOpenModal(e, project)}
      />
    );
  };

  return (
    <section id="projects" className="min-h-screen lg:h-screen flex flex-col justify-center py-8 lg:py-0 scroll-mt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="text-xs uppercase tracking-widest font-mono text-[#8A8A8A] dark:text-[#A3A3A3] mb-1 inline-block flex items-center justify-center gap-2">
              <span className="w-4 h-[1px] bg-[#A3A3A3]" />
              Featured Repositories
              <span className="w-4 h-[1px] bg-[#A3A3A3]" />
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#171717] dark:text-[#FAFAFA] mt-1 mb-2">
              Production <em className="italic text-[#737373] dark:text-[#A3A3A3]">AI Systems</em>
            </h2>
            <p className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3]">
              Multi-agent graphs · Dense vector indexing · Automated evaluation suites
            </p>
          </div>
        </Reveal>

        {/* Filters Bar - Lumora Pill Styling */}
        <Reveal delay={100}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5">
            {/* Category Filter Pills */}
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#F5F5F5] dark:bg-[#171717] rounded-full border border-[#E5E5E5] dark:border-[#262626]">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 text-xs font-mono rounded-full transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-[#171717] text-[#FAFAFA] dark:bg-[#FAFAFA] dark:text-[#0A0A0A] font-medium shadow-xs'
                        : 'text-[#737373] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-[#FAFAFA]'
                    }`}
                  >
                    {cat === 'All' ? 'All (Infinite Ribbon)' : cat}
                  </button>
                );
              })}
            </div>

            {/* Ribbon Controls (Play/Pause/Scroll) - Only when in Infinite Ribbon Mode */}
            {!isStaticMode && (
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-1">
                  <button
                    onClick={() => handleScrollRibbon('left')}
                    className="p-2 rounded-full border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5] dark:bg-[#171717] text-[#171717] dark:text-[#FAFAFA] hover:bg-[#E5E5E5] dark:hover:bg-[#262626] cursor-pointer"
                    title="Scroll Ribbon Left"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleScrollRibbon('right')}
                    className="p-2 rounded-full border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5] dark:bg-[#171717] text-[#171717] dark:text-[#FAFAFA] hover:bg-[#E5E5E5] dark:hover:bg-[#262626] cursor-pointer"
                    title="Scroll Ribbon Right"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5] dark:bg-[#171717] text-xs font-mono text-[#171717] dark:text-[#FAFAFA] hover:bg-[#E5E5E5] dark:hover:bg-[#262626] cursor-pointer"
                  title={isPaused ? "Resume Auto Scroll" : "Pause Auto Scroll"}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5 text-[#A3A3A3]" /> : <Pause className="w-3.5 h-3.5 text-[#A3A3A3]" />}
                  <span>{isPaused ? 'Resume' : 'Pause'}</span>
                </button>
              </div>
            )}
          </div>
        </Reveal>

      </div>

      {/* Ribbon Display Mode (When 'All' selected -> Infinite Loop Ribbon; When Category selected -> Static Cards) */}
      {!isStaticMode ? (
        <div className="relative w-full py-1 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAFAFA] dark:from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAFAFA] dark:from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

          <div
            ref={marqueeRef}
            onMouseEnter={() => setIsHoverPaused(true)}
            onMouseLeave={() => setIsHoverPaused(false)}
            className="overflow-x-auto scrollbar-none py-2"
          >
            <div
              className={`animate-marquee gap-6 sm:gap-8 px-4 ${
                effectivePaused ? 'marquee-paused' : ''
              }`}
            >
              {marqueeProjects.map((project, idx) =>
                renderProjectCard(project, `infinite-${idx}`)
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Static Grid View when specific category selected */
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <Reveal key={project.id} delay={idx * 80}>
                {renderProjectCard(project, 'static-cat', 'w-full')}
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {/* Project Details Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            
            {/* Modal Prev Button */}
            <button
              onClick={handlePrevProject}
              className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full border border-[#E5E5E5] dark:border-[#262626] bg-[#FFFFFF]/90 dark:bg-[#171717]/90 text-[#171717] dark:text-[#FAFAFA] hover:bg-[#171717] hover:text-[#FAFAFA] dark:hover:bg-[#FAFAFA] dark:hover:text-[#0A0A0A] transition-colors cursor-pointer shadow-lg"
              title="Previous Project (Left Arrow)"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Modal Next Button */}
            <button
              onClick={handleNextProject}
              className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full border border-[#E5E5E5] dark:border-[#262626] bg-[#FFFFFF]/90 dark:bg-[#171717]/90 text-[#171717] dark:text-[#FAFAFA] hover:bg-[#171717] hover:text-[#FAFAFA] dark:hover:bg-[#FAFAFA] dark:hover:text-[#0A0A0A] transition-colors cursor-pointer shadow-lg"
              title="Next Project (Right Arrow)"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <motion.div
              ref={modalContainerRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-[#FAFAFA] dark:bg-[#171717] border border-[#E5E5E5] dark:border-[#262626] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl"
            >
              {/* Modal Top Controls bar: Prev, Next, Close */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5 sm:hidden">
                  <button
                    onClick={handlePrevProject}
                    className="p-1.5 rounded-full border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5] dark:bg-[#262626] text-[#171717] dark:text-[#FAFAFA]"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextProject}
                    className="p-1.5 rounded-full border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5] dark:bg-[#262626] text-[#171717] dark:text-[#FAFAFA]"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <button
                  ref={closeButtonRef}
                  onClick={() => setActiveProjectModal(null)}
                  className="ml-auto p-2 rounded-full border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5] dark:bg-[#262626] text-[#171717] dark:text-[#FAFAFA] hover:bg-[#171717] hover:text-[#FAFAFA] dark:hover:bg-[#FAFAFA] dark:hover:text-[#0A0A0A] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {activeProjectModal.imageUrl && !modalImgError ? (
                <div className="relative w-full h-48 sm:h-56 overflow-hidden mb-5 rounded-xl border border-[#E5E5E5] dark:border-[#262626]">
                  <img
                    src={activeProjectModal.imageUrl}
                    alt={activeProjectModal.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={() => setModalImgError(true)}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="relative w-full h-36 overflow-hidden mb-5 rounded-xl border border-[#E5E5E5] dark:border-[#262626] bg-gradient-to-br from-[#262626] to-[#0A0A0A] flex flex-col items-center justify-center p-4">
                  <FolderGit2 className="w-10 h-10 text-[#A3A3A3] mb-2" />
                  <span className="text-xs font-mono text-[#FAFAFA]">
                    {activeProjectModal.category} System Architecture
                  </span>
                </div>
              )}

              <span className="text-xs font-mono uppercase tracking-widest text-[#737373] dark:text-[#A3A3A3] mb-1 block">
                {activeProjectModal.category} System
              </span>

              <h3 className="font-serif text-3xl font-light text-[#171717] dark:text-[#FAFAFA] mb-2">
                {activeProjectModal.title}
              </h3>

              <p className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3] mb-4">
                {activeProjectModal.subtitle}
              </p>

              <p className="text-sm text-[#404040] dark:text-[#D4D4D4] leading-relaxed mb-6 font-light">
                {activeProjectModal.description}
              </p>

              {activeProjectModal.architectureDetails && (
                <div className="p-4 bg-[#F5F5F5] dark:bg-[#0A0A0A] rounded-xl border border-[#E5E5E5] dark:border-[#262626] mb-6">
                  <span className="text-xs font-mono uppercase text-[#737373] dark:text-[#A3A3A3] block mb-1">
                    Execution Architecture:
                  </span>
                  <code className="text-xs font-mono text-[#171717] dark:text-[#FAFAFA] block leading-relaxed">
                    {activeProjectModal.architectureDetails}
                  </code>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E5E5E5] dark:border-[#262626]">
                <div className="flex flex-wrap gap-1.5">
                  {activeProjectModal.techStack.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono rounded-full bg-[#F5F5F5] dark:bg-[#262626] text-[#171717] dark:text-[#FAFAFA] border border-[#E5E5E5] dark:border-[#373737]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={activeProjectModal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171717] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#0A0A0A] text-xs font-mono hover:opacity-90 transition-opacity"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

