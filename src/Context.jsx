import { createContext, useContext } from "react";

export const defaultContextValue = {
  activePlanet: 0,
  setActivePlanet: (index) => {},
  currentTab: 0,
  setCurrentTab: (tabName) => {},
};

export const AppContext = createContext(defaultContextValue);
export const useAppContext = () => useContext(AppContext);
