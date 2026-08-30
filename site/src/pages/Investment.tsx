import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Shield, Zap, Mail, ExternalLink, AlertTriangle } from 'lucide-react';

export default function Investment() {
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
          <img src="/logos/shai-invest.png" alt="Shai Invest" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
          <div>
            <h1 className="page-title" style={{ fontFamily: '"Playfair Display", serif', fontSize: '4rem', margin: 0, letterSpacing: '0.02em' }}>
              Investissement & Trading
            </h1>
          </div>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.3rem', fontFamily: 'Inter, sans-serif', maxWidth: '800px', lineHeight: 1.6, marginBottom: '80px' }}>
          Chez Shai Company, nous ne nous contentons pas de créer des applications. Nous investissons activement dans l'innovation, le Web3, et les marchés financiers pour construire l'économie de demain.
        </p>

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
            gap: '24px',
            marginBottom: '80px'
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
              <TrendingUp size={28} color="#a37cff" />
            </div>
            <h3 style={{ fontSize: '1.5rem', margin: '0 0 12px 0', fontFamily: 'Inter, sans-serif' }}>Vision Long Terme</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
              Nous investissons nos ressources dans des projets internes et des technologies d'avenir pour bâtir un écosystème durable.
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
              <Zap size={28} color="#a37cff" />
            </div>
            <h3 style={{ fontSize: '1.5rem', margin: '0 0 12px 0', fontFamily: 'Inter, sans-serif' }}>Excellence Web3 & IA</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
              Une veille constante et un placement stratégique dans les infrastructures logicielles de nouvelle génération.
            </p>
          </motion.div>

          {/* Card 3 */}
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
              <Shield size={28} color="#a37cff" />
            </div>
            <h3 style={{ fontSize: '1.5rem', margin: '0 0 12px 0', fontFamily: 'Inter, sans-serif' }}>Marchés Financiers</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
              Analyse technique et trading algorithmique pour optimiser les rendements sur les marchés cryptographiques.
            </p>
          </motion.div>
        </motion.div>

        {/* Action Sections */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          
          {/* Copy Trading Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{ 
              background: 'linear-gradient(135deg, rgba(255,165,0,0.15) 0%, rgba(0,0,0,0) 100%)',
              border: '1px solid rgba(255,165,0,0.3)',
              borderRadius: '32px',
              padding: '60px 40px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '800px',
              width: '100%'
            }}
          >
            <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,165,0,0.2) 0%, transparent 70%)', transform: 'translate(30%, -30%)', pointerEvents: 'none' }}></div>
            <h2 style={{ fontSize: '2.5rem', fontFamily: '"Playfair Display", serif', margin: '0 0 16px 0' }}>Copy Trading</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
              Suivez mes stratégies de trading crypto en temps réel sur Bitunix et répliquez mes performances de manière automatisée.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,0,0,0.1)', border: '1px solid rgba(255,0,0,0.3)', padding: '12px 20px', borderRadius: '16px', marginBottom: '32px' }}>
              <AlertTriangle size={20} color="#ff4444" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.85rem', color: '#ffaaaa', textAlign: 'left', lineHeight: 1.4 }}>
                <strong>Attention :</strong> Le trading comporte des risques importants de perte en capital. Faites toujours vos propres recherches (DYOR).
              </span>
            </div>

            <a href="https://www.bitunix.com/copy-trading/profile/693618598?source=web" target="_blank" rel="noopener noreferrer" style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: '#ffa500',
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
              Rejoindre sur Bitunix <ExternalLink size={20} />
            </a>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
