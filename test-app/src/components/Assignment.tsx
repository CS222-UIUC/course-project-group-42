import React, { Component } from 'react';

class Assignment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div style={{backgroundColor: 'blue', width: '750px', height: '50px'}}>
            <p style={{textAlign: 'left', display:'inline-block'}}>CS 225</p>
            <p style={{textAlign: 'center', display: 'inline-block', paddingInline: '260px'}}>MP Lists</p>
        
        </div>);
    }
}

export default Assignment;