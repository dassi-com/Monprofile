
import { motion } from 'framer-motion';
import { 

  Sparkles,
  Code,
  Database,
  Coffee
} from 'lucide-react';

const About = () => {
  const passions = [
    {
      icon: <Code />,
      title: "Code Élégant",
      description: "J'écris du code propre, maintenable et performant qui respecte les meilleures pratiques."
    },
    {
      icon: <Sparkles />,
      title: "Design Moderne",
      description: "Je crée des interfaces qui allient beauté, simplicité et expérience utilisateur exceptionnelle."
    },
    {
      icon: <Database />,
      title: "Data Intelligence",
      description: "Je choisis la bonne base de données pour chaque projet : Firebase, MySQL ou SQLite."
    }
  ];

  const stats = [
    { value: "20+", label: "Projets réalisés" },
    { value: "1+", label: "Années d'expérience" },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">À propos de moi</h2>
          <p className="section-subtitle">
            Passion, créativité et expertise technique
          </p>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="about-title">
              Bonjour, je suis Dorlane Dassi
              <span className="title-underline"></span>
            </h3>
            
            <p className="about-paragraph">
              Développeuse Frontend spécialisée en <strong>React JS</strong> avec une passion pour 
              la création d'interfaces modernes et performantes.
            </p>
            
            <p className="about-paragraph">
              Je combine mon expertise en <strong>Frontend</strong> avec une solide maîtrise des 
              bases de données (<strong>Firebase, MySQL, SQLite</strong>) pour créer des applications 
              web complètes qui offrent une expérience exceptionnelle.
            </p>
            
            <p className="about-paragraph">
              Mon approche allie <strong>design élégant</strong> et <strong>performance technique</strong>, 
              avec une attention particulière aux détails qui font la différence.
            </p>
            
            <motion.div 
              className="stats-simple"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="about-passions"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="passions-title">
              Ce qui m'anime
              <span className="title-underline"></span>
            </h3>
            
            <div className="passions-list">
              {passions.map((passion, index) => (
                <motion.div 
                  key={index}
                  className="passion-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="passion-icon">
                    {passion.icon}
                  </div>
                  <div className="passion-content">
                    <h4 className="passion-name">{passion.title}</h4>
                    <p className="passion-desc">{passion.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="about-cta"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="cta-text">
                Vous avez un projet en tête ? 
                <br />
                <strong>Discutons-en autour d'un café virtuel !</strong>
              </p>
              <Coffee className="coffee-icon" />
              <a href="#contact" className="btn btn-outline">Me contacter</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        .about-section {
          background-color: var(--black);
          position: relative;
          overflow: hidden;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 70px;
        }
        
        .section-title {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 15px;
          color: var(--white);
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: var(--gray);
          max-width: 400px;
          margin: 0 auto;
        }
        
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        
        .about-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 30px;
          color: var(--white);
          position: relative;
          display: inline-block;
        }
        
        .title-underline {
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--fushia), var(--fushia-light));
          border-radius: 2px;
        }
        
        .about-paragraph {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--gray);
          margin-bottom: 25px;
        }
        
        .about-paragraph strong {
          color: var(--white);
          font-weight: 600;
          background: linear-gradient(90deg, var(--fushia), var(--fushia-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .stats-simple {
          display: flex;
          gap: 40px;
          margin-top: 50px;
          flex-wrap: wrap;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--fushia);
          margin-bottom: 5px;
          line-height: 1;
        }
        
        .stat-label {
          font-size: 0.95rem;
          color: var(--gray);
          font-weight: 500;
        }
        
        .passions-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 40px;
          color: var(--white);
          position: relative;
          display: inline-block;
        }
        
        .passions-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin-bottom: 50px;
        }
        
        .passion-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 20px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 15px;
          border: 1px solid rgba(255, 0, 255, 0.05);
          transition: all 0.3s ease;
        }
        
        .passion-item:hover {
          border-color: rgba(255, 0, 255, 0.2);
          background: rgba(255, 0, 255, 0.03);
        }
        
        .passion-icon {
          width: 50px;
          height: 50px;
          min-width: 50px;
          background: rgba(255, 0, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--fushia);
        }
        
        .passion-content {
          flex: 1;
        }
        
        .passion-name {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--white);
        }
        
        .passion-desc {
          font-size: 0.95rem;
          color: var(--gray);
          line-height: 1.6;
        }
        
        .about-cta {
          text-align: center;
          padding: 30px;
          background: linear-gradient(135deg, rgba(255, 0, 255, 0.05), rgba(255, 102, 255, 0.02));
          border-radius: 20px;
          border: 1px solid rgba(255, 0, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .cta-text {
          font-size: 1.1rem;
          color: var(--gray);
          margin-bottom: 25px;
          line-height: 1.6;
        }
        
        .cta-text strong {
          color: var(--white);
          font-weight: 600;
        }
        
        .coffee-icon {
          color: var(--fushia);
          margin-bottom: 25px;
          width: 40px;
          height: 40px;
        }
        
        .about-cta .btn {
          background: linear-gradient(90deg, var(--fushia), var(--fushia-dark));
          border: none;
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .about-content {
            gap: 60px;
          }
          
          .section-title {
            font-size: 2.4rem;
          }
          
          .about-title, .passions-title {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          
          .section-header {
            margin-bottom: 50px;
          }
          
          .section-title {
            font-size: 2.2rem;
          }
          
          .stats-simple {
            justify-content: center;
            gap: 30px;
          }
          
          .passions-list {
            gap: 20px;
          }
          
          .passion-item {
            padding: 18px;
          }
        }
        
        @media (max-width: 576px) {
          .section-title {
            font-size: 1.9rem;
          }
          
          .about-title, .passions-title {
            font-size: 1.8rem;
          }
          
          .about-paragraph {
            font-size: 1rem;
          }
          
          .stats-simple {
            gap: 20px;
          }
          
          .stat-value {
            font-size: 2rem;
          }
          
          .passion-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          
          .passion-icon {
            width: 45px;
            height: 45px;
          }
          
          .about-cta {
            padding: 25px;
          }
        }
        
        @media (max-width: 400px) {
          .stats-simple {
            flex-direction: column;
            gap: 15px;
          }
          
          .stat-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: left;
          }
          
          .stat-value {
            margin-bottom: 0;
            margin-right: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;