import React, { useState } from "react";

import { useAppContext } from "./Context";
import { Article } from "./Article";
import { Stats } from "./Stats";

import data from "./data.json";

const Images = [
  import("./images/planet-mercury.svg"),
  import("./images/planet-venus.svg"),
  import("./images/planet-earth.svg"),
  import("./images/planet-mars.svg"),
  import("./images/planet-jupiter.svg"),
  import("./images/planet-saturn.svg"),
  import("./images/planet-uranus.svg"),
  import("./images/planet-neptune.svg"),
];

export const Overview = () => {
  const { activePlanet } = useAppContext();

  const [Image, setImage] = useState();

  Images[activePlanet].then((res) => setImage(res));

  const currentPlanet = data[activePlanet];

  const planetWidth = [5, 6, 6, 5, 10, 9, 8, 7];

  return (
    <section className="overview flex flex-col items-center px-4">
      <div className="h-96 w-full flex justify-center items-center">
        {Image ? (
          <img
            src={Image.default}
            className={`w-${planetWidth[activePlanet]}/12 py-24`}
            alt={`planet ${currentPlanet.name}`}
          />
        ) : (
          <>Loading...</>
        )}
      </div>

      <Article name={currentPlanet.name} overview={currentPlanet.overview} />
      <Stats
        rotation={currentPlanet.rotation}
        revolution={currentPlanet.revolution}
        radius={currentPlanet.radius}
        temperature={currentPlanet.temperature}
      />
    </section>
  );
};
