import { Link, useRouteError } from "react-router-dom"

function ErrorComponent() {
    const error = useRouteError()
    return (
        <div className="flex flex-col gap-6 justify-center items-center">
            <h2 style={{ margin: "32px" }}>OOPS! Something went wrong!!</h2>
            <h1 style={{ color: "red" }}>{error.status} ! {error.statusText}!!</h1>
            <Link to={"/"} className="border bg-slate-100 rounded  p-2">Return Home</Link>
        </div>
    )
}
export default ErrorComponent;