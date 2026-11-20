import React, { useState, useContext, createContext } from "react";

const HeroContext = createContext();


export const HeroProvider = ({ children }) => {
  const [heroData, setHeroData] = useState([]);

  return (
    <HeroContext.Provider value={{ heroData, setHeroData }}>
      {children}
    </HeroContext.Provider>
  );
};

export const useHeroData = () => useContext(HeroContext)