import React, {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function WithUseEffectExample() {
    const [name, setName] = useState("john");

    function handleChangeName(event) {
        setName(event.target.value);
    }

    useEffect(function() {
        document.title = `Hello ${name}`;
    });

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(function() {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return function() {
            window.removeEventListener('resize', handleResize)
        };
    });
    
    return (
        <>
            <TextField
                value={name}
                onChange={handleChangeName}
                margin="normal"
            />
            <Typography component="p" variant="display1" style={{margin: "15px 0"}}>
                {`${width} px`}
            </Typography>
        </>
    );
}

export default WithUseEffectExample;