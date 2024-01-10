import React, { useEffect, useState } from 'react';

const WebSocketComponent = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:5000/ws');

        socket.onopen = () => {
            console.log('WebSocket connected');
        };

        socket.onmessage = (event) => {
            setMessage(event.data);
        };

        return () => {
            socket.close();
        };
    }, []);

    return (
        <div>
            <h1>WebSocket</h1>
            <p>{message}</p>
        </div>
    );
};

export default WebSocketComponent;
