import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Vaishnav Thorwat",
  title: "AI & Data Science Engineer — Building Production-Grade GenAI Systems",
  headline: "Building Production-Grade GenAI Systems",
  shortSummary: "Specializing in LLM application development, multi-agent orchestration, and RAG pipelines to construct resilient, high-performance GenAI solutions. B.E. graduate in AI & Data Science from Mumbai University, actively seeking Junior AI Engineer and Applied AI roles.",
  email: "thorwatvaishnav25@gmail.com",
  github: "https://github.com/VaishnavThorwat",
  githubUsername: "VaishnavThorwat",
  linkedin: "https://linkedin.com/in/vaishnav-thorwat",
  linkedinUsername: "vaishnav-thorwat",
  status: "Open to Remote / Relocation",
  resumeUrl: "https://drive.google.com/file/d/12ZXI6sa1IB4AuOnckEvtq_rl2PKYfLRa/view?usp=sharing",
  targetRoles: "Actively seeking Junior AI Engineer / LLM Application Developer / Applied AI roles",
  bioParagraph1: "I am an AI & Data Science Engineer driven by the challenge of moving GenAI from experimental prototypes to robust, production-grade applications. My expertise spans autonomous multi-agent orchestration, dense and hybrid RAG architecture, and rigorous LLM evaluation frameworks. I build intelligent agents that do real work—from automated code security analysis to multi-index document synthesis.",
  bioParagraph2: "With a strong technical base in Python, PyTorch, LangChain, and vector engines, I focus on optimizing token latency, eliminating model hallucinations, and ensuring determinism through automated evaluation testing.",
};

export const EDUCATION: EducationItem = {
  degree: "B.E. in Artificial Intelligence & Data Science",
  institution: "Mumbai University — Terna Engineering College",
  period: "Graduated July 2025",
  details: "Comprehensive coursework in Deep Learning, Natural Language Processing, Autonomous Multi-Agent Systems, Data Structures & Algorithms, and Database Management Systems."
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Prompt Engineering for ChatGPT",
    issuer: "Coursera (Vanderbilt University)",
    date: "Feb 2026",
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    iconName: "Code2",
    skills: [
      { name: "Python", level: "Expert", tag: "Primary" },
      { name: "SQL", level: "Advanced" },
    ]
  },
  {
    title: "LLM & Multi-Agent Orchestration",
    iconName: "Bot",
    skills: [
      { name: "LangChain", level: "Expert", tag: "Core" },
      { name: "LlamaIndex", level: "Expert", tag: "Core" },
      { name: "CrewAI", level: "Advanced", tag: "Multi-Agent" },
      { name: "OpenAI API", level: "Advanced" },
      { name: "Gemini 2.0 / 2.5", level: "Advanced" },
      { name: "Groq / LLaMA 3.3 70B", level: "Advanced" },
      { name: "LiteLLM", level: "Proficient" },
      { name: "Ollama", level: "Proficient" },
      { name: "Prompt Engineering", level: "Expert" }
    ]
  },
  {
    title: "Machine Learning & Deep Learning",
    iconName: "BrainCircuit",
    skills: [
      { name: "TensorFlow", level: "Advanced" },
      { name: "Keras", level: "Advanced" },
      { name: "scikit-learn", level: "Advanced" },
      { name: "Hugging Face Transformers", level: "Advanced" },
      { name: "NLTK", level: "Proficient" }
    ]
  },
  {
    title: "Data & Vector Engines",
    iconName: "Database",
    skills: [
      { name: "FAISS", level: "Advanced", tag: "Vector DB" },
      { name: "ChromaDB", level: "Advanced", tag: "Vector DB" },
      { name: "Vector Embeddings", level: "Expert" },
      { name: "TF-IDF", level: "Proficient" },
      { name: "Pandas", level: "Expert" },
      { name: "NumPy", level: "Expert" }
    ]
  },
  {
    title: "Testing & LLM Evaluation",
    iconName: "CheckCircle2",
    skills: [
      { name: "pytest", level: "Advanced" },
      { name: "DeepEval", level: "Advanced", tag: "Eval Suite" }
    ]
  },
  {
    title: "Dev & Deployment",
    iconName: "Terminal",
    skills: [
      { name: "FastAPI", level: "Advanced" },
      { name: "Docker", level: "Proficient" },
      { name: "Streamlit", level: "Advanced" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Jupyter Notebooks", level: "Expert" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "autonomous-pr-review-agent",
    title: "Autonomous PR Review Agent",
    category: "Agents",
    subtitle: "Automated Pull Request Code Security & OWASP Audit Pipeline",
    description: "An autonomous multi-agent code analysis pipeline built using CrewAI and Gemini 2.0 Flash. The system assigns specialized agent roles (Code Reviewer, Security Auditor, Compliance Inspector) to analyze incoming Pull Requests, scan for OWASP top 10 vulnerabilities, verify dependencies against live CVE databases, and render interactive patch suggestions.",
    techStack: ["CrewAI", "Gemini 2.0 Flash", "Streamlit", "OWASP", "Python", "Git"],
    highlights: [
      "Built a 3-agent autonomous workflow for automated Pull Request security, code smell, and compliance auditing.",
      "Integrated live CVE database lookups to flag vulnerable dependencies and risky code patterns before deployment.",
      "Features interactive Streamlit dashboard rendering actionable inline code patch suggestions and severity metrics."
    ],
    githubUrl: "https://github.com/VaishnavThorwat/Autonomous-PR-Review-Agent",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    architectureDetails: "CrewAI Multi-Agent Task Graph → Git Diff Parser → Gemini 2.0 Flash Context Analyzer → NVD CVE Database API → Streamlit Visual Inspector",
    featured: true
  },
  {
    id: "multi-index-rag-research-agent",
    title: "Multi-Index RAG Research Agent",
    category: "RAG",
    subtitle: "Dense & Hybrid Summary Retrieval Engine for Complex Research Corpora",
    description: "A dual-index retrieval-augmented generation engine designed for dense academic papers and multi-document technical reports. Built with LlamaIndex and LangChain, it constructs separate vector indices for granular passage retrieval and hierarchical document summaries, dynamically routing user queries to minimize context bloat and hallucination.",
    techStack: ["LlamaIndex", "LangChain", "FAISS", "Python", "OpenAI Embeddings"],
    highlights: [
      "Architected dual-index dense/summary retrieval pipeline for querying massive unstructured multi-document research corpora.",
      "Applied hybrid keyword and semantic vector search with sub-document reranking to cut hallucination rates.",
      "Reduced token latency by ~40% through intelligent prompt routing and contextual query decomposition."
    ],
    githubUrl: "https://github.com/VaishnavThorwat/Multi-Index-Knowledge-Orchestrator",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    architectureDetails: "Document Ingestion → Summary Index + FAISS Dense Vector Index → LlamaIndex Query Router → Hybrid Re-Ranker → LLM Synthesizer",
    featured: true
  },
  {
    id: "ai-mock-interview-coach",
    title: "AI Mock Interview Coach + LLM Evaluation Suite",
    category: "Eval & Testing",
    subtitle: "Ultra-Low Latency Interview Simulator with Automated Quality Testing",
    description: "An end-to-end adaptive technical interview platform powered by LLaMA 3.3 70B via Groq for sub-second inference. Combined with a CI/CD-integrated LLM evaluation suite using DeepEval and pytest to quantify response correctness, hallucination scores, and interviewing tone compliance across multi-turn sessions.",
    techStack: ["CrewAI", "LiteLLM", "Groq", "pytest", "DeepEval", "Streamlit"],
    highlights: [
      "Designed real-time adaptive technical interview simulator powered by LLaMA 3.3 70B via Groq for ultra-low latency response.",
      "Implemented rigorous automated LLM evaluation pipeline utilizing DeepEval & pytest to measure answer faithfulness, relevance, and tone bias.",
      "Managed dynamic model switching via LiteLLM abstraction layer to ensure high uptime and fallback handling."
    ],
    githubUrl: "https://github.com/VaishnavThorwat/AI_Mock_Interview_Coach_Multi-Agent_System",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    architectureDetails: "Groq LLaMA 3.3 Engine ← LiteLLM Proxy → CrewAI Interview Coach → DeepEval Automated Metrics Runner (Faithfulness, Relevancy, Bias)",
    featured: true
  },
  {
    id: "safespace-cyberbullying-detector",
    title: "SafeSpace: Cyberbullying Detector",
    category: "Deep Learning",
    subtitle: "Real-Time Multilingual & Hinglish Toxic Text Classification System",
    description: "A deep learning moderation platform trained on code-switched Hinglish and multilingual social media comments. Combines Spatial CNN feature extractors with Bidirectional LSTM sequential layers to detect nuanced online harassment, hate speech, and toxicity with high precision.",
    techStack: ["TensorFlow", "Keras", "CNN-BiLSTM", "Socket.io", "Python", "NLTK"],
    highlights: [
      "Trained hybrid CNN-BiLSTM deep learning architecture achieving ~91% classification accuracy on toxic Hinglish/multilingual text.",
      "Engineered custom NLP tokenization and embedding pipeline handling informal code-switched social media text patterns.",
      "Built real-time socket-based chat application demo providing instantaneous message moderation and toxicity alerts."
    ],
    githubUrl: "https://github.com/VaishnavThorwat/SafeSpace__Digital_Behaviour_Monitor",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    architectureDetails: "Text Preprocessing & Embedding → 1D Conv Layer (Local Pattern) → BiLSTM (Context Sequence) → Softmax Classification → Socket.io Realtime Relay",
    featured: true
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "cognifyz-internship",
    role: "Data Analysis Intern",
    company: "Cognifyz Technologies",
    period: "Feb 2025 – Mar 2025",
    location: "Remote",
    description: "Spearheaded exploratory data analysis and data transformation pipelines on high-volume datasets.",
    highlights: [
      "Processed complex relational datasets using Python & Pandas, automating data cleaning and exploratory analysis workflows.",
      "Generated structured analytical reports and visualizations to identify operational trends and key performance indicators.",
      "Optimized SQL queries and Python data frames to reduce data aggregation execution times."
    ],
    skills: ["Python", "Pandas", "NumPy", "SQL", "Data Visualization", "EDA"]
  },
  {
    id: "coincent-internship",
    role: "Data Science Intern",
    company: "Coincent.ai",
    period: "Oct 2023 – Dec 2023",
    location: "Remote",
    description: "Supported predictive analytics initiatives and machine learning baseline model implementations.",
    highlights: [
      "Developed baseline machine learning regression and classification models using scikit-learn for user behavior analytics.",
      "Engineered tabular dataset features and performed statistical hypothesis testing to validate feature importance.",
      "Constructed interactive data dashboards using Python libraries for internal performance reporting."
    ],
    skills: ["Python", "scikit-learn", "Machine Learning", "Feature Engineering", "Data Visualization"]
  }
];
