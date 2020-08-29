import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createBrowserHistory } from "history";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
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
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}
export default App;
