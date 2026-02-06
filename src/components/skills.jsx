import { motion } from 'framer-motion';
import {  Code2, Palette, Zap, Smartphone,  Server, Layers, Database, Cloud, Cpu } from 'lucide-react';

const Skills = () => {
  const skills = [
    // Frontend
    {
      icon: <Code2 />,
      title: "React JS",
      description: "Développement d'applications web modernes avec React, hooks, et écosystème complet.",
      color: "#61DAFB",
      category: "frontend"
    },
    {
      icon: <Palette />,
      title: "Frontend",
      description: "HTML5, CSS3, JavaScript ES6+, création d'interfaces responsive et accessibles.",
      color: "#ff00ff",
      category: "frontend"
    },
    {
      icon: <Zap />,
      title: "Tailwind CSS",
      description: "Stylisation rapide et efficace avec Tailwind CSS pour des designs cohérents.",
      color: "#38B2AC",
      category: "frontend"
    },
    {
      icon: <Smartphone />,
      title: "Responsive Design",
      description: "Développement mobile-first pour une expérience optimale sur tous les appareils.",
      color: "#F56565",
      category: "frontend"
    },
    
    // Backend & Bases de données
    {
      icon: <Server />,
      title: "Node JS",
      description: "Développement backend avec Node.js pour des applications full-stack performantes.",
      color: "#68A063",
      category: "backend"
    },
    {
      icon: <Database />,
      title: "Firebase",
      description: "Base de données NoSQL temps réel, authentication et hébergement cloud.",
      color: "#FFCB2B",
      category: "database"
    },
    {
      icon: <Database />,
      title: "MySQL",
      description: "Base de données relationnelle pour applications complexes avec relations multiples.",
      color: "#00758F",
      category: "database"
    },
    {
      icon: <Database />,
      title: "SQLite",
      description: "Base de données légère embarquée pour applications mobiles et desktop.",
      color: "#003B57",
      category: "database"
    },
    {
      icon: <Cloud />,
      title: "API REST",
      description: "Création et consommation d'APIs RESTful pour la communication client-serveur.",
      color: "#7ED321",
      category: "backend"
    },
    {
      icon: <Layers />,
      title: "Bootstrap",
      description: "Utilisation de Bootstrap pour des interfaces rapides et professionnelles.",
      color: "#7952B3",
      category: "frontend"
    },
    {
      icon: <Cpu />,
      title: "Architecture Full-Stack",
      description: "Conception d'architectures complètes du frontend au backend avec bases de données.",
      color: "#9C27B0",
      category: "backend"
    }
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend', color: '#ff00ff' },
    { id: 'backend', name: 'Backend & API', color: '#7ED321' },
    { id: 'database', name: 'Bases de données', color: '#FFCB2B' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Mes Compétences</h2>
          <p className="section-subtitle">
            Technologies et outils que j'utilise pour créer des applications web complètes
          </p>
          
          {/* Filtres par catégorie */}
          <div className="skills-filter">
            {categories.map(category => (
              <button 
                key={category.id}
                className="filter-btn active"
                style={{ '--category-color': category.color }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className={`skill-card ${skill.category}`}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              data-category={skill.category}
            >
              <div 
                className="skill-icon"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
              <span className="skill-category" style={{ color: skill.color }}>
                {skill.category === 'frontend' ? 'Frontend' : 
                 skill.category === 'backend' ? 'Backend' : 'Base de données'}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Section spécialisée en bases de données */}
        <motion.div 
          className="database-specialization"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="database-header">
            <Database size={32} />
            <h3>Expertise en Bases de Données</h3>
          </div>
          <div className="database-content">
            <div className="database-item">
              <h4>Firebase</h4>
              <p>Développement d'applications temps réel, authentication, stockage cloud et Firestore.</p>
            </div>
            <div className="database-item">
              <h4>MySQL</h4>
              <p>Conception de schémas relationnels, optimisation des requêtes et gestion de bases de données complexes.</p>
            </div>
            <div className="database-item">
              <h4>SQLite</h4>
              <p>Applications mobiles et desktop avec bases de données embarquées légères et performantes.</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <style>{`
        .skills-section {
          background-color: var(--black);
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
          color: var(--gray);
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.6;
        }
        
        .skills-filter {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-top: 30px;
        }
        
        .filter-btn {
          padding: 10px 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--gray);
          border-radius: 30px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Poppins', sans-serif;
          font-size: 0.95rem;
        }
        
        .filter-btn.active {
          background: rgba(var(--category-color, 255, 0, 255), 0.1);
          border-color: rgba(var(--category-color, 255, 0, 255), 0.3);
          color: rgb(var(--category-color, 255, 0, 255));
        }
        
        .filter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(var(--category-color, 255, 0, 255), 0.2);
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }
        
        .skill-card {
          background-color: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          padding: 30px;
          border: 1px solid rgba(255, 0, 255, 0.05);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--skill-color, #ff00ff), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .skill-card:hover::before {
          opacity: 1;
        }
        
        .skill-card.frontend::before {
          background: linear-gradient(90deg, #ff00ff, transparent);
        }
        
        .skill-card.backend::before {
          background: linear-gradient(90deg, #7ED321, transparent);
        }
        
        .skill-card.database::before {
          background: linear-gradient(90deg, #FFCB2B, transparent);
        }
        
        .skill-card:hover {
          border-color: rgba(255, 0, 255, 0.2);
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(255, 0, 255, 0.1);
        }
        
        .skill-icon {
          margin-bottom: 20px;
        }
        
        .skill-icon svg {
          width: 40px;
          height: 40px;
        }
        
        .skill-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: var(--white);
        }
        
        .skill-description {
          color: var(--gray);
          line-height: 1.6;
          flex-grow: 1;
          margin-bottom: 20px;
        }
        
        .skill-category {
          display: inline-block;
          padding: 5px 15px;
          background: rgba(var(--skill-color, 255, 0, 255), 0.1);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-top: auto;
          align-self: flex-start;
        }
        
        .database-specialization {
          background: linear-gradient(135deg, rgba(255, 203, 43, 0.05), rgba(255, 0, 255, 0.05));
          border-radius: 25px;
          padding: 40px;
          border: 1px solid rgba(255, 203, 43, 0.2);
          backdrop-filter: blur(10px);
        }
        
        .database-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 40px;
        }
        
        .database-header h3 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--white);
        }
        
        .database-header svg {
          color: #FFCB2B;
        }
        
        .database-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .database-item {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 15px;
          padding: 25px;
          border: 1px solid rgba(255, 203, 43, 0.1);
        }
        
        .database-item h4 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: #FFCB2B;
        }
        
        .database-item p {
          color: var(--gray);
          line-height: 1.6;
          font-size: 0.95rem;
        }
        
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }
          
          .section-title {
            font-size: 2.4rem;
          }
        }
        
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          
          .skill-card {
            padding: 25px;
          }
          
          .section-title {
            font-size: 2.2rem;
          }
          
          .section-subtitle {
            font-size: 1.1rem;
          }
          
          .database-specialization {
            padding: 30px;
          }
          
          .database-header h3 {
            font-size: 1.8rem;
          }
        }
        
        @media (max-width: 576px) {
          .skills-filter {
            gap: 10px;
          }
          
          .filter-btn {
            padding: 8px 18px;
            font-size: 0.9rem;
          }
          
          .database-content {
            grid-template-columns: 1fr;
          }
          
          .database-item {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;