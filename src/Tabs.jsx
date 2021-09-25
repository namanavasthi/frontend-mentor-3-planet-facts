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
    desktopName: "internal structure",
    dataAttribute: "structure",
  },
  {
    name: "surface",
    component: "Surface",
    desktopName: "surface geology",
    dataAttribute: "geology",
  },
];

const MobileTabs = () => {
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

const DefaultTabs = () => {
  const { currentTab, setCurrentTab, activePlanet } = useAppContext();
  return (
    <section className="tabs flex justify-center flex-col items-center w-1/2 pl-10 lg:w-full lg:items-start lg:pl-0">
      {TabMapper.map((tab, i) => (
        <button
          key={i}
          onClick={() => setCurrentTab(i)}
          className={`border-1 border-neutral-white border-opacity-20 w-full p-3 m-2 lg:mx-0 ${
            currentTab === i ? `bg-planets-${activePlanet}` : "bg-transparent"
          }`}
        >
          <h3
            className={`uppercase font-spartan text-9 tracking-400 leading-25 font-bold text-neutral-100 flex flex-row text-left`}
          >
            <span className="w-2/12 text-center">
              {(i + 1).toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </span>
            <span className="w-10/12 pl-2">{tab.desktopName}</span>
          </h3>
        </button>
      ))}
    </section>
  );
};

export const Tabs = ({ variant = "" }) => {
  const { windowWidth } = useAppContext();

  const isMobile = windowWidth < 768;

  if (variant === "mobile") {
    if (isMobile) {
      return <MobileTabs />;
    } else {
      return null;
    }
  } else {
    if (!isMobile) {
      return <DefaultTabs />;
    } else {
      return null;
    }
  }
};
