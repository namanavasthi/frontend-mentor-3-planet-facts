import React from "react";
import { Wrapper } from "./Wrapper";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <Wrapper>
      <header className="w-full px-6 py-4 flex justify-between items-center md:flex-col md:pt-8 lg:flex-row">
        <h1 className="uppercase font-antonio text-28 leading-36 tracking-100 lg:w-5/12">the planets</h1>
        <Nav />
      </header>
    </Wrapper>
  );
};
