import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const menuItems = [
  { name: 'Accueil', href: '#home' },
  { name: 'À propos', href: '#about' }, 
  { name: 'Compétences', href: '#skills' },
  { name: 'Projets', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <a href="#home" className="logo">
            <Code2 size={32} color="#ff00ff" />
            <span style={{ marginLeft: '10px', fontWeight: '700', fontSize: '1.5rem' }}>
              Dev<span style={{ color: '#ff00ff' }}>React</span>
            </span>
          </a>

          {/* Menu Desktop */}
          <nav className="nav-desktop">
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bouton menu mobile */}
          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile */}
        <motion.div 
          className="nav-mobile"
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <style>{`
        .header {
          background-color: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(10px);
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          padding: 20px 0;
          border-bottom: 1px solid rgba(255, 0, 255, 0.1);
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: var(--white);
          font-size: 1.2rem;
        }
        
        .nav-desktop ul {
          display: flex;
          list-style: none;
          gap: 40px;
        }
        
        .nav-desktop a {
          color: var(--white);
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          position: relative;
          padding: 5px 0;
          transition: color 0.3s ease;
        }
        
        .nav-desktop a:hover {
          color: var(--fushia);
        }
        
        .nav-desktop a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--fushia);
          transition: width 0.3s ease;
        }
        
        .nav-desktop a:hover::after {
          width: 100%;
        }
        
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--white);
          cursor: pointer;
        }
        
        .nav-mobile {
          overflow: hidden;
          background-color: var(--black-light);
          border-radius: 10px;
          margin-top: 20px;
        }
        
        .nav-mobile ul {
          list-style: none;
          padding: 20px;
        }
        
        .nav-mobile li {
          margin-bottom: 15px;
        }
        
        .nav-mobile a {
          color: var(--white);
          text-decoration: none;
          font-size: 1.1rem;
          display: block;
          padding: 10px;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
        
        .nav-mobile a:hover {
          background-color: rgba(255, 0, 255, 0.1);
        }
        
        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }
          
          .menu-toggle {
            display: block;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;