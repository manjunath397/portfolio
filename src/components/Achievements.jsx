import { portfolioData } from '../data/portfolioData';

function Achievements() {
  const { achievements } = portfolioData;

  return (
    <div className="achievements-section">
      <h3 className="category-title" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: '24px' }}>
        <svg viewBox="0 0 24 24" className="icon-svg" style={{ color: 'var(--color-accent)', width: '22px', height: '22px' }}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
        </svg>
        Coding Accomplishments
      </h3>
      <div className="achieve-list">
        {achievements.map((ach, idx) => (
          <div key={idx} className="list-item">
            <span className="list-item-icon">
              <svg viewBox="0 0 24 24" className="icon-svg">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </span>
            <span className="list-item-text">{ach}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
