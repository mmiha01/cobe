import React, { Component } from 'react';
import Row from './Row'

class Rows extends Component {
  render() {
    if (this.props.ops.orderByBirthday === false) {
      return this.props.users.sort((a,b) => {
        return b.id - a.id;
      }).map((a) => (
        <Row key={a.id}
        id={a.id}
        number={a.number}
        name={a.name}
        position={a.position}
        birthday={a.birthday}
        email={a.email}
        roles={a.roles}
        state={a.state}
        ops={this.props.ops}
        />
      ));
    }

    return this.props.users.sort((a,b) => {
      return b.birthday - a.birthday;
    }
    ).map((a) => (
      <Row key={a.id}
      id={a.id}
      number={a.number}
      name={a.name}
      position={a.position}
      birthday={a.birthday}
      email={a.email}
      roles={a.roles}
      state={a.state}
      ops={this.props.ops}
      />
    ));    


  }
}

export default Rows;
