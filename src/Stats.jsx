import React from "react";

export const Stats = ({ rotation, revolution, radius, temperature }) => {
  return (
    <ul className="flex flex-col py-5 w-full">
      <li className="border-1 border-neutral-white border-opacity-20 p-4 mb-2 flex justify-between items-center">
        <span className="uppercase text-8 leading-16 tracking-250 font-bold font-spartan opacity-50">
          rotation time
        </span>
        <span className="font-antonio text-20 leading-26 tracking-225 text-right">{rotation}</span>
      </li>
      <li className="border-1 border-neutral-white border-opacity-20 p-4 mb-2 flex justify-between items-center">
        <span className="uppercase text-8 leading-16 tracking-250 font-bold font-spartan opacity-50">
          revolution time
        </span>
        <span className="font-antonio text-20 leading-26 tracking-225 text-right">{revolution}</span>
      </li>
      <li className="border-1 border-neutral-white border-opacity-20 p-4 mb-2 flex justify-between items-center">
        <span className="uppercase text-8 leading-16 tracking-250 font-bold font-spartan opacity-50">radius</span>
        <span className="font-antonio text-20 leading-26 tracking-225 text-right">{radius}</span>
      </li>
      <li className="border-1 border-neutral-white border-opacity-20 p-4 mb-2 flex justify-between items-center">
        <span className="uppercase text-8 leading-16 tracking-250 font-bold font-spartan opacity-50">
          average temp.
        </span>
        <span className="font-antonio text-20 leading-26 tracking-225 text-right">{temperature}</span>
      </li>
    </ul>
  );
};
