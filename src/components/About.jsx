import { portfolioData } from '../data/portfolioData';

function About() {
  const { about } = portfolioData.personalInfo;
  const { skills, education, experience } = portfolioData;

  const skillCategories = [
    {
      title: "Programming",
      items: skills.programming,
      icon: (
        <svg viewBox="0 0 24 24" className="icon-svg">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      )
    },
    {
      title: "Frontend",
      items: skills.frontend,
      icon: (
        <svg viewBox="0 0 24 24" className="icon-svg">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
        </svg>
      )
    },
    {
      title: "Backend",
      items: skills.backend,
      icon: (
        <svg viewBox="0 0 24 24" className="icon-svg">
          <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
        </svg>
      )
    },
    {
      title: "Databases",
      items: skills.databases,
      icon: (
        <svg viewBox="0 0 24 24" className="icon-svg">
          <path d="M12 2C7.58 2 4 3.79 4 6v12c0 2.21 3.58 4 8 4s8-1.79 8-4V6c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.43 6 2s-2.13 2-6 2-6-1.43-6-2 2.13-2 6-2zm0 14c-3.87 0-6-1.43-6-2v-1.93c1.37.77 3.52 1.18 6 1.18s4.63-.41 6-1.18V16c0 .57-2.13 2-6 2zm0-4c-3.87 0-6-1.43-6-2v-1.93c1.37.77 3.52 1.18 6 1.18s4.63-.41 6-1.18V12c0 .57-2.13 2-6 2z"/>
        </svg>
      )
    },
    {
      title: "Core Concepts",
      items: skills.coreConcepts,
      icon: (
        <svg viewBox="0 0 24 24" className="icon-svg">
          <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.07 19.57 10.48 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm1-9h-2v4h4v-2h-2V9z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content" style={{ marginBottom: '60px' }}>
        <p className="about-text">{about}</p>
      </div>

      {/* Skills Grid */}
      <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', fontWeight: '600', color: 'var(--text-primary)' }}>Technologies I Work With</h3>
      <div className="skills-grid" style={{ marginBottom: '60px' }}>
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="skills-category">
            <h4 className="category-title">
              {cat.icon}
              {cat.title}
            </h4>
            <div className="skills-list">
              {cat.items.map((skill, sIdx) => (
                <span key={sIdx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Side-by-side timelines */}
      <div className="about-split-timeline">
        
        {/* Education */}
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '28px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
            <svg viewBox="0 0 24 24" className="icon-svg" style={{ color: 'var(--color-accent)', width: '22px', height: '22px' }}>
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5.89 12.5L12 15.82l6.11-3.32L12 9.18 5.89 12.5z"/>
            </svg>
            Education
          </h3>
          <div className="timeline-container">
            {education.map((edu, idx) => (
              <div key={idx} className="timeline-item">
                <span className="timeline-dot" style={{ position: 'absolute', left: -31, top: 6, width: 12, height: 12, borderRadius: '50%', backgroundColor: 'var(--bg-primary)', border: '3px solid var(--color-accent)' }}></span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4px', marginBottom: '4px' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', transition: 'var(--transition-fast)' }}>{edu.degree}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', backgroundColor: 'var(--bg-secondary)', padding: '2px 8px', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                    {edu.duration}
                  </span>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>{edu.institution}</p>
                <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-accent)' }}>
                  {edu.scoreType}: <span style={{ color: 'var(--text-primary)' }}>{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '28px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
            <svg viewBox="0 0 24 24" className="icon-svg" style={{ color: 'var(--color-accent)', width: '22px', height: '22px' }}>
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
            </svg>
            Experience
          </h3>
          <div className="timeline-container">
            {experience.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <span className="timeline-dot" style={{ position: 'absolute', left: -31, top: 6, width: 12, height: 12, borderRadius: '50%', backgroundColor: 'var(--bg-primary)', border: '3px solid var(--color-accent)' }}></span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4px', marginBottom: '4px' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', transition: 'var(--transition-fast)' }}>{exp.role}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', backgroundColor: 'var(--bg-secondary)', padding: '2px 8px', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                    {exp.duration}
                  </span>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-accent)', fontWeight: '500', marginBottom: '6px' }}>{exp.company}</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
