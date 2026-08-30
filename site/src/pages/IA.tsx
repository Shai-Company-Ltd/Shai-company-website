import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Sparkles, ExternalLink, Bot, Zap } from 'lucide-react';

export default function IA() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'relative', width: '100vw', minHeight: '100vh', color: '#fff', overflowX: 'hidden' }}
    >
      <div className="section-padding" style={{ position: 'relative', zIndex: 1, padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', minHeight: '80vh' }}>
        <Link to="/" style={{ display: 'flex', alignSelf: 'flex-start', alignItems: 'center', gap: '8px', color: '#aaa', textDecoration: 'none', marginBottom: '60px', fontSize: '1.1rem' }}>
          <ArrowLeft size={20} /> Retour à l'accueil
        </Link>
        
        <div style={{ marginBottom: '60px', display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div>
            <h1 className="page-title" style={{ fontFamily: '"Playfair Display", serif', fontSize: '4rem', margin: 0, letterSpacing: '0.02em' }}>
              Intelligence Artificielle
            </h1>
          </div>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.3rem', fontFamily: 'Inter, sans-serif', maxWidth: '800px', lineHeight: 1.6, marginBottom: '80px' }}>
          Chez Shai Company, nous intégrons l'intelligence artificielle pour repousser les limites de nos applications. Notre première IA a été spécialement conçue pour s'intégrer à l'écosystème NotiaNote.
        </p>

        {/* NotiaNote IA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ 
            background: 'linear-gradient(135deg, rgba(86,6,255,0.15) 0%, rgba(0,0,0,0) 100%)',
            border: '1px solid rgba(86,6,255,0.3)',
            borderRadius: '32px',
            padding: '60px 40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(86,6,255,0.2) 0%, transparent 70%)', transform: 'translate(30%, -30%)', pointerEvents: 'none' }}></div>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', display: 'inline-flex', padding: '16px', borderRadius: '24px', marginBottom: '24px' }}>
            <Brain size={32} color="#a37cff" />
          </div>
          
          <h2 style={{ fontSize: '2.5rem', fontFamily: '"Playfair Display", serif', margin: '0 0 16px 0' }}>NotiaNote IA</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
            Un assistant intelligent dédié à la scolarité. Pensé pour analyser, comprendre et accompagner les étudiants au quotidien à travers la plateforme NotiaNote.
          </p>
          
          <a href="https://ia.notianote.fr" target="_blank" rel="noopener noreferrer" style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: '#fff',
            color: '#000',
            padding: '16px 32px',
            borderRadius: '100px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '1.1rem',
            transition: 'transform 0.2s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Découvrir l'IA sur ia.notianote.fr <ExternalLink size={20} />
          </a>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="bento-grid"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px'
          }}
        >
          {/* Card 1 */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            whileHover={{ y: -5, scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.5) inset, 0 10px 30px rgba(86,6,255,0.1)' }}
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              backdropFilter: 'blur(24px)', 
              border: '1px solid rgba(255, 255, 255, 0.08)', 
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '24px', 
              padding: '32px',
            }}
          >
            <div style={{ background: 'rgba(255,255,255,0.05)', display: 'inline-flex', padding: '12px', borderRadius: '16px', marginBottom: '24px' }}>
              <Bot size={28} color="#a37cff" />
            </div>
            <h3 style={{ fontSize: '1.5rem', margin: '0 0 12px 0', fontFamily: 'Inter, sans-serif' }}>Automatisation</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
              Gagnez du temps grâce à des modèles de traitement de langage naturel capables d'effectuer des tâches répétitives instantanément.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            whileHover={{ y: -5, scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.5) inset, 0 10px 30px rgba(86,6,255,0.1)' }}
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              backdropFilter: 'blur(24px)', 
              border: '1px solid rgba(255, 255, 255, 0.08)', 
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '24px', 
              padding: '32px',
            }}
          >
            <div style={{ background: 'rgba(255,255,255,0.05)', display: 'inline-flex', padding: '12px', borderRadius: '16px', marginBottom: '24px' }}>
              <Sparkles size={28} color="#a37cff" />
            </div>
            <h3 style={{ fontSize: '1.5rem', margin: '0 0 12px 0', fontFamily: 'Inter, sans-serif' }}>Innovation Continue</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
              Nos algorithmes évoluent et apprennent en permanence pour vous fournir les résultats les plus pertinents.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}
