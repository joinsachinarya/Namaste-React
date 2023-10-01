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
    return <RestauRantList />
}

function RestauRantList() {
    return (
        <>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </>
    )

}

function RestaurantCard() {
    return (
        <div className="restaurant-list">
            <img alt="restaurant1" src="https://imgs.search.brave.com/9AaTexAytkBQcFjWyVH7-4efsNFZ4b0wkD3CQxDa4k8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTU2/NTYxOTY1L3Bob3Rv/L3dvbWFuLWhhdmlu/Zy1mb29kLWF0LXJl/c3RhdXJhbnQtdGFi/bGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPW1UdDNuUzVE/M0t0XzNaMzROMHVi/LU1qOXg0Q2xva0R0/U2JKcXhQNndWZUE9" />
            <h2>Restaurant 1</h2>
            <h3>Indian, Italian</h3>
            <h4>4.4 star</h4>
        </div>
    )
}

function Footer() {
    return (
        <div className="footer">
            <h4>2023 &copy; Sachin Arya</h4>
        </div>
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