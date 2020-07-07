import React, { useState } from 'react'
import './App.css';
import Input from './components/input/Input';
import Drawer from './components/drawer/Drawer';

function App() {

  const [ lyrics, setLyrics ] = useState(null)
  const [ classes, setClasses ] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        
        <Input onSubmit={(lyrics, classes) => {
          setLyrics(lyrics);
          setClasses(classes);
        }}></Input>

        <Drawer lyrics={lyrics} classes={classes}></Drawer>
      </header>
    </div>
  );
}

export default App;
