from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    role = db.Column(db.String(10), nullable=False)  # 'user', 'pandit'
    phone = db.Column(db.String(20), unique=True, nullable=False)  # ✅ Add phone number
    location = db.Column(db.String(100), nullable=True)  # ✅ Match frontend fields

    def __repr__(self):
        return f"<User {self.username}, Role: {self.role}>"

    def to_dict(self):
        """Returns a JSON-serializable dictionary of the user object."""
        return {
            "user_id": self.id,
            "name": self.username,
            "email": self.email,
            "role": self.role,
            "phone": self.phone,
            "location": self.location
        }
