import React from "react";
import { useState } from "react";
import { HeroGallery } from "../../components";
import Searchbar from "../../components/Searchbar";
import Statbar  from "../../components/Statbar"

function HomePage({ superheros }) {
  const [searchText, setSearchtext] = useState("");
  const [selectedStat, setSelectedStat] = useState("")
  const [minValue, setMinValue] = useState(50)
  const filteredSuperhero = superheros
  .filter((hero) => hero.name.toLowerCase().includes(searchText.toLowerCase()))
  .filter((hero) => !selectedStat || hero.powerstats[selectedStat] >=minValue)
  .sort((a, b) => selectedStat ? b.powerstats[selectedStat] -a.powerstats[selectedStat] : 0)
  return (
    <>
      <h1>HeroHub</h1>
      <br/>
      <em>Find out more about your favourite superhero </em>
      <Searchbar searchText={searchText} setSearchtext={setSearchtext}/>
      <Statbar 
        superheros={superheros}
        selectedStat={selectedStat}
        minValue={minValue}
        setSelectedStat={setSelectedStat}
        setMinValue={setMinValue}
        />
        {filteredSuperhero.length === 0 && <p>No heroes match these filters.</p>}
      <HeroGallery superheros={filteredSuperhero}/>
    </>
  );
}

export default HomePage;
