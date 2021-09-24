import React, { useState } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { Hr } from "./Hr";

import { AppContext } from "./Context";

import backgroundURL from "./images/background-stars.svg";

const App = () => {
  const [activePlanet, setActivePlanet] = useState(0);

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <AppContext.Provider value={{ activePlanet, setActivePlanet, currentTab, setCurrentTab }}>
      <div
        className="flex flex-col w-full items-center bg-background text-neutral-100 font-spartan text-14 leading-25 font-normal"
        style={{
          backgroundImage: `url(${backgroundURL})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Header />
        <Hr />
        <Main />
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default App;
