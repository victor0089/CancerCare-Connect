from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class HealthData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    value = db.Column(db.String(255), nullable=False)
