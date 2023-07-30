import React, { useEffect, useState } from "react";
import NavigationLink from "./navigationLink";
import AddNavigationLink from "./addNavigationLink";
import { BsFillFolderSymlinkFill } from "react-icons/bs";
import SearchBar from "./searchBar";

const Navigator = () => {
    const [navigationData, setNavigationData] = useState([])

    const addLinkClickHandler = () => {
        console.log("Add link")
        return (
            <h1>Hello world!</h1>
        )
    }
    const navigationLinkClickHandler = (event) => {
        const data = JSON.parse(localStorage.getItem("navigationData"))
        data.splice(event.currentTarget.getAttribute("id"), 1)
        localStorage.setItem("navigationData", JSON.stringify(data))

        setNavigationData(JSON.parse(localStorage.getItem("navigationData")))
    }
    
    useEffect(() => {
        setNavigationData(JSON.parse(localStorage.getItem("navigationData")))
    }, [])

    return (
        <div className="navigation">
            <SearchBar />
            <ul className="navigation__sections">
                <li className="navigation__section-item">ANYTHING</li>
                <li className="navigation__section-item">ANYTHING</li>
                <li className="navigation__section-item">ANYTHING</li>
            </ul>
            <ul className="navigation__links">
                {navigationData.length > 0 ? navigationData.map((elem, index) => {
                    return (<NavigationLink key={index} name={elem.name} clickHandler={navigationLinkClickHandler} image={<BsFillFolderSymlinkFill className="link-item__image"/>} link={elem.link} id={elem.id} />)
                }) : ""}
                <AddNavigationLink clickHandler={addLinkClickHandler} />
            </ul>
        </div>
    )
}

export default Navigator