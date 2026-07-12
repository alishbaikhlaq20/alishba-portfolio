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
    "I'm a Software Engineering undergraduate (GPA: 3.5) who likes taking a problem apart until it's simple enough to solve — then building the system that solves it for everyone after me.",
    'My focus sits at the intersection of Artificial Intelligence, Full Stack Development, Cybersecurity, and Cloud Computing — four areas that keep pulling on the same thread: how do we build software people can actually trust and rely on?',
    "I'm currently looking for an internship where I can bring that curiosity to a real engineering team, ship things that matter, and learn from people further along the path than I am.",
  ],
  interests: ['Artificial Intelligence', 'Full Stack Development', 'Cybersecurity', 'Cloud Computing'],
}

export const education = {
  school: 'Usman Institute of Technology (UIT)',
  degree: 'BS Software Engineering',
  gpa: '3.5',
  coursework: [
    'Artificial Intelligence',
    'Computer Networks',
    'Cryptography',
    'PQC Encryption',
    'Software Engineering Principles',
  ],
}

export const experience = [
  {
    id: 'ispr',
    company: 'ISPR',
    role: 'Intern',
    period: 'Jan 2026 – Feb 2026',
    points: [
      "Worked on AI's role in hybrid warfare by analyzing digital trends and vulnerabilities.",
      'Developed presentation and leadership skills.',
    ],
  },
  {
    id: 'ea',
    company: 'Electronic Arts',
    role: 'Software Engineer Job Simulation',
    period: 'June 2025 – July 2025',
    points: [
      'Designed C++ header files.',
      'Created UML diagrams.',
      'Suggested new game features.',
      'Optimized data structures.',
    ],
  },
  {
    id: 'walmart',
    company: 'Walmart Global Tech',
    role: 'Software Engineering Job Simulation',
    period: 'Jan 2025 – Feb 2025',
    points: [
      'Implemented a custom Java heap.',
      'Designed UML and ER diagrams.',
    ],
  },
]

export const projects = [
  {
    id: 'internfy',
    name: 'Internfy',
    featured: true,
    description:
      'A full-stack internship portal supporting students, companies, and administrators, with ATS resume screening, role-based authentication, internship postings, application tracking, a cover letter generator, and resume analysis.',
    tech: ['Python', 'Flask', 'React', 'SQLite', 'SQLAlchemy', 'Pandas', 'PyPDF2', 'Matplotlib'],
    github: 'https://github.com/alishbaikhlaq20/Internfy',
    demo: null,
  },
  {
    id: 'smartsched',
    name: 'SmartSched AI',
    featured: false,
    description:
      'AI-powered timetable generator that automatically creates clash-free schedules for students and faculty.',
    tech: ['Python', 'React', 'Flask', 'Tailwind'],
    github: 'https://github.com/alishbaikhlaq20/SmartSched-AI',
    demo: null,
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
  {
    id: 'sparse-matrix',
    name: 'Sparse Matrix Analyzer',
    featured: false,
    description: 'A team project for sparse matrix visualization and performance benchmarking across storage formats.',
    tech: ['Python', 'Matplotlib', 'Tkinter'],
    github: 'https://github.com/umaimajaffer/Sparse_Matrix_analyzer',
    demo: null,
    team: true,
  },
]

export const skills = {
  'Programming Languages': ['Python', 'Java', 'JavaScript', 'C', 'C++', 'SQL', 'PHP'],
  Frontend: ['React', 'Tailwind', 'HTML', 'CSS'],
  Backend: ['Flask', 'SQLAlchemy', 'SQLite'],
  Cloud: ['AWS', 'Docker', 'Kubernetes'],
  Tools: ['Oracle', 'Linux', 'Kali Linux', 'Packet Tracer', 'Figma', 'Git', 'GitHub'],
}

export const certifications = [
  { id: 'udemy-ml', title: 'Machine Learning with Python', issuer: 'Udemy' },
  { id: 'udemy-r', title: 'R Programming', issuer: 'Udemy' },
  { id: 'udemy-sdg', title: 'Sustainable Development Goals', issuer: 'Udemy' },
  { id: 'google-soft', title: 'Soft Skills', issuer: 'Google' },
  { id: 'cisco-net', title: 'Networking Basics', issuer: 'Cisco' },
  { id: 'cisco-cyber', title: 'Introduction to Cybersecurity', issuer: 'Cisco' },
]