import React from "react";
import Greet from "./components/greet";
import Navigator from "./components/navigator";
import "./css/main/main.css"

function App() {
  return (
    <div className="content">
      <Greet />
      <Navigator />
    </div>
  );
}

export default App;
