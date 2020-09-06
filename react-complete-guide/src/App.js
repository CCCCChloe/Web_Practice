import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import Styled from 'styled-components';
import Radium from'radium';


class App extends Component {
  state = {
    persons: [
      { id: 'decdc', name: 'Max', age: 28 },
      { id: 'ffdgt', name: 'MMM', age: 20 },
      { id: 'bbfgg', name: 'ddd', age: 30 }
    ],
    showPersons: false
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHander = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    const StyledBtn = Styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      
      &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
      }
    `;

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(( person, index ) => {
            return <Person key={person.id} 
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age} 
              changed={(event) => this.changeNameHandler(event, person.id)} />
          })}
        </div>
      );

    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className='App'>
        <h1>Hi</h1>
        <p className={classes.join(' ')}>This is working!</p>
        {/* <button style={style} onClick={() => this.switchNameHandler('Maxilian')} >Switch name</button> */}
        <StyledBtn alt={this.state.showPersons} onClick={this.togglePersonsHander} >Switch name</StyledBtn>
        {persons}
      </div>
      
    );
  }
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react App'));
}

export default Radium(App);


// const App = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'MMM', age: 20 },
//       { name: 'ddd', age: 30 }
//     ],
//   });

//   const [otherState, setOtherState] = useState({otherState: 'blablabla'});

//   console.log(personsState);

//   const switchNameHandler = () => {
//     // console.log("clicked");
//     // this.state.persons[0].name = 'ting';
//     setPersonsState({
//       persons: [
//         { name: 'Maxxxxxxxx', age: 50 },
//         { name: 'MMM', age: 20 },
//         { name: 'ddd', age: 30 }
//       ]
//     });
//   };

//   return (
//     <div className='App'>
//       <h1>Hi</h1>
//       <button onClick={switchNameHandler} >Switch name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: racing</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//     </div>
//   );
//   //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react App'));
// }

// export default App;
