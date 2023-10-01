import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
    return (
        <div className="header">
            <a href="/" className="logo">
                <img alt="logo" src="https://imgs.search.brave.com/F_CYamxHqVTQRWPNwX_Uy7OZCHnKI5rMvGUHLK7t940/rs:fit:500:0:0/g:ce/aHR0cHM6Ly92aWxs/YWVzY29uZGlkYXNl/YXR0bGUuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzA0/L3ZpbGxhLXNsaWRl/ci05LmpwZw" />
            </a>
            <ul>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

function Body() {
    return (
        <>
            <RestauRantList />
        </>
    )
}

function RestauRantList() {
    return (
        <>
            <img />
            <h2></h2>
            <h3></h3>
            <h4></h4>
        </>
    )
}

function Footer() {
    return (
        <>
            <h2></h2>
        </>
    )
}

function AppLayOut() {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />)