import React, { Component } from 'react';

const DateBox = ({date}) => (
        <div style={{backgroundColor: "lightgrey", marginBottom: '20px', height: "40px", width: "1100px", borderRadius: '15px'}}>
            <p style ={{marginTop: "7px", marginLeft: '15px', color: 'black', marginBottom: "0"}}><b>Date: {date}</b></p>
        </div>
    );

export { DateBox };