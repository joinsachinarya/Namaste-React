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
        <div className="font-medium text-xl p-5 flex flex-col">
            Functional component : Profile
            <p>Topic: {topic}</p>
            <button onClick={() => setTestState(!testState)} className="border bg-slate-100 rounded  p-2">Update State</button>
        </div>
    )
}
export default Profile