import React, { useState, useEffect } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { SectionRail } from './components/SectionRail';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Sync dark mode class on html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0A0A0A';
      document.body.style.color = '#FAFAFA';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#FAFAFA';
      document.body.style.color = '#171717';
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${isDarkMode ? 'dark bg-[#0A0A0A] text-[#FAFAFA]' : 'bg-[#FAFAFA] text-[#171717]'}`}>
      <ScrollProgress />
      <SectionRail />
      {/* Fixed Sticky Header Navbar */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        openResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main>
        <HeroSection openResumeModal={() => setResumeModalOpen(true)} />

        {/* Divider 01 */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
          <div className="w-full border-t border-[#E5E5E5] dark:border-[#262626] flex items-center justify-between text-[10px] font-mono tracking-widest text-[#737373] dark:text-[#8A8A8A] pt-2">
            <span>01 // ABOUT</span>
            <span>ENGINEERING PHILOSOPHY</span>
          </div>
        </div>

        <AboutSection />

        {/* Divider 02 */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
          <div className="w-full border-t border-[#E5E5E5] dark:border-[#262626] flex items-center justify-between text-[10px] font-mono tracking-widest text-[#737373] dark:text-[#8A8A8A] pt-2">
            <span>02 // CAPABILITIES</span>
            <span>TECHNICAL ARCHITECTURE</span>
          </div>
        </div>

        <SkillsSection />

        {/* Divider 03 */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
          <div className="w-full border-t border-[#E5E5E5] dark:border-[#262626] flex items-center justify-between text-[10px] font-mono tracking-widest text-[#737373] dark:text-[#8A8A8A] pt-2">
            <span>03 // REPOSITORIES</span>
            <span>SELECTED PROJECT WORK</span>
          </div>
        </div>

        <ProjectsSection />

        {/* Divider 04 */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
          <div className="w-full border-t border-[#E5E5E5] dark:border-[#262626] flex items-center justify-between text-[10px] font-mono tracking-widest text-[#737373] dark:text-[#8A8A8A] pt-2">
            <span>04 // EXPERIENCE</span>
            <span>PROFESSIONAL TRACK</span>
          </div>
        </div>

        <ExperienceSection />

        {/* Divider 05 */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
          <div className="w-full border-t border-[#E5E5E5] dark:border-[#262626] flex items-center justify-between text-[10px] font-mono tracking-widest text-[#737373] dark:text-[#8A8A8A] pt-2">
            <span>05 // CONTACT</span>
            <span>CONNECT &amp; RECRUIT</span>
          </div>
        </div>

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Resume View & PDF Print Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
