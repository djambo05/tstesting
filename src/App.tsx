import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Env, { EnvVariant } from "./Environment";
import UserList from "./UserList";
import { IUsers } from "./types/types";

function App() {
  const users: IUsers[] = [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        city: "Gwenborough",
        zipcode: "92998-3874",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
      },
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Env
        onClick={(num) => console.log("clicked", num)}
        height="50vh"
        variant={EnvVariant.easy}
      >
        <div>useState</div>
        <div>useEffect</div>
        <div>useRef</div>
        <div>useMemo</div>
        <div>useContext</div>
        <div>useCallBack</div>
      </Env>
      <UserList users={users} />
    </div>
  );
}

export default App;
