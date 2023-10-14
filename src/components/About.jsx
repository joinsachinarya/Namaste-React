import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { fetchUrlData } from "../utils/fetchUrlData";
import { GITHUB_PROFILE_URL } from "../constants/constants"
import Shimmer from "./Shimmer";

function About() {
    const [profileData, setProfileData] = useState(null);
    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        let data = await fetchUrlData(GITHUB_PROFILE_URL);
        setProfileData(data)
        return data;
    }
    console.log(profileData);
    if (!profileData) return <Shimmer />;
    return (
        <div className="font-medium text-xl flex flex-col justify-center items-center">
            <p style={{ marginTop: "16px", marginBottom: "16px" }}> Hey, I am {profileData.name}, a Software Developer.</p>
            <img src={profileData.avatar_url} alt={profileData.name} />
            <Link to="profile" className="border bg-slate-100 rounded  p-2">Class Component LifeCycles Demo</Link>
            <Outlet />
        </div>
    )
}
export default About;