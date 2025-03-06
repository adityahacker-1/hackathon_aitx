from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User
import os

user_routes = Blueprint("user_routes", __name__)

@user_routes.route('/api/register', methods=['POST'])
@cross_origin()
def register():
    data = request.json


    role = data.get('role', 'user')
    if role not in ['user', 'pandit']:
        return jsonify({"success": False, "message": "Invalid role provided!"}), 400


    if not data.get('phone') or not data.get('location'):
        return jsonify({"success": False, "message": "Phone and location are required!"}), 400


    if User.query.filter_by(email=data['email']).first():
        return jsonify({"success": False, "message": "User with this email already exists"}), 400

    hashed_password = generate_password_hash(data['password'])
    
    new_user = User(
        username=data['name'],  
        email=data['email'],
        password=hashed_password,
        phone=data['phone'],  
        location=data['location'],  
        role=role  # ✅ Explicitly set the role from frontend
    )

    db.session.add(new_user)
    
    try:
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({"success": False, "message": f"Database error: {str(e)}"}), 500

    return jsonify({
        "success": True,
        "message": "Registration successful",
        "user_id": new_user.id,
        "role": new_user.role
    }), 201


# ✅ User Login API
@user_routes.route('/api/login', methods=['POST'])
@cross_origin()
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    
    if not user:
        return jsonify({"success": False, "message": "User not found"}), 404  

    if not check_password_hash(user.password, data['password']):
        return jsonify({"success": False, "message": "Incorrect password"}), 401  

    return jsonify({
        "success": True,
        "message": "Login successful",
        "user_id": user.id,
        "name": user.username,
        "role": user.role
    }), 200


# Get User Profile (By ID)
@user_routes.route('/api/user-profile/<int:user_id>', methods=['GET'])
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
@user_routes.route('/api/manage-users', methods=['GET'])
def manage_users():
    users = User.query.all()
    return jsonify([
        {"id": user.id, "username": user.username, "email": user.email, "role": user.role}
        for user in users
    ])
