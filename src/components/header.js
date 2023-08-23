import React from "react";
import Greet from "./greet";
import ChangeBackgroundButton from "./changeBackgroundButton";

const Header = () => {
    return (
        <section className="header">
            <Greet/>
            <ChangeBackgroundButton/>
        </section>
    )
}

export default React.memo(Header)