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
            openingPrice: '',
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
                openingPrice: data.openingPrice,
                timestamp: data.timestamp
            });
          }).catch(function (error) {
              console.log(error);
          });
    }

    render() {
        return (
            <div>
                <h1>Quote Stock Prices</h1>
                <TextField id = "textbox" label = "Company Symbol" onChange = {this.handleChange}></TextField>
                <Button variant = "contained" color = "primary" style = {{marginTop: 10, marginLeft: 10}} onClick = {() => this.handleClick()}>Quote!</Button>
                <p>Company Symbol: {this.state.finalCompanyName}<br />
                Current Price: ${this.state.currentPrice}<br />
                High Price: ${this.state.highPrice}<br />
                Low Price: ${this.state.lowPrice}<br />
                Opening Price: ${this.state.openingPrice}<br />
                Timestamp: {this.state.timestamp}</p>
            </div>
        );
    }

    
}

export default Submission;