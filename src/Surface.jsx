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

const Geologies = [
  import("./images/geology-mercury.png"),
  import("./images/geology-venus.png"),
  import("./images/geology-earth.png"),
  import("./images/geology-mars.png"),
  import("./images/geology-jupiter.png"),
  import("./images/geology-saturn.png"),
  import("./images/geology-uranus.png"),
  import("./images/geology-neptune.png"),
];

const Surface = ({ activePlanet, planetWidth }) => {
  const [Image, setImage] = useState();
  const [Geology, setGeology] = useState();

  Images[activePlanet].then((res) => setImage(res));
  Geologies[activePlanet].then((res) => setGeology(res));

  const currentPlanet = data[activePlanet];

  return (
    <>
      {Image && Geology ? (
        <div className="relative w-full">
          <img
            src={Image.default}
            className={`w-${planetWidth[activePlanet]}/12 py-24 mx-auto`}
            alt={`planet ${currentPlanet.name}`}
          />
          <img
            src={Geology.default}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3/12"
            alt={`planet ${currentPlanet.name}`}
          />
        </div>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default Surface;
