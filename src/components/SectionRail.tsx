import React, { useState, useEffect } from 'react';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const SectionRail: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 75;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3.5 items-end pointer-events-auto select-none">
      {SECTIONS.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => handleScrollTo(sec.id)}
            className="group flex items-center gap-2.5 py-1 px-1 cursor-pointer focus:outline-none"
            title={`Jump to ${sec.label}`}
          >
            {/* Label preview on hover or active */}
            <span
              className={`text-[10px] font-mono uppercase tracking-wider transition-all duration-300 ${
                isActive
                  ? 'opacity-100 text-[#171717] dark:text-[#FAFAFA] font-medium translate-x-0'
                  : 'opacity-0 group-hover:opacity-100 text-[#737373] dark:text-[#A3A3A3] translate-x-1'
              }`}
            >
              {sec.label}
            </span>

            {/* Dot */}
            <span
              className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                isActive
                  ? 'bg-[#171717] dark:bg-[#FAFAFA] border-[#171717] dark:border-[#FAFAFA] scale-125 shadow-xs'
                  : 'bg-[#F5F5F5] dark:bg-[#171717] border-[#A3A3A3]/50 group-hover:border-[#171717] dark:group-hover:border-[#FAFAFA]'
              }`}
            />
          </button>
        );
      })}
    </aside>
  );
};
