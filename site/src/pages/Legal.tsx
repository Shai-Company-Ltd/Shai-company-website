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
          <p style={{ color: '#ddd' }}>En tant que site vitrine et institutionnel (Open Source), shaiscompany.com ne collecte <strong>aucune donnée personnelle</strong>. Aucune information n'est récupérée directement lors de votre navigation sur ce site.</p>
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
          <p style={{ color: '#ddd' }}>Le site shaiscompany.com est la propriété exclusive de Shai Company ltd., société enregistrée aux Bahamas. Le site a pour vocation de présenter les activités, la vision et les différents pôles d'excellence de la société.</p>
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
      <p style={{ color: '#aaa', marginBottom: '32px' }}>Dernière mise à jour : 1 juin 2026</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: '1.6' }}>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>1. Informations générales</h3>
          <p style={{ color: '#ddd' }}><strong>1.1 Responsable de traitement</strong><br />Shai Company ltd.<br />Siège administratif : Bahamas<br />Contact :<br />Email principal : contact@notianote.fr<br />Site web : shaiscompany.com</p>
          <p style={{ color: '#ddd', marginTop: '8px' }}><strong>1.2 Délégué à la protection des données (DPO)</strong><br />Pour toute question relative à la protection de vos données personnelles, vous pouvez contacter notre délégué à la protection des données à l'adresse : contact@notianote.fr</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>2. Champ d'application de la politique</h3>
          <p style={{ color: '#ddd' }}>Cette politique de confidentialité s'applique aux services suivants :</p>
          <ul style={{ color: '#ddd', paddingLeft: '20px' }}>
            <li>L'application mobile NotiaNote (iOS et Android)</li>
            <li>L'application web (PWA) et le site de présentation : https://notianote.fr</li>
            <li>Les services d'Intelligence Artificielle intégrés</li>
          </ul>
          <p style={{ color: '#ddd', marginTop: '8px' }}>Cette politique vous informe sur la manière dont nous collectons, utilisons, conservons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>3. Principe fondamental de NotiaNote</h3>
          <p style={{ color: '#ddd' }}>NotiaNote est une application tierce agissant comme interface améliorée pour vos plateformes scolaires (EcoleDirecte, Pronote, etc.). Vos données scolaires et d'authentification sont traitées exclusivement de manière locale et chiffrée sur votre appareil. L'application intègre cependant des fonctionnalités optionnelles d'Intelligence Artificielle et des publicités pour financer son fonctionnement, nécessitant un recueil explicite de votre consentement via un QCM au démarrage.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>4. Données collectées et traitements</h3>
          <p style={{ color: '#ddd' }}><strong>4.1 Données d'identification au service scolaire</strong><br />Finalité : Permettre l'authentification et l'accès aux données scolaires via les API officielles.<br />Base légale : Intérêts légitimes (Article 6.1.f du RGPD).<br />Traitement : Local uniquement. Stockées de façon chiffrée (Keychain / Secure Store) sur l'appareil. Ne transitent par nos serveurs que de façon anonymisée et chiffrée lors des requêtes au proxy d'authentification open source.</p>
          
          <p style={{ color: '#ddd', marginTop: '8px' }}><strong>4.2 Données scolaires (Notes, devoirs, emploi du temps)</strong><br />Finalité : Affichage de l'interface scolaire.<br />Base légale : Intérêts légitimes.<br />Traitement : Mises en cache localement. Si vous utilisez les fonctions IA (ex: résumé de cours), ces données transitent de façon éphémère vers nos serveurs IA sans être conservées.</p>

          <p style={{ color: '#ddd', marginTop: '8px' }}><strong>4.3 Données de publicité et d'analyse (QCM de consentement)</strong><br />IMPORTANT : Contrairement à nos anciennes versions, NotiaNote intègre désormais des publicités pour financer les serveurs et l'IA.<br />Finalités : Affichage de publicités personnalisées, mesure d'audience et télémétrie des bugs (crashs).<br />Base légale : Consentement explicite (Article 6.1.a du RGPD) recueilli via un QCM obligatoire lors de votre première connexion.<br />Traitement : Si vous acceptez, nos partenaires publicitaires (Google AdMob/AdSense) peuvent utiliser des cookies tiers ou l'identifiant publicitaire de votre appareil.<br />Vous pouvez retirer votre consentement à tout moment dans les paramètres.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>5. Destinataires des données</h3>
          <p style={{ color: '#ddd' }}><strong>5.1 Données scolaires</strong><br />Aucun destinataire permanent. Elles restent sur votre appareil. En cas de recours à l'IA, elles sont traitées de manière éphémère par nos modèles sécurisés.</p>
          <p style={{ color: '#ddd', marginTop: '8px' }}><strong>5.2 Données publicitaires et analytiques (si activées)</strong><br />Partagées avec nos régies publicitaires partenaires et outils d'analyse (ex: Google, RevenueCat) uniquement si vous avez donné votre accord lors du QCM.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>6. Transferts internationaux</h3>
          <p style={{ color: '#ddd' }}>Nos serveurs principaux (proxy, API, hébergement Web) sont situés en France (OuiHeberg SARL). Cependant, les fournisseurs de services publicitaires ou les modèles d'IA peuvent impliquer un traitement hors de l'Union Européenne (ex: serveurs américains), encadré par les clauses contractuelles types de la Commission européenne.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>7. Droits des personnes concernées</h3>
          <p style={{ color: '#ddd' }}>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul style={{ color: '#ddd', paddingLeft: '20px' }}>
            <li>Droit d'accès et de rectification (Art. 15 et 16 RGPD)</li>
            <li>Droit à l'effacement (Art. 17 RGPD) : Exercable directement via le bouton de déconnexion/suppression locale dans l'app.</li>
            <li>Droit de retrait du consentement : Vous pouvez modifier vos préférences publicitaires (QCM) à tout moment dans les paramètres.</li>
            <li>Droit d'opposition et de limitation (Art. 18 et 21 RGPD)</li>
          </ul>
          <p style={{ color: '#ddd', marginTop: '8px' }}>Pour exercer vos droits : contact@notianote.fr (Délai : 1 mois maximum).</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>8. Sécurité des données</h3>
          <ul style={{ color: '#ddd', paddingLeft: '20px' }}>
            <li>Chiffrement local : Identifiants chiffrés sur l'appareil.</li>
            <li>Communications : HTTPS/TLS 1.3 obligatoire.</li>
            <li>Module Open Source : La brique de connexion aux plateformes reste open source et auditable sur GitHub pour garantir qu'aucune donnée de mot de passe n'est volée. Le reste de l'application est propriétaire (code fermé).</li>
          </ul>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>9. Conservation des données</h3>
          <ul style={{ color: '#ddd', paddingLeft: '20px' }}>
            <li>Données scolaires / d'identification : Jusqu'à la déconnexion ou la suppression de l'application (suppression automatique locale).</li>
            <li>Préférences QCM / Télémétrie : 24 mois maximum.</li>
          </ul>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>10. Cookies et traceurs</h3>
          <p style={{ color: '#ddd' }}>Le site web et l'application utilisent des cookies de fonctionnement local. De plus, si vous avez donné votre consentement lors du QCM de démarrage, des traceurs et cookies tiers à des fins de ciblage publicitaire sont utilisés par nos partenaires.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>11. Mineurs</h3>
          <p style={{ color: '#ddd' }}>NotiaNote est utilisé par des mineurs dans le cadre de leur scolarité. Le traitement local des données scolaires est basé sur l'intérêt légitime. Cependant, le recueil du consentement pour le ciblage publicitaire et la télémétrie nécessite l'approbation du mineur et de son tuteur légal. Il est de la responsabilité des parents de s'assurer que les choix cochés dans le QCM de départ sont conformes à leurs volontés.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>12. Hébergement et sous-traitance</h3>
          <p style={{ color: '#ddd' }}>Hébergement de l'infrastructure : OuiHeberg SARL, 9 rue des Colonnes, 75002 Paris, France.<br />Nous ne faisons appel à aucun sous-traitant permanent pour le stockage de vos données scolaires personnelles.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>13. Engagement et Propriété Intellectuelle</h3>
          <p style={{ color: '#ddd' }}>Fermeture du Code : Contrairement aux versions précédentes, l'application globale NotiaNote n'est plus open source et appartient exclusivement à Shai Company ltd.<br />Transparence Maintenue : Par souci d'honnêteté et de sécurité, le seul module s'occupant de transmettre vos mots de passe à EcoleDirecte/Pronote reste open source et auditable sur GitHub.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>14. Modifications de la politique</h3>
          <p style={{ color: '#ddd' }}>Toute modification importante sera communiquée via une notification dans l'application ou sur le site web. L'utilisation continue du service vaut acceptation.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>15. Réclamations et recours</h3>
          <p style={{ color: '#ddd' }}>Vous avez le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :<br />CNIL 3 Place de Fontenoy - TSA 80715 75334 PARIS CEDEX 07 - www.cnil.fr</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>16. Comparaison avec les applications officielles</h3>
          <p style={{ color: '#ddd' }}>NotiaNote fonctionne de manière similaire à Pronote ou EcoleDirecte, mais ajoute une couche d'Intelligence Artificielle et une interface repensée. La récupération se fait directement auprès des serveurs officiels sans stockage cloud intermédiaire de notre part.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>17. Glossaire</h3>
          <ul style={{ color: '#ddd', paddingLeft: '20px' }}>
            <li>API : Interface permettant la communication entre NotiaNote et l'établissement.</li>
            <li>QCM de consentement : Écran interactif (CMP) affiché au premier lancement pour accepter ou refuser les cookies et pubs.</li>
            <li>Chiffrement local : Protection de vos données directement dans la mémoire sécurisée de votre téléphone/navigateur.</li>
          </ul>
        </div>
      </div>
    </>
  );

  const renderNotianoteCGU = () => (
    <>
      <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2.5rem', marginBottom: '32px' }}>Conditions Générales d'Utilisation (CGU)</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: '1.6' }}>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>1. Identification du prestataire</h3>
          <p style={{ color: '#ddd' }}>Ces conditions générales d'utilisation sont éditées par Shai Company ltd., accessible à l'adresse https://shaiscompany.com. Pour toute question, vous pouvez nous contacter à contact@notianote.fr.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>2. Date d'entrée en vigueur</h3>
          <p style={{ color: '#ddd' }}>Ces conditions générales d'utilisation ont été mises à jour le 1 juin 2026. Elles sont applicables dès leur publication et remplacent toutes conditions précédentes.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>3. Services concernés</h3>
          <p style={{ color: '#ddd' }}>Les services concernés par ces conditions générales d'utilisation incluent :</p>
          <ul style={{ color: '#ddd', paddingLeft: '20px' }}>
            <li>L'application mobile NotiaNote (iOS et Android)</li>
            <li>Le site web de présentation et l'application web disponibles à l'adresse https://notianote.fr</li>
            <li>Les services d'Intelligence Artificielle intégrés</li>
            <li>Les pages de communication et de support</li>
          </ul>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>4. Conditions</h3>
          <p style={{ color: '#ddd' }}>NotiaNote n'est plus un logiciel open-source, à l'exception stricte de son module de connexion aux plateformes tierces disponible sur GitHub. Tout le reste de l'application est propriétaire.</p>
          <p style={{ color: '#ddd', marginTop: '8px' }}>NotiaNote est un client de vie scolaire développé de manière indépendante et sans aucune affiliation à des entreprises tierces comme EcoleDirecte ou Pronote. L'application est conçue pour permettre l'accès aux données des services scolaires. NotiaNote n'est pas responsable de la manière dont ces données sont transmises par ces plateformes, ni du fonctionnement de celles-ci.</p>
          <p style={{ color: '#ddd', marginTop: '8px' }}>Vos données scolaires sont récupérées exclusivement depuis les serveurs officiels des services de vie scolaire via leurs APIs et sont traitées localement sur votre appareil. NotiaNote n'est pas responsable de la sécurité des données conservées localement sur votre appareil.</p>
          <p style={{ color: '#ddd', marginTop: '8px' }}>La suppression de l'application ou sa déconnexion entraînera la suppression de toutes les données stockées localement.</p>
          <p style={{ color: '#ddd', marginTop: '8px' }}>NotiaNote ou l'une de ses fonctionnalités (comme l'IA) peut être retirée de la distribution à tout moment sans préavis.</p>
          <p style={{ color: '#ddd', marginTop: '8px' }}>Si vous n'acceptez pas ces conditions, vous êtes libre de ne pas utiliser NotiaNote ou de le désinstaller. Aucune donnée ne sera conservée sur votre appareil.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>5. Télémétrie et Publicité</h3>
          <p style={{ color: '#ddd' }}>NotiaNote peut collecter, de manière optionnelle et uniquement avec votre consentement explicite via le QCM de démarrage, des données de télémétrie anonymisées à des fins d'amélioration de l'application, ainsi que des données pour l'affichage de publicités ciblées. Ces publicités sont nécessaires pour financer les serveurs et les modèles d'Intelligence Artificielle. Vous pouvez modifier ces choix à tout moment dans les paramètres de l'application. Pour plus de détails, consultez notre politique de confidentialité.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>6. Obligations de l'utilisateur (IA incluse)</h3>
          <p style={{ color: '#ddd' }}>En utilisant NotiaNote, vous vous engagez à ne pas détourner l'application de son usage prévu, à ne pas tenter de compromettre sa sécurité ou celle des autres utilisateurs, et à ne pas vous faire passer pour une autre personne. Vous vous engagez également à ne pas utiliser NotiaNote à des fins illégales ou préjudiciables à autrui.</p>
          <p style={{ color: '#ddd', marginTop: '8px' }}>Concernant l'Intelligence Artificielle : L'Utilisateur s'engage à ne pas utiliser l'IA à des fins frauduleuses, haineuses, et à ne pas tenter de contourner les sécurités ou d'injecter des commandes malveillantes.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>7. Limitation de responsabilité</h3>
          <p style={{ color: '#ddd' }}>Shai's Company ne peut être tenue responsable des dommages directs ou indirects pouvant résulter de l'utilisation ou de l'impossibilité d'utiliser l'application, notamment en cas de dysfonctionnement des services scolaires tiers, d'erreurs générées par l'Intelligence Artificielle, de perte de données ou d'interruption de service. La responsabilité de NotiaNote est limitée au cadre de son fonctionnement en tant que client de vie scolaire et ne s'étend pas aux services tiers auxquels elle se connecte.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>8. Droit applicable et juridiction</h3>
          <p style={{ color: '#ddd' }}>Ces conditions générales d'utilisation sont régies par la juridiction des Bahamas. En cas de litige, les parties conviennent de soumettre celui-ci aux tribunaux compétents du lieu du siège de Shai Company ltd., à l'exclusion de toute autre juridiction.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>9. Modification des CGU</h3>
          <p style={{ color: '#ddd' }}>Shai Company ltd. se réserve le droit de modifier ces conditions générales d'utilisation à tout moment. En cas de changement, la date de mise à jour figurant au haut du document sera modifiée en conséquence. En continuant à utiliser NotiaNote après une modification, vous acceptez les nouvelles conditions.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>10. Restrictions d'âge</h3>
          <p style={{ color: '#ddd' }}>NotiaNote est destiné à être utilisé par des élèves, étudiants et parents. Pour les utilisateurs mineurs, le recueil du consentement pour les options publicitaires et de télémétrie est placé sous la responsabilité de leurs parents ou tuteurs légaux. NotiaNote ne collecte aucune donnée personnelle permettant de vérifier techniquement l'âge des utilisateurs.</p>
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>11. En cas de problème</h3>
          <p style={{ color: '#ddd' }}>En cas de problème lié au traitement de vos données, merci de nous contacter à l'adresse suivante : contact@notianote.fr.</p>
          <p style={{ color: '#ddd', marginTop: '8px' }}>En cas de problème concernant l'application (connexion impossible, bugs, crashes, etc.), vous pouvez nous contacter sur nos réseaux sociaux ou par e-mail.</p>
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
