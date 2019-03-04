import React, {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function WithUseEffectExample() {
    const width = window.innerWidth;
    
    return (
        <>
            <TextField margin="normal"/>
            <Typography component="p" variant="body1" style={{margin: "15px 0"}}>
                {`${width} px`}
            </Typography>
        </>
    );
}

export default WithUseEffectExample;