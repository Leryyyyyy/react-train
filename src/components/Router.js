import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './Nav';
import Nav2 from './Nav2';
import Players from "./Players";
 import Results from "./Results";

const BasicExample = () => (
 
   
  <Router>
    <div>
      <Nav/>
      
      <Route exact path="/dome" component={Nav2} />
      <Route exact path="/dome/battle/" component={Players} />
      <Route exact path='/dome/battle/:name' component={Results}  />
     
    </div>
  </Router>
);



export default BasicExample;