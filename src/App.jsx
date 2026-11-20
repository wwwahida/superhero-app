import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'

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
    <>
      <Home />
    </>
  )

}

export default App;
