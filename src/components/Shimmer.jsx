import { useLocation } from "react-router-dom";
function Shimmer() {
    const location = useLocation();
    return (
        <>
            {location.pathname === "/" &&
                (<div className="flex flex-wrap justify-center items-center">
                    {Array(10).fill("").map((item, index) => (
                        <div className="m-4 w-56 h-72 bg-slate-100 " key={index}></div>
                    ))}
                </div>)
            }
            {location.pathname !== "/" && (<div className="m-4 w-[400px] h-[500px] bg-slate-100" />)}
        </>
    )
}
export default Shimmer;