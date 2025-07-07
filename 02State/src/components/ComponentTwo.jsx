import React from "react";

const ComponentTwo = ({ cnt, onClickHandler }) => {
  const handleClick = () => onClickHandler();

  return (
    <div>
      <p>{cnt}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default ComponentTwo;
