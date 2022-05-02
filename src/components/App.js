import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../css/custom.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Detailedview from "./Detailedview";
import Choosepreference from "./Choosepreference";
import Signup from "./Signup";
import Login from "./Login";
import Adminpanel from "./Adminpanel";
import Searchboard from "./Searchboard";

const App = () => {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Detailedview/:id">
          <Detailedview />
        </Route>
        <Route exact path="/Searchboard">
          <Searchboard />
        </Route>
        <Route exact path="/Choosepreference">
          <Choosepreference />
        </Route>
        <Route exact path="/Signup">
          <Signup />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Adminpanel">
          <Adminpanel />
        </Route>
      </Switch>
    </Router>
    <Footer />
    </>
  )
}

export default App;