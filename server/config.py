import os

app_config = {
    'ROOT_PATH': os.path.dirname(os.path.abspath(__file__)),
    'UPLOAD_PATH': os.path.dirname(os.path.abspath(__file__)) + '/tmp/'
}

mongo_config = {
    'IP': '142.93.180.200',
    'PORT': 27017,
    'USERNAME': 'adminMain',
    'PASSWORD': 'GsGs4Whn3L5Ye7RFtDXZQ5mikdQRB3bzWHjBtaXjSE',
    'DB': 'bcg_dv_hacks_oravise',
    'AUTH': 'admin'
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
