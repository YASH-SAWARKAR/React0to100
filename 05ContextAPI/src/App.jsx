import { createContext } from "react";
import ComponentA from "./components/ComponentA";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./components/userContext";
import UpdateUser from "./components/UpdateUser";
export const Data = createContext();

const App = () => {
  const name = "Yash Sawarkar";
  return (
    <UserProvider>
      {/* <Data.Provider value={name}>
        <ComponentA />
      </Data.Provider> */}

      <UserProfile />
      <UpdateUser />
    </UserProvider>
  );
};

export default App;
