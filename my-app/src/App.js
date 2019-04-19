import React, { Component } from 'react';
import Table from './Table'

class App extends Component {

  state = {
    users: this.props.users,
    allUsers: true,
    showAdmin: false,
    showPlayer: false,
    orderByBirthday: false

  }

  showAdmins() {
    this.setState({showAdmin: true});
    this.setState({allUsers: false});
    this.setState({showPlayer: false});
  }

  showPlayers() {
    this.setState({showPlayer: true});
    this.setState({showAdmin: false});
    this.setState({allUsers: false});
  }  

  showAll() {
    this.setState({allUsers: true});
    this.setState({showPlayer: false});
    this.setState({showAdmin: false});
  }  
  
  orderByBirthday() {
    if (this.state.orderByBirthday === true) {
      this.setState({orderByBirthday: false});
      return;
    }
    this.setState({orderByBirthday: true});
  }

  render() {
    const showOptions = {
      allUsers: this.state.allUsers,
      showAdmin: this.state.showAdmin,
      showPlayer: this.state.showPlayer,
      orderByBirthday: this.state.orderByBirthday
    }

    return (
      <main>
        <h1>Users</h1>
        <button onClick={this.showAll.bind(this)}>Show all</button>
        <button onClick={this.showAdmins.bind(this)}>Show admins</button>
        <button onClick={this.showPlayers.bind(this)}>Show players</button>
        <button onClick={this.orderByBirthday.bind(this)}>Toggle order by birthday</button>
        <Table users={this.state.users} ops={showOptions} />
      </main>
    );
  }
}

export default App;
