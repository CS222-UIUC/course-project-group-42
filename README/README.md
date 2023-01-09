# Introduction

**ReCalendar** is an application that allows the user to input their Canvas API token to then be returned with a full list of all of their assignments sorted by date, with the option to check if it has been done or not. The motivation for this program is to combine organization with a to-do list in hopes of including all course websites (in the future) that provide a student’s assignments. At this stage, Canvas is the only site supported, but our program provides better organization and a checklist.

# Technical Architecture

The first component is the frontend website built in React. This portion allows an easy to use interface for the user to input their API token, view their assignments from canvas, and check off completed assignments. We accomplished this by creating an “Assignment List” component where it presents the lists of assignments when taking in a JSON of all of the courses received from the backend. This is done with a map in order to loop through each part of the JSON and parse through using a “DateBox” component and an “Assignment” component we made, which handle the HTML/CSS of each respectively. In this loop, it checks whether the date matches another date to put those assignments together under the same date in our application. We also check if a date is not included and include all of those assignments at the bottom. In order to retrieve the canvas data, the add course component connects with the flask development web server, which is hosted locally, after the user inputs a valid token,to receive data from the python backend that gets the canvas information. It does not directly communicate with the Python backend. This component also sends the API token from the input bar to the flask development web server.
![arch](https://user-images.githubusercontent.com/55822299/206309198-dae26949-acc8-40fa-addc-222c5aa13d76.jpg)


The second component of the project is the Flask Development Web Server (localhost). This component allows communication between the python backend and the React frontend. It essentially creates a container around our python code that React can interact with. This allows the web page to get information from the API calls made by the python backend. It also allows the webpage to send the API token to the python backend. This micro web framework is built in Python.

The third and final component is the python backend. This component handles creating calls to request information from the Canvas API and correctly outputting assignment data into a JSON. The Python backend finds the correct API call to find every assignment the student has across every course. Assignments have a lot more data than is necessary, so it finds the due date, assignment name, and assignment type from the assignment data. It adds each assignment to a JSON to output. This component only interacts with the Flask Development Web Server and the Canvas API. It receives the API token from the Flask Development Web Server.


# Reinstallation

To reinstall this application, download all of the documents in this GitHub to your local code editor. In the “test-app” directory, run `yarn start` and `flask run` in the terminal which will then pull up the site in a browser. From there, enter your Canvas API token which will then pull up a complete list of your assignments in Canvas sorted by date.

# Project Roles
|Rohan Shah  | Ben Taylor |Rachel Samojedny |Rohan Vanjani | 
|--|--|--|--|
|Back-End Developer  |Back-End Developer  |Front-End Developer | Front-End Developer / Flask Developer

