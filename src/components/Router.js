import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Nav from './Nav';
import Nav2 from './Nav2';
const BasicExample = () => (
  
  <Router>
    <div>
      <Nav/>
      <Route exact path="/" component={Nav2} />
      
    </div>
  </Router>
);



export default BasicExample;