import React, { useState, useContext } from "react";
import UpdateBackgroundImageContext from "../contexts/updateBackgroundImageContext";

const SetImageUI = (props) => {
    let imageData = JSON.parse(localStorage.getItem("backgroundImageData"))
    const currentImageDataIndex = imageData.findIndex(elem => elem.id === props.id)
    let currentImageData = imageData[currentImageDataIndex]
    const [inputValue, setInputValue] = useState(currentImageData.link)
    const updateBackground = useContext(UpdateBackgroundImageContext)
    const inputHandler = (event) => {
        setInputValue(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        if(inputValue !== "" && (/https?:\/\/[^\s/$.?#].[^\s]*\.(jpg|jpeg|png|gif|bmp)*/).test(inputValue)) {
            currentImageData = {
                id: currentImageData.id,
                link: inputValue
            }
            imageData[currentImageDataIndex] = currentImageData
            localStorage.setItem("backgroundImageData", JSON.stringify(imageData))
            updateBackground()
            props.closeChangeBackgroundUI()
        }
    }
    return (
        <div className="set-background">
            <img className="set-background__image" src={currentImageData.link} />
            <form className="set-background__form">
                <input className="set-background__input" onChange={(event) => {inputHandler(event)}} placeholder="Link" value={inputValue} />
                <button onClick={(event) => {submitHandler(event)}} className="set-background__submit">Save</button>
            </form>
        </div>
    )
}

export default React.memo(SetImageUI)