import React, { Component } from 'react';
import './App.css'
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import Gett from './get'
import Postt from './post'
// import Tablee from './table'

class App extends Component {
  state = {
    persons: [
      { id:'asd' ,name: 'Max', age: 28 },
      { id:'assdd',name: 'Manu', age: 29 },
      { id:'asddfd',name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = ( newName ) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = ( event,id ) => {

    const personIndex = this.state.persons.findIndex((p)=>{
      return p.id=id
    })

    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value
    const persons =[...this.state.persons]
    persons[personIndex] = person

    this.setState( {
      persons: persons
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  deletePersonhandler=(personIndex)=>{
    const persons = [...this.state.persons];
    persons.splice(personIndex,1)
    this.setState({persons: persons})
  }
  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
        {
          this.state.persons.map((person,index)=>{
            return <Person click={()=>this.deletePersonhandler(index)} key={person.id}name={person.name} 
            age={person.age }changed={(event)=>this.nameChangedHandler(event,person.id)}/>
          })
        }

          
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        <div>
        <p>This is weird</p>



       <Gett/>
       <Postt/>
    


        </div>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
