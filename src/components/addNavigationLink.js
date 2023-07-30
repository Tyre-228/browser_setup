import React from "react";
import { AiFillFileAdd } from "react-icons/ai"

const AddNavigationLink = (props) => {
    return (
        <li onClick={props.clickHandler} className="navigation__link-item add-item">
            <AiFillFileAdd className="link-item__image" />
            <div>Add new page</div>
        </li>
    )
}

export default AddNavigationLink