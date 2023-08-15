import React, { useEffect, useState } from "react";
import Bookmark from "./bookmark";
import AddBookmark from "./addBookmark";
import { BsFillFolderSymlinkFill } from "react-icons/bs";
import SearchBar from "./searchBar";
import NavigationSection from "./navigationSection";

const Navigator = (props) => {
    const [bookmarkData, setBookmarkData] = useState([])
    const [sectionData, setSectionData] = useState([])
    let [currentSection, setCurrentSection] = useState("")

    const changeCurrentSection = (section) => {
        setCurrentSection(section)
    }

    const bookmarkClickHandler = (event) => {
        const data = JSON.parse(localStorage.getItem("bookmarkData"))
        data.splice(event.currentTarget.getAttribute("id"), 1)
        localStorage.setItem("bookmarkData", JSON.stringify(data))

        setBookmarkData(props.getBookmarkData(currentSection))
    }
    useEffect(() => {
        setSectionData(JSON.parse(localStorage.getItem("sectionData")) || ["Default"])
        setCurrentSection(currentSection || JSON.parse(localStorage.getItem("sectionData"))[0] || ["Default"])
        setBookmarkData(props.getBookmarkData(currentSection))
        props.getCurrentSection(currentSection)
    }, [currentSection])

    return (
        <div className="navigation">
            <SearchBar />
            <ul className="navigation__sections">
                {sectionData.map((elem, index) => {
                    return (<NavigationSection changeCurrentSection={changeCurrentSection} currentSection={currentSection || JSON.parse(localStorage.getItem("sectionData"))[0]} key={index} name={elem} />)
                })}
                <li className="navigation__section-item navigation__add-item">+</li>
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




