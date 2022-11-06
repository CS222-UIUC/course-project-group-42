import React from 'react';
import json from "/Users/rachel/Documents/CS222/course-project-group-42/test-app/src/components/test/test.json"

const DateBox = ({date}) => (
    <div style={{backgroundColor: "lightgrey", marginBottom: '20px', marginLeft: '-15px', height: "40px", width: "1100px", borderRadius: '15px'}}>
        <p style ={{marginTop: "7px", marginLeft: '15px', color: 'black', marginBottom: "0"}}><b>Date: {date}</b></p>
    </div>
);


const Assignment = ({ name, assignment, time, type }) => (
    <div style={{backgroundColor: 'lightblue', width: '1000px', height: '50px', borderRadius: '15px', marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "row"}}>
        <p style={{marginTop: "0", marginBottom: "0"}}>{assignment}</p>
        <p style={{marginTop: "0", marginBottom: "0"}}>{name}</p>
        <p style={{marginTop: "0", marginBottom: "0"}}>Due: {time}</p>
        <p style={{marginTop: "0", marginBottom: "0"}}> Type: {type }</p>
        <input type ="checkbox"></input>
    </div>
);


function AssignmentList() {
    const obj = JSON.parse(JSON.stringify(json));
    let currDate = obj["Assignments"][0].Date;
    console.log(currDate);
    
   return (
   
    <>
    {obj["Assignments"].map((data,id)=>{
        console.log(data);
        console.log(id);
        if (id === 0) {
            let currDate = data.Date;
            return <div key={id}>
            <DateBox date = {currDate}></DateBox>
            <Assignment name={data.Name} assignment = {data.Assignment} time = {data.Due} type={data.Type}></Assignment>
        </div>
        }
        
        if (currDate !== data.Date) {
            currDate = data.Date;
            return <div key={id}>
            <DateBox date = {currDate}></DateBox>
            <Assignment name={data.Name} assignment = {data.Assignment} time = {data.Due} type={data.Type}></Assignment>
        </div>
        }
        else {
            return <div key={id}>
            <Assignment name={data.Name} assignment = {data.Assignment} time = {data.Due} type={data.Type}></Assignment>
        </div>
        }
      
    })}

    </>);
}

{/* <div>
        <DateBox date = "October 6th, 2022"></DateBox>
        <Assignment name="CS 233" assignment = "Midterm" time = "8:00 AM" type="Exam"></Assignment>
    </div> */}

export { AssignmentList }; 
// figure out if statement and setting a current date variable