import React from "react";
import { withStyles } from '@material-ui/core/styles';
import UserList from "../UserList";
import UserInfoWithClass from "./UserInfoWithClass";

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

class WithoutUseEffect2Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: 1
        };
    }

    handleChangeUserId = userId => {
        this.setState({userId});
    };

    render() {
        return (
            <div className={this.props.classes.root}>
                <UserList 
                    value={this.state.userId} 
                    onChange={this.handleChangeUserId}
                />
                <UserInfoWithClass userId={this.state.userId}/>
            </div>
        );
    }
}

export default withStyles(styles)(WithoutUseEffect2Example);