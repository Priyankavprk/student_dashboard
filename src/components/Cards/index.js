import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class List extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
         <Card.Title>Card Title</Card.Title>
         <Card.Text>Text here</Card.Text>
         <Button variant="primary" onClick={() => this.props.navigate.push('/about')}>Go somewhere</Button>
        </Card.Body>
       </Card>
    );
  }
}

export default List;
