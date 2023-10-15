import { lazy, Suspense } from "react"
import App from "./App"
import { createBrowserRouter } from "react-router-dom"
import Contact from "./src/components/Contact";
import ErrorComponent from "./src/components/ErrorComponent";
import Body from "./src/components/Body";
import About from "./src/components/About"
import RestaurantCardDetails from "./src/components/RestaurantCardDetails";
import Profile from "./src/components/Profile";
import ProfileClassComponent from "./src/components/ProfileClassComponent";
import Shimmer from "./src/components/Shimmer";
const InstaMart = lazy(() => import("./src/components/InstaMart"))

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
                        element: <ProfileClassComponent topic={"class"} />,
                        // element: <Profile topic={"function"} />,
                    }
                ]

            },
            {
                path: "/contact",
                element: <Contact contact={{ linkedIn: "https:/linkedin.com/in/dummy", email: "dummyemail@gmail.com" }} />
            },
            {
                path: "restaurant/:id",
                element: <RestaurantCardDetails />
            },
            {
                path: "instamart",
                element: <Suspense fallback={<Shimmer />}><InstaMart /></Suspense>
            }
        ]
    },
])

export default appRouter;