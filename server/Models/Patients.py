# import datetime
from Utilities.Database import db
import uuid


class Files(db.EmbeddedDocument):
    eob = db.StringField()
    bill = db.StringField()


class Patient(db.Document):
    uuid = db.StringField(required=True)
    name = db.StringField()
    files = db.EmbeddedDocumentField(Files)

    meta = {'collection': 'patients', 'strict': False}

    @staticmethod
    def create_new():
        id = str(uuid.uuid4())
        Patient(uuid=id).save()
        return id

    def add_file(**obj):
        # if Patient.objects(uuid=self.uuid):
        try:
            Patient._get_collection().update_one(
                {'uuid': obj.get('uuid')},
                {"$set": {f"files.{obj.get('type')}": obj.get('url')}}
            )
            return True
        except:
            return False
