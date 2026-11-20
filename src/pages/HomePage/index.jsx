import { useState } from "react";
import Searchbar from "../../components/Searchbar";

function Home( {superhero} ){
    const [searchText, setSearchtext] = useState("")
    // const filteredSuperhero = superhero.filter((e) => 
    // e.name.toLowerCase().includes(searchText.toLowerCase()))
    return (
        <div> 
            <h1>HeroHub</h1>
            < Searchbar searchText={searchText} setSearchtext={setSearchtext} />
        </div>
    )
}

export default Home;