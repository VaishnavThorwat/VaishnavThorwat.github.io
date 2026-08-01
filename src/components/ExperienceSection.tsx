import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="min-h-screen lg:h-screen flex flex-col justify-center py-8 lg:py-0 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-[#8A8A8A] dark:text-[#A3A3A3] mb-1 block flex items-center gap-2">
                <span className="w-4 h-[1px] bg-[#A3A3A3]" />
                Professional Track
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#171717] dark:text-[#FAFAFA]">
                Industry <em className="italic text-[#737373] dark:text-[#A3A3A3]">Experience</em>
              </h2>
            </div>

            <p className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3] max-w-md uppercase tracking-wider">
              Data analytics · Exploratory data pipelines · Feature engineering · BI dashboards
            </p>
          </div>
        </Reveal>

        {/* Timeline Layout */}
        <div className="relative border-l border-[#E5E5E5] dark:border-[#262626] ml-4 sm:ml-6 space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full bg-[#171717] dark:bg-[#FAFAFA] transition-transform group-hover:scale-125" />

              {/* Experience Card */}
              <Reveal delay={idx * 120}>
                <div className="p-6 rounded-2xl border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5]/80 dark:bg-[#171717]/80 hover:border-[#A3A3A3] transition-all duration-200 shadow-md">
                  
                  {/* Meta Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#737373] dark:text-[#A3A3A3]">
                      <Calendar className="w-3.5 h-3.5 text-[#171717] dark:text-[#FAFAFA]" />
                      <span>{exp.period}</span>
                    </span>

                    <span className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#171717] dark:text-[#FAFAFA]" />
                      <span>{exp.location}</span>
                    </span>
                  </div>

                  {/* Role & Company */}
                  <h3 className="font-serif text-2xl font-light text-[#171717] dark:text-[#FAFAFA] mb-1">
                    {exp.role}
                  </h3>

                  <p className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3] mb-3 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#171717] dark:text-[#FAFAFA]" />
                    <span>{exp.company}</span>
                  </p>

                  <p className="text-xs font-sans font-light text-[#404040] dark:text-[#D4D4D4] leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights List */}
                  <ul className="space-y-1.5 mb-4 text-xs font-sans font-light text-[#404040] dark:text-[#D4D4D4]">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#171717] dark:bg-[#FAFAFA] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E5E5E5] dark:border-[#262626]">
                    {exp.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-[10px] font-mono rounded-full bg-[#FFFFFF] dark:bg-[#0A0A0A] text-[#171717] dark:text-[#FAFAFA] border border-[#E5E5E5] dark:border-[#262626]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                </div>
              </Reveal>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

