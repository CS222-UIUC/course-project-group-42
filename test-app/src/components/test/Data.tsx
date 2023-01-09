import React, { Component } from 'react';
import employee from '../../data.json';

class LocalFileRead extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>{JSON.stringify(employee)}</div>
        );
    }
}

export default LocalFileRead;