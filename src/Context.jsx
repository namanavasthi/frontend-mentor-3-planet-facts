import { createContext, useContext } from "react";

export const defaultContextValue = { active: 0, setActive: (index) => {} };

export const AppContext = createContext(defaultContextValue);
export const useAppContext = () => useContext(AppContext);
