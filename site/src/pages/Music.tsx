import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mic2, Users, Mail, ExternalLink, Music as MusicIcon } from 'lucide-react';

export default function Music() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'relative', width: '100vw', minHeight: '100vh', color: '#fff', overflowX: 'hidden' }}
    >
      <div style={{ position: 'relative', zIndex: 1, padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', minHeight: '80vh' }}>
        <Link to="/" style={{ display: 'flex', alignSelf: 'flex-start', alignItems: 'center', gap: '8px', color: '#aaa', textDecoration: 'none', marginBottom: '60px', fontSize: '1.1rem' }}>
          <ArrowLeft size={20} /> Retour à l'accueil
        </Link>
        
        <div style={{ marginBottom: '60px', display: 'flex', alignItems: 'center', gap: '24px' }}>
          <img src="/logos/shai-music.png" alt="Shai Music" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
          <div>
            <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '4rem', margin: 0, letterSpacing: '0.02em' }}>
              Label Musical
            </h1>
          </div>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.3rem', fontFamily: 'Inter, sans-serif', maxWidth: '800px', lineHeight: 1.6, marginBottom: '60px' }}>
          Shai Music est notre division dédiée à la production et au développement d'artistes. Nous recherchons activement nos 4 prochains talents pour construire une équipe d'avant-garde.
        </p>

        {/* Current Artists Section */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: '"Playfair Display", serif', margin: '0 0 32px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
            Nos Artistes
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {/* Artist 1 */}
            <motion.div 
              whileHover={{ y: -5, scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.5) inset, 0 10px 30px rgba(86,6,255,0.1)' }}
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                backdropFilter: 'blur(24px)', 
                border: '1px solid rgba(255, 255, 255, 0.08)', 
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '24px', 
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <div style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                marginBottom: '24px',
                border: '4px solid rgba(255,255,255,0.1)'
              }}>
                <img src="/logos/dontbyshai.jpeg" alt="dontbyshai" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.8rem', margin: '0 0 8px 0', fontFamily: 'Inter, sans-serif' }}>dontbyshai</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', margin: '0 0 24px 0', fontSize: '1rem' }}>Artiste / Producteur</p>
              
              <a href="https://open.spotify.com/intl-fr/artist/47Nz6g4SrrfU7kFEjpxP6k" target="_blank" rel="noopener noreferrer" style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#1DB954',
                color: '#fff',
                padding: '10px 24px',
                borderRadius: '100px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'transform 0.2s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <MusicIcon size={16} /> Écouter sur Spotify
              </a>
            </motion.div>

            {/* Empty Slots */}
            {[1, 2, 3, 4].map((slot) => (
              <div key={slot} style={{ 
                background: 'rgba(255, 255, 255, 0.01)', 
                border: '1px dashed rgba(255, 255, 255, 0.1)', 
                borderRadius: '24px', 
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                minHeight: '300px'
              }}>
                <Users size={40} color="rgba(255,255,255,0.2)" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontSize: '1.2rem', margin: '0 0 8px 0', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>Place Disponible</h3>
                <p style={{ color: 'rgba(255,255,255,0.3)', margin: 0, fontSize: '0.9rem' }}>Profil {slot + 1} / 5</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ 
            background: 'linear-gradient(135deg, rgba(86,6,255,0.2) 0%, rgba(0,0,0,0) 100%)',
            border: '1px solid rgba(86,6,255,0.3)',
            borderRadius: '32px',
            padding: '60px 40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(86,6,255,0.2) 0%, transparent 70%)', transform: 'translate(30%, -30%)', pointerEvents: 'none' }}></div>
          <div style={{ background: 'rgba(255,255,255,0.05)', display: 'inline-flex', padding: '16px', borderRadius: '24px', marginBottom: '24px' }}>
            <Mic2 size={32} color="#a37cff" />
          </div>
          <h2 style={{ fontSize: '2.5rem', fontFamily: '"Playfair Display", serif', margin: '0 0 16px 0' }}>Nous recrutons 4 talents</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
            Vous êtes un artiste avec une vision unique ? Vous cherchez une structure pour développer votre potentiel ? Shai Music ouvre ses portes. <br /><br />
            <strong>Pour candidater, envoyez-nous un mail avec une présentation et obligatoirement un exemple de votre musique.</strong>
          </p>
          <Link to="/contact" style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: '#fff',
            color: '#000',
            padding: '16px 32px',
            borderRadius: '100px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1.1rem',
            transition: 'transform 0.2s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Mail size={20} /> Candidater Maintenant
          </Link>
        </motion.div>

      </div>
    </motion.div>
  );
}
