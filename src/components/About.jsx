import { Link, Outlet } from "react-router-dom";

function About() {
    return (
        <>
            <h1 style={{ marginTop: "16px", marginBottom: "16px" }}>
                Hey, I am Sachin, a Developer.
            </h1>
            <Link to="profile">Show More Details</Link>
            <Outlet />
        </>
    )
}
export default About;