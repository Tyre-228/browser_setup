import React, { useContext, useState, useEffect, useMemo } from "react";
import { RxCross1 } from "react-icons/rx"
import ManageChangeBackgroundUIContext from "../contexts/manageChangeBackgroundUIContext";
import ImageSection from "./ImageSection";
import SetImageUI from "./setImageUI";

const ChangeBackgroundUI = (props) => {
    const imageData = JSON.parse(localStorage.getItem("backgroundImageData"))
    const manageChangeBackgroundUI = useContext(ManageChangeBackgroundUIContext)
    const [activeState, setActiveState] = useState(props.active)
    const closeChangeBackgroundUI = () => {
        setActiveState(false)
    }
    const changeImageButtonHandler = (id) => {
        setShownContent(<SetImageUI closeChangeBackgroundUI={closeChangeBackgroundUI} id={id}/>)
    }
    const imageList = (
        <div className="change-background__content">
            <h2 className="change-background__title">Background</h2>
            <ul className="change-background__image-list image-list">
                {imageData.map(elem => {
                    return <ImageSection buttonHandler={changeImageButtonHandler} key={elem.id} name={elem.id} imageLink={elem.link} />
                })}
            </ul>
        </div>
    )
    const [shownContent, setShownContent] = useState(imageList)
    useEffect(() => {
        setActiveState(props.active)
        if(props.active === false) {
            setShownContent(imageList)
        }
    }, [props.active])
    return (
        <section className="content__change-background change-background" style={{display: `${activeState === true ? "block" : "none"}`}}>
            <div className="change-background__wrapper">
                {shownContent}
                <button onClick={() => {manageChangeBackgroundUI(false)}} className="change-background__close"><RxCross1/></button>
            </div>
        </section>
    )
}

export default React.memo(ChangeBackgroundUI)