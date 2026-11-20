import React from "react";

export default function HeroTabs({ activeTab, setActiveTab }) {
  const tabs = ["powerstats", "appearance", "biography", "work", "connections"];
  return (
    <div className="hero-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
}
