import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../css/custom.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Detailedview from "./Detailedview";

const App = () => {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Detailedview">
          <Detailedview />
        </Route>
      </Switch>
    </Router>
    <Footer />
    </>
  )
}

export default App;