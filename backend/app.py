from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from models import db
from routes import user_routes
import os

app = Flask(__name__)

CORS(app)  # Allow frontend to access backend

DATABASE_PATH = "instance/site.db"
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DATABASE_PATH}'
app.config['SECRET_KEY'] = 'your_secret_key'

db.init_app(app)

# Register Routes
app.register_blueprint(user_routes)

if __name__ == "__main__":
    # ✅ Ensure data directory exists before running
    os.makedirs("/data", exist_ok=True)
    
    with app.app_context():
        db.create_all()
        
    app.run(host="0.0.0.0", port=5500, debug=True)
