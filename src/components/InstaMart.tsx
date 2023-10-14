import React from "react";

function InstaMart() {
    return (
        <div className="flex flex-wrap">
            {Array(100).fill("").map((item, index) => (
                <div key={index} className="p-10 ">Instamart</div>
            ))}
        </div>
    )
}
export default InstaMart;