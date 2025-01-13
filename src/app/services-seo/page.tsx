import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import GuideNavigation from '@/components/GuideNavigation.jsx'

export default function ServicesSEO() {
  return (
    <div className="guide-container">
      <main className="guide-main">
        <Link href="/" className="back-button">
          <ArrowLeft className="w-5 h-5" />
          Retour à l&apos;accueil
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
              <li>Plan d&apos;action personnalisé</li>
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
        </div>

        <GuideNavigation 
          nextHref="#methodologie"
          nextLabel="Notre méthodologie"
        />
      </main>
    </div>
  )
}
