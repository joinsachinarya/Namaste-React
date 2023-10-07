import { useState } from "react"

function Profile({ topic }) {
    const [day] = useState(0)

    return (
        <h2>
            Functional component : Profile
            <p>Topic: {topic}</p>
            <i>Day: {day}</i>
        </h2>
    )
}
export default Profile