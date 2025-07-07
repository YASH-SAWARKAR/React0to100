// import Gallery from "./Gallery.jsx";
// import { Profile } from "./Gallery.jsx";

import Person from "./components/Person";
import UserList from "./components/UserList";
import Product from "./components/Product";
import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
import Greeting from "./components/Greeting";

// export default function App() {
//   return <Profile />;
// }
import { FaCartArrowDown } from "react-icons/fa";
import StyleCard from "./components/StyleCard";
import ProfileCard from "./components/ProfileCard";
import IconComponents from "./components/IconComponents";

const Button = () => {
  const handleClick = () => {
    console.log(Math.round(Math.random() * 10));
  };
  return <button onClick={handleClick}>Click</button>;
};
export default function App() {
  const style = { color: "Red", backgroundColor: "White", padding: "2rem" };
  return (
    <>
      {/* <Person name="yash" age={20} />
      <Product name="Iphone" price={60000} />
      <Weather />
      <UserStatus isLoggedIn={true} isAdmin={false} /> */}
      {/* <Greeting timeOfday="Morning" /> */}
      {/* <h1 style={style}>Inline Style</h1> */}
      {/* <FaCartArrowDown size={30} /> */}
      {/* <StyleCard />
      <ProfileCard />
      <IconComponents /> */}
      <Button />
    </>
  );
}
