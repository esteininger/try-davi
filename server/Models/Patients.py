# import datetime
from Utilities.Database import db
import uuid


class Files(db.EmbeddedDocument):
    eob = db.StringField()
    bill = db.StringField()


class Patients(db.Document):
    id = db.StringField()
    name = db.StringField()
    files = db.EmbeddedDocumentField(Files)

    meta = {'collection': 'patients', 'strict': False}

    def create(self):
        self.uuid = str(uuid.uuid4())
        self.save()
        return self.uuid
