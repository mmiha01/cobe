import React, { Component } from 'react';

class Row extends Component {

  convertToStandardDate(d) {
    if (!d) return '-';

    const date = new Date(d);
    let day = date.getUTCDate();
    let m = date.getUTCMonth() + 1;
    let y = date.getFullYear();
    if (day < 10) day = '0' + day;
    if (m < 10) m = '0' + m;
    return `${day}/${m}/${y}`;
  }

  getDisplay() {
    if (this.props.ops.allUsers === true) {
      return {
        display: 'table-row'
      }
    } else if (this.props.ops.showAdmin === true && !this.props.roles.includes('ROLE_TEAM_ADMIN')) {
      return {
        display: 'none'
      }
    } else if (this.props.ops.showPlayer === true && !this.props.roles.includes('ROLE_TEAM_PLAYER')) {    
      return {
        display: 'none'
      }
    }
  }

  getAge(d) {
    if (!d) return '-';

    const now = new Date();
    return  Math.floor((now - d) /  1000 / 60 / 60 / 24 / 365);
  }

  render() {
    return (
      <tr style={this.getDisplay()}>
        <td>{this.props.id}</td>
        <td>{this.props.number || '-'}</td>
        <td>{this.props.name || '-'}</td>
        <td>{this.props.position || '-'}</td>
        <td>{this.convertToStandardDate(this.props.birthday)}</td>
        <td>{this.props.email || '-'}</td>
        <td>{this.props.roles.join(',') || '-'}</td>
        <td>{this.props.state || '-'}</td>
        <td>{this.getAge(this.props.birthday)}</td>
      </tr>
    );
  }
}

export default Row;
