import React from "react";

import { useAppContext } from "./Context";

import data from "./data.json";

export const Overview = () => {
  const { activePlanet } = useAppContext();

  return (
    <div>
      <h1>overview</h1>
      <h2>{data[activePlanet].name}</h2>
    </div>
  );
};
