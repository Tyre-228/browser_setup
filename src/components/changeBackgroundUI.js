import React from "react";

const ChangeBackgroundUI = (props) => {
    return (
        <section className="change-background" style={{display: `${props.active === true ? "block" : "none"}`}}>
            Change image
        </section>
    )
}

export default React.memo(ChangeBackgroundUI)