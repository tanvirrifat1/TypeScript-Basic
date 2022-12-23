import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './Component/User';

function App() {
  return (
    <div className="App">
      <h1>React Typescript</h1>
      <User name="Tanvir Rifat"age={20} isRegistered={true}/>
      <User name="Akkash Kahn"age={25} isRegistered={false}/>
    </div>
  );
}

export default App;
