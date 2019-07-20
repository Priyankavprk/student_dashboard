import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import './styles.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }

  render() {
    console.log('//////',this.props.studentsData)
    return (
      <div className="container">
      {this.props.studentsData.map(function(student, index){
        return (
          <Card key={index} style={{ width: '18rem' }}>
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
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
