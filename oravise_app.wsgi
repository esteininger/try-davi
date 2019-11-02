#!/usr/bin/python
activate_this = '/var/www/app.oravise.com/venv/bin/activate_this.py'
with open(activate_this) as file_:
    exec(file_.read(), dict(__file__=activate_this))

import sys
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/app.oravise.com/")

from manage import app as application
