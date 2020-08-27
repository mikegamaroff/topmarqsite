import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/Home";
const myHistory = createBrowserHistory();
export class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={myHistory}>
          <div>
            <div>
              {/*  {this.state.synced ? <NavBar synced={this.state.synced} /> : null} */}
            </div>

            <div>
              <Switch>
                <Route exact path="/" render={() => <Home />} />
              </Switch>
              <div className="nav"></div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
