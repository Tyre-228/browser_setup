import React from "react";
import { BsFillImageFill } from "react-icons/bs"

const ChangeBackgroundButton = () => {
    return (
        <button className="header__change-background-button change-background-button"><BsFillImageFill/></button>
    )
}

export default React.memo(ChangeBackgroundButton)