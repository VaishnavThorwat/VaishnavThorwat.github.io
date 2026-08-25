import React from 'react';
import { GraduationCap, Award, Brain, Terminal, ShieldCheck, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen lg:h-screen flex flex-col justify-center py-8 lg:py-0 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-[#8A8A8A] dark:text-[#A3A3A3] mb-2 block flex items-center gap-2">
                <span className="w-4 h-[1px] bg-[#A3A3A3]" />
                About Me
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#171717] dark:text-[#FAFAFA]">
                From data to <em className="italic text-[#737373] dark:text-[#A3A3A3]">intelligent</em> products
              </h2>
            </div>
            <p className="text-xs font-mono text-[#525252] dark:text-[#A3A3A3] max-w-md uppercase tracking-wider">
              Analytics · Product Thinking · Machine Learning · GenAI
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-4">
            <Reveal delay={100}>
              <div className="p-6 rounded-2xl border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5]/80 dark:bg-[#171717]/80 backdrop-blur-md shadow-xs">
                <h3 className="font-serif text-2xl font-light mb-3 text-[#171717] dark:text-[#FAFAFA] flex items-center gap-2">
                  <Brain className="w-5 h-5 text-[#737373] dark:text-[#A3A3A3]" />
                  <span>Engineering Philosophy</span>
                </h3>
                
                <div className="space-y-3 text-xs sm:text-sm font-light text-[#404040] dark:text-[#D4D4D4] leading-relaxed">
                  <p>
                    I'm Vaishnav, a 2025 Artificial Intelligence &amp; Data Science graduate from Navi Mumbai with internship experience in data analysis and data science.
                  </p>
                  <p>
                    My current work spans data exploration, machine-learning experiments, NLP, retrieval-augmented generation, multi-agent workflows, and LLM evaluation. I am looking for analytical or junior AI/ML roles where I can contribute immediately and grow toward reliable production systems.
                  </p>
                </div>

                {/* Core Tag Pills */}
                <div className="mt-5 pt-4 border-t border-[#E5E5E5] dark:border-[#262626] flex flex-wrap gap-2">
                  {['Data Analysis', 'Product Metrics', 'Machine Learning', 'NLP', 'RAG Applications', 'LLM Evaluation'].map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-[#D4D4D4] dark:border-[#373737] text-[#171717] dark:text-[#FAFAFA] bg-[#FFFFFF] dark:bg-[#262626]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Profile Picture Card - Full Uncropped Photo & No Filter */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal delay={200}>
              <div className="relative w-full max-w-xs bg-[#F5F5F5] dark:bg-[#171717] p-4 rounded-2xl border border-[#E5E5E5] dark:border-[#262626] shadow-xl">
                <div className="relative overflow-hidden rounded-xl border border-[#E5E5E5] dark:border-[#262626] bg-[#0A0A0A] flex items-center justify-center p-1">
                  <img
                    src="https://res.cloudinary.com/dwd0vw1uw/image/upload/q_auto/f_auto/v1774685385/linkedinDP_i6qgrk.png"
                    alt="Vaishnav Thorwat"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[340px] object-contain transition-transform duration-300 hover:scale-102"
                  />
                </div>
                <div className="pt-3 px-1 text-center">
                  <p className="font-serif text-lg text-[#171717] dark:text-[#FAFAFA]">
                    Vaishnav Thorwat
                  </p>
                  <p className="font-mono text-[10px] text-[#525252] dark:text-[#A3A3A3] uppercase tracking-widest mt-0.5">
                    B.E. AI &amp; Data Science · Terna Engineering College · 2025
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
};

