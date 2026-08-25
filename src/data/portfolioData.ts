import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Vaishnav Thorwat",
  title: "Data & AI Engineer | Analytics, Machine Learning & GenAI",
  headline: "Turning data into useful products",
  shortSummary: "B.E. graduate in Artificial Intelligence & Data Science with internship experience in data analysis and data science, plus hands-on projects in Python, SQL, machine learning, NLP, RAG, and multi-agent systems. Currently seeking Data Analyst, Product Analyst, and junior AI/ML opportunities.",
  email: "thorwatvaishnav25@gmail.com",
  github: "https://github.com/VaishnavThorwat",
  githubUsername: "VaishnavThorwat",
  linkedin: "https://linkedin.com/in/vaishnav-thorwat",
  linkedinUsername: "vaishnav-thorwat",
  status: "Open to Data / Product Analytics, Junior AI/ML & Remote / Relocation",
  resumeUrl: "https://drive.google.com/file/d/12ZXI6sa1IB4AuOnckEvtq_rl2PKYfLRa/view?usp=sharing",
  targetRoles: "Data Analyst / Product Analyst / Junior AI/ML Engineer",
  bioParagraph1: "I am a 2025 Artificial Intelligence & Data Science graduate who works at the intersection of analytics, machine learning, and intelligent applications. My foundation is practical: data cleaning and exploratory analysis, SQL and Python workflows, model experimentation, and clear technical documentation.",
  bioParagraph2: "I am building toward AI/ML engineering through projects in NLP, RAG, multi-agent systems, and LLM evaluation. I am currently looking for analytical or junior AI/ML roles where I can contribute immediately, learn from production work, and grow toward reliable machine-learning systems.",
};

export const EDUCATION: EducationItem = {
  degree: "B.E. in Artificial Intelligence & Data Science",
  institution: "Mumbai University — Terna Engineering College",
  period: "Graduated July 2025",
  details: "Coursework includes Machine Learning, Deep Learning, Natural Language Processing, Data Mining, Data Structures & Algorithms, Probability & Statistics, and Database Management Systems.",
  score: "CGPA: 7.2/10",
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Prompt Engineering for ChatGPT",
    issuer: "Coursera",
    date: "Feb 2026",
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Analytics & BI",
    iconName: "BarChart3",
    skills: [
      { name: "SQL", tag: "CORE" },
      { name: "Power BI", tag: "DASHBOARDS" },
      { name: "Python", tag: "ANALYSIS" },
      { name: "Pandas", tag: "DATA WRANGLING" },
      { name: "NumPy" },
      { name: "Exploratory Data Analysis" },
      { name: "Data Storytelling" },
    ]
  },
  {
    title: "Product & Decision Analysis",
    iconName: "TrendingUp",
    skills: [
      { name: "KPI Definition", tag: "FOUNDATION" },
      { name: "Funnel Analysis" },
      { name: "Segmentation" },
      { name: "Hypothesis Testing" },
      { name: "Root-Cause Analysis" },
      { name: "Recommendation Writing" },
    ]
  },
  {
    title: "Machine Learning & NLP",
    iconName: "BrainCircuit",
    skills: [
      { name: "scikit-learn", tag: "MODELING" },
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "Hugging Face Transformers" },
      { name: "NLTK" },
      { name: "Feature Engineering" },
      { name: "Model Evaluation" },
    ]
  },
  {
    title: "RAG, Agents & LLM Applications",
    iconName: "Bot",
    skills: [
      { name: "LangChain", tag: "CORE" },
      { name: "LlamaIndex", tag: "CORE" },
      { name: "CrewAI", tag: "MULTI-AGENT" },
      { name: "FAISS" },
      { name: "ChromaDB" },
      { name: "OpenAI / Gemini APIs" },
      { name: "Prompt Engineering" },
    ]
  },
  {
    title: "Testing & Delivery",
    iconName: "CheckCircle2",
    skills: [
      { name: "pytest", tag: "TESTING" },
      { name: "DeepEval", tag: "LLM EVALUATION" },
      { name: "FastAPI" },
      { name: "Streamlit" },
      { name: "Docker" },
      { name: "Git & GitHub" },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "autonomous-pr-review-agent",
    title: "Autonomous PR Review Agent",
    category: "Agents",
    subtitle: "Multi-agent pull-request review and security workflow",
    description: "A three-agent CrewAI pipeline that reviews pull requests for code quality and security concerns, produces structured JSON at each stage, and generates a final Markdown decision.",
    techStack: ["CrewAI", "Gemini 2.0 Flash", "Streamlit", "OWASP", "Python", "Git"],
    highlights: [
      "Designed a three-agent workflow with developer, security, and technical-lead responsibilities.",
      "Used web tools to ground security findings in current OWASP guidance rather than relying only on static prompts.",
      "Built a Streamlit dashboard with severity labels, per-agent status, and a readable review output for non-CLI users."
    ],
    githubUrl: "https://github.com/VaishnavThorwat/Autonomous-Code-Review-Agent",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    architectureDetails: "Pull-request input → specialized review agents → structured intermediate outputs → final Markdown decision → Streamlit view",
    featured: true
  },
  {
    id: "multi-index-rag-research-agent",
    title: "Multi-Index RAG Research Agent",
    category: "RAG",
    subtitle: "Dual-index retrieval for multi-document research",
    description: "A retrieval-augmented generation pipeline that combines semantic retrieval and hierarchical summarization, then routes questions according to the information need.",
    techStack: ["LlamaIndex", "LangChain", "FAISS", "Python", "Gemini 2.0 Flash"],
    highlights: [
      "Architected VectorStoreIndex and SummaryIndex over a shared StorageContext to avoid index drift on reload.",
      "Enriched text nodes with generated questions before indexing and used controlled chunking for long documents.",
      "Added batched ingestion and cooldown handling after identifying free-tier rate-limit constraints."
    ],
    githubUrl: "https://github.com/VaishnavThorwat/Multi-Index-Knowledge-Orchestrator",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    architectureDetails: "Document ingestion → node enrichment → vector and summary indexes → query routing → retrieved context → response synthesis",
    featured: true
  },
  {
    id: "ai-mock-interview-coach",
    title: "AI Mock Interview Coach + LLM Evaluation Suite",
    category: "Eval & Testing",
    subtitle: "Multi-agent interview workflow with evaluation coverage",
    description: "A three-agent CLI that conducts turn-by-turn mock interviews and evaluates answers against a five-dimension rubric, supported by deterministic tests for edge cases and report structure.",
    techStack: ["CrewAI", "LiteLLM", "Groq", "pytest", "DeepEval", "Python"],
    highlights: [
      "Connected research, interviewing, and evaluation agents into a turn-by-turn workflow using real user input.",
      "Defined scoring across clarity, depth, relevance, evidence, and role fit.",
      "Built DeepEval checks and pytest fixtures for feedback quality, score justification, blank answers, and skipped answers."
    ],
    githubUrl: "https://github.com/VaishnavThorwat/AI_Mock_Interview_Coach_Multi-Agent_System",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    architectureDetails: "Role research → live interview loop → rubric-based evaluation → quality checks → coaching report",
    featured: true
  },
  {
    id: "safespace-cyberbullying-detector",
    title: "SafeSpace: Cyberbullying Detector",
    category: "Deep Learning",
    subtitle: "Hinglish text classification with a chat demonstration",
    description: "A binary cyberbullying classification project using a hybrid CNN-BiLSTM model trained on more than 21,000 Hinglish conversational entries, paired with a socket-based chat demonstration.",
    techStack: ["TensorFlow", "Keras", "CNN-BiLSTM", "NLP", "Python Sockets", "NLTK"],
    highlights: [
      "Built a preprocessing workflow covering tokenization, stopword removal, and sequence padding.",
      "Trained a hybrid CNN-BiLSTM classifier and reported approximately 91% validation accuracy.",
      "Connected model inference to a Python socket-based multi-room chat demonstration."
    ],
    githubUrl: "https://github.com/VaishnavThorwat/SafeSpace__Digital_Behaviour_Monitor",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    architectureDetails: "Text preprocessing → padded sequences → CNN feature extraction → BiLSTM context modeling → binary classification → chat inference",
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
    description: "Performed exploratory analysis on restaurant data and communicated findings through reports and visualizations.",
    highlights: [
      "Analyzed cuisine trends, price ranges, ratings, and geographic patterns in a restaurant dataset.",
      "Used Python, pandas, and Matplotlib to clean, explore, and visualize the data.",
      "Delivered structured insight reports based on the observed patterns."
    ],
    skills: ["Python", "Pandas", "Matplotlib", "EDA", "Data Reporting"]
  },
  {
    id: "coincent-internship",
    role: "Data Science Intern",
    company: "Coincent.ai",
    period: "Oct 2023 – Dec 2023",
    location: "Remote",
    description: "Applied supervised and unsupervised learning techniques to structured data projects.",
    highlights: [
      "Applied Lasso and Ridge regression across 128 variables to identify the top 20 house-price predictors.",
      "Built a hierarchical clustering project and interpreted its dendrogram output.",
      "Practiced feature selection and model-oriented analysis with Python and scikit-learn."
    ],
    skills: ["Python", "scikit-learn", "Regression", "Clustering", "Feature Selection"]
  }
];
