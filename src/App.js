import React, { useState, useEffect } from "react";

import Header from "./components/header";
import Navigator from "./components/navigator";
import AddBookmarkUI from "./components/addBookmarkUI";
import AddSectionUI from "./components/addSectionUI";
import ChangeBackgroundUI from "./components/changeBackgroundUI";

import AddBookmarkContext from "./contexts/addBookmarkContext";
import AddSectionContext from "./contexts/addSectionContext";
import ManageChangeBackgroundUIContext from "./contexts/manageChangeBackgroundUIContext"
import "./css/main/main.css"

function App() {
  const [className, setClassName] = useState("content")
  const [backgroundImage, setBackgroundImage] = useState()
  const [currentSection, setCurrentSection] = useState("")
  const [addSectionUIState, setAddSectionUIState] = useState(false)
  const [addBookmarkUIState, setAddBookmarkUIState] = useState(false)
  const [changeBackgroundUIState, setChangeBackgroundUIState] = useState(false)
  

  const addBookmarkClickHandler = () => {
    setAddBookmarkUIState(true)
  }
  const addSectionClickHandler = () => {
    setAddSectionUIState(true)
  }
  const closeAddBookmarkUI = () => {
    setAddBookmarkUIState(false)
  }
  const closeAddSectionUI = () => {
    setAddSectionUIState(false)
  }
  const getCurrentSection = (section) => {
    setCurrentSection(section)
  }
  const manageChangeBackgroundUI = (state) => {
    setChangeBackgroundUIState(state)
  }
  const getBookmarkData = (currentSection) => {
    let data = JSON.parse(localStorage.getItem("bookmarkData")) || []
    return data.filter(elem => elem.section === currentSection ? true : false)
  }
  useEffect(() => {
    if(!localStorage.getItem("bookmarkData")) {
      localStorage.setItem("bookmarkData", JSON.stringify([]))
    }
    if(!localStorage.getItem("sectionData")) {
      localStorage.setItem("sectionData", JSON.stringify(["Default"]))
    }
    if(!localStorage.getItem("backgroundImageData")) {
      const backgroundImageList = [{
        id: "morning",
        link: "https://i.pinimg.com/originals/7b/36/59/7b365916db77a49453cd883b548a9e26.jpg",
      },
      {
        id: "afternoon",
        link: "https://wallpapercave.com/wp/wp3386778.jpg",
      },
      {
        id: "evening",
        link: "https://c.wallhere.com/photos/f2/09/futuristic_city_alone_construction_horizon_lights_Sun_clouds_sunset-19811.jpg!d",
      },
      {
        id: "night",
        link: "https://sm.ign.com/ign_za/news/c/cyberpunk-/cyberpunk-2077-night-city-full-map-seemingly-leaks_zp4v.jpg",
      }]
      localStorage.setItem("backgroundImageData", JSON.stringify(backgroundImageList))
    }
  }, [])

  useEffect(() => {
    const hours = (new Date).getHours()
    const backgroundImageList = JSON.parse(localStorage.getItem("backgroundImageData"))
    let backgroundElem
    switch (true) {
      case hours >=6 && hours < 12:
        backgroundElem = backgroundImageList.find(elem => elem.id === "morning")
        setClassName("content content__morning")
        setBackgroundImage(backgroundElem.link)
        break
      case hours >= 12 && hours < 18:
        backgroundElem = backgroundImageList.find(elem => elem.id === "afternoon")
        setClassName("content content__afternoon")
        setBackgroundImage(backgroundElem.link)
        break
      case hours >= 18 && hours < 23:
        backgroundElem = backgroundImageList.find(elem => elem.id === "evening")
        setClassName("content content__evening")
        setBackgroundImage(backgroundElem.link)
        break
      default:
        backgroundElem = backgroundImageList.find(elem => elem.id === "night")
        setClassName("content content__night")
        setBackgroundImage(backgroundElem.link)
    }
  }, [(new Date).getHours()])

  return (
      <AddSectionContext.Provider value={addSectionClickHandler}>
        <AddBookmarkContext.Provider value={addBookmarkClickHandler}>
          <ManageChangeBackgroundUIContext.Provider value={manageChangeBackgroundUI}>
            <div className={className} style={{backgroundImage: `url(${backgroundImage})`}}>
              <AddBookmarkUI closePage={closeAddBookmarkUI} currentSection={currentSection} active={addBookmarkUIState} />
              <AddSectionUI closePage={closeAddSectionUI} active={addSectionUIState}/>
              <ChangeBackgroundUI active={changeBackgroundUIState}/>
              <Header/>
              <Navigator getBookmarkData={getBookmarkData} getCurrentSection={getCurrentSection} />
            </div>
          </ManageChangeBackgroundUIContext.Provider>
        </AddBookmarkContext.Provider>
      </AddSectionContext.Provider>
  );
}

export default App;



// date.getHours() >= 6 && date.getHours() < 12 ? "Good morning" : 
// date.getHours() >= 12 && date.getHours() < 18 ? "Good afternoon" : 
// date.getHours() >= 18 && date.getHours() < 23 ? "Good evening" :