import React from 'react'
import './Sofa.css'

export const Sofa = ({ sofa }) => (
    <section className="sofa">
        <h3 className="sofa__name">{sofa.name}</h3>
    </section>
)
