import React from "react";
import { Wrapper } from "./Wrapper";

import { useAppContext, tabs } from "./Context";

export const Tabs = () => {
  const { currentTab, setCurrentTab } = useAppContext();

  return (
    <Wrapper>
      <section className="tabs flex justify-around">
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setCurrentTab(tab)} className="p-6 pb-0">
            <h3
              className={`uppercase font-spartan text-9 leading-10 tracking-400 font-bold pb-4 px-1 border-solid border-b-4 ${
                currentTab === tab ? "border-primary-100 text-neutral-100" : "border-transparent text-neutral-400"
              }`}
            >
              {tab}
            </h3>
          </button>
        ))}
      </section>
    </Wrapper>
  );
};
