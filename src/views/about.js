import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: null
    }
  }

  componentDidMount() {
    this.setState({
      student: this.props.selectedStudent && this.props.selectedStudent.hasOwnProperty('name') ? this.props.selectedStudent : JSON.parse(localStorage.getItem('index'))
    })
  }

  render() {
    return (
      <div>
       <Header title={'Student Details'}/>
        {this.state.student && this.state.student.hasOwnProperty('name') &&
        <div className="container">
        <h4>Name: {this.state.student.name}</h4>
        <h2>Class: {this.state.student.class}</h2>
        <h2>Roll Number: {this.state.student.rollNo}</h2>
        <h2>Marks Obtained</h2>
        {this.state.student.hasOwnProperty('marks') && Object.keys(this.state.student.marks).map((mark, index) => {
          return (
            <h2 key={index}>{mark} : {this.state.student.marks[mark]}</h2>
          )
        })}
          </div>
        }
      </div>
    );
  }
}

About.propTypes = {
  selectedStudent: PropTypes.object
}

const mapStateToProps = state => ({
   selectedStudent: state.students.selectedStudent,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
