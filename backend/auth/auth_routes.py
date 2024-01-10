from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    # Authenticate user (check credentials against database, for example)
    # If successful, create and return a JWT token
    access_token = create_access_token(identity='username')
    return jsonify(access_token=access_token), 200

@auth_bp.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    return jsonify(logged_in_as='username'), 200
