import React from "react";
import { Wrapper } from "./Wrapper";

import { useAppContext } from "./Context";

export const TabMapper = [
  {
    name: "overview",
    component: "Overview",
    desktopName: "overview",
    dataAttribute: "overview",
  },
  {
    name: "structure",
    component: "Structure",
    desktopName: "structure",
    dataAttribute: "structure",
  },
  {
    name: "surface",
    component: "Surface",
    desktopName: "surface",
    dataAttribute: "geology",
  },
];

export const Tabs = () => {
  const { currentTab, setCurrentTab, activePlanet } = useAppContext();

  return (
    <Wrapper>
      <section className="tabs flex justify-around">
        {TabMapper.map((tab, i) => (
          <button key={i} onClick={() => setCurrentTab(i)} className="p-6 pb-0">
            <h3
              className={`uppercase font-spartan text-9 leading-10 tracking-400 font-bold pb-4 px-1 border-solid border-b-4 ${
                currentTab === i
                  ? `border-planets-${activePlanet} text-neutral-100`
                  : "border-transparent text-neutral-400"
              }`}
            >
              {tab.name}
            </h3>
          </button>
        ))}
      </section>
    </Wrapper>
  );
};
