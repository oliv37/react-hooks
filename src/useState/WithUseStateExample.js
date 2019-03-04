import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function WithUseStateExample() {
    const name = "";
    const counter = 0;

    return (
        <>
            <TextField margin="normal" value={name}/>

            <Button variant="contained" color="primary">
                {`Value = ${counter}`}
            </Button>
        </>
    );
}

export default WithUseStateExample;
