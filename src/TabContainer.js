import React from "react";
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 24 }}>
            {props.children}
        </Typography>
    );
}

export default TabContainer;