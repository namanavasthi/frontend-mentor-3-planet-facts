import React, { useState } from "react";

import { Hr } from "./Hr";

import data from "./data.json";

import { ReactComponent as Chevron } from "./images/icon-chevron.svg";

import { ReactComponent as Hamburger } from "./images/icon-hamburger.svg";

import { useAppContext } from "./Context";

export const Nav = () => {
  const { setActivePlanet, windowWidth } = useAppContext();

  const isMobile = windowWidth < 768;

  const [isOpen, setIsOpen] = useState(isMobile ? false : true);

  const Planet = ({ index, name }) => {
    return (
      <button
        className="flex items-center py-5 w-full md:py-0"
        onClick={() => {
          setIsOpen(false);
          setActivePlanet(index);
        }}
      >
        <div className={`w-5 h-5 rounded-full bg-planets-${index} md:hidden`}></div>
        <h2 className="px-5 uppercase md:px-2">{name}</h2>
        {isMobile ? (
          <div className="flex-grow justify-end flex">
            <Chevron />
          </div>
        ) : null}
      </button>
    );
  };

  return (
    <nav className="md:w-full">
      <button
        className="flex items-center text-neutral-100 focus:text-neutral-400 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Hamburger className="fill-current bg-transparent" />
      </button>
      <aside
        className={`fixed left-0 top-0 mt-20 bg-background z-10 h-full w-full ${
          isMobile ? (isOpen ? "" : "hidden") : ""
        } md:relative md:h-auto md:m-0`}
      >
        <ul className="p-6 font-spartan text-15 leading-25 tracking-400 font-bold md:flex md:flex-row md:justify-around md:px-0 md:pb-2 md:pt-8 md:w-full md:text-11 md:leading-25">
          {data.map((planet, i) => (
            <li key={i}>
              <Planet index={i} name={planet.name} />
              {isMobile ? <Hr /> : null}
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
};
