import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function WithUseStateExample() {
    return (
        <>
            <TextField margin="normal"/>

            <Button variant="contained" color="primary">
                {`Value = 0`}
            </Button>
        </>
    );
}

export default WithUseStateExample;
