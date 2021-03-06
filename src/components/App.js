import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../css/styles.css';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Mobodetailedview from "./Mobodetailedview";
import Cpudetailedview from "./Cpudetailedview";
import Userdetailedview from "./Userdetailedview";
import Signup from "./Signup";
import Login from "./Login";
import Adminpanel from "./Adminpanel";
import Searchboard from "./Searchboard";
import Createcpu from "./Createcpu";
import Createboard from "./Createboard";
import Edituser from "./Edituser";

const App = () => {
  return (
    <>
    <div className="content">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Mobodetailedview/:id">
            <Mobodetailedview />
          </Route>
          <Route exact path="/Cpudetailedview/:id">
            <Cpudetailedview />
          </Route>
          <Route exact path="/Userdetailedview/:id">
            <Userdetailedview />
          </Route>
          <Route exact path="/Searchboard">
            <Searchboard />
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
          <Route exact path="/Createcpu">
            <Createcpu />
          </Route>
          <Route exact path="/Createboard">
            <Createboard />
          </Route>
          <Route exact path="/Edituser/:id">
            <Edituser />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
    </>
  )
}

export default App;