import React, { useContext } from "react";
import { BsFillImageFill } from "react-icons/bs"
import ManageChangeBackgroundUIContext from "../contexts/manageChangeBackgroundUIContext";

const ChangeBackgroundButton = () => {
    const manageChangeBackgroundUI = useContext(ManageChangeBackgroundUIContext)
    return (
        <button onClick={() => {
            manageChangeBackgroundUI(true)
        }} className="header__change-background-button change-background-button"><BsFillImageFill/></button>
    )
}

export default React.memo(ChangeBackgroundButton)