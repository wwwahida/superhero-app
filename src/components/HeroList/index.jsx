import React from 'react'
import { useHeroData } from '../../contexts'

export default function HeroList() {
    const { heroData } = useHeroData()
  return (
    <div className="hero-list">
      {heroData.map((hero) => (
        <GalleryImage key={hero.id} hero={hero} />
      ))}
    </div>
  )
}
