import React from 'react';

import { ListGroup } from 'react-bootstrap';

class Todo extends React.Component {

  render() {
    return (
      <ListGroup>
        {this.props.items.map((item, idx) => (
          <ListGroup.Item key={item.id}>{idx + 1}. {item.text}</ListGroup.Item> 
        ))}
      </ListGroup>
    )
  }
}

export default Todo;
