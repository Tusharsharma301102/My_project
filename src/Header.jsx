import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Header.css"

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    return (
        <div className="header">
            <img src="https://ucarecdn.com/21147689-46de-4882-a5cc-1795e6528531/-/preview/1000x409/" alt="" />
            <div className="header-div-1">
                <Link to="/">Home</Link>
                <Link to="/cabBooking">Book a Ride</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            <div className="header-div-2">
                <button>Download App</button>
                <img src="https://ucarecdn.com/e3613908-13c8-4c82-866f-5eb7fd6f6142/-/preview/442x442/" alt="" />
            </div>
        </div>
    );
}