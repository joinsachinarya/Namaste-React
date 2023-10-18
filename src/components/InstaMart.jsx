import React, { useState } from "react";
import InstaMartAccordion from "./InstaMartAccordion";

function InstaMart() {
    const [visibleDescConfig, setVisibleDescConfig] = useState({
        isTeamVisible: false,
        isStoreVisible: false,
        isServicesVisible: false,
    })

    return (
        <div className="flex flex-col flex-wrap gap-10 p-10 mb-10">
            <InstaMartAccordion title={"Team"} isDescVisible={visibleDescConfig.isTeamVisible} setIsDescVisible={() => setVisibleDescConfig({
                isTeamVisible: true,
                isStoreVisible: false,
                isServicesVisible: false,
            })} />
            <InstaMartAccordion title={"Store"} isDescVisible={visibleDescConfig.isStoreVisible} setIsDescVisible={() => setVisibleDescConfig({
                isTeamVisible: false,
                isStoreVisible: true,
                isServicesVisible: false,
            })} />
            <InstaMartAccordion title={"Services"} isDescVisible={visibleDescConfig.isServicesVisible} setIsDescVisible={() => setVisibleDescConfig({
                isTeamVisible: false,
                isStoreVisible: false,
                isServicesVisible: true,
            })} />
        </div>
    )
}
export default InstaMart;



