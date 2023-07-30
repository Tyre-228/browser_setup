import React, { useEffect, useState } from "react";

const Greet = () => {
    const [date, setDate] = useState(new Date())
    setTimeout(() => {
        setDate(new Date())
    }, 1000)

    return (
        <div className="greet">
            <h1 className="greet__title">
                {date.getHours() >= 6 && date.getHours() < 12 ? "Good morning" : 
                date.getHours() >= 12 && date.getHours() < 18 ? "Good afternoon" : 
                date.getHours() >= 18 && date.getHours() < 23 ? "Good evening" :
                "It`s time to sleep!"}
            </h1>
            <div className="greet__date">
                <span className="date__time">{
                    `${date.getHours() >= 10 ? date.getHours() : "0" + date.getHours()} : 
                    ${date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes()} : 
                    ${date.getSeconds() >= 10 ? date.getSeconds() : "0" + date.getSeconds()}`
                }</span>
                <br/>
                <span className="date__day">
                    {`${date.getDate() >= 10 ? date.getDate() : "0" + date.getDate()} /
                    ${(date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1)} /
                    ${date.getFullYear() >= 10 ? date.getFullYear() : "0" + date.getFullYear()}`}
                </span>
            </div>
        </div>
    )
}

export default React.memo(Greet)