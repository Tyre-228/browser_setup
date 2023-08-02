import React, { useContext } from "react"
import AddBookmarkContext from "../contexts/addBookmarkContext"
import { AiFillFileAdd } from "react-icons/ai"

const AddBookmark = () => {
    const clickHandler = useContext(AddBookmarkContext)
    return (
        <li onClick={clickHandler} className="bookmark-list__item bookmark add-item">
            <AiFillFileAdd className="bookmark__image" />
            <div>Add a bookmark</div>
        </li>
    )
}

export default React.memo(AddBookmark)