import React from 'react';
import {Button, TextField} from '@material-ui/core';
import axios from 'axios';

class Submission extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName : '',
            finalCompanyName: '',
            currentPrice: '',
            highPrice: '',
            lowPrice: '',
            timestamp: ''
        };
    }

    handleChange = (e) => {
        const name = e.target.value.toUpperCase();
        this.setState({companyName: name});
    }

    handleClick = (e) => {
        let component = this;
        axios.get(`http://localhost:5000/quote/${this.state.companyName}`)
        .then(function (response) {
            // handle success
            const data = response.data;
            component.setState({
                finalCompanyName: data['companyName'],
                currentPrice: data.currentPrice,
                highPrice: data.highPrice,
                lowPrice: data.lowPrice,
                timestamp: data.timestamp
            }, console.log(component.state));
          }).catch(function (error) {
              console.log(error);
          });
    }

    render() {
        return (
            <div>
                <TextField id = "textbox" label = "Company Symbol" onChange = {this.handleChange}></TextField>
                <Button variant = "contained" color = "primary" style = {{marginTop: 10, marginLeft: 10}} onClick = {() => this.handleClick()}>Quote!</Button>
                <p>Company Symbol: {this.state.finalCompanyName}<br />
                Current Price: ${this.state.currentPrice}<br />
                High Price: ${this.state.highPrice}<br />
                Low Price: ${this.state.lowPrice}<br />
                Timestamp: {this.state.timestamp}</p>
            </div>
        );
    }

    
}

export default Submission;