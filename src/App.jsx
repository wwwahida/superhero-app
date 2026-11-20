import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import * as Pages from './pages'
import { Header } from './components'

function App() {
  const [superhero, setSuperhero] = useState([])

  useEffect(() => {
    async function fetchSuperhero() {
      try {
        const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
        const data = await response.json()

        setSuperhero(data)
      } catch(err) {
        console.log("Failed to load data", err);
      }
    }

    fetchSuperhero()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Pages.HomePage />} />
        <Route path="/heroes/:id" element={<Pages.HeroPage />} />
        <Route path="/favourites" element={<Pages.FavouritesPage />} />
        <Route path="/compare" element={<Pages.ComparePage />} />
        <Route path="*" element={<Pages.NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App;
