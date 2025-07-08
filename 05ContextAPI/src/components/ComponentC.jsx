import { Data } from "../App";
import React from "react";

const ComponentC = () => {
  return (
    <div>
      <Data.Consumer>
        {(name) => {
          return <h1>{name}</h1>;
        }}
      </Data.Consumer>
    </div>
  );
};

export default ComponentC;
