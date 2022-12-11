from syslog import closelog
import requests as rq
import json

# run tests with coverage pytest --cov=. test.py

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

def main(token):
    access_token = token
    print(token)
    name_and_courses = courseEnrollmentsFromCanvasToken(access_token)
    frontend_course_name = name_and_courses[2]
    course_list = name_and_courses[1]
    name = name_and_courses[0]
    urls = []
    for c in course_list:
        urls.append(url_builder(name, c, access_token))
    assignment_dictionary = url_to_json(urls, frontend_course_name)
    print(assignment_dictionary)
    # x = create_json(assignment_dictionary)
    return assignment_dictionary


