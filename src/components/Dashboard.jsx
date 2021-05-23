import React from "react";

import { Redirect, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";

import IndexDashboard from "./IndexDashboard";
import PageNotFound from "./PageNotFound";
import Header from "./Header";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogout: false
    };
  }

  signout = () => {
    localStorage.removeItem("token");
    this.setState({
      isLogout: true
    });
  };

  render() {
    if (this.state.isLogout) {
      return <Redirect to="/login" />;
    }
    return (
      <Switch>
        <Route exact path={this.props.match.path}>
          <Header callbackSignout={this.signout} />
          <IndexDashboard />
        </Route>
        <Route path="*">
          <Header callbackSignout={this.signout} />
          <PageNotFound />
        </Route>
      </Switch>
    );
  }
}

export default withRouter(Dashboard);
