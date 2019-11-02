from flask import Blueprint, request
from Utilities.Methods import success_response, error_response
from Models.Google import OCR
import os
from config import app_config


mod = Blueprint('image_routes', __name__)


def allowed_file(filename):
    ALLOWED_EXTENSIONS = ['jpeg', 'jpg', 'png', 'gif']
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@mod.route("/api/image/upload", methods=['POST'])
def image_upload_api():
    file = request.files['file']
    # save file to local dir and get full path
    if file and allowed_file(file.filename):
        filepath = os.path.join(app_config['UPLOAD_FOLDER'], file.filename)
        file.save(filepath)
        # class init
        ocr = OCR()
        # generate ocr
        text = ocr.detect_text(image_path=filepath)
        # delete file
        os.remove(filepath)
        return success_response(text)
    else:
        return error_response('invalid file')
