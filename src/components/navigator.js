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
    const [currentSection, setCurrentSection] = useState("")

    const changeCurrentSection = (section) => {
        setCurrentSection(section)
    }
    const getBookmarkData = () => {
        let data = JSON.parse(localStorage.getItem("bookmarkData")) || []
        return data.filter(elem => elem.section === currentSection ? true : false)
    }
    const filterBookmarkData = (section) => {
        const bookmarkData = JSON.parse(localStorage.getItem("bookmarkData"))
        const filteredBookmarData = bookmarkData.filter(elem => elem.section !== section)
        localStorage.setItem("bookmarkData", JSON.stringify(filteredBookmarData))
    }
    const deleteSection = (section) => {
        //let sectionData = JSON.parse(localStorage.getItem("sectionData"))
        if(sectionData.length > 1) {
            const sectionIndex = sectionData.findIndex(elem => elem === section)
            setSectionData(sectionData.splice(sectionIndex, 1))
            localStorage.setItem("sectionData", JSON.stringify(sectionData))

            filterBookmarkData(section)
            if(currentSection === section) {
                console.log(sectionData)
                setTimeout(() => {
                    updateData()
                }, 2000)
                setCurrentSection(sectionData[0], () => {console.log(currentSection)})
                alert(currentSection)
                console.log(sectionData[0])
                updateData()
            }
        }
    }

    const bookmarkDeleteHandler = (event) => {
        const data = JSON.parse(localStorage.getItem("bookmarkData"))
        const elemId = +event.currentTarget.getAttribute("id")
        const index = data.findIndex(elem => elem.id === elemId)

        if(index !== -1) {
            data.splice(index, 1)
        }
        localStorage.setItem("bookmarkData", JSON.stringify(data))

        setBookmarkData(getBookmarkData(currentSection))
    }
    const updateData = () => {
        setSectionData(JSON.parse(localStorage.getItem("sectionData")) || ["Default"])
        setCurrentSection(currentSection || JSON.parse(localStorage.getItem("sectionData"))[0] || ["Default"])
        props.getCurrentSection(currentSection)
        setBookmarkData(props.getBookmarkData(currentSection))
    }
    useEffect(() => {
        if((props.addBookmarkUIState === false) || currentSection) {
            updateData()
        }
    }, [currentSection, props.addBookmarkUIState])
    useEffect(() => {
        if(props.addSectionUIState === false) {
            updateData()
            const sectionDataVar = JSON.parse(localStorage.getItem("sectionData"))
            setCurrentSection(sectionDataVar[sectionDataVar.length-1])
        }
        // if(props.addBookmarkUIState === false) {
        //     const sectionData = JSON.parse(localStorage.getItem("sectionData"))
        //     setCurrentSection(sectionData[0])
        // }
    }, [props.addSectionUIState])

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
                    return (<Bookmark key={index} name={elem.name} deleteHandler={bookmarkDeleteHandler} image={<BsFillFolderSymlinkFill className="bookmark__image"/>} link={elem.link} id={elem.id} />)
                }) : ""}
                <AddBookmark />
            </ul>
        </div>
    )
}

export default React.memo(Navigator)