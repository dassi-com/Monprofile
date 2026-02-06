import { motion } from 'framer-motion';
import { ChevronRight,  Code2 } from 'lucide-react';
import kid from "../assets/me.jpg"

const Hero = () => {
  const floatingAnimation = {
    y: [0, -6, 0],
    transition: {
      y: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  // Bulles et étoiles plus visibles
  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 15, // Plus grandes
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 15 + 15, // Plus lentes
    isStar: Math.random() > 0.6,
    opacity: Math.random() * 0.4 + 0.3, // Plus opaques
    blur: Math.random() * 1.5 + 0.5
  }));

  return (
    <section id="home" className="section hero-section">
      {/* Bulles et étoiles flottantes VISIBLES */}
      <div className="floating-background">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className={`floating-element ${element.isStar ? 'star' : 'bubble'}`}
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              opacity: element.opacity,
              filter: `blur(${element.blur}px)`
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, element.isStar ? 20 : -20, 0],
              rotate: element.isStar ? [0, 180, 360] : [0, 0, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              y: {
                duration: element.duration,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              },
              x: {
                duration: element.duration * 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              },
              rotate: element.isStar ? {
                duration: element.duration * 3,
                repeat: Infinity,
                ease: "linear"
              } : {},
              scale: {
                duration: element.duration * 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          />
        ))}
        
        {/* Quelques grosses bulles spéciales */}
        <motion.div
          className="floating-element big-bubble"
          style={{
            left: '10%',
            top: '20%',
            width: '80px',
            height: '80px',
            opacity: 0.25
          }}
          animate={{
            y: [0, -80, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            y: {
              duration: 25,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            },
            scale: {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        />
        
        <motion.div
          className="floating-element big-bubble"
          style={{
            right: '15%',
            bottom: '30%',
            width: '60px',
            height: '60px',
            opacity: 0.3
          }}
          animate={{
            y: [0, -60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            y: {
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 5
            },
            scale: {
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        />
        
        {/* Grosses étoiles brillantes */}
        <motion.div
          className="floating-element big-star"
          style={{
            left: '5%',
            bottom: '15%',
            width: '30px',
            height: '30px',
            opacity: 0.4
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 360],
            scale: [1, 1.5, 1]
          }}
          transition={{
            y: {
              duration: 18,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            },
            rotate: {
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        />
        
        <motion.div
          className="floating-element big-star"
          style={{
            right: '8%',
            top: '10%',
            width: '25px',
            height: '25px',
            opacity: 0.35
          }}
          animate={{
            y: [0, -35, 0],
            rotate: [0, -360],
            scale: [1, 1.4, 1]
          }}
          transition={{
            y: {
              duration: 22,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 3
            },
            rotate: {
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 14,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        />
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="name-presentation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="greeting">Bonjour, je suis</div>
              <h1 className="name">
                <span className="first-name">Dorlane</span>
                <span className="last-name">Dassi</span>
              </h1>
            </motion.div>
            
            <motion.div 
              className="badge"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Code2 size={16} />
              <span>Développeuse Frontend React JS</span>
            </motion.div>
            
            <h2 className="hero-title">
              Je transforme vos idées en
              <span className="highlight"> expériences digitales</span>
              <br />exceptionnelles
            </h2>
            
            <p className="hero-description">
              Passionnée par la création d'interfaces modernes et performantes, 
              je combine design et technologie pour donner vie à vos projets web.
              Spécialisée en React JS avec une touche de design féminin et élégant.
            </p>
            
            <div className="hero-buttons">
              <motion.a 
                href="#about" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 0, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                En savoir plus sur moi
              </motion.a>
              <motion.a 
                href="#projects" 
                className="btn"
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(255, 0, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mes projets <ChevronRight size={20} />
              </motion.a>
            </div>
          </motion.div>
          
          <div className="hero-visual">
            <motion.div 
              className="image-wrapper"
              animate={floatingAnimation}
              style={{ 
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <div className="image-container">
                <div className="image-frame">
                  <div className="image-overlay"></div>
                  
                  <img 
                    src={kid} 
                    alt="Dorlane Dassi - Développeuse React JS" 
                    className="profile-image"
                  />
                  
                  <div className="transition-effect"></div>
                </div>
                
                <div className="decorative-element element-1"></div>
                <div className="decorative-element element-2"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <style>{`
        .hero-section {
          padding-top: 120px;
          padding-bottom: 80px;
          overflow: hidden;
          position: relative;
          background-color: var(--black);
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        
        .floating-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }
        
        .floating-element {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        
        .floating-element.bubble {
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 0, 255, 0.4) 0%,
            rgba(255, 102, 255, 0.25) 40%,
            rgba(255, 0, 255, 0.1) 70%,
            transparent 100%
          );
          border: 2px solid rgba(255, 0, 255, 0.5);
          box-shadow: 
            0 0 30px rgba(255, 0, 255, 0.4),
            0 0 60px rgba(255, 102, 255, 0.2),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
        }
        
        .floating-element.big-bubble {
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 0, 255, 0.3) 0%,
            rgba(255, 102, 255, 0.2) 40%,
            rgba(255, 0, 255, 0.1) 70%,
            transparent 100%
          );
          border: 3px solid rgba(255, 0, 255, 0.4);
          box-shadow: 
            0 0 50px rgba(255, 0, 255, 0.3),
            0 0 100px rgba(255, 102, 255, 0.15),
            inset 0 0 30px rgba(255, 255, 255, 0.1);
        }
        
        .floating-element.star {
          background: transparent;
          border: none;
          position: relative;
        }
        
        .floating-element.star::before,
        .floating-element.star::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(255, 0, 255, 0.6);
          box-shadow: 0 0 15px rgba(255, 0, 255, 0.8);
        }
        
        .floating-element.star::before {
          width: 100%;
          height: 4px;
          border-radius: 2px;
        }
        
        .floating-element.star::after {
          width: 4px;
          height: 100%;
          border-radius: 2px;
        }
        
        .floating-element.big-star {
          background: transparent;
          border: none;
          position: relative;
        }
        
        .floating-element.big-star::before,
        .floating-element.big-star::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(255, 0, 255, 0.7);
          box-shadow: 
            0 0 20px rgba(255, 0, 255, 1),
            0 0 40px rgba(255, 102, 255, 0.5);
        }
        
        .floating-element.big-star::before {
          width: 100%;
          height: 6px;
          border-radius: 3px;
        }
        
        .floating-element.big-star::after {
          width: 6px;
          height: 100%;
          border-radius: 3px;
        }
        
        /* Variations de couleurs pour certaines bulles */
        .floating-element:nth-child(3n) {
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 102, 255, 0.5) 0%,
            rgba(255, 153, 255, 0.3) 40%,
            rgba(255, 102, 255, 0.15) 70%,
            transparent 100%
          );
          border-color: rgba(255, 102, 255, 0.6);
          box-shadow: 
            0 0 35px rgba(255, 102, 255, 0.5),
            0 0 70px rgba(255, 153, 255, 0.3),
            inset 0 0 25px rgba(255, 255, 255, 0.15);
        }
        
        .floating-element:nth-child(5n) {
          background: radial-gradient(
            circle at 30% 30%,
            rgba(204, 0, 204, 0.5) 0%,
            rgba(230, 0, 230, 0.3) 40%,
            rgba(204, 0, 204, 0.15) 70%,
            transparent 100%
          );
          border-color: rgba(204, 0, 204, 0.6);
          box-shadow: 
            0 0 40px rgba(204, 0, 204, 0.5),
            0 0 80px rgba(230, 0, 230, 0.25),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
        }
        
        /* Brillance pulsante pour certaines étoiles */
        .floating-element.star:nth-child(7n) {
          animation: star-pulse 3s ease-in-out infinite;
        }
        
        @keyframes star-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        
        .name-presentation {
          margin-bottom: 30px;
        }
        
        .greeting {
          font-size: 1.3rem;
          color: var(--gray);
          margin-bottom: 10px;
          font-weight: 300;
        }
        
        .name {
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        
        .first-name {
          color: var(--white);
          text-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        }
        
        .last-name {
          color: var(--fushia);
          background: linear-gradient(90deg, var(--fushia), var(--fushia-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 0, 255, 0.1);
          color: var(--fushia);
          padding: 10px 20px;
          border-radius: 30px;
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 30px;
          border: 1px solid rgba(255, 0, 255, 0.2);
          max-width: fit-content;
          backdrop-filter: blur(10px);
        }
        
        .hero-title {
          font-size: 2.8rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 25px;
        }
        
        .hero-title .highlight {
          color: var(--fushia);
        }
        
        .hero-description {
          font-size: 1.2rem;
          color: var(--gray);
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 90%;
        }
        
        .hero-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .hero-visual {
          position: relative;
          z-index: 2;
          height: fit-content;
          padding: 15px 0;
        }
        
        .image-wrapper {
          position: relative;
          will-change: transform;
        }
        
        .image-container {
          position: relative;
          width: 100%;
          max-width: 420px;
          margin: 0 auto;
        }
        
        .image-frame {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.4),
            0 8px 25px rgba(255, 0, 255, 0.25);
          border: 1px solid rgba(255, 0, 255, 0.35);
          border-top-left-radius: 38px;
          border-bottom-right-radius: 38px;
          border-top-right-radius: 18px;
          border-bottom-left-radius: 18px;
          background: transparent;
          padding: 10px;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .profile-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 14px;
          border-top-left-radius: 28px;
          border-bottom-right-radius: 28px;
          border-top-right-radius: 12px;
          border-bottom-left-radius: 12px;
          position: relative;
          z-index: 1;
          filter: brightness(1.1) contrast(1.05);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          transform: scale(1);
        }
        
        .image-overlay {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          bottom: 10px;
          background: linear-gradient(
            135deg,
            rgba(15, 30, 55, 0.4) 0%,
            rgba(25, 50, 90, 0.3) 50%,
            rgba(35, 70, 130, 0.15) 100%
          );
          z-index: 2;
          border-radius: inherit;
          mix-blend-mode: overlay;
          pointer-events: none;
          opacity: 0.6;
          transition: opacity 0.5s ease;
        }
        
        .transition-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.03),
            transparent
          );
          z-index: 3;
          pointer-events: none;
          transition: left 0.8s ease;
          border-radius: inherit;
        }
        
        .image-frame:hover .transition-effect {
          left: 100%;
        }
        
        .image-frame:hover {
          transform: translateY(-5px);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.5),
            0 12px 35px rgba(255, 0, 255, 0.35);
          border-color: rgba(255, 0, 255, 0.5);
        }
        
        .image-frame:hover .profile-image {
          transform: scale(1.02);
          filter: brightness(1.12) contrast(1.08);
        }
        
        .image-frame:hover .image-overlay {
          opacity: 0.5;
        }
        
        .decorative-element {
          position: absolute;
          border-radius: 50%;
          background: var(--fushia);
          z-index: 3;
          filter: blur(0.5px);
          opacity: 0.4;
          animation: float-smooth 6s ease-in-out infinite;
        }
        
        .element-1 {
          width: 12px;
          height: 12px;
          top: -15px;
          right: 20px;
          animation-delay: 0s;
        }
        
        .element-2 {
          width: 8px;
          height: 8px;
          bottom: 30px;
          left: -10px;
          background: var(--fushia-light);
          animation-delay: 2s;
        }
        
        @keyframes float-smooth {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-8px) translateX(4px) scale(1.1);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-4px) translateX(-2px) scale(0.95);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-12px) translateX(2px) scale(1.05);
            opacity: 0.6;
          }
        }
        
        @keyframes gentle-wave {
          0%, 100% {
            box-shadow: 
              0 20px 40px rgba(0, 0, 0, 0.4),
              0 8px 25px rgba(255, 0, 255, 0.25);
          }
          50% {
            box-shadow: 
              0 22px 44px rgba(0, 0, 0, 0.45),
              0 10px 30px rgba(255, 0, 255, 0.3);
          }
        }
        
        .image-frame {
          animation: gentle-wave 8s ease-in-out infinite;
        }
        
        /* ===== RESPONSIVE DESIGN ===== */
        
        @media (max-width: 1024px) {
          .name {
            font-size: 3.8rem;
          }
          
          .hero-title {
            font-size: 2.4rem;
          }
          
          .hero-description {
            font-size: 1.1rem;
          }
          
          .image-container {
            max-width: 380px;
          }
          
          /* Réduire légèrement les bulles sur tablette */
          .floating-element {
            width: ${props => props.size * 0.7}px !important;
            height: ${props => props.size * 0.7}px !important;
          }
          
          .floating-element.big-bubble {
            width: 50px !important;
            height: 50px !important;
          }
          
          .floating-element.big-star {
            width: 20px !important;
            height: 20px !important;
          }
        }
        
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 100px;
            padding-bottom: 60px;
            min-height: auto;
          }
          
          .hero-content {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          
          .hero-text {
            text-align: center;
          }
          
          .name-presentation {
            text-align: center;
          }
          
          .name {
            font-size: 3rem;
            align-items: center;
          }
          
          .greeting {
            font-size: 1.1rem;
          }
          
          .badge {
            margin: 0 auto 30px;
          }
          
          .hero-title {
            font-size: 1.9rem;
            text-align: center;
          }
          
          .hero-description {
            font-size: 1rem;
            max-width: 100%;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .hero-visual {
            order: -1;
            max-width: 380px;
            margin: 0 auto;
          }
          
          .image-container {
            max-width: 100%;
          }
          
          /* Masquer la plupart des bulles sur mobile */
          .floating-element {
            display: none;
          }
          
          /* Garder seulement les grosses bulles */
          .floating-element.big-bubble,
          .floating-element.big-star {
            display: block;
          }
        }
        
        @media (max-width: 576px) {
          .name {
            font-size: 2.5rem;
          }
          
          .hero-title {
            font-size: 1.7rem;
          }
          
          .hero-description {
            font-size: 0.95rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-buttons .btn {
            width: 100%;
            max-width: 280px;
          }
          
          .image-frame {
            border-top-left-radius: 26px;
            border-bottom-right-radius: 26px;
            border-top-right-radius: 14px;
            border-bottom-left-radius: 14px;
            padding: 8px;
          }
          
          .profile-image {
            border-top-left-radius: 18px;
            border-bottom-right-radius: 18px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 10px;
          }
          
          .decorative-element {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;