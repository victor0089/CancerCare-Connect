The HealthDataComponent fetches health data from the server using the /api/health-data endpoint and displays it in a list.
The WebSocketComponent establishes a WebSocket connection to the server at http://localhost:5000/ws and displays messages received from the server. It also allows the user to send a new message.
Make sure to install the necessary dependencies using npm install axios react-router-dom socket.io-client. Also, ensure that your server (backend) is running before trying to interact with these components.
