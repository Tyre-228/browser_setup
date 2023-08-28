import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx"
import ManageChangeBackgroundUIContext from "../contexts/manageChangeBackgroundUIContext";
import ImageSection from "./ImageSection";

const ChangeBackgroundUI = (props) => {
    const imageData = JSON.parse(localStorage.getItem("backgroundImageData"))
    const manageChangeBackgroundUI = useContext(ManageChangeBackgroundUIContext)
    return (
        <section className="content__change-background change-background" style={{display: `${props.active === true ? "block" : "none"}`}}>
            <div className="change-background__wrapper">
                <div className="change-background__content">
                    <h2 className="change-background__title">Background</h2>
                    <ul className="change-background__image-list image-list">
                        {imageData.map(elem => {
                            return <ImageSection key={elem.id} name={elem.id} imageLink={elem.link} />
                        })}
                    </ul>
                </div>
                <button onClick={() => {manageChangeBackgroundUI(false)}} className="change-background__close"><RxCross1/></button>
            </div>
        </section>
    )
}

export default React.memo(ChangeBackgroundUI)