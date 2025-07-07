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

export default function App() {
  return (
    <>
      {/* <Person name="yash" age={20} />
      <Product name="Iphone" price={60000} />
      <Weather />
      <UserStatus isLoggedIn={true} isAdmin={false} /> */}
      <Greeting timeOfday="Morning" />
    </>
  );
}
