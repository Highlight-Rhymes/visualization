import React, { useState } from 'react'
import './App.css';
import Input from './components/input/Input';
import Drawer from './components/drawer/Drawer';
import ManualSeparator from './components/manual-separator';

function App() {

  const [ lyrics, setLyrics ] = useState(null)
  const [ classes, setClasses ] = useState(null)

  return (
    <div className="App">
      <Input onSubmit={(lyrics, classes) => {
        setLyrics(lyrics);
        setClasses(classes);
      }}></Input>

      <Drawer lyrics={lyrics} classes={classes}></Drawer>

      <div>
        <h1>Stuff of dataset creation</h1>
        <ManualSeparator/>
      </div>

    </div>
  );
}

export default App;
