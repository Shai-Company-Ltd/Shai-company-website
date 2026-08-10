import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();
  const { scrollY } = useScroll()
  
  const progress = useTransform(scrollY, [0, 400], [0, 1])
  
  // Title dynamically moves from center to top-left next to the logo
  const titleLeft = useTransform(progress, (p) => `calc(50vw - (50vw - 114px) * ${p})`)
  const titleTop = useTransform(progress, (p) => `calc(50vh - (50vh - 60px) * ${p})`)
  const titleX = useTransform(progress, (p) => `-${50 * (1 - p)}%`)
  const titleScale = useTransform(scrollY, [0, 400], [1, 0.28])
  
  // "ltd." fades out as it scrolls up
  const ltdOpacity = useTransform(scrollY, [0, 200], [1, 0])
  
  // Slogan fades out on scroll
  const sloganOpacity = useTransform(scrollY, [0, 200], [1, 0])
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}
    >
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-container {
            display: flex;
            width: 200%;
            animation: marquee 30s linear infinite;
          }
          .marquee-container:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      
      {/* Fixed Site Logo at Top Left */}
      <div style={{ position: 'fixed', top: '40px', left: '48px', zIndex: 50, display: 'flex', alignItems: 'center', gap: '16px' }}>
        <img src="/logo.png" alt="Shai Company LTD" style={{ height: '40px', width: 'auto', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }} />
      </div>

      {/* Top Navigation Links (Sans fond) */}
      <div style={{ position: 'fixed', top: '40px', right: '48px', height: '40px', zIndex: 50, display: 'flex', alignItems: 'center', gap: '32px' }}>
        <Link to="/apps" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase', opacity: 0.8 }}>Applications</Link>
        <Link to="/invest" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase', opacity: 0.8 }}>Investissement</Link>
        <Link to="/web3" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase', opacity: 0.8 }}>Web3</Link>
        <Link to="/music" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase', opacity: 0.8 }}>Music</Link>
        <Link to="/ia" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase', opacity: 0.8 }}>IA</Link>
      </div>



      {/* HERO SCROLL ANIMATION WRAPPER */}
      <div style={{ height: '140vh', position: 'relative', zIndex: 40 }}>
        {/* Hero Section (Sticky to keep it in viewport while scrolling) */}
        <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        
        {/* Animated Physical Title Container */}
        <motion.div 
          style={{ 
            position: 'fixed',
            left: titleLeft,
            top: titleTop,
            x: titleX,
            y: "-50%",
            scale: titleScale,
            transformOrigin: "left center",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 60
          }}
        >
          <div style={{
            padding: '0 64px'
          }}>
            <h1 style={{ 
              display: 'flex',
              alignItems: 'baseline',
              gap: '16px',
              fontSize: '5rem', 
              fontFamily: '"Playfair Display", serif', 
              fontWeight: 600, 
              letterSpacing: '0.05em', 
              margin: 0,
              textShadow: '0 4px 12px rgba(0,0,0,0.3)',
              whiteSpace: 'nowrap'
            }}>
              <span>Shai Company</span>
              <motion.span style={{ opacity: ltdOpacity }}>ltd.</motion.span>
            </h1>
          </div>

          <motion.h2 style={{ 
            opacity: sloganOpacity,
            fontSize: '1.2rem', 
            fontWeight: 300, 
            color: '#ffffff', 
            fontFamily: 'Inter, sans-serif', 
            letterSpacing: '0.3em', 
            textTransform: 'uppercase', 
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            textAlign: 'center'
          }}>
            Shaping the future across multiple dimensions.
          </motion.h2>
        </motion.div>
        
          {/* Scroll Indicator */}
          <motion.div 
            style={{ position: 'absolute', bottom: '40px', opacity: sloganOpacity }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em', fontSize: '0.8rem', textTransform: 'uppercase' }}>Swipe down</span>
          </motion.div>
        </div>
      </div>

      {/* BENTO GRID SECTION (POLES) */}
      <section style={{ 
        position: 'relative', 
        zIndex: 10, 
        padding: '120px 48px', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ width: '100%', maxWidth: '1200px' }}
        >
          <div style={{ marginBottom: '64px' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: '"Playfair Display", serif', fontWeight: 600, color: '#fff', margin: '0 0 16px 0', letterSpacing: '0.02em' }}>
              Nos Pôles d'Excellence.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem', fontFamily: 'Inter, sans-serif', maxWidth: '600px', lineHeight: 1.6 }}>
              Shai Company LTD développe des solutions de pointe à travers cinq dimensions stratégiques.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 }
              }
            }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '24px',
              gridAutoRows: '280px'
            }}
          >
            
            {/* 1. APPLICATIONS */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              whileHover={{ y: -8, scale: 1.01, boxShadow: '0 40px 80px rgba(0,0,0,0.6) inset, 0 10px 30px rgba(86,6,255,0.2)' }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => navigate('/apps')}
              style={{ 
                cursor: 'pointer',
                gridColumn: 'span 2', 
                background: 'rgba(255, 255, 255, 0.03)', 
                backdropFilter: 'blur(24px)', 
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255, 255, 255, 0.08)', 
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '32px', 
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4) inset'
              }}
            >
              <div style={{ position: 'absolute', top: '-10%', right: '-5%', fontSize: '15rem', fontWeight: 800, color: 'rgba(255,255,255,0.02)', lineHeight: 0.8, pointerEvents: 'none' }}>01</div>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(86,6,255,0.3) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}></div>
              <div style={{ position: 'absolute', top: '32px', left: '40px' }}>
                <span style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '100px', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff' }}>Écosystème</span>
              </div>
              <h3 style={{ fontSize: '2.5rem', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600, margin: '0 0 12px 0' }}>Applications</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter', margin: 0, maxWidth: '70%', fontSize: '1.1rem', lineHeight: 1.5 }}>Plateformes mobiles et web de pointe. Nous concevons des interfaces ultra-fluides centrées sur l'expérience utilisateur et la performance.</p>
            </motion.div>

            {/* 2. WEB3 */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              whileHover={{ y: -8, scale: 1.01, boxShadow: '0 10px 30px rgba(255,255,255,0.05)' }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => navigate('/web3')}
              style={{ 
                cursor: 'pointer',
                background: 'rgba(255, 255, 255, 0.03)', 
                backdropFilter: 'blur(24px)', 
                border: '1px solid rgba(255, 255, 255, 0.08)', 
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '32px', 
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: '-10%', right: '-5%', fontSize: '15rem', fontWeight: 800, color: 'rgba(255,255,255,0.02)', lineHeight: 0.8, pointerEvents: 'none' }}>02</div>
              <h3 style={{ fontSize: '1.8rem', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600, margin: '0 0 12px 0' }}>Web3</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter', margin: 0, fontSize: '0.95rem', lineHeight: 1.5 }}>L'infrastructure décentralisée de demain.</p>
            </motion.div>

            {/* 3. IA */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              whileHover={{ y: -8, scale: 1.01, boxShadow: '0 10px 30px rgba(255,255,255,0.05)' }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => navigate('/ia')}
              style={{ 
                cursor: 'pointer',
                background: 'rgba(255, 255, 255, 0.03)', 
                backdropFilter: 'blur(24px)', 
                border: '1px solid rgba(255, 255, 255, 0.08)', 
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '32px', 
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: '-10%', right: '-5%', fontSize: '15rem', fontWeight: 800, color: 'rgba(255,255,255,0.02)', lineHeight: 0.8, pointerEvents: 'none' }}>03</div>
              <h3 style={{ fontSize: '1.8rem', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600, margin: '0 0 12px 0' }}>IA</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter', margin: 0, fontSize: '0.95rem', lineHeight: 1.5 }}>Intelligence artificielle & automatisation poussée.</p>
            </motion.div>

            {/* 4. INVESTISSEMENT */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              whileHover={{ y: -8, scale: 1.01, boxShadow: '0 10px 30px rgba(255,255,255,0.05)' }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => navigate('/invest')}
              style={{ 
                cursor: 'pointer',
                background: 'rgba(255, 255, 255, 0.03)', 
                backdropFilter: 'blur(24px)', 
                border: '1px solid rgba(255, 255, 255, 0.08)', 
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '32px', 
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: '-10%', right: '-5%', fontSize: '15rem', fontWeight: 800, color: 'rgba(255,255,255,0.02)', lineHeight: 0.8, pointerEvents: 'none' }}>04</div>
              <h3 style={{ fontSize: '1.8rem', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600, margin: '0 0 12px 0' }}>Investissement</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter', margin: 0, fontSize: '0.95rem', lineHeight: 1.5 }}>Stratégies & capitaux pour disrupter les marchés.</p>
            </motion.div>

            {/* 5. MUSIC */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              whileHover={{ y: -8, scale: 1.01, boxShadow: '0 10px 30px rgba(254,137,137,0.1)' }}
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
                justifyContent: 'flex-end',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: '-10%', right: '-5%', fontSize: '15rem', fontWeight: 800, color: 'rgba(255,255,255,0.02)', lineHeight: 0.8, pointerEvents: 'none' }}>05</div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, rgba(254,137,137,0.1), transparent)', zIndex: -1 }}></div>
              <h3 style={{ fontSize: '1.8rem', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600, margin: '0 0 12px 0' }}>Music</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter', margin: 0, fontSize: '0.95rem', lineHeight: 1.5 }}>Production et innovation musicale.</p>
            </motion.div>

          </motion.div>
        </motion.div>
      </section>

      {/* SHOWCASE PORTFOLIO */}
      <section style={{ 
        position: 'relative', 
        zIndex: 10, 
        padding: '120px 48px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        overflow: 'hidden'
      }}>
        <div style={{ width: '100%', maxWidth: '1200px', marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontFamily: '"Playfair Display", serif', fontWeight: 600, color: '#fff', margin: 0, letterSpacing: '0.02em' }}>
              L'Écosystème Actif.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter', fontSize: '1.1rem', marginTop: '12px', marginBottom: 0 }}>Nos applications et plateformes en production.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontFamily: 'Inter', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <span style={{ fontSize: '1.2rem' }}>←</span>
            <span>Glisser pour explorer</span>
            <span style={{ fontSize: '1.2rem' }}>→</span>
          </div>
        </div>
        
        <div className="hide-scrollbar" style={{ 
          display: 'flex', 
          gap: '32px', 
          width: '100%', 
          maxWidth: '1200px',
          overflowX: 'auto',
          paddingBottom: '40px',
          scrollSnapType: 'x mandatory'
        }}>
          {/* Card 1 - Investissement */}
          <div style={{ 
            minWidth: '400px', 
            height: '500px',
            background: 'rgba(255, 255, 255, 0.03)', 
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)', 
            borderRadius: '24px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            scrollSnapAlign: 'start',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(180deg, transparent 40%, rgba(255,215,0,0.3))', zIndex: -1 }}></div>
            
            <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <img src="/logos/shai-invest.png" alt="Shai Invest Logo" style={{ width: '220px', height: '220px', objectFit: 'contain' }} />
            </div>

            <div>
              <h3 style={{ fontSize: '2rem', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600, margin: '0 0 12px 0' }}>Shai Invest</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter', margin: 0, fontSize: '1rem', lineHeight: 1.5 }}>Fonds d'investissement et trading haute performance. Gestion de capitaux avec croissance prouvée.</p>
            </div>
          </div>

          {/* Card 2 - SexMap */}
          <div style={{ 
            minWidth: '400px', 
            height: '500px',
            background: 'rgba(255, 255, 255, 0.03)', 
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)', 
            borderRadius: '24px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            scrollSnapAlign: 'start',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(180deg, transparent 40%, rgba(254,137,137,0.4))', zIndex: -1 }}></div>
            
            <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <img src="/logos/sexmap.png" alt="SexMap Logo" style={{ width: '220px', height: '220px', objectFit: 'contain' }} />
            </div>

            <div>
              <h3 style={{ fontSize: '2rem', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600, margin: '0 0 12px 0' }}>SexMap</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter', margin: 0, fontSize: '1rem', lineHeight: 1.5 }}>Application de rencontre et cartographie sociale révolutionnaire. Connectez-vous librement et en toute sécurité.</p>
            </div>
          </div>


          {/* Card 4 - IA */}
          <div style={{ 
            minWidth: '400px', 
            height: '500px',
            background: 'rgba(255, 255, 255, 0.03)', 
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)', 
            borderRadius: '24px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            scrollSnapAlign: 'start',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(180deg, transparent 40%, rgba(86,6,255,0.4))', zIndex: -1 }}></div>
            
            <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <img src="/logos/notianote.png" alt="NotiaNote Logo" style={{ width: '220px', height: '220px', objectFit: 'contain' }} />
            </div>

            <div>
              <h3 style={{ fontSize: '2rem', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600, margin: '0 0 12px 0' }}>NotiaNote (IA)</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter', margin: 0, fontSize: '1rem', lineHeight: 1.5 }}>L'intelligence artificielle au service de l'éducation. Plateforme SaaS révolutionnant le suivi scolaire.</p>
            </div>
          </div>

          {/* Card 5 - Left To Live */}
          <div style={{ 
            minWidth: '400px', 
            height: '500px',
            background: 'rgba(255, 255, 255, 0.03)', 
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)', 
            borderRadius: '24px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            scrollSnapAlign: 'start',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(180deg, transparent 40%, rgba(255,255,255,0.2))', zIndex: -1 }}></div>
            
            <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <img src="/logos/left-to-live.png" alt="Left To Live Logo" style={{ width: '220px', height: '220px', objectFit: 'contain' }} />
            </div>

            <div>
              <h3 style={{ fontSize: '2rem', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600, margin: '0 0 12px 0' }}>Left To Live</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter', margin: 0, fontSize: '1rem', lineHeight: 1.5 }}>Outil social et data-driven. Visualisez le temps qu'il vous reste et reprenez le contrôle de votre vie.</p>
            </div>
          </div>

          {/* Card 3 - Music (Moved to last) */}
          <div style={{ 
            minWidth: '400px', 
            height: '500px',
            background: 'rgba(255, 255, 255, 0.03)', 
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)', 
            borderRadius: '24px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            scrollSnapAlign: 'start',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(180deg, transparent 40%, rgba(0,240,255,0.4))', zIndex: -1 }}></div>
            
            <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <img src="/logos/shai-music.png" alt="Shai Music Logo" style={{ width: '220px', height: '220px', objectFit: 'contain' }} />
            </div>

            <div>
              <h3 style={{ fontSize: '2rem', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600, margin: '0 0 12px 0' }}>Shai Music</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter', margin: 0, fontSize: '1rem', lineHeight: 1.5 }}>Label et studio de production musicale de nouvelle génération. Dénicher et propulser les talents de demain.</p>
            </div>
          </div>
        </div>
      </section>


      {/* FOUNDER NOTE (Pure Typography) */}
      <section style={{ 
        position: 'relative', 
        zIndex: 10, 
        padding: '120px 48px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{ 
          width: '100%', 
          maxWidth: '900px',
          textAlign: 'center',
          position: 'relative'
        }}>
          {/* Huge decorative quotation mark */}
          <div style={{ 
            position: 'absolute', 
            top: '-80px', 
            left: '50%', 
            transform: 'translateX(-50%)',
            fontSize: '12rem', 
            fontFamily: '"Playfair Display", serif', 
            color: 'rgba(255,255,255,0.05)',
            lineHeight: 1,
            zIndex: -1
          }}>
            "
          </div>
          
          <h3 style={{ fontSize: '3rem', fontFamily: '"Playfair Display", serif', fontWeight: 400, color: '#fff', margin: '0 0 40px 0', fontStyle: 'italic', lineHeight: 1.4, textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            L'innovation ne vient pas de ceux qui suivent les règles. Elle vient de ceux qui les réécrivent.
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '2px', height: '40px', background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)', marginBottom: '20px' }}></div>
            <span style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600, fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Shai</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontFamily: 'Inter', marginTop: '6px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Fondateur & CEO</span>
          </div>
        </div>
      </section>


      {/* THE ULTRA-PREMIUM CTA (No boxes, pure typography) */}
      <section style={{ 
        position: 'relative', 
        zIndex: 10, 
        padding: '0 48px 200px 48px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ width: '100%', maxWidth: '800px' }}
        >
          {/* Subtle glowing line above */}
          <div style={{ width: '1px', height: '100px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5))', margin: '0 auto 40px auto' }}></div>

          <h2 style={{ fontSize: '5rem', fontFamily: '"Playfair Display", serif', fontWeight: 600, color: '#fff', margin: '0 0 24px 0', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            L'écosystème <br/><span style={{ color: 'rgba(255,255,255,0.3)' }}>vous attend.</span>
          </h2>
          
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, marginBottom: '64px' }}>
            Investisseurs, talents ou partenaires stratégiques.
          </p>

          <motion.button 
            onClick={() => navigate('/contact')}
            whileHover={{ scale: 1.05, gap: '24px' }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              background: 'transparent', 
              color: '#fff', 
              border: 'none', 
              borderBottom: '1px solid rgba(255,255,255,0.3)',
              padding: '0 0 8px 0', 
              fontSize: '1.2rem', 
              fontWeight: 500, 
              fontFamily: 'Inter, sans-serif',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <span>Initialiser le contact</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.button>
        </motion.div>
      </section>

    </motion.div>
  )
}
