import React from "react";

export default function HeroConnections({ connections }) {
  return (
    <div className="hero-section">
      <p>Group Affiliation: {connections.groupAffiliation}</p>
      <p>Relatives: {connections.relatives}</p>
    </div>
  );
}
