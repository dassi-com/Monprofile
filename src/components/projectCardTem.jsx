import { motion } from 'framer-motion';
import {  Github, Database, Type, Globe } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      <div 
        className="project-header"
        style={{ 
          background: `linear-gradient(135deg, ${project.imageColor}20, ${project.imageColor}10)`,
          borderBottom: `1px solid ${project.imageColor}30`
        }}
      >
        <div className="project-icon">
          {project.icon}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <div className="project-meta">
          <span 
            className="project-status"
            style={{ 
              backgroundColor: `${project.imageColor}20`,
              color: project.imageColor,
              border: `1px solid ${project.imageColor}40`
            }}
          >
            {project.status}
          </span>
          <span className="project-type">
            <Type size={14} />
            {project.projectType}
          </span>
        </div>
      </div>
      
      <div className="project-content">
        <p className="project-description">{project.description}</p>
        
        <div className="project-features">
          <h4>Fonctionnalités principales :</h4>
          <ul>
            {project.features && project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="project-technologies">
          <h4>Stack technique :</h4>
          <div className="tech-tags">
            {project.technologies && project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
        
        <div className="project-database">
          <Database size={16} />
          <span><strong>Base de données :</strong> {project.dbStatus}</span>
        </div>
        
        <div className="project-links">
          {project.liveLink && (
            <motion.a 
              href={project.liveLink} 
              className="project-link live-link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: `${project.imageColor}15`, borderColor: project.imageColor }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={18} />
              <span>Voir la démo</span>
            </motion.a>
          )}
          
          {project.githubLink && (
            <motion.a 
              href={project.githubLink} 
              className="project-link github-link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              <span>Code source</span>
            </motion.a>
          )}
        </div>
      </div>
      
      <style>{`
        .project-card {
          background-color: var(--black-light);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .project-card:hover {
          border-color: rgba(255, 0, 255, 0.3);
          box-shadow: 0 20px 40px rgba(255, 0, 255, 0.1);
          transform: translateY(-10px);
        }
        
        .project-header {
          padding: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }
        
        .project-icon {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          color: ${project.imageColor};
          font-size: 1.8rem;
        }
        
        .project-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: var(--white);
        }
        
        .project-meta {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .project-status {
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }
        
        .project-type {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          font-size: 0.85rem;
          color: var(--gray);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .project-content {
          padding: 25px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        
        .project-description {
          color: var(--gray);
          line-height: 1.6;
          margin-bottom: 25px;
        }
        
        .project-features {
          margin-bottom: 25px;
        }
        
        .project-features h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: var(--white);
        }
        
        .project-features ul {
          list-style: none;
          padding-left: 0;
        }
        
        .project-features li {
          padding: 5px 0;
          padding-left: 20px;
          position: relative;
          color: var(--gray);
          font-size: 0.95rem;
        }
        
        .project-features li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: ${project.imageColor};
        }
        
        .project-technologies {
          margin-bottom: 25px;
        }
        
        .project-technologies h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: var(--white);
        }
        
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .tech-tag {
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--gray);
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 0.85rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .project-database {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 203, 43, 0.1);
          color: #FFCB2B;
          padding: 12px 15px;
          border-radius: 12px;
          font-size: 0.9rem;
          margin-bottom: 25px;
          border: 1px solid rgba(255, 203, 43, 0.2);
        }
        
        .project-database strong {
          font-weight: 600;
        }
        
        .project-links {
          display: flex;
          gap: 15px;
          margin-top: auto;
          flex-wrap: wrap;
        }
        
        .project-link {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 12px 20px;
          border-radius: 10px;
          border: 2px solid;
          transition: all 0.3s ease;
          flex: 1;
          justify-content: center;
          min-width: 140px;
        }
        
        .live-link {
          color: ${project.imageColor};
        }
        
        .live-link:hover {
          background-color: ${project.imageColor}25 !important;
          box-shadow: 0 5px 15px ${project.imageColor}30;
        }
        
        .github-link {
          color: var(--white);
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
        }
        
        .github-link:hover {
          background: rgba(255, 255, 255, 0.15) !important;
          box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
        }
        
        @media (max-width: 768px) {
          .project-header {
            padding: 20px;
          }
          
          .project-content {
            padding: 20px;
          }
          
          .project-title {
            font-size: 1.6rem;
          }
          
          .project-meta {
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }
          
          .project-links {
            flex-direction: column;
          }
          
          .project-link {
            width: 100%;
          }
        }
        
        @media (max-width: 576px) {
          .project-link {
            padding: 10px 16px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;