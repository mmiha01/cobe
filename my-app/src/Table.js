import React, { Component } from 'react';
import Rows from './Rows'

class Table extends Component {
  render() {
    return (
      <table cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Number</th>
            <th>Name</th>
            <th>Position</th>
            <th>Birthday</th>
            <th>Email</th>
            <th>Roles</th>
            <th>State</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <Rows users={this.props.users} ops={this.props.ops} />
        </tbody>
      </table>
    );
  }
}

export default Table;
