import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '60px 0 40px',
      marginTop: '80px',
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontSize: '0.9rem'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <img src="/logo.png" alt="Shai Company ltd." style={{ height: '48px', width: 'auto', objectFit: 'contain', opacity: 0.8 }} />
        <div style={{ fontWeight: 600, color: 'var(--text-color)', letterSpacing: '0.05em' }}>Shai Company ltd.</div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link to="/privacy" style={{ opacity: 0.7 }}>Politique de Confidentialité</Link>
          <Link to="/cgu" style={{ opacity: 0.7 }}>CGU</Link>
          <Link to="/contact" style={{ opacity: 0.7 }}>Contact</Link>
        </div>
        <div style={{ opacity: 0.5, marginTop: '20px' }}>
          &copy; {new Date().getFullYear()} Shai Company ltd. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
