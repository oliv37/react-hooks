import React from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class WithoutUseEffectExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "john",
            width: window.innerWidth
        };
    }

    componentDidMount() {
        document.title = `Hello ${this.state.name}`;
        window.addEventListener('resize', this.handleResize);
    }

    componentDidUpdate() {
        document.title = `Hello ${this.state.name}`;
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleChangeName = event => {
        this.setState({
            name: event.target.value
        });
    };

    handleResize = () => {
        this.setState({
            width: window.innerWidth
        });
    };

    render() {
        return (
            <>
                <TextField
                    value={this.state.name}
                    onChange={this.handleChangeName}
                    margin="normal"
                />
                <Typography component="p" variant="body1" style={{margin: "15px 0"}}>
                    {`${this.state.width} px`}
                </Typography>
            </>
        );
    }

}

export default WithoutUseEffectExample;