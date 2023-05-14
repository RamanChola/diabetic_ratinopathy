from flask import Blueprint, render_template
from flask_login import login_required, current_user

views = Blueprint('views', __name__)


@views.route('/')
# @login_required
# def login():
#     return render_template("login.html",user=current_user)
@views.route("/home")
def home():
    return render_template("home.html")


@views.route('/predict')
def predict():
    return render_template("predict.html")
