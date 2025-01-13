import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import GuideNavigation from '@/components/GuideNavigation.jsx'

export default function GuideSEO() {
  const sections = {
    piliers: {
      technique: {
        title: "Technique",
        content: "Votre site, c'est comme une maison en ligne. L'optimisation technique équivaut à des bases solides pour garantir sa stabilité ! On vise une rapidité de chargement, comme des portes qui s'ouvrent instantanément. C'est la fondation qui transforme votre site en un endroit sûr, accueillant, et rapide, prêt à offrir une expérience exceptionnelle."
      },
      contenu: {
        title: "Contenu",
        content: "Pensez à chaque page de votre site comme à une histoire captivante. Chaque récit doit être intéressant, unique, et lié au sujet de votre site, avec des mots-clés stratégiques. C'est un peu comme rédiger des chapitres captivants d'un livre en ligne. L'idée est d'inciter vos visiteurs à rester, à lire, et à découvrir tout ce que vous avez à offrir de plus. L'expert en référencement doit choisir judicieusement les mots-clés, garantissant une pertinence maximale par rapport à la thématique, orchestrant ainsi une stratégie de contenu précise pour bien positionner le client."
      },
      netlinking: {
        title: "Popularité (Netlinking)",
        content: "C'est le pilier indispensable du SEO qui fait exploser votre trafic en ligne ! Aussi connu sous le nom de Netlinking, c'est un peu comme des recommandations dans le monde en ligne. Des gens écrivent des petites histoires (backlinks) et pointent vers vous. C'est comme si vos amis parlaient de vous et disaient aux autres de venir vous voir. Ces petites histoires renforcent considérablement la réputation et l'autorité de votre site web."
      },
      bonus: {
        title: "Bonus : Le référencement local",
        content: "Le Référencement Local ! Le référencement local, c'est un peu comme être le voisin préféré. Ce n'est pas seulement les avis et la configuration de votre fiche Google My Business (GMB). Sans une stratégie de liens locaux, c'est comme si vos voisins ne parlaient jamais de vous. Être présent localement, c'est un plus ! Obtenez des avis, ayez une fiche Google bien soignée, et surtout si vous souhaitez faire la différence ne 2024 optez pour des liens et itinéraires routiers qui montrent que vous faites partie intégrante de la communauté."
      }
    },
    pourquoi: {
      objectifs: {
        title: "Objectifs du SEO",
        items: [
          {
            subtitle: "Augmenter le Trafic",
            content: "Le SEO est votre allié pour attirer du monde et dynamiser votre présence en ligne."
          },
          {
            subtitle: "Générer des Conversions",
            content: "Plus que du trafic, le SEO amène des visiteurs prêts à devenir clients. Il guide les Bonnes personnes vers vous."
          },
          {
            subtitle: "Retour sur Investissement (ROI)",
            content: "Considérez le comme un investissement intelligent. Le temps et les ressources que vous y mettez se traduisent par des retours durables, bien plus que la publicité traditionnelle."
          }
        ]
      },
      avantages: {
        title: "Avantages du SEO",
        items: [
          {
            subtitle: "Capitalisation sur l'Investissement Passé",
            content: "Le SEO, c'est planter des graines qui continuent à pousser. Chaque effort reste en place, créant un cercle vertueux pour votre visibilité."
          },
          {
            subtitle: "ROI Élevé",
            content: "Comme posséder une maison plutôt que de la louer. Vos investissements SEO actuels continueront à payer à long terme, bien plus que les campagnes publicitaires."
          },
          {
            subtitle: "Notoriété et Crédibilité",
            content: "Soyez le premier dans l'esprit de vos clients. Les premiers résultats Google ont une notoriété instantanée. Le SEO positionne votre entreprise comme le choix numéro un."
          },
          {
            subtitle: "Réponse à un Besoin",
            content: "Le SEO fonctionne en réponse à un besoin, dirigeant les visiteurs de manière transparente sans interruption. En tant que solution à leurs requêtes, il agit comme un guide discret, invitant naturellement les visiteurs à venir à vous, prêts à s'engager sans contrainte."
          }
        ]
      }
    },
    evaluation: {
      attentes: {
        title: "Attentes Réalistes",
        content: "Comprenez que le SEO est un investissement à long terme. Les résultats significatifs peuvent prendre environ trois mois pour devenir visibles, le temps que Google indexe et évalue les actions entreprises."
      },
      outils: {
        title: "Quelques outils d'Évaluation",
        items: [
          {
            subtitle: "Google Analytics",
            content: "Analysez le trafic de votre site, les sources de trafic, et le comportement des utilisateurs. Identifiez les pages performantes et celles qui nécessitent des améliorations."
          },
          {
            subtitle: "Ubersuggest",
            content: "Explorez les mots-clés pour lesquels votre site est bien positionné. Suivez les tendances de recherche et ajustez votre contenu en conséquence."
          }
        ]
      },
      kpis: {
        title: "Indicateurs Clés de Performance (KPI)",
        items: [
          {
            subtitle: "Trafic Organique",
            content: "Mesurez la croissance du trafic provenant des moteurs de recherche. Une augmentation démontre clairement l'efficacité de vos stratégies SEO."
          },
          {
            subtitle: "Positionnement sur les Mots-Clés",
            content: "Suivez le classement de votre site pour les mots-clés pertinents. Une amélioration indique une meilleure visibilité."
          },
          {
            subtitle: "Taux de Conversion",
            content: "Évaluez le nombre de visiteurs qui accomplissent une action souhaitée sur votre site. Le SEO vise à attirer un trafic qualifié susceptible de se convertir."
          }
        ]
      }
    }
  }

  return (
    <div className="guide-container">
      <main className="guide-main">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '30%' }}></div>
        </div>

        <Link href="/" className="back-button">
          <ArrowLeft className="w-5 h-5" />
          Retour à l&apos;accueil
        </Link>

        <div className="guide-content">
          <h1 className="guide-title">Guide SEO Complet</h1>
          <p className="guide-subtitle">
            Découvrez les meilleures pratiques pour optimiser votre référencement naturel
          </p>

          <section id="bases" className="content-section">
            <h2 className="section-heading">Les bases du SEO</h2>
            <p className="content-text">
              Le SEO (Search Engine Optimization) est l&apos;ensemble des techniques visant à améliorer 
              le positionnement de votre site web dans les résultats des moteurs de recherche.
            </p>
            <ul className="content-list">
              <li>Comprendre les algorithmes de recherche</li>
              <li>Les facteurs de classement importants</li>
              <li>Les outils essentiels pour le SEO</li>
            </ul>
          </section>

          <section id="importance" className="content-section">
            <h2 className="section-heading">Pourquoi le SEO est important</h2>
            <p className="content-text">
              Un bon référencement naturel est crucial pour la visibilité de votre site web et 
              l&apos;acquisition de trafic qualifié.
            </p>
            <ul className="content-list">
              <li>Augmentation du trafic organique</li>
              <li>Meilleure visibilité de votre marque</li>
              <li>Retour sur investissement durable</li>
            </ul>
          </section>

          {/* Piliers du SEO */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">1. Quels sont les trois piliers du SEO ?</h2>
            <div className="space-y-8">
              {Object.values(sections.piliers).map((pilier, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-[#4EBAEC]">{pilier.title}</h3>
                  <p>{pilier.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pourquoi le SEO */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">2. Pourquoi faire du SEO ?</h2>
            
            {/* Objectifs */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">{sections.pourquoi.objectifs.title}</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {sections.pourquoi.objectifs.items.map((item, index) => (
                  <div key={index} className="bg-white/10 p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-2 text-[#4EBAEC]">{item.subtitle}</h4>
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Avantages */}
            <div>
              <h3 className="text-2xl font-bold mb-6">{sections.pourquoi.avantages.title}</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {sections.pourquoi.avantages.items.map((item, index) => (
                  <div key={index} className="bg-white/10 p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-2 text-[#4EBAEC]">{item.subtitle}</h4>
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Évaluation */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">3. Comment évaluer le SEO ?</h2>
            
            {/* Attentes réalistes */}
            <div className="mb-8 bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">{sections.evaluation.attentes.title}</h3>
              <p>{sections.evaluation.attentes.content}</p>
            </div>

            {/* Outils */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">{sections.evaluation.outils.title}</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {sections.evaluation.outils.items.map((item, index) => (
                  <div key={index} className="bg-white/10 p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-2 text-[#4EBAEC]">{item.subtitle}</h4>
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* KPIs */}
            <div>
              <h3 className="text-2xl font-bold mb-6">{sections.evaluation.kpis.title}</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {sections.evaluation.kpis.items.map((item, index) => (
                  <div key={index} className="bg-white/10 p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-2 text-[#4EBAEC]">{item.subtitle}</h4>
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16 bg-[#4EBAEC]/10 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
            <p className="mb-4">
              En résumé, le SEO n'est pas un simple atout, mais la clé même de votre présence en ligne. 
              Votre site sans SEO demeure une page perdue parmi des millions d'autres, peu de trafic donc peu de conversions. 
              Ne sacrifiez pas la croissance durable pour des gains temporaires.
            </p>
            <p>
              Au cœur des choix budgétaires, le SEO se distingue comme un investissement à long terme. 
              Il va au-delà d'une simple stratégie, offrant la certitude d'une visibilité constante, de conversions, et de crédibilité.
            </p>
          </section>

          {/* CTA Section */}
          <section className="text-center space-y-6">
            <p className="text-xl">Besoin d'un audit ? N'hésitez pas à me contacter.</p>
            <a 
              href="https://tidycal.com/vbweb/rdv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button inline-block"
            >
              Réserver un appel découverte
            </a>
          </section>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-white/60">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <a href="mailto:contact@vbweb.fr">contact@vbweb.fr</a>
              <span>06 27 30 17 88</span>
            </div>
            <p> 2024, VBWEB tous droits réservés | <Link href="/politique-de-confidentialite" className="hover:text-white">Politique de confidentialité</Link></p>
          </footer>
        </div>

        <GuideNavigation 
          prevHref=""
          nextHref="#importance"
          nextLabel="Importance du SEO"
        />
      </main>
    </div>
  )
}
