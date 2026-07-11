export const portfolioData = {
  personalInfo: {
    fullName: "Devaraju Gari Manjunath",
    title: "Computer Science Student | MERN Stack Developer",
    email: "manjumanjuyadav33@gmail.com",
    phone: "+91-6309775173",
    github: "https://github.com/manjunath397",
    linkedin: "https://www.linkedin.com/in/devaraju-gari-manjunath",
    leetcode: "https://leetcode.com/u/manjunath_yadav/",
    resumeUrl: "/resume.pdf", // Loads resume.pdf from the public directory
    tagline: "Computer Science undergraduate with hands-on experience in MERN stack development and a strong foundation in Data Structures and Algorithms.",
    about: "I am a Computer Science undergraduate at GMR Institute of Technology, Rajam, with a strong foundation in Data Structures and Algorithms. I specialize in MERN stack development, focusing on building clean, user-friendly, and reliable web applications. I am passionate about utilizing my problem-solving capabilities to create software systems that address real-world needs."
  },
  education: [
    {
      degree: "B.Tech — Computer Science and Engineering",
      institution: "GMR Institute of Technology, Rajam",
      duration: "2023–2027",
      scoreType: "CGPA",
      score: "7.5"
    },
    {
      degree: "Intermediate — MPC",
      institution: "Sri Chaitanya Jr College, Vijayawada",
      duration: "2021–2023",
      scoreType: "GPA",
      score: "9.7"
    },
    {
      degree: "Secondary Education (10th)",
      institution: "MJPAPBCWR School, Gundumala",
      duration: "2021",
      scoreType: "GPA",
      score: "9.3"
    }
  ],
  skills: {
    programming: ["C", "C++"],
    frontend: ["HTML", "CSS", "JavaScript", "React.js"],
    backend: ["Node.js", "Express.js"],
    databases: ["SQL", "MongoDB"],
    coreConcepts: ["Data Structures and Algorithms", "Problem Solving", "REST APIs"]
  },
  projects: [
    {
      title: "Placement Tracker",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      description: "A full-stack application to manage placement preparation tasks using CRUD operations.",
      contributions: [
        "Developed a full-stack application to manage placement preparation tasks using CRUD operations.",
        "Implemented task search, status filtering, progress statistics, and REST API integration with MongoDB."
      ],
      github: "https://github.com/manjunath397/placement-tracker"
    },
    {
      title: "AI-Driven Accident Prevention System",
      techStack: ["React.js"],
      description: "Developed the React.js web frontend for visualizing accident risk predictions, accident hotspots, and safety alerts.",
      contributions: [
        "Developed the React.js web frontend for an AI-driven accident prevention system.",
        "Built interactive interfaces to visualize accident risk predictions, hotspots, and safety alerts."
      ],
      github: "https://github.com/BugathaSindhu/Preventx_mobile_app" // Correct repository link from LaTeX resume
    },
    {
      title: "Faculty Management System",
      techStack: ["HTML", "CSS", "JavaScript", "Python"],
      description: "A web-based application for managing and organizing faculty records.",
      contributions: [
        "Developed a web-based application to manage and organize faculty records.",
        "Built an interactive frontend and integrated Python-based backend functionality for faculty data management."
      ],
      github: null // No link available in resume
    }
  ],
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Lineysha and Thevan Software Technologies",
      duration: "June 2025",
      description: "Built web modules using Python, HTML, CSS, and JavaScript, implementing backend logic and frontend integration during the web development lifecycle."
    }
  ],
  achievements: [
    "Solved 200+ DSA problems across LeetCode, CodeChef, and GeeksforGeeks.",
    "Participated in competitive programming contests and coding challenges."
  ],
  certifications: [
    "Prompt Engineering for ChatGPT",
    "Joy of Computing in Python — NPTEL",
    "Introduction to Generative AI"
  ]
};
