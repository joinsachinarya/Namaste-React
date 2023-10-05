import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import About from "./src/About";
import ErrorComponent from "./src/ErrorComponent";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "*",
        element: <ErrorComponent />
    }
])

export default appRouter;