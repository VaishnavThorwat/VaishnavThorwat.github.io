import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  openResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, openResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 75;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none pt-3 sm:pt-4 px-2 sm:px-6 transition-all duration-500">
      {/* Outer wrapper: Combined with Hero at top, transforms to Floating Island Pill on scroll */}
      <div
        className={`pointer-events-auto mx-auto transition-all duration-500 ease-out flex flex-row flex-nowrap items-center justify-between whitespace-nowrap ${
          isScrolled
            ? 'w-[96vw] max-w-5xl xl:max-w-6xl rounded-full border border-[#E5E5E5] dark:border-[#262626] bg-[#FFFFFF]/95 dark:bg-[#0A0A0A]/95 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.5)] px-4 sm:px-6 py-2 sm:py-2.5'
            : 'w-full max-w-[96vw] xl:max-w-[1400px] bg-transparent border-b border-transparent px-3 sm:px-8 py-2.5'
        }`}
      >
        {/* Logo / Name */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2.5 tracking-tight transition-transform duration-200 active:scale-95 shrink-0 whitespace-nowrap"
        >
          <span className="w-8 h-8 rounded-full bg-[#171717] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#0A0A0A] border border-[#262626] dark:border-[#E5E5E5] flex items-center justify-center font-serif text-xs font-bold transition-transform group-hover:scale-105 shadow-xs shrink-0">
            VT
          </span>
          <span className="font-serif text-lg sm:text-xl font-normal text-[#171717] dark:text-[#FAFAFA] whitespace-nowrap">
            Vaishnav <em className="italic text-[#737373] dark:text-[#A3A3A3]">Thorwat</em>
          </span>
        </a>

        {/* Desktop Nav Links - Island Pill */}
        <nav className="hidden md:flex items-center gap-1 bg-[#F5F5F5] dark:bg-[#171717] backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E5E5E5] dark:border-[#262626] shrink-0 whitespace-nowrap">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 sm:px-3.5 py-1 text-xs font-mono uppercase tracking-widest rounded-full transition-all duration-200 shrink-0 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#171717] text-[#FAFAFA] dark:bg-[#FAFAFA] dark:text-[#0A0A0A] font-medium shadow-xs'
                    : 'text-[#737373] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-[#FAFAFA]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Controls / Actions */}
        <div className="hidden md:flex items-center gap-2 sm:gap-2.5 shrink-0 whitespace-nowrap">
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5] dark:bg-[#171717] text-[#171717] dark:text-[#FAFAFA] hover:border-[#A3A3A3] transition-colors cursor-pointer shrink-0"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-[#FAFAFA]" /> : <Moon className="w-4 h-4 text-[#171717]" />}
          </button>

          {/* Resume Modal Button */}
          <button
            onClick={openResumeModal}
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider px-3.5 py-2 rounded-full border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5] dark:bg-[#171717] text-[#171717] dark:text-[#FAFAFA] hover:bg-[#E5E5E5] dark:hover:bg-[#262626] transition-colors cursor-pointer shadow-xs shrink-0 whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-[#737373] dark:text-[#A3A3A3]" />
            <span className="whitespace-nowrap">Resume</span>
          </button>

          {/* Hire Me CTA */}
          <MagneticButton>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center gap-1 text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-full bg-[#171717] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#0A0A0A] hover:opacity-90 transition-all duration-200 shadow-xs cursor-pointer font-medium shrink-0 whitespace-nowrap"
            >
              <span className="whitespace-nowrap">Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          </MagneticButton>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5] dark:bg-[#171717] text-[#171717] dark:text-[#FAFAFA]"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-[#FAFAFA]" /> : <Moon className="w-4 h-4 text-[#171717]" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-full border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5] dark:bg-[#171717] text-[#171717] dark:text-[#FAFAFA]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto max-w-md mx-auto mt-2 p-4 rounded-3xl bg-[#FFFFFF] dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-[#262626] shadow-2xl animate-in slide-in-from-top duration-200 md:hidden">
          <nav className="flex flex-col gap-2 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-full text-[#171717] dark:text-[#FAFAFA] hover:bg-[#F5F5F5] dark:hover:bg-[#171717] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#E5E5E5] dark:border-[#262626] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openResumeModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5] dark:bg-[#171717] text-[#171717] dark:text-[#FAFAFA] font-mono"
              >
                <FileText className="w-4 h-4 text-[#737373] dark:text-[#A3A3A3]" />
                <span>View Full Resume</span>
              </button>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#171717] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#0A0A0A] font-mono font-medium"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

