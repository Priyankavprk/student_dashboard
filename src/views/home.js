import React, { Component } from 'react';

import Header from '../components/Header';
import Cards from '../components/Cards';
import { getStudentsList } from '../utils';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: []
    }
  }

  componentDidMount() {
    getStudentsList();
  }

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
