from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

# Import database and routes
from models import db
from routes import user_routes  # Import user-related routes

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow CORS

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SECRET_KEY'] = 'your_secret_key'

db.init_app(app)

# Define paths for the Next.js build
frontend_folder = os.path.abspath(os.path.join(os.getcwd(), "..", "frontend"))
next_static_folder = os.path.join(frontend_folder, ".next", "static")
next_pages_folder = os.path.join(frontend_folder, ".next", "server", "pages")

# Serve Next.js static files
@app.route('/_next/static/<path:filename>')
def next_static(filename):
    return send_from_directory(next_static_folder, filename)

# Serve Dashboard Page as Default
@app.route("/", defaults={"filename": "dashboard"})
@app.route("/<path:filename>")
def index(filename):
    file_path = os.path.join(next_pages_folder, f"{filename}.html")

    if not os.path.exists(file_path):
        file_path = os.path.join(frontend_folder, "public", filename)

    return send_from_directory(os.path.dirname(file_path), os.path.basename(file_path))

# Register API routes
app.register_blueprint(user_routes)  

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(host="0.0.0.0", port=5555, debug=True)
