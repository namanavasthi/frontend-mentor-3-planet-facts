import React from "react";

export const Wrapper = ({ className, children }) => {
  return <div className={`max-w-7xl w-full md:max-w-screen-md ${className}`}>{children}</div>;
};
