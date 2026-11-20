function Statbar({ superheros, selectedStat, setSelectedStat, minValue, setMinValue}) {
    function handleStat(e) {
        setSelectedStat(e.target.value)
    }
    function handleMinValue(e) {
        setMinValue(Number(e.target.value))
    }

    const statNames = superheros.length ? Object.keys(superheros[0].powerstats) : []
    
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
        </main>

    )
}

export default Statbar;