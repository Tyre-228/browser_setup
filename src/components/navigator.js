import React, { useEffect, useState } from "react";

import Bookmark from "./bookmark";
import AddBookmark from "./addBookmark";
import SearchBar from "./searchBar";
import NavigationSection from "./navigationSection";
import AddSection from "./addSection";

import { BsFillFolderSymlinkFill } from "react-icons/bs";

const Navigator = (props) => {
    const [bookmarkData, setBookmarkData] = useState([])
    const [sectionData, setSectionData] = useState([])
    let [currentSection, setCurrentSection] = useState("")

    const changeCurrentSection = (section) => {
        setCurrentSection(section)
    }
    const deleteSection = (section) => {
        let sectionData = JSON.parse(localStorage.getItem("sectionData"))
        if(sectionData.length > 1) {
            const sectionIndex = sectionData.findIndex(elem => elem === section)
            sectionData.splice(sectionIndex, 1)
            localStorage.setItem("sectionData", JSON.stringify(sectionData))

            setSectionData(sectionData)
            setCurrentSection(JSON.parse(localStorage.getItem("sectionData"))[0])
            console.log(JSON.parse(localStorage.getItem("sectionData"))[0])

            const bookmarkArray = JSON.parse(localStorage.getItem("bookmarkData"))
            const clearBookmarArray = bookmarkArray.filter(elem => elem.section !== section)
            localStorage.setItem("bookmarkData", JSON.stringify(clearBookmarArray))
        }
    }

    const bookmarkClickHandler = (event) => {
        let data = JSON.parse(localStorage.getItem("bookmarkData"))
        let elemId = +event.currentTarget.getAttribute("id")
        let index = data.findIndex(elem => elem.id === elemId)

        if(index !== -1) {
            data.splice(index, 1)
        }
        localStorage.setItem("bookmarkData", JSON.stringify(data))

        setBookmarkData(props.getBookmarkData(currentSection))
    }
    const updateData = () => {
        setSectionData(JSON.parse(localStorage.getItem("sectionData")) || ["Default"])
        setCurrentSection(currentSection || JSON.parse(localStorage.getItem("sectionData"))[0] || ["Default"])
        props.getCurrentSection(currentSection)
        console.log(currentSection)
        setBookmarkData(props.getBookmarkData(currentSection))
    }
    useEffect(() => {
        console.log(currentSection)
        updateData()
    }, [currentSection])

    return (
        <div className="navigation">
            <SearchBar />
            <ul className="navigation__sections">
                {sectionData.map((elem, index) => {
                    return (<NavigationSection deleteSection={deleteSection} changeCurrentSection={changeCurrentSection} currentSection={currentSection || JSON.parse(localStorage.getItem("sectionData"))[0]} key={index} name={elem} />)
                })}
                <AddSection/>
            </ul>
            <ul className="navigation__bookmark-list bookmark-list">
                {bookmarkData.length > 0 ? bookmarkData.map((elem, index) => {
                    return (<Bookmark key={index} name={elem.name} clickHandler={bookmarkClickHandler} image={<BsFillFolderSymlinkFill className="bookmark__image"/>} link={elem.link} id={elem.id} />)
                }) : ""}
                <AddBookmark />
            </ul>
        </div>
    )
}

export default React.memo(Navigator)