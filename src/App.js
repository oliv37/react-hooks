import React, { useState } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {createMuiTheme} from "@material-ui/core";
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';
import TabContainer from "./TabContainer";
import TwoColumnsTabContainer from "./TwoColumnsTabContainer";
import WithUseStateExample from "./useState/WithUseStateExample";
import WithoutUseStateExample from './useState/WithoutUseStateExample';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
    error: red
  }
});

function App({classes}) {
  const [value, setValue] = useState(0);

  function handleChange(event, value) {
    setValue(value);
  }

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="USE STATE" />
            <Tab label="USE EFFECT" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TwoColumnsTabContainer
            leftComponent={WithoutUseStateExample}
            rightComponent={WithUseStateExample}
          />
        )}
        {value === 1 && <TabContainer>UseEffect</TabContainer>}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
