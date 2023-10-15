import { useContext, useState } from "react";
import { logo } from "../constants/constants"
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import UserContext from "../context/userContext";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    const user = useContext(UserContext);

    return (
        <div className="flex justify-between items-center p-2 bg-blue-100 shadow-md">
            <Link to="/" className="w-16 ">
                <img className="rounded-full h-16 w-16" alt="logo" src={logo.src} />
            </Link>
            <ul className="flex gap-4">
                <Link to="/">  <li>Home</li></Link>
                <Link to="/about"> <li>About</li> </Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/instamart"><li>InstaMart</li></Link>
                <li>Cart</li>
            </ul>
            <div className="flex">
                <button className="px-5 py-2 font-medium" onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout" : "Login"}</button>
                <span className="py-2 pr-2">[{user.name}]</span>
                <p className="py-2">{!isOnline ? "🔴" : "🟢"}</p>
            </div>
        </div>
    )
}


export default Header;