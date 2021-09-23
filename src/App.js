import './App.css';
import React, { Component } from 'react';
import List from './components/ListItems/ListItems';
import Add from './components/AddItems/AddItems';

class App extends Component {

  state = {
    users : [
      { id: 1, name: 'React ', age: 30 },
      { id: 2, name: 'Redux', age: 25 },
      { id: 3, name: 'JavaScript', age: 20 }

    ]
  }

  deleteUser = (id) => {
    let all = this.state.users.filter(item =>{
      return item.id !== id
    })
    this.setState({
      users : all 
    })
  }

  addUser= (newUser)=>{
    //verifying a  key for each new user  
    newUser.id = Math.random();

    //push the new item to the current state
    const newUsers = this.state.users
    newUsers.push(newUser)

    this.setState({
      users : newUsers

    })
  }
  render() {
    return (
      <div className="App">

        <h1> Simple ToDo App </h1>

        <List sendUsers={this.state.users}  deleteUser = {this.deleteUser} />
        <Add addNew= {this.addUser} />

      </div>
    );
  }

}

export default App;
