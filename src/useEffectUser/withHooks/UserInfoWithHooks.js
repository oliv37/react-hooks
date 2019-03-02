import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import {findUserById} from "../userService";

const styles = {
    root: {
        padding: 10
    },
    title: {
        fontWeight: "bold"
    }
};

function UserInfoWithHooks({userId, classes}) {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        setUser(undefined);

        const request = findUserById(userId);

        request.promise
            .then(user => setUser(user))
            .catch(() => {});

        return function() {
            request.cancel();
        };
    }, [userId]);
    
    if (!user) {
        return <CircularProgress/>;
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography>
                    <span className={classes.title}>Nom : </span>
                    {user.name}
                </Typography>
                <Typography>
                    <span className={classes.title}>Age : </span>
                    {user.age}
                </Typography>
                <Typography>
                    <span className={classes.title}>Ville : </span>
                    {user.city}
                </Typography>
                <Typography>
                    <span className={classes.title}>Profession : </span>
                    {user.job}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(UserInfoWithHooks);