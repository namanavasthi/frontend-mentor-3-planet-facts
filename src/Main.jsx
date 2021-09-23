import React from "react";

import { Hr } from "./Hr";
import { Wrapper } from "./Wrapper";

export const Main = () => {
  return (
    <main className="w-full">
      <Wrapper>
        <section className="options">
          <button>
            <h3>overview</h3>
          </button>
          <button>
            <h3>structure</h3>
          </button>
          <button>
            <h3>surface</h3>
          </button>
        </section>
      </Wrapper>
      <Hr />
    </main>
  );
};
