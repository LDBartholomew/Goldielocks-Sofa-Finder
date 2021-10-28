import React from "react"
import "./Firmness.css"

export const Firmness = ({firmness}) => (
    <section className="firmness">
        <h3 className="firmness__name">{firmness.name}</h3>
    </section>
)