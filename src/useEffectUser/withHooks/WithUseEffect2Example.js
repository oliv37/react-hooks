import React, {useState} from "react";
import { withStyles } from '@material-ui/core/styles';
import UserList from "../UserList";
import UserInfoWithHooks from "./UserInfoWithHooks";

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

function WithUseEffect2Example({classes}) {
    const [userId, setUserId] = useState(1);

    function handleChangeUserId(userId) {
        setUserId(userId);
    }

    return (
        <div className={classes.root}>
            <UserList 
                value={userId} 
                onChange={handleChangeUserId}
            />
            <UserInfoWithHooks userId={userId}/>
        </div>
    );
}

export default withStyles(styles)(WithUseEffect2Example);