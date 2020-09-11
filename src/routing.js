import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from "./pages/main";
import ErrorPage from "./pages/error";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='*' component={ErrorPage}/>
      </Switch>
    </Router>
  )
}

export default Routing