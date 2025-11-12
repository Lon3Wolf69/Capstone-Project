import React from 'react'
import './Navbar.css'
{/*import { Link } from 'react-router-dom';
import HoverDropdown from './Hoverdropdown.jsx';*/}

const Navbar = () => {
    return (
        <header className="header">
            <a href="/" className="logo"><img src="Logo.gif" alt = "Logo" /></a>

            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Portfolio</a>
                <a href="/">Services</a>   
                <a href="/">Contact</a>

                {/*<HoverDropdown title="Services">
                    <a href="/service-a" className="menu-item">Service A</a>
                    <a href="/service-b" className="menu-item">Service B</a>
                    <a href="/service-c" className="menu-item">Service C</a>
                </HoverDropdown>*/}
            </nav>
        </header>
    )
}

export default Navbar