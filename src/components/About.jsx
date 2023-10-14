import { Link, Outlet } from "react-router-dom";

function About() {
    return (
        <div className=" font-medium text-xl flex flex-col justify-center items-center">
            <h1 style={{ marginTop: "16px", marginBottom: "16px" }}>
                Hey, I am Sachin, a Developer.
            </h1>
            <Link to="profile" className="border bg-slate-100 rounded  p-2">Show More Details</Link>
            <Outlet />
        </div>
    )
}
export default About;