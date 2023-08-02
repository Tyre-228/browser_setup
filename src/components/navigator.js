import React, { useEffect, useState } from "react";
import Bookmark from "./bookmark";
import AddBookmark from "./addBookmark";
import { BsFillFolderSymlinkFill } from "react-icons/bs";
import SearchBar from "./searchBar";

const Navigator = () => {
    const [bookmarkData, setBookmarkData] = useState([])

    const bookmarkClickHandler = (event) => {
        const data = JSON.parse(localStorage.getItem("bookmarkData"))
        data.splice(event.currentTarget.getAttribute("id"), 1)
        localStorage.setItem("bookmarkData", JSON.stringify(data))

        setBookmarkData(JSON.parse(localStorage.getItem("bookmarkData")))
    }
    useEffect(() => {
        setBookmarkData(JSON.parse(localStorage.getItem("bookmarkData")) || [])
    }, [])

    return (
        <div className="navigation">
            <SearchBar />
            <ul className="navigation__sections">
                <li className="navigation__section-item">ANYTHING</li>
                <li className="navigation__section-item">ANYTHING</li>
                <li className="navigation__section-item">ANYTHING</li>
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