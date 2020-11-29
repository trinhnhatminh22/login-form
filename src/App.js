import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
//Componment
import Navbar from "./component/navbar";
// Pages
import Home from "./page/home";
import Signup from "./page/signup";


const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#9fa8da",
      main: "#82b1ff",
      dark: "#b2b9e1",
      contrastText: "#fff",
    },
    secondary: {
      light: "#e7cbeb",
      main: "#e1bee7",
      dark: "#9d85a1",
      contrastText: "#fff",
    },
    typography: {
      useNextVariants: true,
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
              </Switch>
            </div>
          </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
