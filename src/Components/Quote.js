import React from "react";
import {Button, TextField} from "@material-ui/core"

class textBox extends React.Component {
    constructor()
    <div className = "textBox">
        <TextField id = "textbox" label = "Company Symbol"></TextField>
        <Button variant = "contained" color = "primary">Quote!</Button>
    </div>
}

export default textBox;