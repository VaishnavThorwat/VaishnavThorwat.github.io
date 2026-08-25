import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="min-h-screen lg:h-screen flex flex-col justify-center py-8 lg:py-0 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-[#8A8A8A] dark:text-[#A3A3A3] mb-1 block flex items-center gap-2">
                <span className="w-4 h-[1px] bg-[#A3A3A3]" />
                Connect &amp; Recruit
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#171717] dark:text-[#FAFAFA]">
                Get In <em className="italic text-[#737373] dark:text-[#A3A3A3]">Touch</em>
              </h2>
            </div>

            <p className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3] max-w-md uppercase tracking-wider">
              Open for remote opportunities &amp; relocation worldwide.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Email Copy Box */}
            <Reveal delay={100}>
              <div className="p-6 rounded-2xl border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5]/80 dark:bg-[#171717]/80 shadow-md">
                <span className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3] uppercase tracking-wider block mb-1">
                  Primary Contact
                </span>
                <h3 className="font-serif text-2xl font-light text-[#171717] dark:text-[#FAFAFA] mb-3">
                  Let's Build Something Impactful
                </h3>

                <div className="flex items-center gap-2 p-2 rounded-full bg-[#FFFFFF] dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-[#262626] mb-1">
                  <Mail className="w-4 h-4 text-[#737373] dark:text-[#A3A3A3] shrink-0 ml-2" />
                  <span className="text-xs font-mono text-[#171717] dark:text-[#FAFAFA] truncate flex-1">
                    {PERSONAL_INFO.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3.5 py-1.5 rounded-full bg-[#171717] text-[#FAFAFA] dark:bg-[#FAFAFA] dark:text-[#0A0A0A] text-xs font-mono hover:opacity-90 transition-opacity flex items-center gap-1 cursor-pointer shrink-0 font-medium"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Social Channels List */}
            <Reveal delay={200}>
              <div className="p-6 rounded-2xl border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5]/80 dark:bg-[#171717]/80 space-y-2 shadow-md">
                <span className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3] uppercase tracking-wider block mb-1">
                  Professional Channels
                </span>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#FFFFFF] dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-[#262626] hover:border-[#A3A3A3] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-[#171717] dark:text-[#FAFAFA]" />
                    <div>
                      <span className="text-xs font-mono text-[#171717] dark:text-[#FAFAFA] block">
                        GitHub Profile
                      </span>
                      <span className="text-[11px] font-mono text-[#737373] dark:text-[#A3A3A3]">
                        {PERSONAL_INFO.githubUsername}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#737373] dark:text-[#A3A3A3]" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#FFFFFF] dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-[#262626] hover:border-[#A3A3A3] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-[#737373] dark:text-[#A3A3A3]" />
                    <div>
                      <span className="text-xs font-mono text-[#171717] dark:text-[#FAFAFA] block">
                        LinkedIn Network
                      </span>
                      <span className="text-[11px] font-mono text-[#737373] dark:text-[#A3A3A3]">
                        {PERSONAL_INFO.linkedinUsername}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#737373] dark:text-[#A3A3A3]" />
                </a>

              </div>
            </Reveal>

            {/* Availability Badge */}
            <Reveal delay={300}>
              <div className="p-3.5 rounded-xl bg-[#F5F5F5] dark:bg-[#171717] border border-[#E5E5E5] dark:border-[#262626] flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#737373] dark:text-[#A3A3A3] shrink-0" />
                <div className="text-xs font-mono">
                  <span className="text-[#171717] dark:text-[#FAFAFA] block">
                    Mumbai, India · Ready for Immediate Remote / Relocation
                  </span>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <div className="p-6 sm:p-7 rounded-2xl border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5]/80 dark:bg-[#171717]/80 shadow-md">
                <h3 className="font-serif text-2xl font-light text-[#171717] dark:text-[#FAFAFA] mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3] mb-4">
                  Have an AI project or technical opportunity? Send a note below.
                </p>

                {formSubmitted ? (
                  <div className="p-6 bg-[#FFFFFF] dark:bg-[#0A0A0A] rounded-xl border border-[#E5E5E5] dark:border-[#262626] text-center space-y-2">
                    <Sparkles className="w-6 h-6 text-[#171717] dark:text-[#FAFAFA] mx-auto" />
                    <h4 className="font-serif text-xl text-[#171717] dark:text-[#FAFAFA]">
                      Message Sent!
                    </h4>
                    <p className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3]">
                      Thank you for connecting, {formData.name || 'friend'}. I will review your message and reply via email shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 font-mono text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[#171717] dark:text-[#FAFAFA] mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Morgan"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-xl border border-[#E5E5E5] dark:border-[#262626] bg-[#FFFFFF] dark:bg-[#0A0A0A] text-[#171717] dark:text-[#FAFAFA] placeholder:text-[#737373] dark:placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#A3A3A3]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#171717] dark:text-[#FAFAFA] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. alex@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-xl border border-[#E5E5E5] dark:border-[#262626] bg-[#FFFFFF] dark:bg-[#0A0A0A] text-[#171717] dark:text-[#FAFAFA] placeholder:text-[#737373] dark:placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#A3A3A3]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#171717] dark:text-[#FAFAFA] mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. AI Engineer Opportunity"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl border border-[#E5E5E5] dark:border-[#262626] bg-[#FFFFFF] dark:bg-[#0A0A0A] text-[#171717] dark:text-[#FAFAFA] placeholder:text-[#737373] dark:placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#A3A3A3]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#171717] dark:text-[#FAFAFA] mb-1">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Share details about your team, role, or project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl border border-[#E5E5E5] dark:border-[#262626] bg-[#FFFFFF] dark:bg-[#0A0A0A] text-[#171717] dark:text-[#FAFAFA] placeholder:text-[#737373] dark:placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#A3A3A3] resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 px-6 rounded-full bg-[#171717] text-[#FAFAFA] dark:bg-[#FAFAFA] dark:text-[#0A0A0A] font-mono text-xs hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer font-medium shadow-xs"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}

              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
};

