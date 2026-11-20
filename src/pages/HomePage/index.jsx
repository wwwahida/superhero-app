import React from "react"
import { useState } from "react";

function HomePage() {
    const [searchText, setSearchtext] = useState("")
    // const filteredSuperhero = superhero.filter((e) => 
    // e.name.toLowerCase().includes(searchText.toLowerCase()))
  return (
    <>
      <h1>HeroHub</h1>
      <em>find out more about your favourite superhero</em>
    </>
  )
}

export default HomePage

