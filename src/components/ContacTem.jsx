import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Réinitialiser le statut après 5 secondes
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div 
          className="section-title-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contactez-moi</h2>
          <p className="section-subtitle">
            Discutons de votre projet et voyons comment je peux vous aider à le concrétiser
          </p>
        </motion.div>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-subtitle">Travaillons ensemble</h3>
            <p className="contact-description">
              Vous avez un projet en tête ? Une idée d'application web ? 
              Je serais ravie d'échanger avec vous pour donner vie à votre vision.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>dassidorl@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <h4>Téléphone</h4>
                  <p>+237 652 28 15 83</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4>Localisation</h4>
                  <p>Cameroun, Yaounde</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <p>Suivez-moi sur les réseaux</p>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <Github size={24} />
                </a>
                <a href="#" className="social-icon">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <>Envoi en cours...</>
                ) : (
                  <>
                    Envoyer le message <Send size={20} />
                  </>
                )}
              </motion.button>
              
              {submitStatus === 'success' && (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        .contact-section {
          background-color: var(--black-light);
        }
        
        .section-title-container {
          text-align: center;
          margin-bottom: 70px;
        }
        
        .section-subtitle {
          color: var(--gray);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }
        
        .contact-subtitle {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: var(--white);
        }
        
        .contact-description {
          color: var(--gray);
          line-height: 1.6;
          margin-bottom: 40px;
        }
        
        .contact-details {
          margin-bottom: 40px;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 25px;
        }
        
        .contact-icon {
          background-color: rgba(255, 0, 255, 0.1);
          color: var(--fushia);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .contact-item h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 5px;
          color: var(--white);
        }
        
        .contact-item p {
          color: var(--gray);
        }
        
        .social-links p {
          color: var(--gray);
          margin-bottom: 15px;
        }
        
        .social-icons {
          display: flex;
          gap: 15px;
        }
        
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          color: var(--white);
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background-color: var(--fushia);
          transform: translateY(-5px);
        }
        
        .contact-form {
          background-color: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          padding: 40px;
          border: 1px solid rgba(255, 0, 255, 0.1);
        }
        
        .form-group {
          margin-bottom: 25px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: var(--white);
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 15px;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          color: var(--white);
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--fushia);
          background-color: rgba(255, 0, 255, 0.05);
        }
        
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }
        
        .contact-form .btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 30px;
          font-size: 1.1rem;
        }
        
        .success-message {
          margin-top: 20px;
          padding: 15px;
          background-color: rgba(0, 200, 0, 0.1);
          color: #4ade80;
          border-radius: 10px;
          text-align: center;
          border: 1px solid rgba(0, 200, 0, 0.2);
        }
        
        @media (max-width: 1024px) {
          .contact-content {
            gap: 40px;
          }
          
          .contact-form {
            padding: 30px;
          }
        }
        
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          
          .contact-subtitle {
            font-size: 1.6rem;
          }
        }
        
        @media (max-width: 480px) {
          .contact-form {
            padding: 25px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;