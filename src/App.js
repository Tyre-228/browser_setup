import React, { useState, useEffect } from "react";

import Greet from "./components/greet";
import Navigator from "./components/navigator";
import AddBookmarkUI from "./components/addBookmarkUI";

import AddBookmarkContext from "./contexts/addBookmarkContext";
import "./css/main/main.css"

function App() {
  const [className, setClassName] = useState("content")
  const [addBookmarkUIState, setAddBookmarkUIState] = useState(false)
  const [currentSection, setCurrentSection] = useState("")
  

  const addBookmarkClickHandler = () => {
    setAddBookmarkUIState(true)
  }
  const closeAddBookmarkUI = () => {
    setAddBookmarkUIState(false)
  }
  const getCurrentSection = (section) => {
    setCurrentSection(section)
  }
  const getBookmarkData = (currentSection) => {
    let data = JSON.parse(localStorage.getItem("bookmarkData")) || []
    return data.filter(elem => elem.section === currentSection ? true : false)
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
    if(!localStorage.getItem("sectionData")) {
      localStorage.setItem("sectionData", JSON.stringify(["Default"]))
    }
  }, [])

  return (
      <AddBookmarkContext.Provider value={addBookmarkClickHandler}>
        <div className={className}>
          <AddBookmarkUI clickHandler={closeAddBookmarkUI} currentSection={currentSection} active={addBookmarkUIState} />
          <Greet />
          <Navigator getBookmarkData={getBookmarkData} getCurrentSection={getCurrentSection} />
        </div>
      </AddBookmarkContext.Provider>
  );
}

export default App;



// date.getHours() >= 6 && date.getHours() < 12 ? "Good morning" : 
// date.getHours() >= 12 && date.getHours() < 18 ? "Good afternoon" : 
// date.getHours() >= 18 && date.getHours() < 23 ? "Good evening" :