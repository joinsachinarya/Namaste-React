import React from "react";
import InstaMartAccordion from "./InstaMartAccordion";

function InstaMart() {
    return (
        <div className="flex flex-col flex-wrap gap-10 p-10 mb-10">
            <InstaMartAccordion title={"Team"} />
            <InstaMartAccordion title={"Store"} />
            <InstaMartAccordion title={"Services"} />
        </div>
    )
}
export default InstaMart;



