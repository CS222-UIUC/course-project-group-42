import React, { Component } from 'react';


class Canvas extends Component {
    constructor(props) {
        super(props)   
        this.state = {
            records: []
        }
         
    }
 
    componentDidMount() {
        fetch('https://canvas.instructure.com/api/v1/courses?access_token=14559~LkgGXCML3mJIp0WuqU7N1TsofKkFUGsPRvBVFqrBYImbt9wC7qF6PzF60wDKRK8L')
            .then(response => response.json())
            .then(records => {
                this.setState({
                    records: records
                })
            })
            .catch(error => console.log(error))
    }
 
    renderListing() {
        let recordList = []
        this.state.records.map(record => {
            return recordList.push(<li key={record.id}>{record.name}</li>)
        })
 
        return recordList;
    }
 
    render() {
        return (
            <ul>
                {this.renderListing()}
            </ul>
        );
    }
}

export default Canvas;
