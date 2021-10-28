import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
    const history = useHistory()

    return (
        <div className="navbar">
            <div className="subnav">
                <button className="subnavbtn">
                    Firmness <i className="fa fa-caret-down"></i>
                </button>
                <div className="subnav-content">
                    <Link className="navbar__link" to="/sofas/firmness/1">
                        Firm
                    </Link>
                    <Link className="navbar__link" to="/sofas/firmness/2">
                        Medium
                    </Link>
                    <Link className="navbar__link" to="/sofas/firmness/3">
                        Soft
                    </Link>
                </div>
            </div>
            <div className="subnav">
                <button className="subnavbtn">
                    Color <i className="fa fa-caret-down"></i>
                </button>
                <div className="subnav-content">
                    <Link className="navbar__link" to="/sofas/color/1">
                        Blue
                    </Link>
                    <Link className="navbar__link" to="/sofas/color/2">
                        Green
                    </Link>
                    <Link className="navbar__link" to="/sofas/color/3">
                        Black
                    </Link>
                </div>
            </div>
            <div className="subnav">
                <button className="subnavbtn">
                    Fabric <i class="fa fa-caret-down"></i>
                </button>
                <div className="subnav-content">
                    <Link className="navbar__link" to="/sofas/fabric/1">
                        Cotton
                    </Link>
                    <Link className="navbar__link" to="/sofas/fabric/2">
                        Leather
                    </Link>
                    <Link className="navbar__link" to="/sofas/fabric/3">
                        Microfiber
                    </Link>
                </div>
            </div>
            <div className="subnav">
                <button
                    className="subnavbtn"
                    onClick={() => {
                        sessionStorage.removeItem('goldielocks_user')
                        history.push('/login')
                    }}
                >
                    {' '}
                    Logout
                </button>
            </div>
        </div>
    )
}
