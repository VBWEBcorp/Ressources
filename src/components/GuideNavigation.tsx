'use client'

import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface GuideNavigationProps {
  prevHref?: string
  nextHref?: string
  prevLabel?: string
  nextLabel?: string
}

export default function GuideNavigation({ 
  prevHref, 
  nextHref, 
  prevLabel = 'Précédent',
  nextLabel = 'Suivant'
}: GuideNavigationProps) {
  return (
    <div className="nav-buttons">
      <button 
        className="nav-button" 
        disabled={!prevHref}
        onClick={() => prevHref && window.location.href = prevHref}
      >
        <ArrowLeft className="w-5 h-5" />
        {prevLabel}
      </button>
      <button 
        className="nav-button"
        disabled={!nextHref}
        onClick={() => nextHref && window.location.href = nextHref}
      >
        {nextLabel}
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  )
}
