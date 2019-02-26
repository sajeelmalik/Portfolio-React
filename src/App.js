import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//PAGES
import About from './pages/About';
import Main from './pages/Main';

//STYLING
// import { createMuiTheme } from '@material-ui/core/styles';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

// import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
