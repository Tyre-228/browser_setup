import React, { useState } from "react"
import { RxCross1 } from "react-icons/rx"

const AddBookmarkUI = (props) => {
    const [pageName, setPageName] = useState("")
    const [pageLink, setPageLink] = useState("")
    const submitHandler = () => {
        if(pageName !== "" && (/https?:\/\/([^/]+)\//).test(pageLink)) {
            const index = JSON.parse(localStorage.getItem("bookmarkData")).length
            const inputData = {
                id: index,
                name: pageName,
                link: pageLink,
                section: props.currentSection,
            }
            const newData = [...JSON.parse(localStorage.getItem("bookmarkData")), inputData]
            localStorage.setItem("bookmarkData", JSON.stringify(newData))
            inputCleaner()
        }
    }
    const inputCleaner = () => {
        setPageLink("")
        setPageName("")
    }


    return (
        <section className="content__add-bookmark-page add-bookmark-page" style={{display: (props.active === true ? "block" : "none")}}>
            <div className="add-bookmark-page__wrapper">
                <div className="add-bookmark-page__content">
                    <h1 className="add-bookmark-page__title title">Add a bookmark</h1>
                    <form className="add-bookmark-page__form form" action="POST">
                        <input className="input page-name" value={pageName} onChange={(event) => {setPageName(event.target.value)}} placeholder="Page name" />
                        <input className="input page-link" value={pageLink} onChange={(event) => {setPageLink(event.target.value)}} placeholder="Page link" />
                    </form>
                    <button onClick={submitHandler} className="add-bookmark-page__button">Add page</button>
                </div>
                <button className="add-bookmark-page__close" onClick={props.clickHandler}><RxCross1/></button>
            </div>
        </section>
    )
}

export default React.memo(AddBookmarkUI)