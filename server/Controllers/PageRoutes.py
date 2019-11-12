from flask import Blueprint, render_template


mod = Blueprint('page_routes', __name__)


@mod.route('/')
def home():
    return render_template("index.html")


@mod.route('/i')
def i():
    return render_template("wizard-index.html")


@mod.route('/start')
def protected():
    return render_template("start.html")
