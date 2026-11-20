import React from "react";

export default function HeroCard({ hero }) {
  return (
    <>
      <div className="hero-card">
        <div className="hero-card-image">
          <img src={hero.images.sm} />
        </div>

        <div className="hero-info">
          <h2>{hero.name}</h2>
          <h3>Powerstats:</h3>
          <div className="powerstats">
            <div className="stat">
              <p>Intelligence: {hero.powerstats.intelligence}</p>
              <div className="stat-bar">
                <div className="stat-fill" style={{ width: `${hero.powerstats.intelligence}%` }}></div>
              </div>
            </div>
            <div className="stat">
              <p>Strength: {hero.powerstats.strength}</p>
              <div className="stat-bar">
                <div className="stat-fill" style={{ width: `${hero.powerstats.strength}%` }}></div>
              </div>
            </div>
            <div className="stat">
              <p>Speed: {hero.powerstats.speed}</p>
              <div className="stat-bar">
                <div className="stat-fill" style={{ width: `${hero.powerstats.speed}%` }}></div>
              </div>
            </div>
            <div className="stat">
              <p>Durability: {hero.powerstats.durability}</p>
              <div className="stat-bar">
                <div className="stat-fill" style={{ width: `${hero.powerstats.durability}%` }}></div>
              </div>
            </div>
            <div className="stat">
              <p>Power: {hero.powerstats.power}</p>
              <div className="stat-bar">
                <div className="stat-fill" style={{ width: `${hero.powerstats.power}%` }}></div>
              </div>
            </div>
            <div className="stat">
              <p>Combat: {hero.powerstats.combat}</p>
              <div className="stat-bar">
                <div className="stat-fill" style={{ width: `${hero.powerstats.combat}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
