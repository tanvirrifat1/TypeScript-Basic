import React from 'react';

type UserProps={name:string;
    age:number;
    isRegistered:boolean}

const User = ({name,age,isRegistered}:UserProps) => {
    return (
        <div>
         <h2>{name}</h2>
        <p>{age} years Old</p>
        {isRegistered ? <p>Registered</p> : <p>Not Registered</p>}
        </div>
    );
};

export default User;