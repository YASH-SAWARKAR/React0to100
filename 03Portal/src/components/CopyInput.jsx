import React from "react";

import PopupContent from "./PopupContent";
const CopyInput = () => {
  const [inputVal, setInputVal] = React.useState("");
  const [copied, setcopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputVal).then(() => {
      setcopied(true);
      setTimeout(() => {
        setcopied(false);
      }, 2000);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
      <PopupContent copied={copied} />
    </div>
  );
};

export default CopyInput;
