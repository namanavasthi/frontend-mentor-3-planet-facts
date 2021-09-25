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
      <Wrapper className="lg:mx-auto">
        <section className="overview flex flex-col items-center px-4 lg:w-full lg:justify-center">
          <div className="flex flex-col items-center lg:w-full lg:flex lg:items-center lg:justify-center">
            <div className="h-96 w-full flex justify-center items-center md:max-w-sm lg:w-1/2 lg:h-full">
              <Suspense fallback={<>Loading...</>}>
                <Content activePlanet={activePlanet} planetWidth={planetWidth} />
              </Suspense>
            </div>

            <div className="md:flex md:flex-row md:justify-between md:p-6 lg:w-1/2 lg:flex-col lg:pt-24">
              <Article name={currentPlanet.name} info={info(currentTab)} />
              <Tabs />
            </div>
          </div>

          <Stats
            rotation={currentPlanet.rotation}
            revolution={currentPlanet.revolution}
            radius={currentPlanet.radius}
            temperature={currentPlanet.temperature}
          />
        </section>
      </Wrapper>
    </main>
  );
};
