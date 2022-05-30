import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../css/custom.css';
import 'bootstrap/dist/css/bootstrap.css';
import AdminHeader from "./admin/AdminHeader";
// import Header from "./User/Header";
import AdminFooter from "./admin/AdminFooter";
// import Footer from "./User/Footer";
import Home from "./user/Home";
import Mobodetailedview from "./user/Mobodetailedview";
import Cpudetailedview from "./user/Cpudetailedview";
import Userdetailedview from "./admin/Userdetailedview";
import Signup from "./user/Signup";
import Login from "./user/Login";
import Adminpanel from "./admin/Adminpanel";
import Searchboard from "./user/Searchboard";
import Createcpu from "./admin/Createcpu";
import Createboard from "./admin/Createboard";
import Edituser from "./admin/Edituser";

const App = () => {
  // Admin view
  return (
    <>
    <Router>
      <AdminHeader />
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
      <AdminFooter />
    </Router>
    </>
  )
  // User view
  // return (
  //   <>
  //   <Router>
  //     <Header />
  //     <Switch>
  //       <Route exact path="/">
  //         <Home />
  //       </Route>
  //       <Route exact path="/Mobodetailedview/:id">
  //         <Mobodetailedview />
  //       </Route>
  //       <Route exact path="/Cpudetailedview/:id">
  //         <Cpudetailedview />
  //       </Route>
  //       <Route exact path="/Userdetailedview/:id">
  //         <Userdetailedview />
  //       </Route>
  //       <Route exact path="/Searchboard">
  //         <Searchboard />
  //       </Route>
  //       <Route exact path="/Signup">
  //         <Signup />
  //       </Route>
  //       <Route exact path="/Login">
  //         <Login />
  //       </Route>
  //     </Switch>
  //     <Footer />
  //   </Router>
  //   </>
  // )
}

export default App;