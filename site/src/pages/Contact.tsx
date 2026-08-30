import { motion } from 'framer-motion';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'relative', width: '100vw', minHeight: '100vh', color: '#fff', overflowX: 'hidden' }}
    >


      <div style={{ position: 'relative', zIndex: 1, padding: '40px 20px', maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
        <Link to="/" style={{ display: 'flex', alignSelf: 'flex-start', alignItems: 'center', gap: '8px', color: '#aaa', textDecoration: 'none', marginBottom: '40px', fontSize: '1.1rem' }}>
          <ArrowLeft size={20} /> Retour à l'accueil
        </Link>
        
        <div style={{ 
          padding: '60px 40px',
          textAlign: 'center',
          width: '100%'
        }}>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '3rem', marginBottom: '16px' }}>Support & Contact</h1>
          
          <p style={{ color: '#ccc', marginBottom: '48px', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Que vous ayez une question sur l'une de nos applications, que vous souhaitiez candidater pour Shai Music, ou pour toute autre demande (support, suppression de données personnelles), notre équipe est à votre écoute.
          </p>

          <a href="mailto:contact@shaiscompany.com" className="contact-btn" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '12px', 
            background: '#fff', 
            color: '#000', 
            padding: '16px 32px', 
            borderRadius: '50px', 
            textDecoration: 'none', 
            fontWeight: 'bold', 
            fontSize: '1.2rem',
            boxShadow: '0 8px 24px rgba(255, 255, 255, 0.2)',
            maxWidth: '100%',
            boxSizing: 'border-box'
          }}>
            <Mail size={24} style={{ flexShrink: 0 }} /> 
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>contact@shaiscompany.com</span>
          </a>
          
          <p style={{ color: '#888', marginTop: '32px', fontSize: '0.9rem' }}>
            Nous nous efforçons de répondre à toutes les demandes dans un délai de 48 heures ouvrées.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
