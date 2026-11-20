import { useState } from "react";

function Home( {superhero} ){
    const [searchText, setSearchtext] = useState("")
    // const filteredSuperhero = superhero.filter((e) => 
    // e.name.toLowerCase().includes(searchText.toLowerCase()))
    return (
        <div> 
            <h1>HeroHub</h1>
        </div>
    )
}

export default Home;