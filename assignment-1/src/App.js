import React, {useState} from 'react';
import './App.css';
import User from './User/User';

const App = props => {
  const [usernameState, setUserName] = useState({
    username: 'Ting'
  });

  const changeNameHandler = (newName) => {
    setUserName({
      username: newName
    });
  }

  const changeInputHandler = (event) => {
    setUserName({
      username: event.target.value
    });
  }

  const style = {
    backgroundColor: 'beige'
  }
  
  return (
    <div className="App" style={style}>
      <User username={usernameState.username}
      changed={changeInputHandler}
      clicked={changeNameHandler.bind(this, 'Ting')}/>
      <User username='Yuqi'
      changed={changeInputHandler}
      clicked={changeNameHandler.bind(this, 'yuqi no.2')}/>
    </div>
  );
}

export default App;
