import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Env, { EnvVariant } from "./Environment";

function App() {
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
    </div>
  );
}

export default App;
