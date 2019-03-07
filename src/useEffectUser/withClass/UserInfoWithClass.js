import React from "react";
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

class UserInfoWithClass extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            user: undefined
        };
    }

    loadUser = () => {
        this.setState({user: undefined});
        this.request = findUserById(this.props.userId);
        this.request.promise
            .then(user => this.setState({user}))
            .catch(() => {});
    }

    componentDidMount() {
        this.loadUser();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userId !== this.props.userId) {
            this.request.cancel();
            this.loadUser();
        }
    }

    componentWillUnmount() {
        this.request.cancel();
    }

    render() {
        const {classes} = this.props;
        const {user} = this.state;

        if (!this.state.user) {
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
}

export default withStyles(styles)(UserInfoWithClass);