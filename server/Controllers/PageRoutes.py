from flask import Blueprint, render_template

mod = Blueprint('page_routes', __name__)


@mod.route('/')
def home():
    return "hello"


@mod.route('/results')
def results():
    return render_template("results.html")


@mod.route('/start')
def start():
    return render_template("start.html")
