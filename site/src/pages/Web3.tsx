import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wallet, Shield, Globe } from 'lucide-react';

export default function Web3() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-10-01T00:00:00Z').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'relative', width: '100vw', minHeight: '100vh', color: '#fff', overflowX: 'hidden' }}
    >
      <div className="section-padding" style={{ position: 'relative', zIndex: 1, padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', minHeight: '80vh' }}>
        <Link to="/" style={{ display: 'flex', alignSelf: 'flex-start', alignItems: 'center', gap: '8px', color: '#aaa', textDecoration: 'none', marginBottom: '60px', fontSize: '1.1rem' }}>
          <ArrowLeft size={20} /> Retour à l'accueil
        </Link>
        
        <div style={{ marginBottom: '60px', display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div>
            <h1 className="page-title" style={{ fontFamily: '"Playfair Display", serif', fontSize: '4rem', margin: 0, letterSpacing: '0.02em' }}>
              Shai Web3
            </h1>
          </div>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6, marginBottom: '64px' }}>
          Nous construisons l'infrastructure financière de demain. Shai Web3 se concentre sur le développement d'outils décentralisés, sécurisés et accessibles à tous, avec pour point culminant la création de notre propre écosystème cryptographique.
        </p>

        {/* Countdown Section */}
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
            <Wallet size={32} color="#a37cff" />
          </div>
          <h2 style={{ fontSize: '2.5rem', fontFamily: '"Playfair Display", serif', margin: '0 0 16px 0' }}>Wallet Shai Company</h2>
          <p style={{ color: '#a37cff', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '40px' }}>Lancement Prévu : 1er Octobre 2026</p>
          
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* Days */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '20px', minWidth: '100px' }}>
              <span style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>{String(timeLeft.days).padStart(2, '0')}</span>
              <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Jours</span>
            </div>
            {/* Hours */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '20px', minWidth: '100px' }}>
              <span style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>{String(timeLeft.hours).padStart(2, '0')}</span>
              <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Heures</span>
            </div>
            {/* Minutes */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '20px', minWidth: '100px' }}>
              <span style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Minutes</span>
            </div>
            {/* Seconds */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '20px', minWidth: '100px' }}>
              <span style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Secondes</span>
            </div>
          </div>
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
              <Shield size={28} color="#a37cff" />
            </div>
            <h3 style={{ fontSize: '1.5rem', margin: '0 0 12px 0', fontFamily: 'Inter, sans-serif' }}>Sécurité Absolue</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
              Vos clés privées, vos actifs. Une architecture pensée pour résister aux menaces les plus complexes.
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
              <Globe size={28} color="#a37cff" />
            </div>
            <h3 style={{ fontSize: '1.5rem', margin: '0 0 12px 0', fontFamily: 'Inter, sans-serif' }}>Accessibilité</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
              Fini les interfaces compliquées. Nous rendons le Web3 accessible à tous grâce à une UX fluide.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}
