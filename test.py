from syslog import closelog
import requests as rq
import pytest
import json

# run tests with coverage pytest --cov=. test.py

# tests have been approved by mentor, lines 98 - 277

# These tests will not run without a canvas token

def getToken():
    to_return = ""
    with open('token_stored.txt') as f:
        for line in f:
            to_return = line.strip()
    f.close()
    return to_return

def courseEnrollmentsFromCanvasToken(access_token):
    url = "https://canvas.instructure.com"
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

def url_builder(name, course, access_token):
    url = "https://canvas.instructure.com"
    url += "/api/v1/users/"
    url += str(name)
    url += "/courses/"
    url += str(course) + "/"
    url += "assignments?access_token=" + access_token
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

def assignment_to_dict(assignment, course_name_field):
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
    return y

def url_to_json(urls, names_field):
    iterator = 0
    x = {}
    w = []
    for url in urls:
        assignment_list = rq.get(url).json()
        course_name_field = names_field[iterator]
        for assignment in assignment_list:
            y = assignment_to_dict(assignment, course_name_field)
            w.append(y)
        iterator += 1
    x['Assignments'] = w
    return x

def create_json(dictionary):
    with open("assignments.json", "w") as outfile:
        json.dump(dictionary, outfile, indent=2)
    return (json.dumps(dictionary, indent=2), dictionary)

def main():
    access_token = getToken()
    name_and_courses = courseEnrollmentsFromCanvasToken(access_token)
    frontend_course_name = name_and_courses[2]
    course_list = name_and_courses[1]
    name = name_and_courses[0]
    urls = []
    for c in course_list:
        urls.append(url_builder(name, c, access_token))
    assignment_dictionary = url_to_json(urls, frontend_course_name)
    x = create_json(assignment_dictionary)
    return


main()

def get_testing_object():
    x = {
        "id": 279370,
        "due_at": "2021-09-08T20:00:00Z",
        "unlock_at": None,
        "lock_at": None,
        "points_possible": 20.0,
        "grading_type": "points",
        "assignment_group_id": 17120,
        "grading_standard_id": None,
        "created_at": "2021-08-06T19:29:44Z",
        "updated_at": "2022-04-14T14:31:20Z",
        "position": 2,
        "grader_count": 0,
        "allowed_attempts": 2,
        "lti_context_id": "7c099b4e-784b-4664-94d0-b357d6bf7e61",
        "course_id": 12765,
        "name": "RSO Assignment",
        "max_name_length": 255,
        "original_course_id": 12765,
        "original_assignment_id": 266724,
        "original_assignment_name": "RSO Assignment - OLD",
        "workflow_state": "published",
        "html_url": "https://canvas.instructure.com/courses/12765/assignments/279370",
    }
    return x

def get_testing_object_nulls():
    x = {
        "id": 279370,
        "due_at": None,
        "unlock_at": None,
        "lock_at": None,
        "points_possible": 20.0,
        "grading_type": "points",
        "assignment_group_id": 17120,
        "grading_standard_id": None,
        "created_at": "2021-08-06T19:29:44Z",
        "updated_at": "2022-04-14T14:31:20Z",
        "position": 2,
        "grader_count": 0,
        "allowed_attempts": 2,
        "lti_context_id": "7c099b4e-784b-4664-94d0-b357d6bf7e61",
        "course_id": 12765,
        "name": "RSO Assignment",
        "max_name_length": 255,
        "original_course_id": 12765,
        "original_assignment_id": 266724,
        "original_assignment_name": "RSO Assignment - OLD",
        "workflow_state": "published",
        "html_url": "https://canvas.instructure.com/courses/12765/assignments/279370",
    }
    return x

def test_date_object():
    y = get_testing_object()
    x = assignment_to_dict(y, "LAS 101")
    assert x["Date"] == "09/08/2021"

def test_assignment_object():
    y = get_testing_object()
    x = assignment_to_dict(y, "LAS 101")
    assert x["Assignment"] == "RSO Assignment"

def test_time_object():
    y = get_testing_object()
    x = assignment_to_dict(y, "LAS 101")
    assert x["Due"] == "20:00"


def test_date_is_null():
    y = get_testing_object_nulls()
    x = assignment_to_dict(y, "LAS 101")
    assert x["Due"] == "-1"

def test_time_is_null():
    y = get_testing_object_nulls()
    x = assignment_to_dict(y, "LAS 101")
    assert x["Date"] == "-1"

def test_create_date():
    date = {'due_at' : "2021-09-15T20:00:00Z"}
    assert create_date(date)[0] == "09/15/2021"

def test_create_datetime():
    date = {'due_at' : "2021-09-15T20:00:00Z"}
    assert create_date(date)[1] == "20:00"

def test_create_is_none():
    date = {'due_at' : None}
    assert create_date(date)[1] == "-1" and create_date(date)[0] == "-1"


def test_key():
    KEY = getToken()
    url = "https://canvas.instructure.com"
    canv_content = rq.get(url+"/api/v1/courses?access_token="+KEY).json()
    invalid_content = rq.get(url+"/api/v1/courses?access_token="+KEY+"()").json()
    assert canv_content != invalid_content

def test_date():
    KEY = getToken()
    name_and_courses = courseEnrollmentsFromCanvasToken(KEY)
    frontend_course_name = name_and_courses[2]
    course_list = name_and_courses[1]
    name = name_and_courses[0]
    urls = []
    for c in course_list:
        urls.append(url_builder(name, c, KEY))
    assignment_dictionary = url_to_json(urls, frontend_course_name)
    assert assignment_dictionary['Assignments'][0]['Date'] is not None

def test_name():
    KEY = getToken()
    name_and_courses = courseEnrollmentsFromCanvasToken(KEY)
    frontend_course_name = name_and_courses[2]
    course_list = name_and_courses[1]
    name = name_and_courses[0]
    urls = []
    for c in course_list:
        urls.append(url_builder(name, c, KEY))
    assignment_dictionary = url_to_json(urls, frontend_course_name)
    assert assignment_dictionary['Assignments'][0]['Name'] is not None

def test_assignment():
    KEY = getToken()
    name_and_courses = courseEnrollmentsFromCanvasToken(KEY)
    frontend_course_name = name_and_courses[2]
    course_list = name_and_courses[1]
    name = name_and_courses[0]
    urls = []
    for c in course_list:
        urls.append(url_builder(name, c, KEY))
    assignment_dictionary = url_to_json(urls, frontend_course_name)
    assert assignment_dictionary['Assignments'][0]['Assignment'] is not None

def test_type():
    KEY = getToken()
    name_and_courses = courseEnrollmentsFromCanvasToken(KEY)
    frontend_course_name = name_and_courses[2]
    course_list = name_and_courses[1]
    name = name_and_courses[0]
    urls = []
    for c in course_list:
        urls.append(url_builder(name, c, KEY))
    assignment_dictionary = url_to_json(urls, frontend_course_name)
    assert assignment_dictionary['Assignments'][0]['Type'] is not None

def test_due():
    KEY = getToken()
    name_and_courses = courseEnrollmentsFromCanvasToken(KEY)
    frontend_course_name = name_and_courses[2]
    course_list = name_and_courses[1]
    name = name_and_courses[0]
    urls = []
    for c in course_list:
        urls.append(url_builder(name, c, KEY))
    assignment_dictionary = url_to_json(urls, frontend_course_name)
    x = create_json(assignment_dictionary)
    assert assignment_dictionary['Assignments'][0]['Due'] is not None
    
def test_get_canvas_data_name():
    KEY = getToken()
    x = courseEnrollmentsFromCanvasToken(KEY)
    assert x[0] is not None

def test_get_canvas_data_front_end_name():
    KEY = getToken()
    x = courseEnrollmentsFromCanvasToken(KEY)
    assert len(x[1]) > 0

def test_get_canvas_data_courses_name():
    KEY = getToken()
    x = courseEnrollmentsFromCanvasToken(KEY)
    assert len(x[2]) > 0
