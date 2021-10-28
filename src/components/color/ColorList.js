import React, { useState, useEffect } from 'react'
import { Color } from './Color'
import { getAllColors, getColorById } from '../../modules/ColorManager'

export const ColorList = () => {
    const [colors, setColors] = useState([])

    const getColors = () => {
        //When the API data comes back the setColors function updates the state
        return getAllColors().then((colorsFromAPI) => {
            setColors(colorsFromAPI)
        })
    }

    useEffect(() => {
        getColors()
    }, [])

    return (
        <div className="color">
            {colors.map((color) => (
                <Color key={color.id} color={color} />
            ))}
        </div>
    )
}
