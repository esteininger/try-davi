from flask import Blueprint, request

from Utilities.Methods import success_response, error_response

from Models.Advocates import Advocates


mod = Blueprint('advocate_routes', __name__)


@mod.route("/api/advocates", methods=['GET'])
def advocates_api():
    location = request.args.get('loc', default='MD', type=str)
    limit = request.args.get('limit', default=10, type=int)

    try:
        query = Advocates.objects.filter(location=location).limit(limit).exclude('id')
        return success_response(query)
    except Exception as e:
        return error_response(e)
