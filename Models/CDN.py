import cloudinary
from cloudinary.uploader import upload


class CDN:
    def __init__(self):
        self.client = cloudinary.config(cloud_name='', api_key='', api_secret='')

    def set(self, file_path, filename):
        resp = upload(file_path, width=500, public_id=f'bills/{filename}', format="png", invalidate=True)
        return resp
