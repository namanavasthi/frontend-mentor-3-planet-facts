import React from "react";

export const Wrapper = ({ className, children }) => {
  return <div className={`w-full md:max-w-screen-md lg:max-w-7xl ${className ? className : ""}`}>{children}</div>;
};
