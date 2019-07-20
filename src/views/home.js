import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Cards from '../components/Cards';
import { getStudentsList } from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
     this.props.getStudentsList();
  }

  render() {
    return (
        <div>
        <Header/>
        {this.props.studentsData.length > 0 &&
          <Cards/>
        }
        {this.props.studentsData.length === 0 &&
           <div className="loading"> Loading ... </div>
        }
        </div>
    );
  }
}

Home.propTypes = {
  getStudentsList: PropTypes.func
}

const mapStateToProps = state => ({
   studentsData: state.students.data,
})

const mapDispatchToProps = dispatch => ({
  getStudentsList: () => dispatch(getStudentsList()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
