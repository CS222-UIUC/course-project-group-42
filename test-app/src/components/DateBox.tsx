import React, { Component } from 'react';

const DateBox = ({date}) => (
        <div style={{backgroundColor: "lightgrey", marginBottom: '20px', height: "40px", width: "1100px", borderRadius: '15px'}}>
            <p style ={{textAlign: "left", marginLeft: '15px', color: 'black'}}><b>Date: {date}</b></p>
        </div>
    );

export { DateBox };