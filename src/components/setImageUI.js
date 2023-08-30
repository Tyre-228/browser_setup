import React, { useState } from "react";

const SetImageUI = (props) => {
    const imageData = JSON.parse(localStorage.getItem("backgroundImageData")).filter(elem => elem.id === props.id)[0]
    const [inputValue, setInputValue] = useState(imageData.link)
    const inputHandler = (event) => {
        setInputValue(event.target.value)
    }
    return (
        <div>
            <img src={imageData.link} alt="image" />
            <input onChange={(event) => {inputHandler(event)}} placeholder="Link" value={inputValue} />
        </div>
    )
}

export default React.memo(SetImageUI)