import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './Component/User';

const user1={
  name:"Akkash",
  age:21,
  isRegistered:false,
  lang:["Hindi","Urdhu"]
}
const user2={
  name:"Tom",
  age:25,
  isRegistered:true,
  lang:["Hindi","English"]
}

function App() {
  return (
    <div className="App">
      <h1>React Typescript</h1>
      <User user={user1}/>
      <User user={user2}/>
{/*       
      <User name="Tanvir Rifat"age={20}
       isRegistered={true}
       lang={["Bangla,English"]}
       /> */}
    </div>
  );
}

export default App;
