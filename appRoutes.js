import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import About from "./src/About";
import Contact from "./src/Contact";
import ErrorComponent from "./src/ErrorComponent";
import Body from "./src/Body";
import RestaurantCardDetails from "./src/RestaurantCardDetails";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorComponent />,
        children: [
            {
                path: "/",
                element: <Body />,

            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "restaurant/:id",
                element: <RestaurantCardDetails />
            }
        ]
    },
])

export default appRouter;