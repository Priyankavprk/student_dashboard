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

  render() {
    return (
      <div className="container">
      {this.props.filteredData.map(function(student, index){
        return (
          <Card key={index} style={{ width: '18rem'}}>
            <Card.Body>
             <Card.Title>{student.name}</Card.Title>
             <Card.Subtitle className="mb-2 text-muted">Roll number: {student.rollNo}</Card.Subtitle>
             <Card.Text>
               Total Marks: {Object.values(student.marks).reduce((acc, val) => {return acc + val;})}
             </Card.Text>
             <Button variant="primary" onClick={() => this.props.navigate.push('/about')}>Show Details</Button>
            </Card.Body>
          </Card>
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

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
