import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import About from "./src/About";
import Contact from "./src/Contact";
import ErrorComponent from "./src/ErrorComponent";
import Body from "./src/Body";
import RestaurantCardDetails from "./src/RestaurantCardDetails";
import Profile from "./src/Profile";
import ProfileClassComponent from "./src/ProfileClassComponent";

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
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <ProfileClassComponent />,
                        element: <Profile />,
                    }
                ]

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