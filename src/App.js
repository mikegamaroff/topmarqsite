import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createBrowserHistory } from "history";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Groups from "./pages/Groups";
import GroupDetail from "./pages/GroupDetail";
import EventDetail from "./pages/EventDetail";
import ClassDetail from "./pages/ClassDetail";
import Library from "./pages/Library";
import Scaffold from "./pages/Scaffold";

import Upgrade from "./pages/Upgrade";
const myHistory = createBrowserHistory();
export class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Router history={myHistory}>
            <div>
              <Switch>
                <Route exact path="/" render={() => <SignIn />} />
                <Route exact path="/home" render={() => <Home />} />
                <Route exact path="/events" render={() => <Events />} />
                <Route exact path="/groups" render={() => <Groups />} />
                <Route exact path="/scaffold" render={() => <Scaffold />} />
                <Route exact path="/library" render={() => <Library />} />
                <Route
                  exact
                  path="/classdetail"
                  render={() => <ClassDetail />}
                />
                <Route
                  exact
                  path="/groupdetail"
                  render={() => <GroupDetail />}
                />
                <Route
                  exact
                  path="/eventdetail"
                  render={() => <EventDetail />}
                />
                <Route exact path="/upgrade" render={() => <Upgrade />} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}
export default App;
