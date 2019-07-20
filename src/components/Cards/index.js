import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }

  handleClick(student) {
    this.props.setSelectedStudent(student)
  }
  render() {
    return (
      <div className="container" onClick={() => this.props.navigate.push('/about')}>
      {this.props.filteredData.map((student, index) => {
        return (
          <a key={index} style={{ cursor: 'pointer' }} onClick={() => {this.handleClick(student)}}>
          <Card style={{ width: '18rem', margin: '5rem'}}>
            <Card.Body>
             <Card.Title>{student.name}</Card.Title>
             <Card.Subtitle className="mb-2 text-muted">Roll number: {student.rollNo}</Card.Subtitle>
             <Card.Text>
               Total Marks: {Object.values(student.marks).reduce((acc, val) => {return acc + val;})}
             </Card.Text>
             <Button variant="primary">Show Details</Button>
            </Card.Body>
          </Card>
          </a>
        )
      })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
   studentsData: state.students.data,
   filteredData: state.students.filteredData
})

const mapDispatchToProps = dispatch => ({
   setSelectedStudent: (student) => dispatch({ type: 'SET_SELECTED_STUDENT', data: student})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
