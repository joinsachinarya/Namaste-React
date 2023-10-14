import { useRouteError } from "react-router-dom"

function ErrorComponent() {
    const error = useRouteError()
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h2 style={{ margin: "32px" }}>OOPS! Something went wrong!!</h2>
            <h1 style={{ color: "red" }}>{error.status} ! {error.statusText}!!</h1>
        </div>
    )
}
export default ErrorComponent;