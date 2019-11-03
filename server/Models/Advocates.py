# import datetime
from Utilities.Database import db

 
class Advocates(db.Document):
    first_name = db.StringField(required=True)
    last_name = db.StringField(required=True)
    location = db.StringField(required=True)
    email = db.StringField(required=True)
    phone = db.StringField(required=True)

    meta = {'collection': 'advocates', 'strict': False}
