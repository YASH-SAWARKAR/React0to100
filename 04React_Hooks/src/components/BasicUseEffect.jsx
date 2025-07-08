import React, { useEffect } from "react";

const BasicUseEffect = () => {
  useEffect(() => {
    console.log("useEffect Called");
  }, []);
  return (
    <div>
      <h1>Check the console to see the msg</h1>
    </div>
  );
};

export default BasicUseEffect;
