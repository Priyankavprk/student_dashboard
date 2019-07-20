import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class List extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
         <Card.Title>Card Title</Card.Title>
         <Card.Text>Text here</Card.Text>
         <Button variant="primary">Go somewhere</Button>
        </Card.Body>
       </Card>
    );
  }
}

export default List;
