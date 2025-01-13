'use client'

import React, { useState } from 'react'
import { Menu } from 'lucide-react'

export default function GuideSidebar({ title, sections }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <aside className={`guide-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">{title}</h2>
        </div>
        
        <nav className="sidebar-nav">
          {sections.map((section, index) => (
            <div key={index} className="nav-section">
              <h3 className="section-title">{section.title}</h3>
              {section.items.map((item, itemIndex) => (
                <a 
                  key={itemIndex} 
                  href={`#${item.id}`} 
                  className="nav-item"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <button 
        className="menu-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>
    </>
  )
}
