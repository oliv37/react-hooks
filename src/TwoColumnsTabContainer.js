import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => {
    const commonStyles = {
        padding: theme.spacing.unit * 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    };

    return {
        left: {
            ...commonStyles
        },
        right: {
            ...commonStyles
        }
    };
};

function TwoColumnsTabContainer({leftComponent: C1, rightComponent: C2, classes}) {
    return (
        <Grid container>
            <Grid item xs={6} className={classes.left}>
                <Typography component="h1" variant="h5">
                    Using Class
                </Typography>
                <C1/>
            </Grid>
            {C2 && (
                <Grid item xs={6} className={classes.right}>
                    <Typography component="h1" variant="h5">
                        Using Hooks
                    </Typography>
                    <C2/>
                </Grid>
            )}
        </Grid>
    );
}

export default withStyles(styles)(TwoColumnsTabContainer);