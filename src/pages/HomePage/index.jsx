import { useState } from "react";
import Searchbar from "../../components/Searchbar";
import Statbar from "../../components/Statbar";

function Home( {superheros} ){
    const [searchText, setSearchtext] = useState("")
    // const filteredSuperhero = superhero.filter((e) => 
    // e.name.toLowerCase().includes(searchText.toLowerCase()))
    const [selectedStat, setSelectedStat] = useState("")
    const [minValue, setMinValue] = useState(10)

    return (
        <div> 
            <h1>HeroHub</h1>
            < Searchbar searchText={searchText} setSearchtext={setSearchtext} />
            <Statbar
            superheros={superheros} 
            selectedStat={selectedStat} 
            setSelectedStat={setSelectedStat} 
            minValue={minValue} 
            setMinValue={setMinValue} 
            />
        </div>
    )
}

export default Home;