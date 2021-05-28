import React from 'react'
import './Header.css';
const Header = () => {
    return (
        <header>
            <img className = "logo" src = "logo.webp" alt = "logo"/>
            <nav>
                <ul className="navBar_links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Search</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav> 
        </header>
    );
}

export default Header;