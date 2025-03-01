from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User

user_routes = Blueprint("user_routes", __name__)

# Register User or Boss
@user_routes.route('/register', methods=['POST'])
def register():
    data = request.json
    hashed_password = generate_password_hash(data['password'])
    new_user = User(username=data['username'], email=data['email'], password=hashed_password, role=data['role'])

    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": f"{data['role']} registered successfully"}), 201

# Login User or Boss
@user_routes.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    
    if user and check_password_hash(user.password, data['password']):
        return jsonify({"message": "Login successful", "role": user.role, "user_id": user.id}), 200
    return jsonify({"message": "Invalid credentials"}), 401

# Get User Profile (By ID)
@user_routes.route('/user-profile/<int:user_id>', methods=['GET'])
def user_profile(user_id):
    user = User.query.get(user_id)
    
    if not user:
        return jsonify({"message": "User not found"}), 404

    return jsonify({
        "id": user.id,
        "username": user.username,
        "email": user.email,
        "role": user.role
    }), 200

# Get All Users (For Bosses Only)
@user_routes.route('/manage-users', methods=['GET'])
def manage_users():
    users = User.query.all()
    return jsonify([
        {"id": user.id, "username": user.username, "email": user.email, "role": user.role}
        for user in users
    ])
