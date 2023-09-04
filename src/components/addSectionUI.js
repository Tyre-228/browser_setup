import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx"

const AddSectionUI = (props) => {
    const [inputValue, setInputValue] = useState("")
    const submitData = (data) => {
        let sectionData = JSON.parse(localStorage.getItem("sectionData"))
        sectionData.push(data)
        localStorage.setItem("sectionData", JSON.stringify(sectionData))
    }
    const submitHandler = () => {
        if(inputValue) {
            const sectionList = JSON.parse(localStorage.getItem("sectionData"))
            let unique = true
            sectionList.forEach(elem => {
                if(elem === inputValue) {
                    unique = false
                }
            })
            if(unique === true) {
                submitData(inputValue)
                setInputValue("")
                props.closePage()
            }
        }
    }
    const closeButtonHandler = () => {
        setInputValue("")
        props.closePage()
    }
    return (
        <section className="content__add-section-page add-section-page" style={{display: (props.active === true ? "block" : "none")}}>
            <div className="add-section-page__wrapper">
                <div className="add-section-page__content">
                    <h2 className="add-section-page__title">Add a section</h2>
                    <form className="add-section-page__form">
                        <input onChange={(event) => {setInputValue(event.currentTarget.value)}} value={inputValue} className="input section-name" placeholder="Section name" />
                    </form>
                    <button onClick={(event) => {submitHandler(event)}} className="add-section-page__button">Add section</button>
                </div>
                <button className="add-section-page__close" onClick={closeButtonHandler}><RxCross1/></button>
            </div>
        </section>
    )
}

export default React.memo(AddSectionUI)