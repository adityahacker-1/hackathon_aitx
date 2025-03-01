from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from models import db
from routes import user_routes, chat_routes  # Import chatbot routes

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SECRET_KEY'] = 'your_secret_key'

db.init_app(app)

# Register Routes
app.register_blueprint(user_routes)  
app.register_blueprint(chat_routes)  # ✅ Add chatbot API routes

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
