import { portfolioData } from '../data/portfolioData';

function Hero({ setActiveTab }) {
  const { fullName, title, tagline, github, linkedin, leetcode } = portfolioData.personalInfo;

  return (
    <section id="home" className="hero-wrapper">
      <div className="section hero-content">
        <div className="hero-left">
          <span className="hero-greeting">Hi, my name is</span>
          <h1 className="hero-name">{fullName}</h1>
          <h2 className="hero-headline">{title}</h2>
          <p className="hero-tagline">{tagline}</p>
          
          <div className="hero-actions">
            <button 
              className="btn btn-primary" 
              onClick={() => {
                setActiveTab('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              View Projects
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => {
                setActiveTab('resume');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              View Resume
            </button>
          </div>

          <div className="hero-socials">
            <a 
              href={github} 
              className="social-link" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile"
            >
              <svg viewBox="0 0 24 24" className="icon-svg">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a 
              href={linkedin} 
              className="social-link" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" className="icon-svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href={leetcode} 
              className="social-link" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LeetCode Profile"
            >
              <svg viewBox="0 0 24 24" className="icon-svg">
                <path d="M13.483 0a1.39 1.39 0 0 0-.961.411l-9.12 9.119a3.53 3.53 0 0 0-1.029 2.388 3.52 3.52 0 0 0 1.025 2.502l3.962 3.962a3.5 3.5 0 0 0 2.475 1.026 3.59 3.59 0 0 0 2.584-1.027l9.12-9.117a1.39 1.39 0 0 0-.021-1.972l-5.67-5.671A1.39 1.39 0 0 0 13.483 0zm-.066 2.036l4.686 4.687-8.152 8.151a1.2 1.2 0 1 1-1.697-1.697l5.776-5.776a1.2 1.2 0 0 0-1.697-1.697l-5.776 5.776a3.6 3.6 0 1 0 5.091 5.09l8.15-8.15-4.686-4.686a.2.2 0 0 0-.295.03l-1.425 1.43a1.2 1.2 0 0 0 1.697 1.697l.113-.113a1.2 1.2 0 0 1 1.697 1.697l-.113.113a3.6 3.6 0 0 1-5.091 0L5.378 12.04a1.2 1.2 0 0 1 0-1.697l7.747-7.747a.2.2 0 0 0 .292-.56z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="hero-right">
          <div className="profile-image-container">
            <img 
              src="/profile.png" 
              alt={fullName} 
              className="profile-photo"
            />
            <div className="profile-photo-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
