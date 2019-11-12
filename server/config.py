import os

app_config = {
    'ROOT_PATH': os.path.dirname(os.path.abspath(__file__))
}

mongo_config = {
    'IP': '167.99.115.201',
    'PORT': 27017,
    'USERNAME': 'adminMain',
    'PASSWORD': '}R-U6_=t~[j3!^J6Q]*%L*c6jRH.p',
    'DB': 'davi',
    'AUTH': 'admin'
}


email_config = {
    'ADDRESS': '',
    'PASSWORD': '',
    'SMTP': 'smtp.gmail.com',
    'PORT': 587
}


session_key = '1'
secret_key = '1'
dev_computer_name = ''
jwt_secret = '1'


def get_mode():
    server = str(os.path.realpath('.'))
    if dev_computer_name in server:
        return 'test'
    else:
        return 'live'
