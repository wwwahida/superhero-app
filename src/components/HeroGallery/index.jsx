import {React, useState, useEffect} from 'react'
import GalleryImage from '../GalleryImage'
import { Link } from 'react-router-dom'

export default function HeroGallery() {
  const [heroes, setHeroes] = useState([])
  useEffect(() => {
    async function displayHeroes() {
      const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`)
      const data = await response.json()
      setHeroes(data)
    }
    displayHeroes()
  }, [])

  return (
    heroes.map((hero) => (
      <Link to={`/heroes/${hero.id}`} key={hero.id}>
        <GalleryImage key={hero.id} hero={hero} />
      </Link>
    ))
  )
}
