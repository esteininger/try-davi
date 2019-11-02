from flask import Blueprint, request

from Utilities.Methods import success_response, error_response, check_json
from Utilities.Helpers import allowed_file

from Models.Google import Drive
from Models.Patients import Patients

from config import app_config
import os


mod = Blueprint('intake_routes', __name__)


@mod.route("/api/intake/create-uuid", methods=['POST'])
def create_uuid_api():
    uuid = Patients().create()
    return success_response(uuid)


@mod.route("/api/intake/patient", methods=['POST'])
def patient_intake_api():
    json = request.json
    result = check_json(json, ['email', 'uuid'])

    if result:
        return error_response("missing {}".save())

    Patients(**json).save()

    return success_response('ok')


@mod.route("/api/intake/upload-file/<location>/<type>/<uuid>", methods=['POST'])
def image_upload_api(location, type, uuid):
    file = request.files['file']
    # save file to local dir and get full path
    if file and allowed_file(file.filename):
        filepath = os.path.join(app_config['UPLOAD_FOLDER'], file.filename)
        file.save(filepath)
        # class init
        drive = Drive()
        # generate ocr
        file_url = drive.upload(file_path=filepath, folder_id='1pFo6w7cAKrhQj4xgK-TGoNMFE0V1904p')
        Patients.objects.get(uuid=uuid).update(file_url=file_url)
        # delete file
        os.remove(filepath)
        return success_response(text)
    else:
        return error_response('invalid file')
