import React, { useState } from "react";

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

const Overview = ({ activePlanet, planetWidth }) => {
  const [Image, setImage] = useState();

  Images[activePlanet].then((res) => setImage(res));

  const currentPlanet = data[activePlanet];

  return (
    <>
      {Image ? (
        <img
          src={Image.default}
          className={`w-${planetWidth[activePlanet]}/12 py-24`}
          alt={`planet ${currentPlanet.name}`}
        />
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default Overview;
