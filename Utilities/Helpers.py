# -*- coding: utf-8 -*-
import re
import unidecode
from config import secret_key, app_config
from Crypto.Cipher import XOR
import base64
import os


def save_file(file_obj, filename):
    full_filename = os.path.join(app_config['UPLOAD_FOLDER'], filename)
    file_obj.save(full_filename)
    return full_filename


def slugify(text):
    text = unidecode.unidecode(text).lower()
    return re.sub(r'[\W_]+', '-', text)


def encode(plaintext):
    cipher = XOR.new(secret_key)
    return base64.b64encode(cipher.encrypt(plaintext))


def decode(encoded_text):
    cipher = XOR.new(secret_key)
    return cipher.decrypt(base64.b64decode(encoded_text)).decode("utf-8")
