import { useEffect, useState } from "react"

function Profile({ topic }) {
    const [day, setDay] = useState(0);

    useEffect(() => {
        console.log("useEffect");
    }, [])
    console.log("render");

    return (
        <h2>
            Functional component : Profile
            <p>Topic: {topic}</p>
            <i>Day: {day}</i>
            <button onClick={() => setDay(1)}>Chnage day</button>
        </h2>
    )
}
export default Profile