import React, {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function WithUseEffectExample() {
    const [name, setName] = useState("john");

    function handleChangeName(e) {
        setName(e.target.value);
    }

    return (
        <>
            <TextField margin="normal" value={name} onChange={handleChangeName}/>
            <Typography component="p" variant="body1" style={{margin: "15px 0"}}>
                {`... px`}
            </Typography>
        </>
    );
}

export default WithUseEffectExample;