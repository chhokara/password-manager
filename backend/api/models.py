from . import db


class Data(db.Model):  # data for websites and passwords
    id = db.Column(db.Integer, primary_key=True)
    website = db.Column(db.String(100))  # website column
    password = db.Column(db.String(100))  # password for associated website
