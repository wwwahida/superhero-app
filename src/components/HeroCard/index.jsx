import { React, useState } from "react";
import HeroTabs from "../HeroTabs";
import HeroStats from "../HeroStats";
import HeroAppearance from "../HeroAppearance";
import HeroBiography from "../HeroBio";
import HeroWork from "../HeroWork";
import HeroConnections from "../HeroConnections";

export default function HeroCard({ hero }) {
  const [activeTab, setActiveTab] = useState("powerstats");
  return (
    <>
      <div className="hero-card">
        <div className="hero-card-image">
          <img src={hero.images.sm} />
        </div>

        <div className="hero-info">
          <div className="hero-card-header">
            <h2>{hero.name}</h2>
            <p className="hero-publisher">{hero.biography.publisher}</p>
          </div>
          <HeroTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "powerstats" && <HeroStats powerstats={hero.powerstats} />}
          {activeTab === "appearance" && <HeroAppearance appearance={hero.appearance} />}
          {activeTab === "biography" && <HeroBiography biography={hero.biography} />}
          {activeTab === "work" && <HeroWork work={hero.work} />}
          {activeTab === "connections" && <HeroConnections connections={hero.connections} />}    
        </div>
      </div>
    </>
  );
}
