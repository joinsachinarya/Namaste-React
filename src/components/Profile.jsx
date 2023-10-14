import { useEffect, useState } from "react"

function Profile({ topic }) {
    const [testState, setTestState] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("useEffect : componentDidMount");
        }, 1000)

        return () => {
            clearInterval(interval);
            console.log("left the page: componentWilUnmount");
        }
    }, [testState])

    console.log("render");

    return (
        <h2>
            Functional component : Profile
            <p>Topic: {topic}</p>
            <i>State: {testState}</i>
            <button onClick={() => setTestState(!testState)}>Update State</button>
        </h2>
    )
}
export default Profile