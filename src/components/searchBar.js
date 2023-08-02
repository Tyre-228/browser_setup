import React, { useState } from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb"

const SearchBar = () => {
    const [input, setInput] = useState("")
    const [placeholder, setPlaceholder] = useState("Search...")
    const inputElem = React.createRef()
    const changePlaceholder = () => {
        setTimeout(() => {
            const dots = placeholder.slice(6, placeholder.length).length
            setPlaceholder(dots < 3 ? `${placeholder}.` : `Search`)
        }, 4700)
    }
    changePlaceholder()
    const submitHandler = () => {
      let url = `https://www.google.com/search?q=${input}`
      window.open(url, '_blank')
    }

    window.addEventListener("keypress", (event) => {
        if(event.code === "Enter" && inputElem.current === document.activeElement) {
            submitHandler()
        }
    })
    return (
        <div className="navigation__search-bar">
            <input ref={inputElem} value={input} onChange={(event) => {setInput(event.target.value)}} className="search-bar__input" placeholder={placeholder} />
            <button onClick={submitHandler} className="search-bar__submit"><TbArrowBadgeRightFilled /></button>
        </div>
    )
}

export default React.memo(SearchBar)