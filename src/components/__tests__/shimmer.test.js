import { render } from "@testing-library/react"
import Shimmer from "../Shimmer"
import { StaticRouter } from "react-router-dom/server"

test("shimmer should be load", () => {
    render(<StaticRouter><Shimmer /></StaticRouter>)
})