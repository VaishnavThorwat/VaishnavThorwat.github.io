import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E5E5E5] dark:border-[#262626] py-12 bg-[#F5F5F5] dark:bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E5E5E5] dark:border-[#262626]">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#171717] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#0A0A0A] border border-[#262626] dark:border-[#E5E5E5] flex items-center justify-center font-serif text-sm font-bold">
              VT
            </span>
            <div>
              <span className="font-serif font-normal text-base text-[#171717] dark:text-[#FAFAFA] block">
                Vaishnav Thorwat
              </span>
              <span className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3]">
                AI &amp; Data Science Engineer
              </span>
            </div>
          </div>

          {/* Social Quick Icons */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[#E5E5E5] dark:border-[#262626] bg-[#FFFFFF] dark:bg-[#171717] hover:border-[#A3A3A3] transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4 text-[#171717] dark:text-[#FAFAFA]" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[#E5E5E5] dark:border-[#262626] bg-[#FFFFFF] dark:bg-[#171717] hover:border-[#A3A3A3] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-[#171717] dark:text-[#FAFAFA]" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-full border border-[#E5E5E5] dark:border-[#262626] bg-[#FFFFFF] dark:bg-[#171717] hover:border-[#A3A3A3] transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4 text-[#171717] dark:text-[#FAFAFA]" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#171717] text-[#FAFAFA] dark:bg-[#FAFAFA] dark:text-[#0A0A0A] hover:opacity-90 transition-opacity cursor-pointer ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#737373] dark:text-[#A3A3A3] gap-4">
          <p>
            © {new Date().getFullYear()} Vaishnav Thorwat. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[#171717] dark:text-[#FAFAFA]">Open to AI Engineer &amp; Agentic AI Roles</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
