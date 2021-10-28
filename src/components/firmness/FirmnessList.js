// import React, { useState, useEffect } from 'react'
// import { Sofa } from './Sofa'
// import { getAllSofas, getSofaById } from '../../modules/SofaManager'

// export const SofaList = () => {
//     const [sofas, setSofas] = useState([])
//     const getSofas = () => {
//         return getAllSofas().then((sofasFromAPI) => {
//             setSofas(sofasFromAPI)
//         })
//     }
//     useEffect(() => {
//         getSofas()
//     }, [])
//     return (
//         <div className="sofa">
//             {sofas.map((sofa) => (
//                 <Sofa key={sofa.id} sofa={sofa} />
//             ))}
//         </div>
//     )
// }
