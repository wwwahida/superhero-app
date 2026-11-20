import React from "react";

export default function HeroAppearance({ appearance }) {
  return (
    <div className="hero-section">
      <p>Gender: {appearance.gender}</p>
      <p>Race: {appearance.race}</p>
      <p>Height: {appearance.height[1]}</p>
      <p>Weight: {appearance.weight[1]}</p>
      <p>Eye Color: {appearance.eyeColor}</p>
      <p>Hair Color: {appearance.hairColor}</p>
    </div>
  );
}
