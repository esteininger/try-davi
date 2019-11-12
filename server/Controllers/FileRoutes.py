from flask import Blueprint, request

from Utilities.Methods import success_response, error_response
from Utilities.Helpers import allowed_file

from Models.Files import Drive, LocalFiles
from Models.Patients import Patient


mod = Blueprint('file_routes', __name__)
folder_id = '15nGFgsYX3MidPfdrU63juR7ZCvrQpCqY'
valid_types = ['eob', 'bill']


# upload_type: 'bill' or 'eob'
@mod.route('/api/drive/upload/<upload_type>', methods=['POST'])
def upload_drive_api(upload_type):
    file = request.files['file']

    if not allowed_file(file.filename):
        return error_response('invalid file')

    if upload_type not in valid_types:
        return error_response('invalid file type')

    f = LocalFiles(file=file.read())
    file_path = f.save()

    try:
        # upload file to drive
        cloud_file_path = Drive().upload(file_path=file_path, folder_id=folder_id, share=True)
        # delete file from local directory
        f.delete()
        # create patient account
        uuid = Patient.create_new()
        # add file url to patient file dict
        obj = {
            "uuid": uuid,
            "type": upload_type,
            "url": cloud_file_path
        }
        # if patient UUID is valid, add file it
        if not Patient.add_file(**obj):
            return error_response('uuid invalid')

        return success_response(uuid)
    except Exception as e:
        return error_response(e)
