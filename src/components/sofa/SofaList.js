import React, { useState, useEffect } from 'react'
import { Sofa } from './Sofa'
import {
    getAllSofas,
    getSofaById,
    getSofasByColorId,
    getSofasByFabricId,
    getSofasByFirmnessId,
} from '../../modules/SofaManager'
import { useParams } from 'react-router'

export const SofaList = () => {
    const [sofas, setSofas] = useState([])
    const { category, categoryId } = useParams()
    const getSofas = () => {
        if (category == 'firmness')
            return getSofasByFirmnessId(categoryId).then((sofasFromAPI) => {
                setSofas(sofasFromAPI)
            })
        else if (category == 'color')
            return getSofasByColorId(categoryId).then((sofasFromAPI) => {
                setSofas(sofasFromAPI)
            })
        else if (category == 'fabric')
            return getSofasByFabricId(categoryId).then((sofasFromAPI) => {
                setSofas(sofasFromAPI)
            })
    }
    useEffect(() => {
        getSofas()
    }, [category, categoryId])
    return (
        <div className="sofa">
            {sofas.map((sofa) => (
                <Sofa key={sofa.id} sofa={sofa} />
            ))}
        </div>
    )
}
