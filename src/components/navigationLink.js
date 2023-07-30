import React from "react";
import { RxCross1 } from "react-icons/rx"

const NavigationLink = (props) => {
    return (
        <li className="navigation__link-item">
            <a target="blank" className="link" href={props.link}>
                {props.image}
                <div className="link-item__text">
                    <h2 className="title">{props.name}</h2>
                    <p className="paragraph">{props.link.match(/https?:\/\/([^/]+)\//)[1]}</p>
                </div>
            </a>
            <button onClick={props.clickHandler} id={props.id} className="link-item__delete delete"><RxCross1/></button>
        </li>
    )
}

export default NavigationLink