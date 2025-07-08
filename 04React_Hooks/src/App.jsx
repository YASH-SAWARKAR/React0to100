import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState(0);
  const [some, setSome] = useState(0);

  useEffect(() => {
    if (val > 0) console.log("useEffect Called");
    document.title = `Increment ${val}`;
  }, [val]);

  return (
    <>
      <h2>{val}</h2>
      <button onClick={() => setVal(val + 1)}>Click me</button>
      <button onClick={() => setSome(val + 1)}> Increment by Some</button>
    </>
  );
}

export default App;
