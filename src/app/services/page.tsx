import Link from 'next/link'
import { ChevronLeft, Calendar, ArrowRight } from 'lucide-react'

export default function Services() {
  return (
    <div className="guide-container">
      {/* Header */}
      <header className="guide-header">
        <Link href="/" className="back-button">
          <ChevronLeft size={20} />
          Retour à l&apos;accueil
        </Link>
        <h1 className="guide-title">
          Consultant Web Indépendant
        </h1>
        <p className="guide-subtitle">
          Boostez votre projet grâce au digital !
        </p>
      </header>

      {/* Contenu principal */}
      <main className="guide-content">
        <div className="space-y-16">
          {/* Sites Web */}
          <section className="prose prose-invert">
            <h2 className="text-3xl font-bold text-[#4EBAEC] mb-6">
              Conception de sites internet
            </h2>
            <p className="text-lg text-white/80">
              Depuis dix ans, j&apos;ai testé de nombreuses plateformes de création de sites web, et j&apos;utilise
              aujourd&apos;hui celles qui sont les plus fiables et performantes, combinées à des outils
              professionnels garantissant une sécurité optimale et un design très poussé. Le monde
              du web est vaste, avec une multitude de moyens pour créer des sites par soi-même.
              Cependant, cette approche peut souvent s&apos;avérer plus longue que prévu, comportant
              des risques comme des failles de sécurité et un faible trafic.
            </p>
            <blockquote className="border-l-4 border-[#4EBAEC] pl-4 my-8 text-lg italic">
              La création et l&apos;optimisation d&apos;un site internet ne se limitent
              pas à un simple bricolage, c&apos;est un métier à temps plein !
            </blockquote>
            <p className="text-lg text-white/80">
              En tant qu&apos;expert en création de sites internet et en marketing digital, je propose des
              services de conseil et d&apos;accompagnement pour concevoir des sites parfaitement
              adaptés à votre activité.
            </p>
            <p className="text-lg text-white/80">
              Je m&apos;assure que chaque site est non seulement esthétique et sécurisé, mais aussi
              optimisé dès sa conception. Les bonnes pratiques et la stratégie SEO doivent être
              intégrées dès le départ pour maximiser la visibilité en ligne, attirer des visiteurs et
              transformer ces visites en véritables opportunités commerciales.
            </p>
          </section>

          {/* SEO */}
          <section className="prose prose-invert">
            <h2 className="text-3xl font-bold text-[#4EBAEC] mb-6">
              Le référencement Google SEO
            </h2>
            <p className="text-lg text-white/80">
              Un site web, c&apos;est un peu comme une belle boutique située au fond d&apos;une ruelle
              sombre : sans visiteurs, tout son potentiel reste inexploité. C&apos;est là qu&apos;intervient le
              référencement naturel, ou SEO, qui agit comme une enseigne lumineuse attirant
              les passants et les guidant vers votre vitrine. Le SEO est indispensable pour tout
              site web qui souhaite être vu et reconnu.
            </p>
            <p className="text-lg text-white/80">
              Depuis de nombreuses années, en tant que consultant en SEO, j&apos;accompagne des
              entrepreneurs, des startups, ainsi que des TPE et PME dans le développement de leur
              stratégie SEO. Cette stratégie repose sur trois piliers essentiels : le contenu de qualité, la
              structure technique du site, et la popularité, souvent développée à travers le netlinking.
              Ensemble, nous renforçons votre image de marque et assurons un flux continu de
              visiteurs, transformant votre site en un véritable atout pour votre entreprise.
            </p>

            <h3 className="text-2xl font-bold text-[#4EBAEC] mt-12 mb-6">
              Les 3 piliers du SEO
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="info-card">
                <h4 className="card-title">Technique</h4>
                <p className="card-content">
                  L&apos;optimisation technique est comme les fondations solides de votre maison. La rapidité de chargement et
                  une architecture claire sont essentielles, comme des portes qui s&apos;ouvrent sans effort. Une bonne base
                  technique assure que votre site est stable, rapide et prêt à offrir une expérience utilisateur fluide.
                </p>
              </div>
              <div className="info-card">
                <h4 className="card-title">Contenu</h4>
                <p className="card-content">
                  Votre site est comme une maison en ligne. Le contenu est l&apos;intérieur chaleureux et accueillant de cette maison. Chaque
                  page doit raconter une histoire captivante, avec des mots clés choisis comme des éléments décoratifs qui attirent
                  l&apos;attention. Un contenu bien rédigé et pertinent invite vos visiteurs à explorer plus longtemps.
                </p>
              </div>
              <div className="info-card">
                <h4 className="card-title">Netlinking</h4>
                <p className="card-content">
                  Le netlinking est le pilier le plus crucial du SEO en 2024. C&apos;est comme recevoir des recommandations dans le monde
                  numérique. Chaque backlink est un ami qui parle de vous et invite les autres à vous découvrir. Ces recommandations
                  renforcent considérablement la réputation et l&apos;autorité de votre site.
                </p>
              </div>
            </div>

            <div className="info-card mt-8">
              <h4 className="card-title">Bonus : le référencement local</h4>
              <p className="card-content">
                Le référencement local, c&apos;est comme être le voisin préféré dans votre communauté. Une fiche Google My
                Business bien soignée et des avis positifs sont cruciaux, mais les liens locaux et les itinéraires
                routiers montrent que vous êtes ancré dans la communauté.
              </p>
            </div>
          </section>

          {/* Développement */}
          <section className="prose prose-invert">
            <h2 className="text-3xl font-bold text-[#4EBAEC] mb-6">
              Développement web d&apos;outils sur mesure
            </h2>
            <p className="text-lg text-white/80">
              Dans un monde où l&apos;efficacité est essentielle, des outils parfaitement adaptés à vos
              besoins font toute la différence. Que ce soit pour une application mobile, un CRM, un
              intranet ou un système de facturation, des solutions sur mesure peuvent révolutionner
              votre manière de travailler.
            </p>
            <blockquote className="border-l-4 border-[#4EBAEC] pl-4 my-8 text-lg italic">
              Adoptez des outils développés sur mesure pour une productivité
              optimisée, une efficacité renforcée et une flexibilité maximale.
            </blockquote>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="info-card">
                <h4 className="card-title">Automatisation et Amélioration</h4>
                <p className="card-content">
                  L&apos;automatisation des tâches chronophages permet à vos équipes de se focaliser sur des
                  missions stratégiques. En réduisant les tâches répétitives, vous améliorez la qualité, la rapidité
                  de vos services et boostez votre compétitivité.
                </p>
              </div>
              <div className="info-card">
                <h4 className="card-title">Gain de Temps</h4>
                <p className="card-content">
                  Optimiser votre temps est crucial. En automatisant les tâches répétitives et en
                  simplifiant vos processus, vous libérez du temps pour vous concentrer sur vos objectifs et votre
                  croissance. Imaginez réaliser plus en moins de temps !
                </p>
              </div>
              <div className="info-card">
                <h4 className="card-title">Flexibilité sur Mesure</h4>
                <p className="card-content">
                  Chaque entreprise est unique, tout comme vos besoins. Contrairement aux solutions
                  génériques, les outils sur mesure s&apos;adaptent exactement à vos processus et besoins
                  spécifiques, offrant flexibilité et évolution continue.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="guide-footer">
        <div className="footer-content">
          <div className="contact-info">
            <a href="mailto:contact@vbweb.fr" className="footer-link">contact@vbweb.fr</a>
            <span className="separator">|</span>
            <span>06 27 30 17 88</span>
          </div>
          <div className="legal-info">
            <span> 2024, VBWEB tous droits réservés</span>
            <span className="separator">|</span>
            <Link href="/politique-de-confidentialite" className="footer-link">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </footer>

      {/* CTA Button */}
      <a 
        href="https://tidycal.com/vbweb/rdv" 
        target="_blank" 
        rel="noopener noreferrer"
        className="cta-button"
      >
        <Calendar className="cta-button-icon" />
        Réserver un appel découverte
        <ArrowRight size={20} />
      </a>
    </div>
  )
}