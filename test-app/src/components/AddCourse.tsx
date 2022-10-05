import React, { Component } from 'react';

const AddCourse = ({}) => (
    <div>
            <input style={{backgroundColor: 'orange', width: '550px', height: '40px', borderRadius: '15px'}} type="text" placeholder="Link to Course Website.."></input>
            <input style={{backgroundColor: 'orange', width: '250px', height: '40px', borderRadius: '15px', marginBottom: "20px"}}type="text" placeholder="Course Name.."></input>
            <button type="button">Add Course</button>
    </div>
);

export { AddCourse };