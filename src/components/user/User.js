import React from 'react'
import './User.css'

export const User = ({ user }) => (
    <section className="user">
        <h3 className="user__name">{user.name}</h3>
        <div className="user__email">{user.email}</div>
    </section>
)
