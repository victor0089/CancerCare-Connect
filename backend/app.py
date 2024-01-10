from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_socketio import SocketIO
from backend.auth.auth_routes import auth_bp
from backend.api.health_data_routes import health_data_bp
from backend.websocket.ws_routes import ws_bp, socketio
from backend.database.models import db

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://username:password@localhost/db_name'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your_secret_key'
app.config['SECRET_KEY'] = 'your_secret_key'
jwt = JWTManager(app)

app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(health_data_bp, url_prefix='/api')
app.register_blueprint(ws_bp, url_prefix='/ws')
socketio.init_app(app)
db.init_app(app)

if __name__ == '__main__':
    socketio.run(app, debug=True)
