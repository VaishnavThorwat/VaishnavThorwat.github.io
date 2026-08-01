import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bot,
  BrainCircuit,
  Database,
  CheckCircle2,
  Code2,
  Terminal,
  Search,
  Sparkles,
  ArrowUpRight,
  Layers
} from 'lucide-react';
import { Reveal } from './Reveal';
import { MagneticButton } from './MagneticButton';

interface SkillItem {
  name: string;
  level?: string;
  tag?: string;
}

const badgeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const badgeItemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

interface SkillCategory {
  id: string;
  indexNumber: string;
  title: string;
  headlineTitle: string;
  subtitle: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES_DATA: SkillCategory[] = [
  {
    id: 'llm-agents',
    indexNumber: '01',
    title: 'LLM & Multi-Agent Orchestration.',
    headlineTitle: 'LLM & Multi-Agent Systems',
    subtitle: 'Core Focus / Active Domain',
    iconName: 'Bot',
    description:
      'Engineering state-of-the-art autonomous multi-agent workflows with CrewAI, LlamaIndex, and LangChain. Specialized in prompt engineering, context window optimization, and sub-second inference using Gemini 2.0 Flash, Groq LLaMA 3.3 70B, and OpenAI models.',
    skills: [
      { name: 'LangChain', level: 'Expert', tag: 'CORE' },
      { name: 'LlamaIndex', level: 'Expert', tag: 'CORE' },
      { name: 'CrewAI', level: 'Advanced', tag: 'MULTI-AGENT' },
      { name: 'OpenAI API', level: 'Advanced' },
      { name: 'Gemini 2.0 / 2.5', level: 'Advanced', tag: 'FAST LLM' },
      { name: 'Groq / LLaMA 3.3 70B', level: 'Advanced', tag: 'LOW LATENCY' },
      { name: 'LiteLLM', level: 'Proficient' },
      { name: 'Ollama', level: 'Proficient' },
      { name: 'Prompt Engineering', level: 'Expert', tag: 'PATTERNS' },
    ],
  },
  {
    id: 'ml-dl',
    indexNumber: '02',
    title: 'Machine Learning & Deep Learning.',
    headlineTitle: 'Machine Learning & Deep Learning',
    subtitle: 'Neural Networks & NLP',
    iconName: 'BrainCircuit',
    description:
      'Designing and training custom neural network architectures including hybrid CNN-BiLSTM text classifiers for toxic content detection. Experienced in feature engineering, sentiment analysis, and transformer fine-tuning.',
    skills: [
      { name: 'TensorFlow', level: 'Advanced' },
      { name: 'Keras', level: 'Advanced' },
      { name: 'scikit-learn', level: 'Advanced', tag: 'MODELS' },
      { name: 'Hugging Face Transformers', level: 'Advanced', tag: 'NLP' },
      { name: 'NLTK', level: 'Proficient' },
    ],
  },
  {
    id: 'data-vector',
    indexNumber: '03',
    title: 'Data & Vector Engines.',
    headlineTitle: 'Data & Vector Retrieval',
    subtitle: 'High-Density RAG Indexing',
    iconName: 'Database',
    description:
      'Architecting high-density vector indices and hybrid semantic-keyword retrieval systems with FAISS and ChromaDB. Optimized for minimal token bloat, zero hallucination rates, and rapid document chunk embedding.',
    skills: [
      { name: 'FAISS', level: 'Advanced', tag: 'VECTOR DB' },
      { name: 'ChromaDB', level: 'Advanced', tag: 'VECTOR DB' },
      { name: 'Vector Embeddings', level: 'Expert' },
      { name: 'TF-IDF & BM25', level: 'Proficient' },
      { name: 'Pandas', level: 'Expert' },
      { name: 'NumPy', level: 'Expert' },
    ],
  },
  {
    id: 'testing-eval',
    indexNumber: '04',
    title: 'Testing & LLM Evaluation.',
    headlineTitle: 'Testing & LLM Evaluation',
    subtitle: 'Automated QA & Metric Suites',
    iconName: 'CheckCircle2',
    description:
      'Eliminating model hallucinations and guaranteeing deterministic behavior with automated LLM test suites. Utilizing DeepEval and pytest to continuously measure answer faithfulness, context relevance, and tone compliance.',
    skills: [
      { name: 'pytest', level: 'Advanced', tag: 'AUTOMATION' },
      { name: 'DeepEval', level: 'Advanced', tag: 'EVAL SUITE' },
      { name: 'Faithfulness Metrics', level: 'Expert' },
      { name: 'Relevancy Benchmarks', level: 'Expert' },
    ],
  },
  {
    id: 'languages-devops',
    indexNumber: '05',
    title: 'Programming Languages & Backend.',
    headlineTitle: 'Languages & Microservices',
    subtitle: 'Production Infrastructure',
    iconName: 'Code2',
    description:
      'Developing robust, concurrent REST endpoints with FastAPI and Python. Implementing containerized microservice deployments with Docker, relational database schema design, and interactive UI dashboards with Streamlit.',
    skills: [
      { name: 'Python', level: 'Expert', tag: 'PRIMARY' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'FastAPI', level: 'Advanced', tag: 'BACKEND' },
      { name: 'Docker', level: 'Proficient', tag: 'DEPLOYMENT' },
      { name: 'Streamlit', level: 'Advanced', tag: 'UI DASHBOARD' },
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'Jupyter Notebooks', level: 'Expert' },
    ],
  },
];

export const SkillsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#FAFAFA]" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-[#FAFAFA]" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-[#FAFAFA]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#FAFAFA]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-[#FAFAFA]" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#FAFAFA]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#FAFAFA]" />;
    }
  };

  const activeCategory = SKILL_CATEGORIES_DATA[activeIndex] || SKILL_CATEGORIES_DATA[0];

  return (
    <section id="skills" className="min-h-screen lg:h-screen flex flex-col justify-center py-8 lg:py-0 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-[#8A8A8A] dark:text-[#A3A3A3] mb-1 block flex items-center gap-2">
                <span className="w-4 h-[1px] bg-[#A3A3A3]" />
                Technical Capabilities
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#171717] dark:text-[#FAFAFA]">
                Core <em className="italic text-[#737373] dark:text-[#A3A3A3]">Capabilities</em>
              </h2>
            </div>

            {/* Quick Filter Search - Lumora Rounded Pill Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#737373] dark:text-[#A3A3A3]" />
              <input
                type="text"
                placeholder="Filter stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs font-mono rounded-full border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5] dark:bg-[#171717] text-[#171717] dark:text-[#FAFAFA] placeholder:text-[#737373] dark:placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#737373] dark:focus:border-[#FAFAFA] transition-all"
              />
            </div>
          </div>
        </Reveal>

        {/* Split-Screen Grid Layout (Desktop lg+) */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-10 items-center relative">
          
          {/* Left Column (Skill List): 50% (~6 cols) */}
          <div className="lg:col-span-6 space-y-4 py-2">
            {SKILL_CATEGORIES_DATA.map((cat, idx) => {
              const isActive = activeIndex === idx;
              const hasMatchingSkill = searchQuery
                ? cat.skills.some((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
                : false;

              return (
                <div
                  key={cat.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className="group cursor-pointer transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    {/* Active Accent Indicator Dot & Index cluster with Magnetic Effect */}
                    <MagneticButton maxDisplacement={4}>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            isActive
                              ? 'bg-[#171717] dark:bg-[#FAFAFA] scale-125'
                              : 'bg-[#E5E5E5] dark:bg-[#262626] group-hover:bg-[#A3A3A3]'
                          }`}
                        />
                        <span className="font-mono text-sm text-[#737373] dark:text-[#A3A3A3]">
                          0{idx + 1}
                        </span>
                      </div>
                    </MagneticButton>

                    {/* Skill Category Title */}
                    <h3
                      className={`font-serif text-2xl xl:text-3xl font-light tracking-tight transition-all duration-300 ${
                        isActive
                          ? 'text-[#171717] dark:text-[#FAFAFA] translate-x-1 font-normal'
                          : hasMatchingSkill
                          ? 'text-[#171717] dark:text-[#FAFAFA] font-medium'
                          : 'text-[#737373] dark:text-[#A3A3A3]/70 hover:text-[#171717] dark:hover:text-[#FAFAFA]'
                      }`}
                    >
                      {cat.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (Sticky Information Card): 50% (~6 cols) */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="relative p-7 rounded-2xl border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5]/90 dark:bg-[#171717]/90 backdrop-blur-md shadow-xl"
              >
                {/* Top Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E5E5E5] dark:border-[#262626]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#171717] dark:bg-[#262626] border border-[#E5E5E5] dark:border-[#373737]">
                      {getIcon(activeCategory.iconName)}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#737373] dark:text-[#A3A3A3]">
                      {activeCategory.subtitle}
                    </span>
                  </div>

                  <span className="font-serif text-2xl text-[#737373] dark:text-[#A3A3A3]">
                    0{activeIndex + 1}
                  </span>
                </div>

                {/* Headline Title & Description */}
                <h4 className="font-serif text-2xl font-normal text-[#171717] dark:text-[#FAFAFA] mb-2">
                  {activeCategory.headlineTitle}
                </h4>

                <p className="text-xs font-sans text-[#404040] dark:text-[#D4D4D4] leading-relaxed mb-5 font-light">
                  {activeCategory.description}
                </p>

                {/* Tech Badges Container */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-[#737373] dark:text-[#A3A3A3] uppercase tracking-widest flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#737373] dark:text-[#A3A3A3]" />
                      <span>Active Technologies</span>
                    </span>
                  </div>

                  <motion.div
                    variants={badgeContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap gap-2"
                  >
                    {activeCategory.skills.map((skill, sIdx) => {
                      const isMatched =
                        searchQuery &&
                        skill.name.toLowerCase().includes(searchQuery.toLowerCase());

                      return (
                        <motion.div
                          key={sIdx}
                          variants={badgeItemVariants}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-full border transition-all ${
                            isMatched
                              ? 'bg-[#171717] text-[#FAFAFA] dark:bg-[#FAFAFA] dark:text-[#0A0A0A] border-transparent font-medium'
                              : 'bg-[#FFFFFF] dark:bg-[#0A0A0A] text-[#171717] dark:text-[#FAFAFA] border-[#E5E5E5] dark:border-[#262626] hover:border-[#A3A3A3]'
                          }`}
                        >
                          <span>{skill.name}</span>
                          {skill.tag && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#E5E5E5] dark:bg-[#262626] text-[#171717] dark:text-[#FAFAFA] uppercase font-mono">
                              {skill.tag}
                            </span>
                          )}
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-3">
          {SKILL_CATEGORIES_DATA.map((cat, idx) => {
            const isSelected = activeIndex === idx;

            return (
              <div
                key={cat.id}
                className="rounded-xl border border-[#E5E5E5] dark:border-[#262626] bg-[#F5F5F5] dark:bg-[#171717] overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(isSelected ? -1 : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#737373] dark:text-[#A3A3A3]">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-lg text-[#171717] dark:text-[#FAFAFA]">
                      {cat.headlineTitle}
                    </h3>
                  </div>

                  <div className="p-1 rounded bg-[#E5E5E5] dark:bg-[#262626]">
                    {getIcon(cat.iconName)}
                  </div>
                </button>

                {isSelected && (
                  <div className="p-4 pt-0 border-t border-[#E5E5E5] dark:border-[#262626] space-y-3">
                    <p className="text-xs font-sans text-[#404040] dark:text-[#D4D4D4] leading-relaxed">
                      {cat.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1 px-3 py-1 text-xs font-mono rounded-full bg-[#FFFFFF] dark:bg-[#0A0A0A] text-[#171717] dark:text-[#FAFAFA] border border-[#E5E5E5] dark:border-[#262626]"
                        >
                          <span>{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

