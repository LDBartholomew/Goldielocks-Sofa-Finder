import React from "react"
import "./Fabric.css"

export const Fabric = ({fabric}) => (
    <section className="fabric">
        <h3 className="fabric__name">{fabric.name}</h3>
    </section>
)