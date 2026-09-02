// ============================================================================
// Central data file — edit content here without touching component markup.
// ============================================================================

export const profile = {
  name: 'Alishba Ikhlaq',
  roles: [
    'Software Engineering Student',
    'AI Enthusiast',
    'Full Stack Developer',
    'Problem Solver',
  ],
  email: 'alishbaikhlaqshah@gmail.com',
  phone: '+92 304 8530838',
  location: 'Karachi, Pakistan',
  github: 'https://github.com/alishbaikhlaq20',
  linkedin: 'https://www.linkedin.com/in/alishbaikhlaq',
  resumeUrl: '/Alishba_Ikhlaq_Resume.pdf',
}

export const about = {
  paragraphs: [
    "I'm a Software Engineering graduate of Usman Institute of Technology (UITU), Karachi, with interests spanning software development, artificial intelligence, cybersecurity, networking, and cryptography.",
    'My final year project, APQ-Crypt, is a simulation-based adaptive cryptography framework — built on RISC-V — that combines machine learning with post-quantum and classical cryptographic algorithms to improve network security and resource efficiency. It sits right at the intersection of the areas I care about most.',
    "Alongside coursework and project work, I've picked up hands-on experience through internships and job simulations at ISPR, Electronic Arts, and Walmart Global Tech, and I'm currently interning at Moin Systems.ai on web scraping and data research. I'm looking for opportunities in software engineering, AI/ML, cybersecurity, networking, or data/research-focused roles.",
  ],
  interests: ['Artificial Intelligence', 'Cybersecurity', 'Networking', 'Cryptography'],
}

export const education = {
  school: 'Usman Institute of Technology (UITU), Karachi',
  degree: 'BS Software Engineering',
  gpa: '3.15',
  coursework: [
    'Artificial Intelligence',
    'Computer Networks',
    'Post-Quantum Cryptography',
    'Cryptography',
    'Software Engineering Principles',
    'Digital Image Processing',
  ],
}

export const experience = [
  {
    id: 'moin',
    company: 'Moin Systems.ai',
    role: 'Web Scraping & Data Research Intern',
    period: 'Ongoing',
    current: true,
    points: [
      'Conducting web scraping and data research to support company and business data collection.',
      'Researching and organizing relevant company information into accurate, structured datasets.',
    ],
  },
  {
    id: 'ispr',
    company: 'ISPR',
    role: 'Intern',
    period: 'Jan 2026 – Feb 2026',
    points: [
      "Evaluated AI's role in hybrid warfare by analyzing digital trends and technical vulnerabilities to counter misinformation.",
      'Developed strong presentation and leadership skills.',
    ],
  },
  {
    id: 'ea',
    company: 'Electronic Arts',
    role: 'Software Engineer Intern (Job Simulation)',
    period: 'June 2025 – July 2025',
    points: [
      'Proposed a new feature for EA Sports College Football and documented it for stakeholders.',
      'Designed class diagrams, created C++ header files, and optimized the codebase with improved data structures.',
    ],
  },
  {
    id: 'walmart',
    company: 'Walmart Global Tech',
    role: 'Software Engineer Job Simulation',
    period: 'Jan 2025 – Feb 2025',
    points: [
      'Built a custom heap data structure in Java for the shipping department, enhancing efficiency.',
      'Designed UML class diagrams and ERDs to model multi-mode data processors and pet department databases.',
    ],
  },
]

export const projects = [
  {
    id: 'apq-crypt',
    name: 'APQ-Crypt',
    fullName: 'APQ-Crypt — Adaptive Post-Quantum & Classical Cryptography Framework',
    fyp: true,
    featured: true,
    status: 'Ongoing · Final Year Project',
    description:
      'A simulation-based adaptive cryptography framework, built on RISC-V, that combines machine learning with post-quantum and classical cryptographic algorithms to enhance network security and resource efficiency.',
    tech: ['Machine Learning', 'Post-Quantum Cryptography', 'RISC-V', 'Network Security'],
    github: null,
    demo: null,
  },
  {
    id: 'internfy',
    name: 'Internfy',
    featured: true,
    description:
      'A full-stack platform with role-based access, ATS-powered resume screening, auto-generated cover letters, and data-driven dashboards for students, companies, and admins.',
    tech: ['Python', 'Flask', 'HTML', 'CSS', 'SQLAlchemy', 'SQLite', 'PyPDF2', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/alishbaikhlaq20/Internfy',
    demo: null,
  },
  {
    id: 'ai-timetable',
    name: 'AI Timetable Generator',
    featured: false,
    description:
      'Contributed to data preprocessing, cleaning, and backend constraint-module development for an AI-powered timetable generator.',
    tech: ['Python', 'ReactJS', 'Tailwind CSS', 'Flask'],
    github: 'https://github.com/alishbaikhlaq20/SmartSched-AI',
    demo: null,
    team: true,
  },
  {
    id: 'sparse-matrix',
    name: 'Sparse Matrix Analyzer',
    featured: false,
    description:
      'A Python-based sparse matrix analyzer with conversion modules and test cases, enabling efficient matrix operations, performance benchmarking, visualization, and memory profiling.',
    tech: ['Python', 'Matplotlib', 'Tkinter'],
    github: 'https://github.com/umaimajaffer/Sparse_Matrix_analyzer',
    demo: null,
    team: true,
  },
  {
    id: 'secure-cloud-backup',
    name: 'Secure Cloud Backup & Disaster Recovery',
    type: 'paper',
    featured: false,
    description:
      'A secure disaster recovery framework using HSDRT and encryption, focused on improving recovery speed and reducing system downtime through optimized backup strategies. Research paper.',
    tech: ['HSDRT', 'Encryption', 'Disaster Recovery'],
    github: null,
    demo: null,
    team: true,
  },
  {
    id: 'gesture-tool',
    name: 'Gesture Controlled Accessibility Tool',
    featured: false,
    description:
      'Hands-free browser navigation using real-time hand gesture recognition to improve accessibility for users with limited mobility.',
    tech: ['OpenCV', 'MediaPipe', 'NumPy', 'PyAutoGUI'],
    github: 'https://github.com/alishbaikhlaq20/-Gesture-Controlled-Accessibility-Tool',
    demo: null,
  },
  {
    id: 'resume-analyzer',
    name: 'Resume Analyzer with ATS Scoring',
    featured: false,
    description: 'Analyzes resumes using ATS scoring and keyword matching to help candidates optimize for hiring pipelines.',
    tech: ['Python', 'NLP', 'Flask'],
    github: 'https://github.com/alishbaikhlaq20/Resume-Analyzer-with-ATS-Scroing-',
    demo: null,
  },
  {
    id: 'ai-translator',
    name: 'AI Translator',
    featured: false,
    description: 'A language translation application powered by AI for fast, contextual text translation.',
    tech: ['Python', 'AI'],
    github: 'https://github.com/alishbaikhlaq20/AI-translator-',
    demo: null,
  },
]

export const skills = {
  'Programming Languages': ['C', 'C++', 'Java', 'Python', 'SQL', 'JavaScript', 'PHP'],
  'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes'],
  'Security & Networking': ['Kali Linux', 'Linux', 'Packet Tracer'],
  'Databases & Tools': ['Oracle', 'PLS-SEM', 'Figma'],
}

export const certifications = [
  { id: 'udemy-ml', title: 'Machine Learning with Python A to Z', issuer: 'Udemy' },
  { id: 'udemy-r', title: 'R-Programming Diploma', issuer: 'Udemy' },
  { id: 'udemy-sdg', title: 'Understanding Sustainable Development Goals', issuer: 'Udemy' },
  { id: 'google-soft', title: 'Soft Skill Program', issuer: 'Google' },
  { id: 'cisco-net', title: 'Networking Basics', issuer: 'Cisco' },
  { id: 'cisco-cyber', title: 'Introduction to Cybersecurity', issuer: 'Cisco' },
]
