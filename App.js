import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import { Outlet } from "react-router-dom";
import UserContext from "./src/context/UserContext";
import { useState } from "react";

function App() {
    const [user, setUser] = useState({
        name: "Sachin Arya",
        email: "sachinkarya333@gmail.com"
    })
    return (
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
            <Header />
            <Outlet />
            <Footer />
        </UserContext.Provider>
    )
}

export default App;

