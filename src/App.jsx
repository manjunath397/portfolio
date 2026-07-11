import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main style={{ minHeight: '80vh', paddingBottom: '40px' }}>
        {activeTab === 'home' && <Hero setActiveTab={setActiveTab} />}
        
        {activeTab === 'about' && <About />}
        
        {activeTab === 'projects' && <Projects />}
        
        {activeTab === 'certifications' && (
          <section className="section">
            <h2 className="section-title">Certifications & Achievements</h2>
            <div className="split-sections">
              <Achievements />
              <Certifications />
            </div>
          </section>
        )}
        
        {activeTab === 'resume' && <Resume />}
        
        {activeTab === 'contact' && <Contact />}
      </main>
      <Footer setActiveTab={setActiveTab} />
    </>
  );
}

export default App;
