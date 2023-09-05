import React from "react";
import { RxCross1 } from "react-icons/rx"

const Bookmark = (props) => {
    return (
        <li className="bookmark-list__item bookmark">
            <a target="blank" className="link" href={props.link}>
                {props.image}
                <div className="bookmark__text">
                    <h2 className="bookmark__title title">{props.name}</h2>
                    <p className="bookmark__paragraph paragraph">{props.link.match(/https?:\/\/([^/]+)\//)[1]}</p>
                </div>
            </a>
            <button onClick={props.deleteHandler} id={props.id} className="bookmark__delete delete"><RxCross1/></button>
        </li>
    )
}

export default React.memo(Bookmark)