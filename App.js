import Header from "./src/Header";
import Footer from "./src/Footer";
import { Outlet } from "react-router-dom";
import Body from "./src/Body";
function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default App;

