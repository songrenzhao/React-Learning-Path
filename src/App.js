import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state = {
    persons : [
      {name:'Song', age:20},
      {name:'Max', age:28},
      {name:'Ping', age:21}
    ],
    otherState: 'Some Other Value'
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked');
    //Dont do this this.state.persons[0].name = "Songren Zhao";
    this.setState({persons:[
      {name:newName, age:21},
      {name:'Max', age:29},
      {name:'Ping', age:20}
    ] 
   })
  }

  nameChangedHandler = (event) => {
    this.setState({persons:[
      {name:'Song', age:21},
      {name: event.target.value, age:29},
      {name:'Ping', age:20}
    ] 
   })
  }

  render() {
    const style = {
      backgroundColor: 'white', 
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
        style = {style} 
        onClick = {() => this.switchNameHandler('Songren Zhao')}>Switch Name</button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}/>
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, 'SONG!')}
          changed = {this.nameChangedHandler}>My Hobbies: Coding</Person>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement(
    //   'h1', null, 'Does this work now?'));
  }
}

export default App;
