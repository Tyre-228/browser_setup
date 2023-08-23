import React from "react";
import { RxCross1 } from "react-icons/rx"

const NavigationSection = (props) => {
    const eventHandler = (event) => {
        props.changeCurrentSection(event.currentTarget.getAttribute("section-name"))
    }
    return (
        <li section-name={props.name} onClick={eventHandler} className={props.currentSection === props.name ? "navigation__section-item section navigation__section-item_current" : "navigation__section-item section"}>
            <h2 className="section__title">{props.name}</h2>
            <button onClick={() => {props.deleteSection(props.name)}} className="section__delete delete"><RxCross1/></button>
        </li>
    )
}

export default React.memo(NavigationSection)