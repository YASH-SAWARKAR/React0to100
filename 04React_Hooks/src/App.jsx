import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import BasicUseEffect from "./components/BasicUseEffect";
import CounterEffect from "./components/CounterEffect";
import FetchDataEffect from "./components/FetchDataEffect";

function App() {
  // const [val, setVal] = useState(0);
  // const [some, setSome] = useState(0);

  // useEffect(() => {
  //   if (val > 0) console.log("useEffect Called");
  //   document.title = `Increment ${val}`;
  // }, [val]);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     const data = await response.json();

  //     if (data && data.length) setData(data);
  //   }

  //   getData();
  // }, []);
  return (
    <div>
      {/* <h2>{val}</h2>
      <button onClick={() => setVal(val + 1)}>Click me</button>
      <button onClick={() => setSome(val + 1)}> Increment by Some</button> */}
      {/* <ul>
        {data.map((todo) => (
          <section key={todo.id}>
            <li>{todo.title}</li>
            <li>Body --- {todo.body}</li>
          </section>
        ))}
      </ul> */}

      {/* <BasicUseEffect /> */}
      {/* <CounterEffect /> */}
      <FetchDataEffect />
    </div>
  );
}

export default App;
