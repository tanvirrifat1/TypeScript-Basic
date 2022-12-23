import React from 'react';

type UserProps={
    user: {
        name: string;
        age: number;
        isRegistered: boolean;
        lang: string[];
    }
}

const User = ({user}:UserProps) => {
    return (
        <div style={{border:"1px solid", margin:"0.5rem",backgroundColor:'aqua'}}>
         <h2>{user.name}</h2>
        <p>{user.age} years Old</p>
        {user.isRegistered ? <p>Registered</p> : <p>Not Registered</p>}
       <p>
        Speaks:
         {user.lang.map((language,index)=>{
        return <p key={index}>{language} </p>
       })}

       </p>
        </div>
    );
};

export default User;