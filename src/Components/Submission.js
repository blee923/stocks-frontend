import React from 'react';
import {Button, TextField} from '@material-ui/core';

class Submission extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName : ''
        };
    }

    render() {
        return (
            <div>
                <TextField id = "textbox" label = "Company Symbol" onChange = {(e) => this.setState({companyName: e.target.value})}></TextField>
                <Button variant = "contained" color = "primary" style = {{marginTop: 10, marginLeft: 10}} onClick = {() => console.log(this.state.companyName)}>Quote!</Button>
            </div>
        );
    }
}

export default Submission;