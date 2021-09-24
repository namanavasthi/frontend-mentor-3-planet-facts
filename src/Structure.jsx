import React, { useState } from "react";

import data from "./data.json";

const Images = [
  import("./images/planet-mercury-internal.svg"),
  import("./images/planet-venus-internal.svg"),
  import("./images/planet-earth-internal.svg"),
  import("./images/planet-mars-internal.svg"),
  import("./images/planet-jupiter-internal.svg"),
  import("./images/planet-saturn-internal.svg"),
  import("./images/planet-uranus-internal.svg"),
  import("./images/planet-neptune-internal.svg"),
];

const Structure = ({ activePlanet, planetWidth }) => {
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

export default Structure;
