import React from "react";

function InstaMart() {
    return (
        <>
            {Array(50).fill("").map((item, index) => (
                <div key={index} className="p-10">Instamart</div>
            ))}
        </>
    )
}
export default InstaMart;