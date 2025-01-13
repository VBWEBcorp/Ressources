import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import GuideNavigation from '@/components/GuideNavigation.jsx'

export default function ServicesSEO() {
  const sections = [
    {
      title: "Boostez votre projet grâce au digital !",
      subtitle: "Consultant en marketing digital, j'accompagne mes clients dans leurs stratégies d'acquisition.",
      services: [
        "Conception de sites internet",
        "Référencement google (SEO)",
        "Développement web d'outils sur mesure"
      ]
    },
    {
      title: "Conception de sites internet",
      content: `Depuis dix ans, j'ai testé de nombreuses plateformes de création de sites web, et j'utilise aujourd'hui celles qui sont les plus fiables et performantes, combinées à des outils professionnels garantissant une sécurité optimale et un design très poussé. Le monde du web est vaste, avec une multitude de moyens pour créer des sites par soi-même. Cependant, cette approche peut souvent s'avérer plus longue que prévu, comportant des risques comme des failles de sécurité et un faible trafic.`,
      highlight: "La création et l'optimisation d'un site internet ne se limitent pas à un simple bricolage, c'est un métier à temps plein !",
      conclusion: `En tant qu'expert en création de sites internet et en marketing digital, je propose des services de conseil et d'accompagnement pour concevoir des sites parfaitement adaptés à votre activité. Je m'assure que chaque site est non seulement esthétique et sécurisé, mais aussi optimisé dès sa conception. Les bonnes pratiques et la stratégie SEO doivent être intégrées dès le départ pour maximiser la visibilité en ligne, attirer des visiteurs et transformer ces visites en véritables opportunités commerciales.`
    },
    {
      title: "Le référencement Google SEO",
      content: `Un site web, c'est un peu comme une belle boutique située au fond d'une ruelle sombre : sans visiteurs, tout son potentiel reste inexploité. C'est là qu'intervient le référencement naturel, ou SEO, qui agit comme une enseigne lumineuse attirant les passants et les guidant vers votre vitrine. Le SEO est indispensable pour tout site web qui souhaite être vu et reconnu.`,
      expertise: `Depuis de nombreuses années, en tant que consultant en SEO, j'accompagne des entrepreneurs, des startups, ainsi que des TPE et PME dans le développement de leur stratégie SEO. Cette stratégie repose sur trois piliers essentiels : le contenu de qualité, la structure technique du site, et la popularité, souvent développée à travers le netlinking. Ensemble, nous renforçons votre image de marque et assurons un flux continu de visiteurs, transformant votre site en un véritable atout pour votre entreprise.`
    }
  ]

  const seoPillars = [
    {
      title: "Technique",
      content: "L'optimisation technique est comme les fondations solides de votre maison. La rapidité de chargement et une architecture claire sont essentielles, comme des portes qui s'ouvrent sans effort. Une bonne base technique assure que votre site est stable, rapide et prêt à offrir une expérience utilisateur fluide."
    },
    {
      title: "Contenu",
      content: "Votre site est comme une maison en ligne. Le contenu est l'intérieur chaleureux et accueillant de cette maison. Chaque page doit raconter une histoire captivante, avec des mots clés choisis comme des éléments décoratifs qui attirent l'attention. Un contenu bien rédigé et pertinent invite vos visiteurs à explorer plus longtemps et à découvrir tout ce que vous avez à offrir."
    },
    {
      title: "Netlinking",
      content: "Le netlinking est le pilier le plus crucial du SEO en 2024. C'est comme recevoir des recommandations dans le monde numérique. Chaque backlink est un ami qui parle de vous et invite les autres à vous découvrir. Ces recommandations renforcent considérablement la réputation et l'autorité de votre site, et sont indispensables pour se démarquer et attirer un trafic accru."
    }
  ]

  const customDev = {
    title: "Développement web d'outils sur mesure",
    intro: "Dans un monde où l'efficacité est essentielle, des outils parfaitement adaptés à vos besoins font toute la différence. Que ce soit pour une application mobile, un CRM, un intranet ou un système de facturation, des solutions sur mesure peuvent révolutionner votre manière de travailler.",
    highlight: "Adoptez des outils développés sur mesure pour une productivité optimisée, une efficacité renforcée et une flexibilité maximale.",
    benefits: [
      {
        title: "Automatisation et Amélioration",
        content: "L'automatisation des tâches chronophages permet à vos équipes de se focaliser sur des missions stratégiques. En réduisant les tâches répétitives, vous améliorez la qualité, la rapidité de vos services et boostez votre compétitivité."
      },
      {
        title: "Gain de Temps",
        content: "Optimiser votre temps est crucial. En automatisant les tâches répétitives et en simplifiant vos processus, vous libérez du temps pour vous concentrer sur vos objectifs et votre croissance. Imaginez réaliser plus en moins de temps !"
      },
      {
        title: "Flexibilité sur Mesure",
        content: "Chaque entreprise est unique, tout comme vos besoins. Contrairement aux solutions génériques, les outils sur mesure s'adaptent exactement à vos processus et besoins spécifiques, offrant flexibilité et évolution continue."
      }
    ]
  }

  return (
    <div className="guide-container">
      <main className="guide-main">
        <Link href="/" className="back-button">
          <ArrowLeft className="w-5 h-5" />
          Retour à l'accueil
        </Link>

        <div className="guide-content">
          <h1 className="guide-title">Services SEO</h1>
          <p className="guide-subtitle">
            Des solutions sur mesure pour améliorer votre visibilité en ligne
          </p>

          <section id="presentation" className="content-section">
            <h2 className="section-heading">Présentation des services</h2>
            <p className="content-text">
              Nous proposons une gamme complète de services SEO pour améliorer votre 
              visibilité sur les moteurs de recherche et augmenter votre trafic organique.
            </p>
            <ul className="content-list">
              <li>Analyse approfondie de votre site</li>
              <li>Optimisation technique et structurelle</li>
              <li>Stratégie de contenu personnalisée</li>
            </ul>
          </section>

          <section id="methodologie" className="content-section">
            <h2 className="section-heading">Notre méthodologie</h2>
            <p className="content-text">
              Notre approche est basée sur une méthodologie éprouvée qui combine analyse 
              approfondie, optimisation continue et mesure des résultats.
            </p>
            <ul className="content-list">
              <li>Audit initial complet</li>
              <li>Plan d'action personnalisé</li>
              <li>Suivi et ajustements réguliers</li>
            </ul>
          </section>

          <section id="audit" className="content-section">
            <h2 className="section-heading">Audit SEO</h2>
            <p className="content-text">
              Notre audit SEO complet analyse tous les aspects de votre site qui peuvent 
              impacter votre référencement naturel.
            </p>
            <ul className="content-list">
              <li>Analyse technique approfondie</li>
              <li>Étude de la structure du site</li>
              <li>Analyse des backlinks</li>
              <li>Recommandations détaillées</li>
            </ul>
          </section>

          {/* Autres sections... */}
        </div>

        <GuideNavigation 
          nextHref="#methodologie"
          nextLabel="Notre méthodologie"
        />
      </main>
    </div>
  )
}
