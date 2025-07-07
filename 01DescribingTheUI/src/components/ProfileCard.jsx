import React from "react";

const ProfileCard = () => {
  const styles = {
    backgroundColor: "lightgray",
    border: "2px solid darkgray",
    padding: "15px",
    borderRadius: "8px",
    color: "black",
  };
  return (
    <div style={styles}>
      <h1>Hello Word</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatem
        qui reiciendis corporis fuga officia assumenda iusto quae, quaerat,
        laudantium consequatur blanditiis hic odio voluptatum reprehenderit
        vitae vero? Nemo, dolorum!
      </p>
    </div>
  );
};

export default ProfileCard;
