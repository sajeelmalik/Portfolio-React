import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//PAGES
import About from './pages/About';
import Main from './pages/Main';

//STYLING
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import "./App.css";


const theme = createMuiTheme({
  palette: {
    primary: {
      // light: '#8D4651',
      main: '#FCE575',
      dark: '#FFD447',
      contrastText: '#fff',
    },
    secondary: {
      // light: '#FF7460',
      main: '#3943B7',
      dark: '#000022',
      contrastText: '#fff',
    },
    tertiary: {
      // light: '#477998',
      main: '#ED254E',
      // dark: '#092641',
      // contrastText: '#fff',
    },
    quaternary: {
      // light: '#B6465F',
      main: '#A4036F',
      // dark: '#240115',
      // contrastText: '#fff',
    },
  },
});

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MuiThemeProvider theme={theme}>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/about" component={About} />
            </Switch>
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default App;
