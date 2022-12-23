import React from 'react';
import './App.css';
import DataFetch from './Component/DataFetch';
import User from './Component/User';
import UserDemo from './Component/UserDemo';

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


const users=[
  {
    id:1,
    name:"Tom Hanks",
    email:"tom@hanks.com",
    age:26,
  },
  {
    id:2,
    name:"Jerry",
    email:"jerry@55gmail.com",
    age:28,
  },
]



function App() {
  return (
    <div className="App">
      <h1>React Typescript</h1>
      <User user={user1}/>
      <User user={user2}/>
      <UserDemo users={users}/>
      <DataFetch status ="loading"/>
    </div>
  );
}

export default App;
