from flask import Blueprint
from flask_socketio import SocketIO, emit

ws_bp = Blueprint('ws', __name__)
socketio = SocketIO(cors_allowed_origins="*")

@socketio.on('message')
def handle_message(msg):
    emit('message', msg, broadcast=True)
