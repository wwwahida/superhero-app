import React from 'react'
import { Routes, Route } from 'react-router-dom'
import * as Pages from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages.HomePage />} />
      <Route path="*" element={<Pages.NotFoundPage />} />
    </Routes>
  )
}

export default App
