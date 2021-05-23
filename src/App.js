import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import "./styles.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
const styles = {
  bgColor: {
    backgroundColor: "#f4f4f6"
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.bgColor}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <ProtectedRoute path="/dashboard">
              <Dashboard />
            </ProtectedRoute>
            <Route exact path="/">
              <Redirect exact from="/" to="dashboard" />
            </Route>
            <Route path="*">
              <Redirect from="/" to="dashboard" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
