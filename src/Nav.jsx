import React, { useState } from "react";

import { Hr } from "./Hr";

import data from "./data.json";

import { ReactComponent as Chevron } from "./images/icon-chevron.svg";

import { ReactComponent as Hamburger } from "./images/icon-hamburger.svg";

import { useAppContext } from "./Context";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { setActive } = useAppContext();

  const Planet = ({ index, name }) => {
    return (
      <button
        className="flex items-center py-5 w-full"
        onClick={() => {
          setIsOpen(false);
          setActive(index);
        }}
      >
        <div className={`w-5 h-5 rounded-full bg-planets-${index}`}></div>
        <h2 className="px-5 uppercase">{name}</h2>
        <div className="flex-grow justify-end flex">
          <Chevron />
        </div>
      </button>
    );
  };

  return (
    <nav>
      <button className="flex items-center text-neutral-100 focus:text-neutral-400" onClick={() => setIsOpen(!isOpen)}>
        <Hamburger className="fill-current bg-transparent" />
      </button>
      <aside className={`fixed left-0 top-0 mt-20 bg-background h-full w-full ${isOpen ? "" : "hidden"}`}>
        <ul className="p-6 font-spartan bold text-15 leading-25 tracking-400 font-bold">
          {data.map((planet, i) => (
            <li key={i}>
              <Planet index={i} name={planet.name} />
              <Hr />
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
};
