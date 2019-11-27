import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Nav2 from './Nav2';
import Players from './Players';
import Results from './Results';

const BasicExample = () => (


  <Router>
    <div>
      <Nav />

      <Route exact path="/" component={Nav2} />
      <Route exact path="/battle/" component={Players} />
      <Route exact path="/battle/:name" component={Results} />

    </div>
  </Router>
);


export default BasicExample;
