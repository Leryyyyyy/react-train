import React from 'react';
import Nav from './Nav';
import{ hot } from 'react-hot-loader/root';
class App extends React.Component {
    render() {
      return (
        <div>
          <Nav />
        </div>
      );
    }
  }
  export default hot(App);