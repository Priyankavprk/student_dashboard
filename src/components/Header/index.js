import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark mb-3">
         <a className="navbar-brand" href="#">
           <h1>{this.props.title}</h1>
         </a>
       </nav>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
}


export default Header;
