import React from 'react';
import { Assignment } from './Assignment';
import json from "/Users/rohan_v/Desktop/CS222/course-project-group-42/test-app/src/components/test/test.json"

const obj = JSON.parse(JSON.stringify(json));
// obj.forEach((el)=>{
//     console.log(el)
// })

console.log(obj["Assignments"][3])
const DateBox = ({date}) => (
        <div style={{backgroundColor: "lightgrey", marginBottom: '20px', height: "40px", width: "1100px", borderRadius: '15px'}}>
            <p style ={{marginTop: "7px", marginLeft: '15px', color: 'black', marginBottom: "0"}}><b>Date: {date}</b></p>
            {/* <Assignment name="CS 225" assignment = "MP Lists" time = "11:59 PM" type="MP"></Assignment> */}
        </div>
    );

export { DateBox };