import React, { useState } from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb"

const SearchBar = () => {
    const [input, setInput] = useState("")
    const submitHandler = () => {
      let url = `https://www.google.com/search?q=${input}`
      window.open(url, '_blank')
    }
    return (
        <div className="navigation__search-bar">
            <input value={input} onChange={(event) => {setInput(event.target.value)}} className="search-bar__input" placeholder="Search..." />
            <button onClick={submitHandler} className="search-bar__submit"><TbArrowBadgeRightFilled /></button>
        </div>
    )
}

export default SearchBar