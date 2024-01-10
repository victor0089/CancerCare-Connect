import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HealthDataComponent = () => {
    const [healthData, setHealthData] = useState([]);

    useEffect(() => {
        axios.get('/api/health-data')
            .then(response => setHealthData(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Health Data</h1>
            <ul>
                {healthData.map(data => (
                    <li key={data.id}>{data.value}</li>
                ))}
            </ul>
        </div>
    );
};

export default HealthDataComponent;
