import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class WithoutUseStateExample extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            counter: 0
        };
    }

    handleChangeName = (event) => {
        this.setState({name: event.target.value});
    };

    handleBtnClick = () => {
        this.setState(state => ({counter: state.counter + 1}));
    };

    render() {
        return (
            <>
                <TextField
                    value={this.state.name}
                    onChange={this.handleChangeName}
                    margin="normal"
                />

                <Button variant="contained" color="primary" onClick={this.handleBtnClick}>
                    {`Value = ${this.state.counter}`}
                </Button>
            </>
        );
    }

}

export default WithoutUseStateExample;