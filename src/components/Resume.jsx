import { portfolioData } from '../data/portfolioData';

function Resume() {
  const { leetcode, github } = portfolioData.personalInfo;
  const { education, experience, projects, achievements, certifications } = portfolioData;

  const platforms = [
    {
      name: "LeetCode",
      metric: "130+ Solved",
      desc: "Solved 200+ DSA problems across topics like Arrays, Strings, Trees, and Dynamic Programming.",
      link: leetcode,
      color: "#ffa116"
    },
    {
      name: "GeeksforGeeks",
      metric: "Practice Platform",
      desc: "Practiced standard library algorithms",
      link: "https://www.geeksforgeeks.org/",
      color: "#2f8d46"
    },
    {
      name: "CodeChef",
      metric: "Competitive Programming",
      desc: "Participated in regular coding contests and practice challenges.",
      link: "https://www.codechef.com/",
      color: "#5b4636"
    }
  ];

  // Robust blob-based PDF download with cache-busting to bypass browser cache
  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/resume.pdf?v=' + Date.now());
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Devaraju_Gari_Manjunath_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Blob download failed, falling back to standard link:", error);
      const fallbackLink = document.createElement('a');
      fallbackLink.href = '/resume.pdf?v=' + Date.now();
      fallbackLink.setAttribute('download', 'Devaraju_Gari_Manjunath_Resume.pdf');
      fallbackLink.click();
    }
  };

  return (
    <section id="resume-page" className="section">
      <h2 className="section-title">Resume & Coding Profiles</h2>

      {/* Platform Cards */}
      <div className="platforms-grid">
        {platforms.map((platform, idx) => (
          <a
            key={idx}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="platform-card"
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <h3>{platform.name}</h3>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: platform.color, backgroundColor: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px' }}>
                {platform.metric}
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{platform.desc}</p>
          </a>
        ))}
      </div>

      {/* Action Buttons with robust gaps */}
      <div className="resume-actions" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '60px' }}>
        <button
          onClick={handleDownload}
          className="btn btn-primary"
          style={{ cursor: 'pointer' }}
        >
          <svg viewBox="0 0 24 24" className="icon-svg" style={{ width: '18px', height: '18px', fill: 'currentColor' }}>
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
          </svg>
          Download Resume PDF
        </button>
        <a
          href="/resume.pdf?v=1.2"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          <svg viewBox="0 0 24 24" className="icon-svg" style={{ width: '18px', height: '18px', fill: 'currentColor' }}>
            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
          </svg>
          Open Resume in New Tab
        </a>
      </div>

      {/* Embedded On-Screen Interactive Resume Sheet - Professional and Compact */}
      <div className="resume-paper" style={{
        backgroundColor: 'var(--bg-secondary)',
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        padding: '36px 32px',
        maxWidth: '800px',
        margin: '0 auto',
        boxShadow: 'var(--shadow-subtle)',
        fontFamily: 'var(--font-sans)',
        color: 'var(--text-primary)'
      }}>

        {/* Paper Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '6px', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
            Devaraju Gari Manjunath
          </h1>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            <span>+91-6309775173</span>
            <span>|</span>
            <a href="mailto:manjumanjuyadav33@gmail.com" style={{ color: 'var(--color-accent)' }}>manjumanjuyadav33@gmail.com</a>
            <span>|</span>
            <a href={github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>GitHub</a>
            <span>|</span>
            <a href={leetcode} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>LeetCode</a>
          </div>
        </div>

        {/* Career Objective */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px', marginBottom: '8px', fontWeight: '700' }}>
            Career Objective
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
            Computer Science undergraduate with hands-on experience in MERN stack development and a strong foundation in Data Structures and Algorithms. Seeking a Software Engineer role to apply problem-solving and full-stack development skills in building reliable and user-focused software solutions.
          </p>
        </div>

        {/* Education */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px', marginBottom: '8px', fontWeight: '700' }}>
            Education
          </h3>
          {education.map((edu, idx) => (
            <div key={idx} style={{ marginBottom: '10px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '600', marginBottom: '1px' }}>
                <span style={{ color: 'var(--text-primary)' }}>{edu.degree}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{edu.duration}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                <span>{edu.institution}</span>
                <span style={{ fontWeight: '600', color: 'var(--color-accent)' }}>{edu.scoreType}: {edu.score}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px', marginBottom: '8px', fontWeight: '700' }}>
            Skills
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', fontSize: '0.9rem' }}>
            <div>
              <p style={{ marginBottom: '6px' }}><strong style={{ color: 'var(--text-primary)' }}>Languages:</strong> <span style={{ color: 'var(--text-secondary)' }}>C, C++</span></p>
              <p style={{ marginBottom: '6px' }}><strong style={{ color: 'var(--text-primary)' }}>Web:</strong> <span style={{ color: 'var(--text-secondary)' }}>HTML, CSS, JavaScript, React.js</span></p>
              <p style={{ marginBottom: '6px' }}><strong style={{ color: 'var(--text-primary)' }}>Backend:</strong> <span style={{ color: 'var(--text-secondary)' }}>Node.js, Express.js</span></p>
              <p style={{ marginBottom: '6px' }}><strong style={{ color: 'var(--text-primary)' }}>Databases:</strong> <span style={{ color: 'var(--text-secondary)' }}>SQL, MongoDB</span></p>
            </div>
            <div>
              <p style={{ marginBottom: '6px' }}><strong style={{ color: 'var(--text-primary)' }}>Core Concepts:</strong> <span style={{ color: 'var(--text-secondary)' }}>Data Structures & Algorithms, Problem Solving</span></p>
              <p style={{ marginBottom: '6px' }}><strong style={{ color: 'var(--text-primary)' }}>Strengths:</strong> <span style={{ color: 'var(--text-secondary)' }}>Logical Thinking, Quick Learner</span></p>
              <p style={{ marginBottom: '6px' }}><strong style={{ color: 'var(--text-primary)' }}>Soft Skills:</strong> <span style={{ color: 'var(--text-secondary)' }}>Communication, Teamwork, Adaptability</span></p>
              <p style={{ marginBottom: '6px' }}><strong style={{ color: 'var(--text-primary)' }}>Development:</strong> <span style={{ color: 'var(--text-secondary)' }}>REST APIs</span></p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px', marginBottom: '8px', fontWeight: '700' }}>
            Projects
          </h3>
          {projects.map((project, idx) => (
            <div key={idx} style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px', fontWeight: '600' }}>
                <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{project.title}</span>
                {project.github && (
                  <>
                    <span style={{ color: 'var(--text-muted)' }}>|</span>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', fontSize: '0.85rem' }}>GitHub</a>
                  </>
                )}
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Tech Stack:</strong> {project.techStack.join(', ')}
              </p>
              <ul style={{ paddingLeft: '16px', listStyleType: 'disc', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                {project.contributions.map((bullet, bIdx) => (
                  <li key={bIdx} style={{ marginBottom: '2px', lineHeight: '1.45' }}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Internship Experience */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px', marginBottom: '8px', fontWeight: '700' }}>
            Internship Experience
          </h3>
          {experience.map((exp, idx) => (
            <div key={idx} style={{ fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '600', marginBottom: '2px' }}>
                <span style={{ color: 'var(--text-primary)' }}>{exp.role}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{exp.duration}</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-accent)', fontWeight: '500', marginBottom: '4px' }}>{exp.company}</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Achievements & Certifications */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px', marginBottom: '8px', fontWeight: '700' }}>
              Achievements
            </h3>
            <ul style={{ paddingLeft: '16px', listStyleType: 'disc', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              {achievements.map((ach, idx) => (
                <li key={idx} style={{ marginBottom: '4px', lineHeight: '1.4' }}>{ach}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px', marginBottom: '8px', fontWeight: '700' }}>
              Certifications
            </h3>
            <ul style={{ paddingLeft: '16px', listStyleType: 'disc', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              {certifications.map((cert, idx) => (
                <li key={idx} style={{ marginBottom: '4px', lineHeight: '1.4' }}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Resume;
