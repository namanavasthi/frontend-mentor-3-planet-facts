import { Wrapper } from "./Wrapper";
import React from "react";

const ListItem = ({ text, value }) => {
  return (
    <li className="border-1 border-neutral-white border-opacity-20 p-4 mb-2 flex justify-between items-center md:w-1/4 md:m-1 md:flex-col md:items-start">
      <span className="uppercase text-8 leading-16 tracking-250 font-bold font-spartan opacity-50">{text}</span>
      <span className="font-antonio text-20 leading-26 tracking-225 text-right md:text-24 md:leading-31 font-medium">
        {value}
      </span>
    </li>
  );
};

export const Stats = ({ rotation, revolution, radius, temperature }) => {
  return (
    <Wrapper>
      <ul className="flex flex-col py-5 w-full md:flex-row md:justify-around">
        <ListItem text="rotation time" value={rotation} />
        <ListItem text="revolution time" value={revolution} />
        <ListItem text="radius" value={radius} />
        <ListItem text="average temp." value={temperature} />
      </ul>
    </Wrapper>
  );
};
