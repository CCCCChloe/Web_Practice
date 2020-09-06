import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text/Text';
import Length from './Text/Length';
import Characters from './Text/Characters';
import text from './Text/Text';

function App() {
  const [textState, setTextState] = useState({
    text: '',
  });

  const changeTextHandler = (event) => {
    setTextState({
      text: event.target.value
    });
  }

  let chars = textState.text.split('');

  const deleteCharHandler = (charIndex) => {
    console.log(charIndex);
    let charsI = [...chars];
    charsI.splice(charIndex, 1);
    let newText = charsI.join('');
    setTextState({
      text: newText
    });
  }

  return (
    <div className="App">
      <Text content={textState.text} changed={changeTextHandler}/>
      <Length length={textState.text.length} />
      {chars.map( (c, index) => {
        return <Characters char={c} clicked={() => deleteCharHandler(index)}/>
      } )}
    </div>
  );
}

export default App;
