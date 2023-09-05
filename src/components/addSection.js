import React, { useContext } from "react";
import AddSectionContext from "../contexts/addSectionContext";

const AddSection = () => {
    const clickHandler = useContext(AddSectionContext)
    return (
        <li onClick={clickHandler} className="navigation__section-item navigation__add-item">+</li>
    )
}

export default React.memo(AddSection)