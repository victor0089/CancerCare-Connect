/cancer-care-connect
|-- /backend
|   |-- app.py
|   |-- requirements.txt
|   |-- /auth
|   |   |-- __init__.py
|   |   |-- auth_routes.py
|   |   |-- jwt_utils.py
|   |-- /database
|   |   |-- __init__.py
|   |   |-- db.py
|   |   |-- models.py
|   |-- /api
|   |   |-- __init__.py
|   |   |-- health_data_routes.py
|   |-- /websocket
|   |   |-- __init__.py
|   |   |-- ws_routes.py
|-- /frontend
|   |-- /src
|   |   |-- /components
|   |   |   |-- AuthComponent.js
|   |   |   |-- HealthDataComponent.js
|   |   |   |-- WebSocketComponent.js
|   |   |-- App.js
|   |   |-- index.js
|-- /scripts
|   |-- setup_db.py
|   |-- setup_environment.py
|-- /config
|   |-- config.py
