import React from "react";

import { ReactComponent as SourceIcon } from "./images/icon-source.svg";

const Source = ({ src }) => {
  return (
    <div className="flex pt-5 text-12 leading-25 font-spartan">
      <span className="opacity-50">Source : </span>
      <a href={src} className="flex items-center underline font-bold opacity-50 pl-1">
        Wikipedia <SourceIcon className="ml-2 mb-1" />
      </a>
    </div>
  );
};

export const Article = ({ name, overview }) => {
  return (
    <article className="flex flex-col items-center text-center pb-2">
      <h2 className="font-antonio text-40 leading-52 font-medium">{name}</h2>
      <p className="font-spartan font-normal leading-22 text-11 p-4">{overview.content}</p>
      <Source src={overview.source} />
    </article>
  );
};