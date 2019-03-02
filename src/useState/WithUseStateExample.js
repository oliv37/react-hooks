import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function WithUseStateExample() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("");

    function handleClick() {
        setCounter(counter + 1);
    }

    function handleChangeName(event) {
        setName(event.target.value);
    }

    return (
        <>
            <TextField
                value={name}
                onChange={handleChangeName}
                margin="normal"
            />

            <Button variant="contained" color="primary" onClick={handleClick}>
                {`Value = ${counter}`}
            </Button>
        </>
    );
}

export default WithUseStateExample;
