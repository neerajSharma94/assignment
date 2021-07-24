import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css'



const Navbar = () => {

    return (
        <nav className="navbar">

            <div className="nav-center">
                <ul className="nav-links ">
                    <li>
                        <Link to="/">Form</Link>
                    </li>
                    <li>
                        <Link to="/list">List</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
