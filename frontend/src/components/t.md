AuthComponent.js
It uses the useState hook to manage the state of the username and password fields.
The handleLogin function sends a POST request to the server at /auth/login with the entered username and password.
The response is logged to the console for demonstration purposes. In a real application, you would handle the authentication token returned by the server appropriately (e.g., store it in a secure way, redirect the user, update the UI, etc.).
