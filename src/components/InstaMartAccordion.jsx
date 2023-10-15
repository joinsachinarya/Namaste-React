import { useState } from "react";

function InstaMartAccordion({ title, isDescVisible, setIsDescVisible }) {

    const handleIsDescVisible = () => {
        setIsDescVisible(!isDescVisible);
    }
    console.log(title, isDescVisible);

    return (
        <div className="border p-5">
            <p className="font-bold text-2xl">{title}</p>
            <button
                onClick={handleIsDescVisible}
                className="underline font-semibold">{isDescVisible ? "Hide" : "Show"}</button>
            {isDescVisible &&
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, porro! Totam laborum, at eveniet numquam suscipit repellat sequi voluptate sapiente quod quia nobis saepe ex recusandae excepturi tenetur aspernatur aliquid. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id saepe suscipit quibusdam magnam molestias, dignissimos porro itaque totam reprehenderit excepturi iusto sapiente, soluta tempore minima labore repellat! Excepturi, ab modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero fugiat tempore ex, dolor illo ipsam alias nemo beatae impedit harum corrupti iure, distinctio, qui neque provident quia laudantium ipsa!</p>
            }
        </div>
    )
}
export default InstaMartAccordion;