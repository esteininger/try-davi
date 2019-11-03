import os

app_config = {
    'ROOT_PATH': os.path.dirname(os.path.abspath(__file__)),
    'UPLOAD_PATH': os.path.dirname(os.path.abspath(__file__)) + '/tmp/'
}

mongo_config = {
    'IP': '',
    'PORT': "",
    'USERNAME': '',
    'PASSWORD': '',
    'DB': '',
    'AUTH': ''
}


email_config = {
    'ADDRESS' : '',
    'PASSWORD' : '',
    'SMTP': 'smtp.gmail.com',
    'PORT': 587
}

session_key = '1'

def get_mode():
    server = str(os.path.realpath('.'))
    if dev_computer_name in server:
        return 'test'
    else:
        return 'live'
