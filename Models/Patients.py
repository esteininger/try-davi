# import datetime
from Utilities.Database import db
import uuid


class Files(db.Document):
    eob = db.StringField(required=True)
    bill = db.StringField(required=True)


class Patients(db.Document):
    id = db.StringField(required=True)
    name = db.StringField(required=True)
    files = db.EmbeddedDocumentField(Files)

    meta = {'collection': 'patients', 'strict': False}

    def create(self):
        self.uuid = str(uuid.uuid4())
        self.save()
        return self.uuid
