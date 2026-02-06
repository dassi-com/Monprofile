import { motion } from 'framer-motion';
import { Sparkles, Heart, Smile, Leaf } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Mamaison 237",
      description: "Application de gestion intelligente des tâches ménagères pour les familles camerounaises. Synchronisation des tâches entre membres de la famille avec notifications et suivi en temps réel.",
      technologies: ["React JS", "Firebase", "Framer Motion", "Tailwind CSS", "JavaScript"],
      imageColor: "#ff00ff",
      liveLink:  "https://mamaison-237.vercel.app/", // Lien vers la démo
      githubLink:"https://github.com/dassi-com/Maison237/",  // Lien GitHub
      status: "Prototype",
      icon: <Sparkles />,
      features: ["Gestion de tâches", "Notifications", "Synchronisation famille", "Calendrier"],
      dbStatus: "Firebase (en cours d'implémentation)",
      projectType: "Application Web"
    },
    {
      id: 2,
      title: "237Kids",
      description: "Plateforme éducative dédiée aux enfants défavorisés du Cameroun. Interface adaptée aux enfants avec jeux éducatifs, cours interactifs et suivi de progression personnalisé.",
      technologies: ["React JS", "Framer Motion", "CSS Modules", "Chart.js", "JavaScript"],
      imageColor: "#9d00ff",
         liveLink: "https://espoir-237.vercel.app/", // Lien vers la démo
      githubLink: "https://github.com/dassi-com/237Kids", // Lien GitHub
      status: "En développement",
      icon: <Heart />,
      features: ["Jeux éducatifs", "Cours interactifs", "Suivi progression", "Interface enfants"],
      dbStatus: "Aucune (frontend uniquement pour l'instant)",
      projectType: "Plateforme Éducative"
    },
    {
      id: 3,
      title: "SmileCare",
      description: "Système complet de gestion pour cabinet dentaire avec prise de rendez-vous en ligne, gestion électronique des dossiers patients et suivi des traitements dentaires.",
      technologies: ["React JS", "SQLite", "Node.js", "Express", "Tailwind CSS"],
      imageColor: "#00ccff",
      liveLink: "https://smilecare-clinic.herokuapp.com", // Lien vers la démo
      githubLink: "https://github.com/votre-username/smilecare", // Lien GitHub
      status: "Fonctionnel",
      icon: <Smile />,
      features: ["Rendez-vous en ligne", "Dossiers patients", "Suivi traitements", "Facturation"],
      dbStatus: "SQLite + API Node.js",
      projectType: "Système de Gestion"
    },
    {
      id: 4,
      title: "AgriDelish",
      description: "Mon premier projet : plateforme innovante connectant directement agriculteurs locaux et restaurateurs pour une cuisine 100% locale, bio et traçable du champ à l'assiette.",
      technologies: ["JavaScript", "HTML5", "Tailwind CSS", "Node.js", "Express"],
      imageColor: "#27ca3f",
      liveLink:  "https://agrid-delish.vercel.app",  // Lien vers la démo
      githubLink:"https://github.com/dassi-com/Agridelish/", // Lien GitHub
      status: "Complet",
      icon: <Leaf />,
      features: ["Marketplace local", "Circuit court", "Traçabilité produits", "Commande en ligne"],
      dbStatus: "MySQL + API REST",
      projectType: "Marketplace Agricole"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Mes Projets</h2>
          <p className="section-subtitle">
            Des applications qui combinent innovation technologique et impact social
          </p>
        </motion.div>
        
        <motion.div 
          className="projects-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Chaque projet représente une étape de mon parcours de développement. 
            Cliquez sur les boutons pour voir les démos en ligne ou explorer le code source.
          </p>
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
        
        <motion.div 
          className="projects-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="github-cta">
            <h3>Plus de projets sur GitHub</h3>
            <p>Découvrez mes autres réalisations, contributions et projets personnels</p>
            <a 
              href="https://github.com/votre-username" 
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="github-icon" viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Voir mon GitHub
            </a>
          </div>
        </motion.div>
      </div>
      
      <style >{`
        .projects-section {
          background-color: var(--black);
          position: relative;
          overflow: hidden;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 60px;
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
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .projects-intro {
          text-align: center;
          margin-bottom: 60px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .projects-intro p {
          font-size: 1.1rem;
          color: var(--gray);
          line-height: 1.7;
        }
        
        .projects-intro strong {
          color: var(--fushia);
          font-weight: 600;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }
        
        .projects-footer {
          text-align: center;
          padding: 50px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          border: 1px solid rgba(255, 0, 255, 0.1);
        }
        
        .github-cta h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: var(--white);
        }
        
        .github-cta p {
          color: var(--gray);
          margin-bottom: 25px;
          font-size: 1.1rem;
          line-height: 1.6;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .github-cta .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 30px;
          font-size: 1rem;
          font-weight: 600;
        }
        
        .github-icon {
          margin-right: 5px;
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
          
          .section-title {
            font-size: 2.4rem;
          }
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .section-header {
            margin-bottom: 50px;
          }
          
          .section-title {
            font-size: 2.2rem;
          }
          
          .projects-footer {
            padding: 40px 25px;
          }
        }
        
        @media (max-width: 576px) {
          .github-cta .btn {
            width: 100%;
            max-width: 280px;
          }
          
          .projects-footer {
            padding: 30px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;