import React from 'react'
import { Routes, Route } from 'react-router-dom'
import * as Pages from './pages'
import { Header } from './components'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Pages.HomePage />} />
        <Route path="/favourites" element={<Pages.FavouritesPage />} />
        <Route path="/compare" element={<Pages.ComparePage />} />
        <Route path="*" element={<Pages.NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
