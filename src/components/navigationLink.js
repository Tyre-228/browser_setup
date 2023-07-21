import React from "react";

const NavigationLink = (props) => {
    return (
        <li className="navigation__link-item">
            <a target="blank" href={props.link}>
                {props.image}
                <div>{props.name}</div>
            </a>
        </li>
    )
}

export default NavigationLink