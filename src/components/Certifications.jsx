import { portfolioData } from '../data/portfolioData';

function Certifications() {
  const { certifications } = portfolioData;

  return (
    <div className="certifications-section">
      <h3 className="category-title" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: '24px' }}>
        <svg viewBox="0 0 24 24" className="icon-svg" style={{ color: 'var(--color-accent)', width: '22px', height: '22px' }}>
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
        </svg>
        Certifications
      </h3>
      <div className="certs-grid">
        {certifications.map((cert, idx) => (
          <div key={idx} className="cert-card">
            <span className="cert-badge">
              <svg viewBox="0 0 24 24" className="icon-svg">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </span>
            <span className="cert-name">{cert}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
