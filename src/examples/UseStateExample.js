import React, {useState} from "react";
import Button from '@material-ui/core/Button';

function UseStateExample() {
    const [value, setValue] = useState(0);

    function handleClick() {
        setValue(value + 1);
    }

    return (
        <Button variant="contained" color="primary" onClick={handleClick}>
            {`Value = ${value}`}
        </Button>
    );
}

export default UseStateExample;
