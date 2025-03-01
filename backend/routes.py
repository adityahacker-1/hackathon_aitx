from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User

user_routes = Blueprint("user_routes", __name__)

# Register User or Boss
@user_routes.route('/register', methods=['POST'])
@cross_origin()  # ✅ Ensure frontend can access API
def register():
    data = request.json

    # ✅ Check if user already exists
    if User.query.filter_by(email=data['email']).first():
        return jsonify({"success": False, "message": "User with this email already exists"}), 400

    if User.query.filter_by(phone=data['phone']).first():
        return jsonify({"success": False, "message": "User with this phone number already exists"}), 400

    hashed_password = generate_password_hash(data['password'])
    
    new_user = User(
        username=data['name'],  
        email=data['email'],
        password=hashed_password,
        phone=data['phone'],  
        location=data['location'],  
        role=data.get('role', 'user')  
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({
        "success": True,
        "message": "Registration successful",
        "user_id": new_user.id,
        "role": new_user.role
    }), 201


# Login User or Boss
@user_routes.route('/login', methods=['POST'])
@cross_origin()  # ✅ Fix: Ensure frontend can access API
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    
    if not user:
        return jsonify({"success": False, "message": "User not found"}), 404  # ✅ More descriptive response

    if not check_password_hash(user.password, data['password']):
        return jsonify({"success": False, "message": "Incorrect password"}), 401  # ✅ Specific error message

    return jsonify({
        "success": True,
        "message": "Login successful",
        "user_id": user.id,
        "name": user.username,  # ✅ Added name for frontend to display
        "role": user.role
    }), 200

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
