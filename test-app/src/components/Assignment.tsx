import React, { Component } from 'react';

const Assignment = ({ name, assignment, time, type }) => (
        <div style={{backgroundColor: 'lightblue', width: '1000px', height: '50px', borderRadius: '15px', marginBottom: "20px"}}>
            <p style={{textAlign: 'left', display: 'inline-block', paddingInline: '50px'}}>{assignment}</p>
            <p style={{display:'inline-block', paddingInline: '50px'}}>{name}</p>
            <p style={{display:'inline-block', paddingInline: '50px'}}>Due: {time}</p>
            <p style={{display:'inline-block', paddingInline: '50px'}}> Type: {type }</p>
        </div>
    );

export { Assignment };