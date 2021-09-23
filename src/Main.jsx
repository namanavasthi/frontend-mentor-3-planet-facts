import React from "react";

import { Hr } from "./Hr";
import { Tabs } from "./Tabs";
import { Overview } from "./Overview";
import { Structure } from "./Structure";
import { Surface } from "./Surface";

import { useAppContext } from "./Context";

const component = {
  Overview: Overview,
  Structure: Structure,
  Surface: Surface,
};

export const Main = () => {
  const { currentTab } = useAppContext();

  const Content = component[currentTab];

  return (
    <main className="w-full">
      <Tabs />
      <Hr style={{ marginTop: "-1px" }} />
      <Content />
    </main>
  );
};
