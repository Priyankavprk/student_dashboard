import React, { Component } from 'react';

import Header from '../components/Header';
import Cards from '../components/Cards';

class Home extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Cards/>
        </div>
    );
  }
}

export default Home;
