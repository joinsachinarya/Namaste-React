import { useEffect, useState } from "react"

function Profile({ topic }) {
    const [day, setDay] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("useEffect");
        }, 1000)

        return () => {
            clearInterval(interval);
            console.log("left the page");
        }
    }, [day])

    console.log("render");

    return (
        <h2>
            Functional component : Profile
            <p>Topic: {topic}</p>
            <i>Day: {day}</i>
            <button onClick={() => setDay(1)}>Change day</button>
        </h2>
    )
}
export default Profile