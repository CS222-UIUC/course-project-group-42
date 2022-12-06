import requests as rq
import json

def main(access_token):
    url = "https://canvas.instructure.com"
    canv_content = rq.get(url+"/api/v1/courses?access_token="+access_token).json()
    print(canv_content)

main("14559~DsuzfWWuRMkfaRPoGNfh40bJT9LYrEulLxOssXVmRV9tqDhTm5O4shSAJPiFzzCM")

