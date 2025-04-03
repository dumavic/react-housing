import './navbar.css';
import abaLogo from "../images/abalogo-resized.png";
import { Outlet, Link } from 'react-router-dom';
import Header from './Header';

function Navbar() {
    return(
        <div>
        <header>
            <Header />
        <section id="nav-mobile">
        <div id="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </div>
            <nav class="nav-bar">
            <ul id="nav-toggle">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pages/shop">Shop</Link></li>
                <li><Link to="/pages/collections">Collections</Link></li>
                <li><Link to="/pages/about">About</Link></li>
                <li><Link to="/pages/login">Account</Link></li>
                <li><Link to="/pages/cart">Cart</Link></li>
                <li><Link to="/pages/contact">Contact Us</Link></li>
            </ul>
        </nav>
    </section> 
    {/* regular nav */}
            <section class="navigation">
                <nav class="nav-bar" id="left-nav">
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pages/shop">Shop</Link></li>
                <li><Link to="/pages/collections">Collections</Link></li>
                <li><Link to="/pages/about">About</Link></li>
                </ul>
            </nav>
            <nav class="nav-bar" id="logo" >
                <a href="/">
                <img src={abaLogo} alt="aba logo resized"/>
            </a>
            </nav>
            
            <nav class="nav-bar" id="right-nav">
                <ul>
                <li><Link to="/pages/login">Account</Link></li>
                <li><Link to="/pages/cart">Cart</Link></li>
                <li><Link to="/pages/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </section> 
        </header>
        <Outlet />
        </div>
    )
}

export default Navbar;