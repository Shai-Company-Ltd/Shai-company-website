import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ShieldCheck, FileText } from 'lucide-react';

export default function Applications() {
  const apps = [
    {
      id: 'notianote',
      name: 'NotiaNote',
      description: 'Un service gratuit et open source qui vous permet d\'accéder à vos données EcoleDirecte avec une interface moderne et améliorée. Aucune donnée personnelle stockée sur nos serveurs.',
      icon: <img src="/logos/notianote.png" alt="NotiaNote" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />,
      status: 'Disponible',
      links: [
        { title: 'App Store', url: 'https://apps.apple.com/fr/app/notianote/id6758548199', type: 'external', icon: <ExternalLink size={16} /> },
        { title: 'Confidentialité', url: '/notianote/privacy', type: 'internal', icon: <ShieldCheck size={16} /> },
        { title: 'CGU', url: '/notianote/cgu', type: 'internal', icon: <FileText size={16} /> }
      ]
    },
    {
      id: 'left-to-live',
      name: 'Left To Live',
      description: 'Une application qui estime de manière algorithmique le temps qu\'il vous reste à vivre, avec des fonctionnalités comme le testament numérique et le partage en couple. Conçue pour redonner du sens à chaque instant (Memento Mori).',
      icon: <img src="/logos/left-to-live.png" alt="Left To Live" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />,
      status: 'Disponible',
      links: [
        { title: 'App Store', url: 'https://apps.apple.com/', type: 'external', icon: <ExternalLink size={16} /> },
        { title: 'Confidentialité', url: '/left-to-live/privacy', type: 'internal', icon: <ShieldCheck size={16} /> },
        { title: 'CGU', url: '/left-to-live/cgu', type: 'internal', icon: <FileText size={16} /> }
      ]
    },
    {
      id: 'sex-map',
      name: 'SexMap',
      description: 'L\'application de cartographie innovante qui réinvente les rencontres géolocalisées. Connectez-vous, découvrez et explorez votre environnement en toute sécurité et confidentialité.',
      icon: <img src="/logos/sexmap.png" alt="SexMap" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />,
      status: 'En développement',
      links: [
        { title: 'Confidentialité', url: '/privacy', type: 'internal', icon: <ShieldCheck size={16} /> },
        { title: 'CGU', url: '/cgu', type: 'internal', icon: <FileText size={16} /> }
      ]
    }
  ];

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
        
        <div style={{ marginBottom: '60px' }}>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '4rem', marginBottom: '16px', letterSpacing: '0.02em' }}>
            Nos Applications
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem', fontFamily: 'Inter, sans-serif', maxWidth: '600px', lineHeight: 1.6 }}>
            Découvrez l'écosystème mobile et web développé par Shai Company ltd. Des interfaces ultra-fluides centrées sur l'expérience utilisateur et l'innovation.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
            gap: '32px'
          }}
        >
          {apps.map((app, index) => (
            <motion.div 
              key={app.id}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.5) inset, 0 10px 30px rgba(255,255,255,0.05)' }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                backdropFilter: 'blur(24px)', 
                border: '1px solid rgba(255, 255, 255, 0.08)', 
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '32px', 
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: '-5%', right: '-5%', fontSize: '12rem', fontWeight: 800, color: 'rgba(255,255,255,0.02)', lineHeight: 0.8, pointerEvents: 'none' }}>0{index + 1}</div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {app.icon}
                </div>
                <span style={{ 
                  background: app.status === 'Disponible' ? 'rgba(86,6,255,0.2)' : 'rgba(255,255,255,0.1)', 
                  color: app.status === 'Disponible' ? '#a37cff' : '#fff',
                  border: app.status === 'Disponible' ? '1px solid rgba(86,6,255,0.3)' : '1px solid transparent',
                  padding: '6px 16px', 
                  borderRadius: '100px', 
                  fontSize: '0.8rem', 
                  fontWeight: 600,
                  letterSpacing: '0.05em', 
                  textTransform: 'uppercase' 
                }}>
                  {app.status}
                </span>
              </div>
              
              <h3 style={{ fontSize: '2.5rem', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600, margin: '0 0 16px 0' }}>
                {app.name}
              </h3>
              
              <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter', margin: '0 0 32px 0', fontSize: '1.1rem', lineHeight: 1.6, flexGrow: 1 }}>
                {app.description}
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: 'auto' }}>
                {app.links.map((link, i) => (
                  link.type === 'internal' ? (
                    <Link key={i} to={link.url} style={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      background: 'rgba(255,255,255,0.05)',
                      padding: '8px 16px',
                      borderRadius: '100px',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
                    >
                      {link.icon} {link.title}
                    </Link>
                  ) : (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#a37cff',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      background: 'rgba(86,6,255,0.15)',
                      border: '1px solid rgba(86,6,255,0.3)',
                      padding: '8px 16px',
                      borderRadius: '100px',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(86,6,255,0.25)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(86,6,255,0.15)'; }}
                    >
                      {link.icon} {link.title}
                    </a>
                  )
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
