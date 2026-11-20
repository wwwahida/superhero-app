function Statbar({ superheros, selectedStat, setSelectedStat, minValue, setMinValue}) {

    function handleStat(e) {
        setSelectedStat(e.target.value)
    }

    function handleMinValue(e) {
        setMinValue(Number(e.target.value))
    }

    const statNames = superheros.length ? Object.keys(superheros[0].powerstats) : []
    const visibleHeros = superheros
        .filter((hero) => !selectedStat || hero.powerstats[selectedStat] >= minValue)
        .sort((a, b) => selectedStat ? b.powerstats[selectedStat] - a.powerstats[selectedStat] : 0) 
    
    return (
        <main>
            <div>
                <select value={selectedStat} onChange={handleStat} >
                    <option value="">All heroes</option>
                    {statNames.map((stat) => (
                        <option key={stat} value={stat}>
                            {stat}
                        </option>
                    ))}
                </select>

                {selectedStat && (
                    <label> Minimum {selectedStat}: {minValue}
                        <input type="range" min="0" max="100" value={minValue} onChange={handleMinValue} />
                    </label>
                )}
            </div>
            {visibleHeros.length === 0 && <p>No heroes match these filters.</p>}
        </main>

    )
}

export default Statbar;