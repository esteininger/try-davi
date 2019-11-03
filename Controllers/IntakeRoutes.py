from flask import Blueprint, request

from Utilities.Methods import success_response, error_response, check_json

from Models.Google import Drive, LocalFiles
from Models.Patients import Patients


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


@mod.route('/api/intake/upload/<type>', methods=['POST'])
def upload_intake_api():
    if request.method == 'POST':
        patient_id = request.args.get('id', default=None, type=str)
        state = request.args.get('state', default=None, type=str)

        file = request.files['file'].read()

        f = LocalFiles(file=file)

        file_path = f.save()
        folder_id = '1pFo6w7cAKrhQj4xgK-TGoNMFE0V1904p'

        try:
            cloud_file_path = Drive().upload(filename=user_email, file_path=file_path, folder_id=folder_id, share=True)
            Patients.objects(id=patient_id).update(set__files_bill=cloud_file_path)
            f.delete()
            return success_response(cloud_file_path)
        except Exception as e:
            return error_response(e)
