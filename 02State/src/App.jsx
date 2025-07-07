import { useState } from "react";

import "./App.css";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
const App = () => {
  // const [cnt, steCnt] = useState(0);

  // const increment = () => steCnt(cnt + 1);
  // const decrement = () => steCnt(cnt - 1);

  // const [friend, setFriend] = useState(["Yash", "Ravi"]);

  // const addOneNewFriend = () => {
  //   setFriend([...friend, "HuXn"]);
  // };
  // const removeFriend = () => {
  //   setFriend(friend.filter((f) => f !== "Yash"));
  // };

  // const [movie, setMovie] = useState([
  //   { id: 1, title: "Inception" },
  //   { id: 2, title: "Interstellar" },
  // ]);

  // const submitHandler = () => {
  //   setMovie(
  //     movie.map((m) => (m.id === 1 ? { ...movie, title: "Spider Man " } : m))
  //   );
  // };

  const [count, setCount] = useState(0);
  const [cnt, setCnt] = useState(0);

  return (
    <>
      {/* <h1>{cnt}</h1>
      <button onClick={increment}>Cnt + 1</button>
      <button onClick={decrement}>Cnt - 1</button> */}
      {/* {friend.map((f) => (
        <li key={Math.random()}> {f}</li>
      ))} */}

      {/* <button onClick={addOneNewFriend}>Add New Friend</button> */}
      {/* <button onClick={removeFriend}> Remove Friend</button> */}
      {/* {movie.map((m) => (
        <li key={Math.random()}> {m.title}</li>
      ))}

      <button onClick={submitHandler}>Change Name</button> */}

      <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo cnt={cnt} onClickHandler={() => setCnt(cnt + 1)} />
    </>
  );
};

export default App;
