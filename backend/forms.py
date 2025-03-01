from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SelectField
from wtforms.validators import InputRequired, Email, Length

class RegistrationForm(FlaskForm):
    username = StringField("Username", validators=[InputRequired(), Length(min=3, max=50)])
    email = StringField("Email", validators=[InputRequired(), Email()])
    password = PasswordField("Password", validators=[InputRequired(), Length(min=8)])  # ✅ Ensure minimum 8 characters to match frontend
    role = SelectField("Role", choices=[("user", "User"), ("pandit", "Pandit")])  # ✅ Ensures role naming consistency

class LoginForm(FlaskForm):
    email = StringField("Email", validators=[InputRequired(), Email()])
    password = PasswordField("Password", validators=[InputRequired(), Length(min=8)])  # ✅ Matches frontend password validation
