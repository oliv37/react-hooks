import React from "react";
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import {USERS} from "./userService";

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        margin: theme.spacing(1),
    }
});

function UserList({classes, value, onChange}) {
    return (
        <div className={classes.root}>
            {USERS.map(user => (
                <Button 
                    key={user.id} 
                    variant="contained" 
                    color={value === user.id ? "primary" : "default"}
                    className={classes.button}
                    onClick={() => onChange(user.id)}
                >
                    {user.name}
                </Button>
            ))}
        </div>
    );
}

export default withStyles(styles)(UserList);