import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface LegalProps {
  type: 'privacy' | 'cgu';
  project?: 'shai' | 'left-to-live' | 'notianote';
}

export default function Legal({ type, project = 'shai' }: LegalProps) {
  const isPrivacy = type === 'privacy';

  const renderShaiPrivacy = () => (
    <>
      <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2.5rem', marginBottom: '8px' }}>Politique de Confidentialité</h1>
      <p style={{ color: '#aaa', marginBottom: '32px' }}>Dernière mise à jour : Août 2026</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: '1.6' }}>
        <p>Bienvenue sur le site institutionnel de Shai Company ltd. Nous accordons une importance primordiale à la protection de vos données personnelles et au respect de votre vie privée.</p>
        
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>1. COLLECTE DES DONNÉES ET SITE OPEN SOURCE</h3>
          <p style={{ color: '#ddd' }}>En tant que site vitrine et institutionnel (Open Source), shaicompany.com ne collecte <strong>aucune donnée personnelle</strong>. Aucune information n'est récupérée directement lors de votre navigation sur ce site.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>2. CONFIDENTIALITÉ LIÉE AUX PRODUITS</h3>
          <p style={{ color: '#ddd' }}>Les politiques de confidentialité sont spécifiques à chacun des produits proposés par Shai Company ltd. (applications mobiles, plateformes web, etc.). Les éventuelles collectes de données s'effectuent via les services liés à ces applications (par exemple, pour héberger des profils ou sauvegarder des données). Nous vous invitons à lire attentivement les conditions de confidentialité propres à chaque application que vous utilisez, certaines d'entre elles étant hébergées sur le présent site afin de centraliser nos ressources.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>3. JURIDICTION ET HÉBERGEMENT</h3>
          <p style={{ color: '#ddd' }}>Shai Company ltd. est une société enregistrée et hébergée aux Bahamas. Son infrastructure répond aux standards de sécurité les plus stricts.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>4. VOS DROITS ET CONTACT POUR VOS DONNÉES</h3>
          <p style={{ color: '#ddd' }}>Si vous souhaitez récupérer, modifier ou supprimer des données liées à l'un de nos produits, vous devez nous en faire la demande formelle par e-mail. Bien qu'aucune donnée ne soit stockée via ce site vitrine, nous centralisons les requêtes de nos utilisateurs pour l'ensemble de nos applications.</p>
          <p style={{ color: '#ddd', marginTop: '8px' }}>Pour exercer vos droits, veuillez nous contacter à : <strong>contact@shaicompany.com</strong></p>
        </div>
      </div>
    </>
  );

  const renderShaiCGU = () => (
    <>
      <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2.5rem', marginBottom: '32px' }}>Conditions Générales d'Utilisation (CGU)</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: '1.6' }}>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>1. Mentions Légales</h3>
          <p style={{ color: '#ddd' }}>
            <strong>Éditeur du site :</strong> Shai Company ltd., société d'investissement et d'innovation technologique.<br />
            <strong>Hébergeur :</strong> Ce site est hébergé par OuiHeberg.<br />
            <strong>Contact :</strong> Vous pouvez nous contacter pour toute demande à l'adresse e-mail suivante : <strong>contact@shaicompany.com</strong>.
          </p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>2. Présentation du site</h3>
          <p style={{ color: '#ddd' }}>Le site shaicompany.com est la propriété exclusive de Shai Company ltd., société enregistrée aux Bahamas. Le site a pour vocation de présenter les activités, la vision et les différents pôles d'excellence de la société.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>3. Identification de la Société</h3>
          <p style={{ color: '#ddd' }}>Pour des raisons de confidentialité, l'adresse physique complète de la société ainsi que son numéro d'identification légale ne sont pas affichés publiquement sur ce site. Ces informations peuvent être fournies sur demande légitime par e-mail à : <strong>contact@shaicompany.com</strong>.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>4. Propriété Intellectuelle</h3>
          <p style={{ color: '#ddd' }}>L'ensemble du contenu présent sur ce site (textes, images, logos, design, architecture) est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation, modification ou adaptation totale ou partielle est strictement interdite sans l'accord écrit préalable de Shai Company ltd.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>5. Applications et Services tiers</h3>
          <p style={{ color: '#ddd' }}>Shai Company ltd. édite et gère de nombreuses applications. Les conditions générales d'utilisation propres à chaque application ou service prévalent lors de leur utilisation. Le présent site sert de vitrine et n'engage en rien la responsabilité directe de la société concernant l'utilisation des produits individuels.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>6. Droit applicable</h3>
          <p style={{ color: '#ddd' }}>Les présentes CGU sont soumises à la juridiction des Bahamas. En cas de litige, et à défaut de résolution amiable, les tribunaux compétents seront saisis.</p>
        </div>
      </div>
    </>
  );

  const renderLtlPrivacy = () => (
    <>
      <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2.5rem', marginBottom: '8px' }}>Politique de Confidentialité</h1>
      <p style={{ color: '#aaa', marginBottom: '32px' }}>Dernière mise à jour : Août 2026</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: '1.6' }}>
        <p>L'application "Left To Live" (ci-après "l'Application") prend votre vie privée très au sérieux. Cette politique de confidentialité explique quelles données nous collectons, comment elles sont utilisées, et comment elles sont protégées.</p>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>1. COLLECTE DES DONNÉES DE SANTÉ (HEALTHKIT)</h3>
          <p style={{ color: '#ddd' }}>L'Application utilise l'API HealthKit d'Apple pour lire certaines de vos données de santé (telles que la fréquence cardiaque au repos, le poids, la taille, l'âge, etc.). Ces données sont indispensables au fonctionnement principal de l'Application : l'estimation algorithmique de votre espérance de vie.</p>
        </div>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>2. UTILISATION ET NON-VENTE DES DONNÉES DE SANTÉ</h3>
          <ul style={{ color: '#ddd', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px' }}>Vos données de santé lues depuis HealthKit sont utilisées UNIQUEMENT dans le but de calculer les statistiques au sein de l'Application.</li>
            <li style={{ marginBottom: '8px' }}><strong>VOS DONNÉES DE SANTÉ NE SONT JAMAIS VENDUES, LOUÉES, OU PARTAGÉES À DES TIERS.</strong></li>
            <li>Vos données de santé ne sont en aucun cas utilisées à des fins publicitaires ou de marketing.</li>
          </ul>
        </div>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>3. STOCKAGE CLOUD ET COMPTE UTILISATEUR</h3>
          <p style={{ color: '#ddd' }}>Pour vous permettre de synchroniser votre profil (notamment pour le mode "Couple" et le "Testament Numérique"), l'Application utilise les services sécurisés de Google Firebase. Les informations liées à votre compte (adresse email, identifiant) et vos données d'application sont stockées de manière chiffrée sur nos serveurs. Seules les personnes que vous autorisez explicitement (ex: votre partenaire) peuvent y avoir accès.</p>
        </div>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>4. SÉCURITÉ DE VOTRE TESTAMENT NUMÉRIQUE</h3>
          <p style={{ color: '#ddd' }}>L'accès à votre "Testament Numérique" dans l'Application est protégé par la biométrie de votre appareil (Face ID ou Touch ID). Les données de ce testament ne sont déverrouillées que par vous-même, ou transmises à vos contacts d'urgence selon la logique interne de l'Application.</p>
        </div>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>5. DROIT À L'OUBLI ET SUPPRESSION DES DONNÉES</h3>
          <p style={{ color: '#ddd' }}>Vous possédez un contrôle total sur vos données. À tout moment, vous pouvez demander la suppression intégrale de votre compte et de toutes les données associées depuis les paramètres de l'Application, ou en nous contactant directement. Une fois supprimées, vos données sont effacées définitivement de nos serveurs Firebase.</p>
        </div>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>6. CONTACT</h3>
          <p style={{ color: '#ddd' }}>Pour toute question concernant cette politique de confidentialité ou vos données personnelles, veuillez nous contacter à l'adresse suivante : <strong>contact@shaicompany.com</strong></p>
        </div>
      </div>
    </>
  );

  const renderLtlCGU = () => (
    <>
      <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2.5rem', marginBottom: '32px' }}>Conditions Générales d'Utilisation (CGU)</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: '1.6' }}>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>1. Avertissement Médical Important</h3>
          <p style={{ color: '#ddd' }}>L'application "Left To Live" est conçue à des fins de divertissement, de réflexion personnelle (memento mori) et de motivation. L'Application n'est pas un dispositif médical. Les estimations fournies (battements restants, espérance de vie algorithmique) sont basées sur des moyennes statistiques générales et ne constituent en aucun cas un diagnostic, un pronostic ou un avis médical. Consultez toujours un professionnel de santé pour toute question relative à votre santé.</p>
        </div>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>2. Utilisation de l'Application</h3>
          <p style={{ color: '#ddd' }}>En utilisant Left To Live, vous acceptez de le faire à vos propres risques. L'Application et ses développeurs ne sauraient être tenus responsables d'une quelconque détresse psychologique, mauvaise interprétation des données ou de tout dommage direct ou indirect lié à l'utilisation du compte à rebours ou du testament numérique.</p>
        </div>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>3. Compte et Sécurité</h3>
          <p style={{ color: '#ddd' }}>Vous êtes responsable du maintien de la confidentialité de vos informations de connexion et de la sécurité de votre appareil (notamment pour l'accès au Testament Numérique via biométrie).</p>
        </div>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>4. Modifications</h3>
          <p style={{ color: '#ddd' }}>Nous nous réservons le droit de modifier ces CGU à tout moment. Les utilisateurs seront informés des changements significatifs via l'Application ou ce site web.</p>
        </div>
      </div>
    </>
  );

  const renderNotianotePrivacy = () => (
    <>
      <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2.5rem', marginBottom: '8px' }}>Politique de Confidentialité</h1>
      <p style={{ color: '#aaa', marginBottom: '32px' }}>Dernière mise à jour : 10 février 2026</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: '1.6' }}>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>1. Introduction</h3>
          <p style={{ color: '#ddd' }}>NotiaNote est un service gratuit et open source qui vous permet d'accéder à vos données EcoleDirecte avec une interface moderne et améliorée. Propulsé par Shai Company (shaicompany.com).</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>2. Collecte de données</h3>
          <p style={{ color: '#ddd' }}>NotiaNote ne collecte AUCUNE donnée personnelle sensible. Nous ne stockons pas vos identifiants, vos notes ou vos devoirs sur nos serveurs.</p>
          <p style={{ color: '#ddd', marginTop: '8px' }}>Toutes vos données scolaires sont stockées localement dans votre navigateur ou votre appareil et ne sont jamais transmises à nos serveurs de stockage. Nous utilisons uniquement l'API officielle d'EcoleDirecte pour récupérer vos informations.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>3. Signalement de bugs et Rapports</h3>
          <p style={{ color: '#ddd' }}>Lorsque vous utilisez notre système de signalement de bug, nous collectons uniquement les informations que vous choisissez de nous fournir (type de bug, description, appareil, et identifiant optionnel).</p>
          <p style={{ color: '#ddd', marginTop: '8px' }}>Pour prévenir les abus, nous limitons l'envoi de rapports à un message toutes les 24h par adresse IP. Cette adresse IP est utilisée uniquement pour cette validation et n'est pas liée à votre compte EcoleDirecte.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>4. Version Mobile</h3>
          <p style={{ color: '#ddd' }}>Une version mobile (Android/iOS) est également disponible en open-source. Elle suit les mêmes principes de confidentialité que la version Web.</p>
          <p style={{ color: '#ddd', marginTop: '8px' }}>Vous pouvez retrouver le code source et les releases de l'application sur : GitHub NotiaNote-app.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>5. Stockage local</h3>
          <p style={{ color: '#ddd' }}>Les données suivantes sont stockées localement :</p>
          <ul style={{ color: '#ddd', paddingLeft: '20px' }}>
            <li>Vos préférences d'affichage (thème, mode d'affichage)</li>
            <li>Votre token de session EcoleDirecte (pour rester connecté)</li>
            <li>Un cache temporaire de vos données scolaires</li>
          </ul>
          <p style={{ color: '#ddd', marginTop: '8px' }}>Vous pouvez supprimer ces données à tout moment en vous déconnectant ou en vidant les données de votre navigateur/application.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>6. Cookies et Publicité</h3>
          <p style={{ color: '#ddd' }}>NotiaNote utilise le stockage local pour sauvegarder vos préférences.</p>
          <p style={{ color: '#ddd', marginTop: '8px' }}>Publicité : Pour financer le développement, nous affichons des publicités non intrusives. Ces partenaires peuvent utiliser des cookies tiers. Vous pouvez les gérer dans les paramètres de votre navigateur.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>7. Sécurité</h3>
          <p style={{ color: '#ddd' }}>Toutes les communications avec EcoleDirecte sont chiffrées (HTTPS). Vos identifiants ne sont jamais stockés en clair sur le serveur proxy. Le projet est auditable sur GitHub pour garantir une transparence totale.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>8. Open Source & Crédits</h3>
          <p style={{ color: '#ddd' }}>NotiaNote est un projet distribué sous licence MIT. Code source disponible sur GitHub (Web) et GitHub (App).</p>
          <p style={{ color: '#ddd', marginTop: '8px' }}>Développé et propulsé par Shai Company.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>9. Contact</h3>
          <p style={{ color: '#ddd' }}>Pour toute question : <strong>contact@shaicompany.com</strong> ou via le site <strong>shaicompany.com</strong>.</p>
        </div>
      </div>
    </>
  );

  const renderNotianoteCGU = () => (
    <>
      <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2.5rem', marginBottom: '32px' }}>Conditions Générales d'Utilisation (CGU)</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: '1.6' }}>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>1. Présentation du Service</h3>
          <p style={{ color: '#ddd' }}>NotiaNote est une application tierce, open source et gratuite, conçue pour offrir une interface alternative pour accéder aux données d'EcoleDirecte. NotiaNote n'est en aucun cas affilié, soutenu ou sponsorisé par EcoleDirecte ou la société Aplim.</p>
        </div>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>2. Utilisation et Responsabilité</h3>
          <p style={{ color: '#ddd' }}>Le service est fourni "en l'état" (conformément à la licence open source MIT), sans aucune garantie de disponibilité, de continuité ou d'exactitude des données. L'utilisateur assume l'entière responsabilité de l'utilisation qu'il fait de l'application et de ses données de connexion.</p>
        </div>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>3. Sécurité des Identifiants</h3>
          <p style={{ color: '#ddd' }}>L'utilisateur s'engage à n'utiliser que ses propres identifiants. Les données transitent directement entre l'appareil de l'utilisateur et les serveurs d'EcoleDirecte, ou via un proxy chiffré uniquement destiné à contourner les restrictions techniques liées au navigateur (CORS), sans aucun stockage persistant sur nos serveurs.</p>
        </div>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>4. Évolution et Maintenance</h3>
          <p style={{ color: '#ddd' }}>L'équipe de NotiaNote se réserve le droit de modifier, suspendre ou interrompre le service à tout moment, notamment en cas de modification de l'API officielle d'EcoleDirecte rendant le service incompatible.</p>
        </div>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>5. Droit applicable</h3>
          <p style={{ color: '#ddd' }}>Les présentes conditions sont soumises à la juridiction du siège de Shai Company ltd. Pour toute question, veuillez nous contacter via contact@shaicompany.com.</p>
        </div>
      </div>
    </>
  );

  const renderContent = () => {
    if (project === 'notianote') {
      return isPrivacy ? renderNotianotePrivacy() : renderNotianoteCGU();
    }
    if (project === 'left-to-live') {
      return isPrivacy ? renderLtlPrivacy() : renderLtlCGU();
    }
    return isPrivacy ? renderShaiPrivacy() : renderShaiCGU();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'relative', width: '100vw', minHeight: '100vh', color: '#fff', overflowX: 'hidden' }}
    >
      <div style={{ position: 'relative', zIndex: 1, padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#aaa', textDecoration: 'none', marginBottom: '40px', fontSize: '1.1rem' }}>
          <ArrowLeft size={20} /> Retour à l'accueil
        </Link>
        
        <div style={{ padding: '40px' }}>
          {renderContent()}
        </div>
      </div>
    </motion.div>
  );
}
