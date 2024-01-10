from flask import Blueprint, jsonify
from backend.database.models import HealthData
from flask_jwt_extended import jwt_required

health_data_bp = Blueprint('health_data', __name__)

@health_data_bp.route('/health-data', methods=['GET'])
@jwt_required()
def get_health_data():
    health_data = HealthData.query.all()
    data = [{'id': entry.id, 'value': entry.value} for entry in health_data]
    return jsonify(data), 200
