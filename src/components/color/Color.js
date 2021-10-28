import React from "react"
import "./Color.css"

export const Color = ({color}) => (
    <section className="color">
        <h3 className="color__name">{color.name}</h3>
    </section>
)