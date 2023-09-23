//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

//import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#242438';
    }
    else {
      setMode  ('light');
      document.body.style.backgroundColor = 'white';
    }

  }
  return (
    <>

{/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
<Router>

<Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
<div className="container my-3">
<Switch>
          <Route path="/about">
          <About />
          </Route>
          <Route path="/">
          <Textform heading="Enter the text to analyze" mode={mode}/>
          </Route>
  </Switch>
</div>
</Router>
</>
  );
}

export default App;
