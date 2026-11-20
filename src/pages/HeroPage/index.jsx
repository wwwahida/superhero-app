import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeroCard from '../../components/HeroCard'

export default function HeroPage() {
  const [hero, setHero] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    async function displayHero() {
      const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`);
      const rawData = await response.json();
      setHero(rawData);
    }
    displayHero();
  }, [id])
    
    if (!hero) {
    return <p>Loading...</p>
    }
    
  return (
    <HeroCard hero={hero} />
  )
}
