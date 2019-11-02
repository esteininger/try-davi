#!/bin/python
# Client imports
import pickle
import os.path
import os
from googleapiclient.discovery import build
from config import app_config

# Vision Imports
from google.cloud import vision
import io


class OCR:
    def __init__(self):
        # login with token
        self.scopes = ['https://www.googleapis.com/auth/cloud-vision']
        self.credentials_path = app_config['ROOT_PATH'] + '/secret/'
        self.creds = None
        # The file token.pickle stores the user's access and refresh tokens, and is
        # created automatically when the authorization flow completes for the first
        # time.
        pickle_path = self.credentials_path + 'token.pickle'
        if os.path.exists(pickle_path):
            with open(pickle_path, 'rb') as token:
                self.creds = pickle.load(token)

        self.service = build('vision', 'v1', credentials=self.creds, cache_discovery=False)

    def detect_text(self, image_path):
        client = vision.ImageAnnotatorClient(credentials=self.creds)

        with io.open(image_path, 'rb') as image_file:
            content = image_file.read()

        image = vision.types.Image(content=content)

        response = client.text_detection(image=image)
        texts = response.text_annotations

        arr = []
        for text in texts:
            arr.append(text.description)

        return arr


class Parse:
    def __init__(self):
        pass

    @staticmethod
    def is_cpt(str):


    @staticmethod
    def is_money(str):
        return str
        # if "." in str:
        #     return str
