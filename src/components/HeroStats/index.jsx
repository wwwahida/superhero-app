import React from "react";

export default function HeroStats({ powerstats }) {
  return (
    <div className="powerstats">
      {Object.entries(powerstats).map(([stat, value]) => (
        <div className="stat" key={stat}>
          <p>
            {stat.charAt(0).toUpperCase() + stat.slice(1)}: {value}
          </p>

          <div className="stat-bar">
            <div className="stat-fill" style={{ width: `${value}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}
