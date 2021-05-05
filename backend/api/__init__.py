from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()  # make db


def create_app():  # web application
    app = Flask(__name__)

    # db name = database
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

    db.init_app(app)  # initialize app here

    from .views import main
    app.register_blueprint(main)

    return app
