# import scrapy
from bs4 import BeautifulSoup as bs
import requests as rq


def main():
    URL = "https://realpython.github.io/fake-jobs/"
    page = rq.get(URL)
    soup = bs(page.content, "html.parser")
    results = soup.find(id="ResultsContainer")
    job_elements = results.find_all("div", class_="card-content")
    printers(job_elements)

def printers(job_elements):
    for job_element in job_elements:
        print(job_element, end="\n"*2)

    for job_element in job_elements:
        title_element = job_element.find("h2", class_="title")
        company_element = job_element.find("h3", class_="company")
        location_element = job_element.find("p", class_="location")
        print(title_element.text.strip())
        print(company_element.text.strip())
        print(location_element.text.strip())
        print()
main()