import React, { useState, useEffect } from "react";
import Greet from "./components/greet";
import Navigator from "./components/navigator";
import "./css/main/main.css"

function App() {
  const [className, setClassName] = useState("content")
  useEffect(() => {
    const hours = (new Date).getHours()
    if(hours >= 6 && hours < 12) {
      setClassName("content content__morning")
    } else if(hours >= 12 && hours < 18) {
      setClassName("content content__afternoon")
    } else if(hours >= 18 && hours < 23) {
      setClassName("content content__evening")
    } else {
      setClassName("content content__night")
    }
  }, [(new Date).getHours()])
  return (
    <div className={className}>
      <Greet />
      <Navigator />
    </div>
  );
}

export default App;



// date.getHours() >= 6 && date.getHours() < 12 ? "Good morning" : 
// date.getHours() >= 12 && date.getHours() < 18 ? "Good afternoon" : 
// date.getHours() >= 18 && date.getHours() < 23 ? "Good evening" :