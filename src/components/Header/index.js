import React, { Component } from 'react';

import './styles.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark mb-3">
         <a className="navbar-brand" href="#">
           <h1>Students List</h1>
         </a>
       </nav>
    );
  }
}

export default Header;
