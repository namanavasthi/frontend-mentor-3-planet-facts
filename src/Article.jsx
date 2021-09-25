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

export const Article = ({ name, info }) => {
  return (
    <article className="flex flex-col items-center text-center pb-2 md:text-left md:items-start md:w-1/2">
      <h2 className="font-antonio text-40 leading-52 font-medium md:text-48 md:leading-62">{name}</h2>
      <p className="font-spartan font-normal leading-22 text-11 p-4 md:px-0 md:py-6">{info.content}</p>
      <Source src={info.source} />
    </article>
  );
};
