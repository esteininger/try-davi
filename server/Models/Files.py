# Drive imports
from __future__ import print_function
import pickle
import os.path
import os
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from config import app_config
from googleapiclient.http import MediaFileUpload
import uuid
# For MIME types
import magic
# End Drive imports


credentials_path = app_config['ROOT_PATH'] + '/secret/'


class LocalFiles:
    def __init__(self, file):
        self.file = file
        self.path = app_config['ROOT_PATH'] + '/tmp/' + str(uuid.uuid4())

    def save(self):
        with open(self.path, 'wb') as f:
            f.write(self.file)
        return self.path

    def delete(self):
        os.remove(self.path)


class Drive:
    def __init__(self):
        self.scopes = ['https://www.googleapis.com/auth/drive.file']
        creds = None
        pickle_path = credentials_path + 'token.pickle'
        if os.path.exists(pickle_path):
            with open(pickle_path, 'rb') as token:
                creds = pickle.load(token)

        # If there are no (valid) credentials available, let the user log in.
        if not creds or not creds.valid:
            if creds and creds.expired and creds.refresh_token:
                creds.refresh(Request())
            else:
                flow = InstalledAppFlow.from_client_secrets_file(credentials_path + 'credentials.json', self.scopes)
                creds = flow.run_local_server(port=0)
            # Save the credentials for the next run
            with open(pickle_path, 'wb') as token:
                pickle.dump(creds, token)

        self.service = build('drive', 'v3', credentials=creds, cache_discovery=False)

    def share(self, file_id):
        permissions = {
            "role": "reader",
            "type": "anyone"
        }
        self.service.permissions().create(fileId=file_id, body=permissions).execute()
        url = 'https://drive.google.com/uc?id={}&export=download'.format(file_id)
        return url

    def delete(self, file_id):
        self.service.files().delete(fileId=file_id).execute()
        return 'ok'

    def upload(self, file_path, folder_id, share=True):
        file_type = magic.Magic(mime=True).from_file(file_path)
        file_metadata = {
            'name': os.path.basename(file_path),
            "parents": [folder_id]
        }
        media = MediaFileUpload(file_path, mimetype=file_type)
        file_id = self.service.files().create(body=file_metadata, media_body=media, fields='id').execute()['id']
        if share:
            public_url = self.share(file_id=file_id)
            return public_url
        else:
            return file_id
