from flask import Blueprint, request

from Utilities.Methods import success_response, error_response, check_json

from Models.Patients import Patient


mod = Blueprint('file_routes', __name__)


@mod.route('/api/patient/intake/<patient_uuid>', methods=['POST'])
def intake_submit_api(patient_uuid):
    json = request.json

    result = check_json(json, ['name', 'email', 'phone'])
    if result:
        return error_response("missing {}".format(result))
