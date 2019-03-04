import React, {useState, useEffect} from "react";
import { toast } from 'react-toastify';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
//toast.success(""); toast.info("");

// TODO : créer custom hooks

function WithCustomHooksExample() {
    const [firstName, setFirstName] = useState("john");
    function handleChangeFirstName(e) {
        setFirstName(e.target.value);
    }

    const [lastName, setLastName] = useState("doe");
    function handleChangeLastName(e) {
        setLastName(e.target.value);
    }

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(function() {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return function() {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <>
            <TextField
                value={lastName}
                onChange={handleChangeLastName}
                margin="normal"
            />
            <TextField
                value={firstName}
                onChange={handleChangeFirstName}
                margin="normal"
            />
            <Typography component="p" variant="body1" style={{margin: "15px 0"}}>
                {`${width} px`}
            </Typography>
        </>
    );
}

export default WithCustomHooksExample;