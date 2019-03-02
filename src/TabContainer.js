import React from "react";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    }
});

function TabContainer({classes, children}) {
    return (
        <div className={classes.root}>
            {children}
        </div>
    );
}

export default withStyles(styles)(TabContainer);