import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { SofaList } from './sofa/SofaList'
import { ColorList } from './color/ColorList'
import { FabricList } from './fabric/FabricList'
import { UserList } from './user/UserList'
import { Login } from './auth/Login'
import { Register } from './auth/Register'

export const ApplicationViews = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        sessionStorage.getItem('goldielocks_user') !== null
    )

    const setAuthUser = (user) => {
        sessionStorage.setItem('goldielocks_user', JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem('goldielocks_user') !== null)
    }

    return (
        <>
            <Route path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>
            <Route path="/register">
                <Register setAuthUser={setAuthUser} />
            </Route>
            <Route path="/sofas/:category/:categoryId(\d+)">
                <SofaList />
            </Route>
        </>
    )
}
