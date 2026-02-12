import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from "./components/SkillsTem";
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="App">
      {/* Barre de progression du scroll */}
      <motion.div 
        className="progress-bar" 
        style={{ 
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          background: 'linear-gradient(90deg, #ff00ff, #ff66ff)',
          transformOrigin: '0%',
          zIndex: 1000
        }} 
      />
      
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>© {new Date().getFullYear()} - Développeuse React JS. Tous droits réservés.</p>
            <p>Conçu avec ❤️ en React JS</p>
          </div>
        </div>
      </footer>
      
      <style >{`
        .footer {
          background-color: var(--black-light);
          padding: 40px 0;
          text-align: center;
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .footer p {
          color: var(--gray);
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default App;