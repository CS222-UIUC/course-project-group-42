import React from 'react';
import { Assignment } from './Assignment';



const DateBox = ({date}) => (
        <div style={{backgroundColor: "lightgrey", marginBottom: '20px', height: "40px", width: "1100px", borderRadius: '15px'}}>
            <p style ={{marginTop: "7px", marginLeft: '15px', color: 'black', marginBottom: "0"}}><b>Date: {date}</b></p>
            {/* <Assignment name="CS 225" assignment = "MP Lists" time = "11:59 PM" type="MP"></Assignment> */}
        </div>
    );
export { DateBox };