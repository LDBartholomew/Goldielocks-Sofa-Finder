import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/firmnesses">Firmness</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/colors">Color</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/fabrics">Fabric</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/login">Login</Link>
            </li>
        </ul>
    )
}


 
        