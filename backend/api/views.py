from flask import Blueprint, jsonify, request
from . import db
from .models import Data  # import password and website data
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

main = Blueprint('main', __name__)

some_engine = create_engine('sqlite:///database.db')
Session = sessionmaker(bind=some_engine)


@main.route('/add_data', methods=['POST'])  # add website and password
def add_data():
    response = request.get_json()  # becomes a dict
    # create new data object from models.py
    new_data = Data(website=response['website'], password=response['password'])
    # add this new password and website to the database
    db.session.add(new_data)
    db.session.commit()  # commit changes
    return 'Done', 201


@main.route('/delete/<id_>', methods=["DELETE"])  # delete table entries
def delete(id_):
    _id = int(id_)
    ids = Data.query.with_entities(Data.id).all()
    i = int(ids[_id][0])
    # save the item we want to delete
    deleted = Data.query.filter_by(id=i).first()
    db.session.delete(deleted)  # choose the saved item to be deleted
    db.session.commit()
    return "Deleted!"


@main.route('/update/<id_>', methods=['PUT'])
def update(id_):
    _id = int(id_)
    ids = Data.query.with_entities(Data.id).all()
    i = int(ids[_id][0])

    response = request.get_json()
    Data.query.filter_by(id=i).update(
        {Data.website: response['new_website']})  # find website and change to new one
    Data.query.filter_by(id=i).update(
        {Data.password: response['new_password']})  # find password and change to new one
    db.session.commit()
    return "Updated!"


@main.route('/display_data')  # display all the websites and passwords
def display_data():
    data_list = Data.query.all()  # get all the passwords and websites
    all_data = []
    for data in data_list:  # iterate through all the data in the data table
        all_data.append({"website": data.website, "password": data.password})

    return jsonify({'data': all_data})  # convert array to json data
