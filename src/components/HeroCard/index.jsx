import React from "react";

export default function HeroCard({ hero }) {
  return (
    <>
      <div className="hero-card">
        <img src={hero.images.sm}></img>
      </div>
      <div>
        <div>
          <h2>
            {hero.name}
            <p>Powerstats:</p>
            <p>Intelligence: {hero.powerstats.intelligence}</p>
            <p>Strength: {hero.powerstats.strength}</p>
            <p>Speed: {hero.powerstats.speed}</p>
            <p>Durability: {hero.powerstats.durability}</p>
          </h2>
        </div>
      </div>
    </>
  );
}
