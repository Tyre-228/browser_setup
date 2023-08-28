import React from "react";
import { MdChangeCircle } from "react-icons/md"

const ImageSection = (props) => {
    return (
        <div className="image-list__item">
            <img className="image" src={props.imageLink} alt="image does not work"/>
            <h2 className="title">{props.name}</h2>
            <button className="change"><MdChangeCircle/></button>
        </div>
    )
}

export default React.memo(ImageSection)