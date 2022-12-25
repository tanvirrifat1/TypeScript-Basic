import React, { useState } from 'react'

const NewUser = () => {

    const [userName,setUserName]=useState("")

const handleUser=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setUserName(e.target.value)
}
const handleClicked=(e:React.MouseEvent<HTMLButtonElement>)=>{
    console.log(userName);
}

  return (
    <div>
        <h2>Create New Users</h2>
        <input type="text" placeholder='Enter User Name' value={userName} onChange={handleUser} />
       <button onClick={handleClicked}>Show Name</button>
    </div>
  )
}

export default NewUser