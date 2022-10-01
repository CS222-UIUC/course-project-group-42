from bs4 import BeautifulSoup as bs
import requests as rq

URL = "https://courses.engr.illinois.edu/cs225/fa2022/"
page = rq.get(URL)

soup = bs(page.content, "html.parser")
results = soup.find(id="mp")

mps = results.find_all("div", class_="card-content")
for mp in mps:
    print(mp, end="\n"*2)

