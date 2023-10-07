import { useLocation } from "react-router-dom";
function Shimmer() {
    const location = useLocation();
    return (
        <>
            {location.pathname === "/" &&
                (<div className="shimmer-container">
                    {Array(12).fill("").map((item, index) => (
                        <div className="shimmer" key={index}></div>
                    ))}
                </div>)
            }
            {location.pathname !== "/" && (<div style={{ width: "500px", height: "800px", backgroundColor: "aliceblue", margin: "16px" }} />)}
        </>
    )
}
export default Shimmer;