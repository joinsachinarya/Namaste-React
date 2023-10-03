import { useState } from "react";
import { logo } from "../constants"

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <a href="/" className="logo">
                <img alt="logo" src={logo.src} />
            </a>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)} style={{ width: "100px" }}>Logout</button> : <button onClick={() => setIsLoggedIn(true)} style={{ width: "100px" }}>Login</button>}
        </div>
    )
}


export default Header;