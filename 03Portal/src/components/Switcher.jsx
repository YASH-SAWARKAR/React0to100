import React from "react";

const Switcher = () => {
  const [sw, setsw] = React.useState(false);
  return (
    <div>
      {sw ? <span>Dark</span> : <span>Light</span>}

      <br />

      <input type="text" key={sw ? "dark" : "light"} />

      <button onClick={() => setsw((s) => !s)}>Switch</button>
    </div>
  );
};

export default Switcher;
