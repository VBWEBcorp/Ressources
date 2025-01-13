'use client'

import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function GuideNavigation({ 
  prevHref, 
  nextHref, 
  prevLabel = 'Précédent',
  nextLabel = 'Suivant'
}) {
  const handleClick = (href) => {
    if (href) {
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="nav-buttons">
      <button 
        className="nav-button" 
        disabled={!prevHref}
        onClick={() => handleClick(prevHref)}
      >
        <ArrowLeft className="w-5 h-5" />
        {prevLabel}
      </button>
      <button 
        className="nav-button"
        disabled={!nextHref}
        onClick={() => handleClick(nextHref)}
      >
        {nextLabel}
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  )
}
