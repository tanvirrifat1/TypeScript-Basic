import React, { useState } from 'react';
import './App.css';
import Button from './Component/Button';
import ButtonStyle from './Component/ButtonStyle';
import DataFetch from './Component/DataFetch';
import Post from './Component/Post';
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

const btnStyle={backgroundColor:"red", padding:"100px", height:"20px"}

type user={
  id:number;
  name:string;
}

function App() {

  const [user,setUser]=useState<null | user>(null)

  const handleAddUser=()=>{
    setUser({id:1,name:'Rifat'})
    console.log(user)
  }

  return (
    <div className="App">
      <h1>React Typescript</h1>
      <User user={user1}/>
      <User user={user2}/>
      <UserDemo users={users}/>
      <DataFetch status ="loading"/>
      <Button>Click me</Button>
      <Post></Post>
      <h2>Style Props</h2>
      <ButtonStyle btnStyle={btnStyle}/>

      <button onClick={handleAddUser}>Add User</button>
      <p>{user?.name}</p>
    </div>
  );
}

export default App;
