import React, {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function useTextField(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    };
}

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(function() {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return function() {
            window.removeEventListener('resize', handleResize);
        }
    });

    return width;
}

function WithCustomHooksExample() {
    const firstName = useTextField("john");
    const lastName = useTextField("doe");
    const width = useWindowWidth();

    return (
        <>
            <TextField
                {...lastName}
                margin="normal"
            />
            <TextField
                {...firstName}
                margin="normal"
            />
            <Typography component="p" variant="display1" style={{margin: "15px 0"}}>
                {`${width} px`}
            </Typography>
        </>
    );
}

export default WithCustomHooksExample;