import React from "react";

export default function HeroBio({ biography }) {
  return (
    <div className="hero-section">
      <p>Full Name: {biography.fullName}</p>
      <p>Alter Egos: {biography.alterEgos}</p>
      <p>Aliases: {biography.aliases.join(", ")}</p>
      <p>Place of Birth: {biography.placeOfBirth}</p>
      <p>First Appearance: {biography.firstAppearance}</p>
      <p>Alignment: {biography.alignment}</p>
    </div>
  );
}
