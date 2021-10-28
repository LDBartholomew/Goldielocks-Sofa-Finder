import React from "react"
import "./Configuration.css"

export const configurationId = ({configuration}) => (
    <section className="configuration">
        <h3 className="configuration__name">{configuration.name}</h3>
    </section>
)