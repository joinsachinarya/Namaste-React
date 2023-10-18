import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import { Outlet } from "react-router-dom";
import UserContext from "./src/context/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./src/store/store";

function App() {
    const [user, setUser] = useState({
        name: "Sachin Arya",
        email: "sachinkarya333@gmail.com"
    })
    console.log("store", store);
    return (
        <Provider store={store}>
            <UserContext.Provider value={{ user: user, setUser: setUser }}>
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </Provider>
    )
}

export default App;

