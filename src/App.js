import React, { useState, useEffect } from "react";

import Greet from "./components/greet";
import Navigator from "./components/navigator";
import addLinkUI from "./components/addBookmarkUI";
import "./css/main/main.css"
import AddLinkUI from "./components/addBookmarkUI";

import AddBookmarkContext from "./contexts/addBookmarkContext";

function App() {
  const [className, setClassName] = useState("content")
  const [addBookmarkUIState, setAddBookmarkUIState] = useState(false)

  const addBookmarkClickHandler = () => {
    setAddBookmarkUIState(true)
  }
  const closeAddBookmarkUI = () => {
    setAddBookmarkUIState(false)
  }

  useEffect(() => {
    const hours = (new Date).getHours()

    switch (true) {
      case hours >=6 && hours < 12:
        setClassName("content content__morning")
        break
      case hours >= 12 && hours < 18:
        setClassName("content content__afternoon")
        break
      case hours >= 18 && hours < 23:
        setClassName("content content__evening")
        break
      default:
        setClassName("content content__night")
    }
  }, [(new Date).getHours()])
  useEffect(() => {
    if(!localStorage.getItem("bookmarkData")) {
      localStorage.setItem("bookmarkData", JSON.stringify([]))
    }
  }, [])
  return (
      <AddBookmarkContext.Provider value={addBookmarkClickHandler}>
        <div className={className}>
          <AddLinkUI clickHandler={closeAddBookmarkUI} active={addBookmarkUIState} />
          <Greet />
          <Navigator />
        </div>
      </AddBookmarkContext.Provider>
  );
}

export default App;



// date.getHours() >= 6 && date.getHours() < 12 ? "Good morning" : 
// date.getHours() >= 12 && date.getHours() < 18 ? "Good afternoon" : 
// date.getHours() >= 18 && date.getHours() < 23 ? "Good evening" :