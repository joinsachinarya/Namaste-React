import { useState } from "react"

function Profile({ topic }) {
    const [day, setDay] = useState(0)

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