from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from models import db
from routes import user_routes

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SECRET_KEY'] = 'your_secret_key'

db.init_app(app)

app.register_blueprint(user_routes)  # Register routes

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
