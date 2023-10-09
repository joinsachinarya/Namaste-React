import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Contact from "./src/components/Contact";
import ErrorComponent from "./src/components/ErrorComponent";
import Body from "./src/components/Body";
import About from "./src/components/About"
import RestaurantCardDetails from "./src/components/RestaurantCardDetails";
import Profile from "./src/components/Profile";
import ProfileClassComponent from "./src/components/ProfileClassComponent";

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
                        // element: <ProfileClassComponent topic={"class"} />,
                        element: <Profile topic={"function"} />,
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