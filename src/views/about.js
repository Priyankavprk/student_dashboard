import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
       <Header title={'Student Details'}/>
        <div className="container">
          <h4>Name: {this.props.selectedStudent.name}</h4>
          <h2>Class: {this.props.selectedStudent.class}</h2>
          <h2>Roll Number: {this.props.selectedStudent.rollNo}</h2>
          <h2>Marks Obtained</h2>
          {this.props.selectedStudent.hasOwnProperty('marks') && Object.keys(this.props.selectedStudent.marks).map((mark, index) => {
            return (
              <h2 key={index}>{mark} : {this.props.selectedStudent.marks[mark]}</h2>
            )
          })}
        </div>
      </div>
    );
  }
}

About.propTypes = {

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
