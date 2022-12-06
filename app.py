from flask import Flask
from flask_cors import CORS
from flask_test import *

app = Flask(__name__)
CORS(app)


# 14559~DsuzfWWuRMkfaRPoGNfh40bJT9LYrEulLxOssXVmRV9tqDhTm5O4shSAJPiFzzCM
# 14559~jH8NXriknoAYBpR8UK3KAh4FA0aEySWyNSGTq5MAJcZSknzJ8qH0e4e9ZsxWmNDj
@app.route('/upload_data/<api_key>')
def upload_data(api_key = None):
    data = {}
    if (api_key != None or api_key != ""):
        data = main(str(api_key))
    return data


