import React, { useState, useEffect } from 'react';
import { Configuration } from './Configuration';
import { getAllConfigurations, getConfigurationById } from '../../modules/ConfigurationManager';

export const ConfigurationList = () => {

    const [configurations, setConfigurations] = useState([]);

    const getConfigurations = () => {

        return getAllConfigurations().then(configurationsFromAPI => {
            setConfigurations(configurationsFromAPI)
        });
    };

    useEffect(() => {
        getConfigurations();
    }, []);

    return (
        <div className="configuration">
            {configurations.map(configuration =>
                <configuration key={configuration.id} configuration={configuration} />)}
        </div>
    );
};