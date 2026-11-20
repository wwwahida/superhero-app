import React from "react";

export default function HeroWork({ work }) {
  return (
    <div className="hero-section">
      <p>Occupation: {work.occupation}</p>
      <p>Base: {work.base}</p>
    </div>
  );
}
