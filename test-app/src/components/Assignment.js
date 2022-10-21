import React, { useEffect } from 'react';
import json from "/Users/rohan_v/Desktop/CS222/course-project-group-42/test-app/src/components/test/test.json"

const Assignment = ({ name, assignment, time, type }) => (
        <div style={{backgroundColor: 'lightblue', width: '1000px', height: '50px', borderRadius: '15px', marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "row"}}>
            <p style={{marginTop: "0", marginBottom: "0"}}>{assignment}</p>
            <p style={{marginTop: "0", marginBottom: "0"}}>{name}</p>
            <p style={{marginTop: "0", marginBottom: "0"}}>Due: {time}</p>
            <p style={{marginTop: "0", marginBottom: "0"}}> Type: {type }</p>
            <input type ="checkbox"></input>
        </div>
    );

export { Assignment };