import React, { useState } from 'react'
//import { Route } from 'react-router-dom'
import { NavBar } from './nav/NavBar'
import { ApplicationViews } from './ApplicationViews'
import './Goldielocks.css'

export const Goldielocks = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        sessionStorage.getItem('goldielocks_user') !== null
    )

    const setAuthUser = (user) => {
        sessionStorage.setItem('goldielocks_user', JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem('goldielocks_user') !== null)
    }

    const clearUser = () => {
        sessionStorage.clear()
        setIsAuthenticated(sessionStorage.getItem('goldielocks_user') !== null)
    }

    return (
        <>
            <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} />
            <ApplicationViews
                setAuthUser={setAuthUser}
                isAuthenticated={isAuthenticated}
            />
        </>
    )
}
