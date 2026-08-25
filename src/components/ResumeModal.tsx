import React, { useState } from 'react';
import { X, Download, Copy, Check, Mail, Github, Linkedin, Award, GraduationCap, Briefcase, Code } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, CERTIFICATIONS, SKILL_CATEGORIES, PROJECTS, EXPERIENCES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const text = `
VAISHNAV THORWAT
${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}
Location: Mumbai, India (Open to Remote / Relocation)

OBJECTIVE & SUMMARY
${PERSONAL_INFO.shortSummary}

EDUCATION
${EDUCATION.degree} — ${EDUCATION.institution} (${EDUCATION.period})

CERTIFICATIONS
${CERTIFICATIONS.map(c => `${c.title} — ${c.issuer} (${c.date})`).join('\n')}

TECHNICAL SKILLS
${SKILL_CATEGORIES.map(cat => `- ${cat.title}: ${cat.skills.map(s => s.name).join(', ')}`).join('\n')}

SELECTED PROJECTS
${PROJECTS.map(p => `• ${p.title} (${p.techStack.join(', ')}):\n  ${p.highlights.join('\n  ')}`).join('\n\n')}

WORK EXPERIENCE
${EXPERIENCES.map(e => `• ${e.role} @ ${e.company} (${e.period}):\n  ${e.highlights.join('\n  ')}`).join('\n\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 no-print-backdrop">
      <div className="bg-[#F5F5F5] dark:bg-[#171717] border border-[#E5E5E5] dark:border-[#262626] rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#E5E5E5] dark:border-[#262626] flex items-center justify-between bg-[#FFFFFF] dark:bg-[#0A0A0A] no-print">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <h3 className="font-serif text-lg font-normal text-[#171717] dark:text-[#FAFAFA]">
              Vaishnav_Thorwat_Resume.pdf
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 sm:px-3.5 py-1.5 rounded-full border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5] dark:bg-[#171717] text-[#171717] dark:text-[#FAFAFA] text-xs font-mono hover:bg-[#E5E5E5] dark:hover:bg-[#262626] transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-[#737373] dark:text-[#A3A3A3]" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-[#171717] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#0A0A0A] text-xs font-mono font-medium hover:opacity-90 transition-opacity flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Open & Download PDF on Google Drive"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#F5F5F5] dark:bg-[#171717] border border-[#E5E5E5] dark:border-[#262626] hover:bg-[#E5E5E5] dark:hover:bg-[#262626] transition-colors cursor-pointer text-[#171717] dark:text-[#FAFAFA]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Content */}
        <div id="resume-printable-area" className="p-6 sm:p-10 overflow-y-auto font-sans text-[#171717] dark:text-[#FAFAFA] space-y-6 bg-[#FFFFFF] dark:bg-[#0A0A0A]">
          
          {/* Resume Header */}
          <div className="border-b pb-6 border-[#E5E5E5] dark:border-[#262626] text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="font-serif text-3xl font-light tracking-tight text-[#171717] dark:text-[#FAFAFA]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-mono text-[#737373] dark:text-[#A3A3A3] mt-1">
                {PERSONAL_INFO.title}
              </p>
            </div>

            <div className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3] space-y-1 text-left sm:text-right">
              <p>Email: {PERSONAL_INFO.email}</p>
              <p>GitHub: github.com/VaishnavThorwat</p>
              <p>LinkedIn: linkedin.com/in/vaishnav-thorwat</p>
              <p>Status: {PERSONAL_INFO.status}</p>
            </div>
          </div>

          {/* Objective */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#737373] dark:text-[#A3A3A3] border-b border-[#E5E5E5] dark:border-[#262626] pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#404040] dark:text-[#D4D4D4] leading-relaxed font-light">
              {PERSONAL_INFO.shortSummary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#737373] dark:text-[#A3A3A3] border-b border-[#E5E5E5] dark:border-[#262626] pb-1 mb-3">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {SKILL_CATEGORIES.map((cat, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-[#F5F5F5] dark:bg-[#171717] border border-[#E5E5E5] dark:border-[#262626]">
                  <strong className="text-[#171717] dark:text-[#FAFAFA] font-normal">{cat.title}:</strong>{' '}
                  <span className="text-[#737373] dark:text-[#A3A3A3]">
                    {cat.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#737373] dark:text-[#A3A3A3] border-b border-[#E5E5E5] dark:border-[#262626] pb-1 mb-3">
              Selected Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((p) => (
                <div key={p.id} className="text-xs p-3 rounded-lg bg-[#F5F5F5] dark:bg-[#171717] border border-[#E5E5E5] dark:border-[#262626]">
                  <div className="flex items-center justify-between text-[#171717] dark:text-[#FAFAFA] mb-1">
                    <span className="font-serif text-sm font-normal">{p.title}</span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#E5E5E5] dark:bg-[#262626] text-[#171717] dark:text-[#FAFAFA]">{p.category}</span>
                  </div>
                  <p className="text-[11px] font-mono text-[#737373] dark:text-[#A3A3A3] mb-2">
                    Stack: {p.techStack.join(' · ')}
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-[#404040] dark:text-[#D4D4D4] font-light">
                    {p.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#737373] dark:text-[#A3A3A3] border-b border-[#E5E5E5] dark:border-[#262626] pb-1 mb-2">
                Education
              </h2>
              <div className="text-xs space-y-0.5 font-mono">
                <p className="font-normal text-[#171717] dark:text-[#FAFAFA]">{EDUCATION.degree}</p>
                <p className="text-[#737373] dark:text-[#A3A3A3]">{EDUCATION.institution}</p>
                <p className="text-[11px] text-[#A3A3A3] dark:text-[#737373]">{EDUCATION.period}</p>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#737373] dark:text-[#A3A3A3] border-b border-[#E5E5E5] dark:border-[#262626] pb-1 mb-2">
                Certifications
              </h2>
              {CERTIFICATIONS.map((c, i) => (
                <div key={i} className="text-xs space-y-0.5 font-mono">
                  <p className="font-normal text-[#171717] dark:text-[#FAFAFA]">{c.title}</p>
                  <p className="text-[#737373] dark:text-[#A3A3A3]">{c.issuer} ({c.date})</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
