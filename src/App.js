import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/Home";
import Footer from "./components/Footer";
const myHistory = createBrowserHistory();
export class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Router history={myHistory}>
            <div>
              <Switch>
                <Route exact path="/" render={() => <Home />} />
              </Switch>
            </div>
          </Router>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
