from syslog import closelog
import requests as rq
import pytest
import json

# run tests with coverage pytest --cov=. test.py

KEY = "lol not today"

def courseEnrollmentsFromCanvasToken(access_token):
    url = "https://canvas.instructure.com"
    # print(url)
    canv_content = rq.get(url+"/api/v1/courses?access_token="+access_token).json()
    courses = []
    frontend_course_name = []
    name = ""
    for course in canv_content:
        frontend_course_name.append(course['name'])
        courses.append(course['id'])
        temp = course['enrollments']
        name = temp[0].get('user_id')
    return (name, courses, frontend_course_name)

def url_builder(name, course):
    url = "https://canvas.instructure.com"
    url += "/api/v1/users/"
    url += str(name)
    url += "/courses/"
    url += str(course) + "/"
    url += "assignments?access_token=" + KEY
    return url

def create_date(assignment):
    # print(assignment)
    due_field = ""
    due_time = ""
    if (assignment['due_at'] is None):
        due_field = "-1"
        due_time = "-1"
    else:
        due_field = assignment['due_at'][5:7] + "/" + assignment['due_at'][8:10] + "/" +assignment['due_at'][0:4]
        due_time = assignment['due_at'][11:16]
    return (due_field, due_time)

def url_to_json(urls, names_field):
    iterator = 0
    assignment_number = 0
    x = {}
    for url in urls:
        assignment_list = rq.get(url).json()
        course_name_field = names_field[iterator]
        for assignment in assignment_list:
            due_date_field = create_date(assignment)[0]
            due_time_field = create_date(assignment)[1]
            assignment_name_field = assignment['name']
            type_field = "Canvas Event"
            y = {
                "Date" : due_date_field,
                "Name" : course_name_field,
                "Assignment" : assignment_name_field,
                "Type" : type_field,
                "Due" : due_time_field
            }
            x[assignment_number] = y
            assignment_number += 1
        
        iterator += 1
    return x

def create_json(dictionary):
    with open("assignments.json", "w") as outfile:
        json.dump(dictionary, outfile, indent=2)
    return (json.dumps(dictionary, indent=2), dictionary)

def main():
    name_and_courses = courseEnrollmentsFromCanvasToken(KEY)
    frontend_course_name = name_and_courses[2]
    course_list = name_and_courses[1]
    name = name_and_courses[0]
    urls = []
    for c in course_list:
        urls.append(url_builder(name, c))
    assignment_dictionary = url_to_json(urls, frontend_course_name)
    x = create_json(assignment_dictionary)
    # print(type(x[1]))


main()


def test_key():
    url = "https://canvas.instructure.com"
    canv_content = rq.get(url+"/api/v1/courses?access_token="+KEY).json()
    invalid_content = rq.get(url+"/api/v1/courses?access_token="+KEY+"()").json()
    assert canv_content != invalid_content

def test_date():
    name_and_courses = courseEnrollmentsFromCanvasToken(KEY)
    frontend_course_name = name_and_courses[2]
    course_list = name_and_courses[1]
    name = name_and_courses[0]
    urls = []
    for c in course_list:
        urls.append(url_builder(name, c))
    assignment_dictionary = url_to_json(urls, frontend_course_name)
    x = create_json(assignment_dictionary)
    assert x[1][0]['Date'] is not None

def test_name():
    name_and_courses = courseEnrollmentsFromCanvasToken(KEY)
    frontend_course_name = name_and_courses[2]
    course_list = name_and_courses[1]
    name = name_and_courses[0]
    urls = []
    for c in course_list:
        urls.append(url_builder(name, c))
    assignment_dictionary = url_to_json(urls, frontend_course_name)
    x = create_json(assignment_dictionary)
    assert x[1][0]['Name'] is not None

def test_assignment():
    name_and_courses = courseEnrollmentsFromCanvasToken(KEY)
    frontend_course_name = name_and_courses[2]
    course_list = name_and_courses[1]
    name = name_and_courses[0]
    urls = []
    for c in course_list:
        urls.append(url_builder(name, c))
    assignment_dictionary = url_to_json(urls, frontend_course_name)
    x = create_json(assignment_dictionary)
    assert x[1][0]['Assignment'] is not None

def test_type():
    name_and_courses = courseEnrollmentsFromCanvasToken(KEY)
    frontend_course_name = name_and_courses[2]
    course_list = name_and_courses[1]
    name = name_and_courses[0]
    urls = []
    for c in course_list:
        urls.append(url_builder(name, c))
    assignment_dictionary = url_to_json(urls, frontend_course_name)
    x = create_json(assignment_dictionary)
    assert x[1][0]['Type'] is not None

def test_due():
    name_and_courses = courseEnrollmentsFromCanvasToken(KEY)
    frontend_course_name = name_and_courses[2]
    course_list = name_and_courses[1]
    name = name_and_courses[0]
    urls = []
    for c in course_list:
        urls.append(url_builder(name, c))
    assignment_dictionary = url_to_json(urls, frontend_course_name)
    x = create_json(assignment_dictionary)
    assert x[1][0]['Date'] is not None
    
def test_get_canvas_data_name():
    x = courseEnrollmentsFromCanvasToken(KEY)
    assert x[0] is not None

def test_get_canvas_data_front_end_name():
    x = courseEnrollmentsFromCanvasToken(KEY)
    assert len(x[1]) > 0

def test_get_canvas_data_courses_name():
    x = courseEnrollmentsFromCanvasToken(KEY)
    assert len(x[2]) > 0

def test_create_date():
    date = {'due_at' : "2021-09-15T20:00:00Z"}
    assert create_date(date)[0] == "09/15/2021"

def test_create_datetime():
    date = {'due_at' : "2021-09-15T20:00:00Z"}
    assert create_date(date)[1] == "20:00"

def test_create_is_none():
    date = {'due_at' : None}
    assert create_date(date)[1] == "-1" and create_date(date)[0] == "-1"

