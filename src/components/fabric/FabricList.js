import React, { useState, useEffect } from 'react';
import { Fabric } from './Fabric';
import { getAllFabrics, getFabricById } from '../../modules/FabricManager';

export const FabricList = () => {

    const [fabrics, setFabrics] = useState([]);

    const getFabrics = () => {

        return getAllFabrics().then(fabricsFromAPI => {
            setFabrics(fabricsFromAPI)
        });
    };

    useEffect(() => {
        getFabrics();
    }, []);

    return (
        <div className="fabric">
            {fabrics.map(fabric =>
                <Fabric key={fabric.id} fabric={fabric} />)}
        </div>
    );
};