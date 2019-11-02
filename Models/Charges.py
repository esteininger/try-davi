# import datetime
from Utilities.Database import db


class Charges(db.Document):
    id = db.StringField(required=True)
    description = db.StringField(required=True)
    category = db.StringField(required=True)
    charge_amount = db.IntField(required=True)
    hospital_slug = db.StringField(required=True)

    meta = {'collection': 'codes', 'strict': False}
