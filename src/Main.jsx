import React, { Suspense } from "react";

import { Hr } from "./Hr";
import { Tabs, TabMapper } from "./Tabs";
import { Article } from "./Article";
import { Stats } from "./Stats";

import { useAppContext } from "./Context";

import data from "./data.json";
import { Wrapper } from "./Wrapper";

const Components = {
  Overview: React.lazy(() => import("./Overview")),
  Structure: React.lazy(() => import("./Structure")),
  Surface: React.lazy(() => import("./Surface")),
};

export const Main = () => {
  const { currentTab } = useAppContext();

  const Content = Components[TabMapper[currentTab].component];

  const { activePlanet } = useAppContext();

  const currentPlanet = data[activePlanet];
  const planetWidth = [5, 6, 7, 5, 10, 9, 8, 7];

  const info = (tabIndex) => {
    return currentPlanet[TabMapper[tabIndex].dataAttribute];
  };

  return (
    <main className="w-full">
      <Tabs variant="mobile" />
      <Hr style={{ marginTop: "-1px" }} />

      <section className="overview flex flex-col items-center px-4">
        <div className="h-96 w-full flex justify-center items-center md:max-w-sm">
          <Suspense fallback={<>Loading...</>}>
            <Content activePlanet={activePlanet} planetWidth={planetWidth} />
          </Suspense>
        </div>

        <Wrapper className="md:flex md:flex-row md:justify-between md:p-6">
          <Article name={currentPlanet.name} info={info(currentTab)} />
          <Tabs />
        </Wrapper>

        <Stats
          rotation={currentPlanet.rotation}
          revolution={currentPlanet.revolution}
          radius={currentPlanet.radius}
          temperature={currentPlanet.temperature}
        />
      </section>
    </main>
  );
};
